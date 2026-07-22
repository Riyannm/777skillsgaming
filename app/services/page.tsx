import Navigation from "../components/ui/Navigation";
import ServicesAccordionList from "../components/services/ServicesAccordionList";
import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Technical Support & Operations Support",
  description:
    "Comprehensive technical support, software configurations, staff training, and 24/7 emergency response for skill game machines in San Antonio, TX.",
};

const serviceData = [
  {
    category: "Technical Support Services",
    iconName: "Settings",
    description: "Comprehensive technical support for all your skill game machine needs",
    items: [
      {
        title: "Hardware Troubleshooting",
        description: "Expert diagnosis and fast repair of all physical components, power supplies, logic boards, and button assemblies.",
        iconName: "Wrench",
      },
      {
        title: "Software Updates",
        description: "Regular updates and critical hotfixes to keep game software operating smoothly, securely, and in full compliance.",
        iconName: "Code",
      },
      {
        title: "Network Configuration",
        description: "Secure, optimized local network setups and encrypted cellular routers for robust and uninterrupted server connectivity.",
        iconName: "Shield",
      },
      {
        title: "Remote Diagnostics",
        description: "Advanced remote monitoring that detects game errors in real-time, allowing us to patch minor issues before your staff or players notice.",
        iconName: "Settings",
      },
      {
        title: "Preventive Maintenance",
        description: "Scheduled check-ups to clean cabinets, check wiring integrity, clean bill validators, and extend equipment lifespan.",
        iconName: "Clock",
      },
    ],
  },
  {
    category: "Software & Compliance Services",
    iconName: "Code",
    description: "Expert software configurations and compliance solutions for Texas regulations",
    items: [
      {
        title: "Game Software Integration",
        description: "Deployment of top-performing, legally compliant skill game titles tailored to attract players in your local market.",
        iconName: "Code",
      },
      {
        title: "System Configuration",
        description: "Precise custom logic configurations and machine settings setup specifically for your physical location's space and traffic patterns.",
        iconName: "Settings",
      },
      {
        title: "Data Management & Auditing",
        description: "Comprehensive daily accounting reports, remote play analytics, and transparent revenue-sharing audits.",
        iconName: "Shield",
      },
      {
        title: "Security Updates & Compliance Patches",
        description: "Instant security patches, licensing sticker verification, and software compliance lockouts in line with state policies.",
        iconName: "Shield",
      },
      {
        title: "Custom Vending Solutions",
        description: "Tailored kiosk software updates and system integrations custom-fitted to your convenience store or bar setup.",
        iconName: "Code",
      },
    ],
  },
  {
    category: "24/7 Operations Support & Training",
    iconName: "Headphones",
    description: "Continuous assistance so your machines are always running and earning",
    items: [
      {
        title: "24/7 Phone Support",
        description: "Direct line to our Texas-based help desk. Real human support, 365 days a year.",
        iconName: "Headphones",
      },
      {
        title: "On-Site Support & Technician Dispatch",
        description: "Rapid dispatch of local technicians to San Antonio, New Braunfels, Converse, and Boerne for swift mechanical solutions.",
        iconName: "Wrench",
      },
      {
        title: "Staff & Management Training",
        description: "Comprehensive training for your cashiers and bartenders on machine operation, cash outs, basic troubleshooting, and security.",
        iconName: "Settings",
      },
      {
        title: "Customer Support Portal",
        description: "Direct access to request service tickets, track technician ETAs, and access machine usage manuals.",
        iconName: "Headphones",
      },
      {
        title: "24/7 Critical Emergency Response",
        description: "Immediate priority dispatch for any total system blackouts or hardware malfunctions to minimize downtime.",
        iconName: "Clock",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="container mx-auto relative max-w-7xl">
          <span className="section-label mb-3 block">Expert Operations</span>
          <h1 className="text-4xl md:text-6xl font-black text-foreground font-heading tracking-tight mb-4">
            Complete Operations &amp; Support
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            We don&apos;t just deliver machines — we keep them running. Our in-house technical and software teams handle everything from licensing to round-the-clock emergency maintenance.
          </p>
        </div>
      </section>

      {/* Services Grid & Sidebar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Accordion list of services */}
            <div className="lg:col-span-8">
              <ServicesAccordionList categories={serviceData} />
            </div>

            {/* Right: Sticky Support Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              
              {/* Emergency Card */}
              <div className="p-6 rounded-2xl border border-primary/20 bg-muted/40 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10" />
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-success animate-ping" />
                  <span className="text-xs font-semibold text-success uppercase tracking-widest">
                    Live Dispatch Status
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground font-heading mb-2">
                  Need Immediate Service?
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Are you an active partner experiencing a technical issue? Our dispatch team is online and ready. Call our priority line for immediate technician routing.
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:+17267773595"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm bg-primary text-background hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
                  >
                    <Phone className="w-4 h-4" />
                    Call Support: 726-777-3595
                  </a>
                  <a
                    href="mailto:info@777skills.com"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all bg-background/50"
                  >
                    <Mail className="w-4 h-4" />
                    info@777skills.com
                  </a>
                </div>
              </div>

              {/* Partnership Promotion Card */}
              <div className="p-6 rounded-2xl border border-border bg-muted/20 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-foreground font-heading mb-2">
                  Want to Add Skill Games?
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Partner with 777 Skills to install top-earning machines in your venue. Zero upfront cost, full operational support, and generous revenue share.
                </p>
                <Link
                  href="/contact"
                  className="group flex items-center justify-between p-3 rounded-xl border border-border bg-muted/40 hover:border-primary/40 transition-colors text-sm font-semibold text-foreground"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
