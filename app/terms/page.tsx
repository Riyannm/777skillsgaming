import Navigation from "../components/ui/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for 777 Skills, LLC. Learn about terms of use for our gaming machines and services.",
};

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last updated: {lastUpdated}
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing our website (777skills.com) or entering into an agreement to partner with 777 Skills, LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) for the placement or operation of skill game machines, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you are prohibited from using the site or our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                2. Licensing and Compliance
              </h2>
              <p>
                All gaming machines provided by 777 Skills, LLC are operated strictly in accordance with Texas state and local laws governing amusement and skill-based vending devices.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Partner establishments must maintain active and valid general business licenses.</li>
                <li>Machines must be kept in clean, clear, and visible public locations in compliance with local zoning and accessibility rules.</li>
                <li>Tampering with, altering, or attempting to modify the hardware, software, or licensing tags on any machine is strictly prohibited.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                3. Partnership &amp; Revenue Sharing
              </h2>
              <p>
                Specific partnership configurations, revenue-sharing percentages, installation guidelines, and payout structures are defined in detail within the physical written Agreement executed between 777 Skills, LLC and each respective business owner. In the event of a conflict between these online Terms of Service and a signed physical Agreement, the terms of the signed physical Agreement shall govern.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                4. Intellectual Property
              </h2>
              <p>
                Unless otherwise indicated, our website, including its source code, databases, software designs, audio, video, text, photographs, and graphics, are our proprietary property or licensed to us, and are protected by copyright and trademark laws. No part of our site or content may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose without our express prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                5. Limitation of Liability
              </h2>
              <p>
                In no event will 777 Skills, LLC or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the website or our services, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                6. Governing Law
              </h2>
              <p>
                These Terms of Service and your use of the website are governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms shall be brought exclusively in a federal or state court of competent jurisdiction located in Bexar County, Texas.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                7. Changes to Terms
              </h2>
              <p>
                We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason. We will alert you about any changes by updating the &quot;Last updated&quot; date of these Terms. It is your responsibility to periodically review these Terms to stay informed of updates.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                8. Contact Us
              </h2>
              <p>
                To resolve a complaint regarding our services or to receive further information regarding use of the website or machines, please contact us at:
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
