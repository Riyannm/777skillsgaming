import Navigation from "../components/ui/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "777 Skills App Privacy Policy",
  description:
    "Privacy Policy for the 777 Skills Staff App, operated by Vending & Delivery LLC, d/b/a 777 Skills.",
};

export default function AppPrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <span className="section-label mb-3 block">Legal &amp; Compliance</span>
          <h1 className="text-4xl md:text-5xl font-black text-foreground font-heading tracking-tight mb-2">
            777 Skills Staff App — Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last updated: {lastUpdated}
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                1. Introduction
              </h2>
              <p>
                This Privacy Policy describes how Vending &amp; Delivery LLC, doing business as
                777 Skills (&quot;777 Skills,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), collects,
                uses, and protects information within the 777 Skills Staff App (the &quot;App&quot;),
                used by authorized employees and location partners to manage cash counts,
                inventory, and reporting for 777 Skills machine locations. This policy is specific
                to the App. Our website privacy practices are described separately in our{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  website Privacy Policy
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                2. Who This App Is For
              </h2>
              <p>
                The App is not available for public download or self-registration. Accounts are
                created only by a 777 Skills administrator for authorized staff, store managers,
                and auditors.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                3. Information We Collect
              </h2>
              <p>
                <span className="text-foreground font-medium">Account information</span>,
                provided by an administrator when your account is created:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Full name, email address, phone number (optional)</li>
                <li>Role (e.g. admin, store manager, cashier, auditor) and assigned store/location(s)</li>
                <li>A securely hashed password (we never store your password in plain text)</li>
              </ul>
              <p className="mt-4">
                <span className="text-foreground font-medium">Operational data</span>, entered by
                you or generated through your use of the App:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Cash count entries, deposits, and reconciliation records</li>
                <li>Inventory counts and machine/location records</li>
                <li>Reports you create or view</li>
                <li>Timestamps of report submissions, logins, and account activity (for audit purposes)</li>
              </ul>
              <p className="mt-4">
                <span className="text-foreground font-medium">Device and push notification data</span>,
                if you allow it:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  An Expo push notification token used to deliver alerts (e.g. new report
                  submissions) to your device. You can decline notification permission at any time
                  in your device settings; the App works without it.
                </li>
                <li>
                  Session tokens stored securely on your device (via encrypted local storage) to
                  keep you signed in.
                </li>
              </ul>
              <p className="mt-4">
                <span className="text-foreground font-medium">We do not collect:</span>{" "}
                location/GPS data, camera or photo library access, contacts, biometric data, or
                advertising/tracking identifiers. The App does not use third-party analytics or
                advertising SDKs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                4. How We Use Information
              </h2>
              <p>We use the information above to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Operate core App features: cash management, inventory tracking, and reporting</li>
                <li>Authenticate your account and enforce role-based access to stores/locations</li>
                <li>Send operational push notifications you&apos;ve enabled</li>
                <li>Maintain audit logs for financial accountability and Texas regulatory compliance</li>
                <li>Detect and prevent unauthorized access or misuse</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                5. How We Share Information
              </h2>
              <p>
                We do not sell personal data. We share data only with the service providers
                necessary to operate the App:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  <span className="text-foreground font-medium">Hosting/database infrastructure</span>{" "}
                  to store and process App data.
                </li>
                <li>
                  <span className="text-foreground font-medium">Expo/Google push notification services</span>,
                  solely to deliver notifications to your registered device.
                </li>
              </ul>
              <p className="mt-2">
                We do not share your data with advertisers or unrelated third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                6. Data Retention
              </h2>
              <p>
                Operational and account data is retained for as long as your account is active and
                as needed to meet Texas financial recordkeeping and regulatory requirements. When
                an administrator deactivates or deletes your account, your account credentials are
                removed; retained operational records (e.g. historical cash/inventory reports) are
                kept only as required for audit and legal compliance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                7. Your Rights
              </h2>
              <p>
                You may request access to, correction of, or deletion of your personal information
                by contacting your administrator or 777 Skills directly at the contact information
                below. Because this App is used for regulated financial and inventory
                recordkeeping, some historical records may be retained even after a deletion
                request, as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                8. Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures — including
                encrypted network transport (HTTPS), hashed passwords, and role-based access
                control — to protect information collected through the App against unauthorized
                access, disclosure, alteration, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                9. Children&apos;s Privacy
              </h2>
              <p>
                This App is intended solely for use by authorized adult employees and business
                partners of 777 Skills. It is not directed to children, and we do not knowingly
                collect information from anyone under 18.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this policy from time to time. Material changes will be reflected by
                an updated &quot;Last updated&quot; date above.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                11. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your personal
                data, please contact us at:
              </p>
              <div className="mt-4 p-4 rounded-xl border border-border bg-muted/20 text-sm">
                <p className="font-semibold text-foreground">Vending &amp; Delivery LLC (d/b/a 777 Skills)</p>
                <p>7001 I-10, Suite 229</p>
                <p>San Antonio, TX 78213</p>
                <p className="mt-2">
                  Email: <a href="mailto:info@777skills.com" className="text-primary hover:underline">info@777skills.com</a>
                </p>
                <p>
                  Phone: <a href="tel:+17267773595" className="text-primary hover:underline">726-777-3595</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
