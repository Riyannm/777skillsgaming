import Navigation from "../components/ui/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for 777 Skills, LLC. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
                Welcome to 777 Skills, LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We operate the website located at 777skills.com and provide licensed skill game machine services. We are committed to protecting your privacy and ensuring a secure experience when you visit our website or interact with our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                2. Information We Collect
              </h2>
              <p>
                We collect information that you voluntarily provide to us when you fill out forms on our website (such as our consultation request or contact forms), including:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>First and last name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business type</li>
                <li>Any message or details you provide regarding your inquiry</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                3. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Respond to your inquiries and requests for consultation or technical support.</li>
                <li>Provide, maintain, and optimize our skill game machine services.</li>
                <li>Comply with applicable legal, regulatory, and licensing requirements in the State of Texas.</li>
                <li>Detect, prevent, and address technical issues or potential security threats.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                4. Data Protection and Security
              </h2>
              <p>
                The security of your data is important to us. We implement appropriate technical and organizational measures to safeguard the information we collect against unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                5. Sharing of Information
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We share information only with the trusted service providers that help us operate our website and respond to you:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  <span className="text-foreground font-medium">Resend</span> — processes and delivers the emails generated when you submit a form. Your submission is sent to our inbox through Resend.
                </li>
                <li>
                  <span className="text-foreground font-medium">Google Maps</span> — if you choose to load the interactive map on our Contact page, Google receives your IP address and may set cookies. The map does not load until you click it.
                </li>
              </ul>
              <p className="mt-2">
                We may also disclose information when required by Texas state law, to enforce our site policies, or to protect ours or others&apos; rights, property, or safety.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                6. Data Retention
              </h2>
              <p>
                We retain the information you submit only as long as necessary to respond to your inquiry and to meet our legal, regulatory, and licensing obligations in the State of Texas. Contact-form submissions are stored in our email systems (including Resend) and are deleted when no longer needed. You may request deletion at any time using the contact details below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                7. Your Rights
              </h2>
              <p>
                Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or request deletion of the personal information we hold about you. To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at:
              </p>
              <div className="mt-4 p-4 rounded-xl border border-border bg-muted/20 text-sm">
                <p className="font-semibold text-foreground">777 Skills, LLC</p>
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
