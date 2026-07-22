import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// ─── Basic in-memory rate limiting (best-effort; per-instance) ───
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const hits = new Map<string, { count: number; start: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.start > WINDOW_MS) {
    hits.set(ip, { count: 1, start: now });
    return false;
  }
  rec.count += 1;
  return rec.count > MAX_REQUESTS;
}

// Prevent unbounded map growth
function sweep() {
  const now = Date.now();
  for (const [ip, rec] of hits) {
    if (now - rec.start > WINDOW_MS) hits.delete(ip);
  }
}

// ─── HTML escaping to prevent injection into the outgoing email ───
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const LIMITS = {
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 32,
  businessType: 64,
  message: 5000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s\-()+]+$/;

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return NextResponse.json(
      { error: "Email service is currently misconfigured." },
      { status: 500 }
    );
  }

  // Reject cross-site POSTs: the Origin host must match the request host.
  const origin = req.headers.get("origin");
  if (origin) {
    const host = req.headers.get("host");
    try {
      if (new URL(origin).host !== host) {
        return NextResponse.json({ error: "Forbidden." }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: "Forbidden." }, { status: 403 });
    }
  }

  // Rate limit by client IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  sweep();
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, businessType, message, honeypot } = body ?? {};

    // Bot protection — honeypot field must be empty
    if (honeypot) {
      return NextResponse.json({ success: true }); // silently discard
    }

    // All fields must be present strings
    const fields = { firstName, lastName, email, phone, businessType, message };
    for (const [key, val] of Object.entries(fields)) {
      if (typeof val !== "string" || !val.trim()) {
        return NextResponse.json({ error: "All fields are required." }, { status: 400 });
      }
      if (val.length > LIMITS[key as keyof typeof LIMITS]) {
        return NextResponse.json(
          { error: "One or more fields exceed the allowed length." },
          { status: 400 }
        );
      }
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    if (!PHONE_RE.test(phone)) {
      return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
    }

    // Escape everything before it enters the email HTML
    const s = {
      firstName: escapeHtml(firstName.trim()),
      lastName: escapeHtml(lastName.trim()),
      email: escapeHtml(email.trim()),
      phone: escapeHtml(phone.trim()),
      businessType: escapeHtml(businessType.trim()),
      message: escapeHtml(message.trim()).replace(/\n/g, "<br/>"),
    };

    const { error } = await resend.emails.send({
      from: "777 Skills Website <noreply@777skills.com>",
      to: ["info@777skills.com"],
      replyTo: email.trim(),
      subject: `New Consultation Request — ${s.firstName} ${s.lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #00B4D8; margin-bottom: 4px;">New Consultation Request</h2>
          <p style="color: #9CA3AF; margin-top: 0; font-size: 14px;">Received from 777skills.com</p>
          <hr style="border: 1px solid #1E293B; margin: 24px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #9CA3AF; font-size: 14px; width: 140px;">Name</td>
              <td style="padding: 8px 0; color: #E5E7EB; font-size: 14px; font-weight: 600;">${s.firstName} ${s.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9CA3AF; font-size: 14px;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${s.email}" style="color: #00B4D8; font-size: 14px;">${s.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9CA3AF; font-size: 14px;">Phone</td>
              <td style="padding: 8px 0;"><a href="tel:${s.phone}" style="color: #00B4D8; font-size: 14px;">${s.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9CA3AF; font-size: 14px;">Business Type</td>
              <td style="padding: 8px 0; color: #E5E7EB; font-size: 14px;">${s.businessType}</td>
            </tr>
          </table>

          <hr style="border: 1px solid #1E293B; margin: 24px 0;" />

          <p style="color: #9CA3AF; font-size: 14px; margin-bottom: 8px;">Message:</p>
          <p style="color: #E5E7EB; font-size: 15px; line-height: 1.6; background: #0B1220; padding: 16px; border-radius: 8px; border-left: 3px solid #00B4D8;">
            ${s.message}
          </p>

          <hr style="border: 1px solid #1E293B; margin: 24px 0;" />
          <p style="color: #4B5563; font-size: 12px;">Submitted via 777skills.com contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
