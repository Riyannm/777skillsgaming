import Navigation from "../components/ui/Navigation";
import SpotlightCard from "../components/ui/SpotlightCard";
import Link from "next/link";
import { ArrowRight, Shield, Wrench, Clock, TrendingUp, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about 777 Skills, a brand of Vending & Delivery LLC — San Antonio's trusted provider of licensed skill game machines and support services across Texas.",
};

const stats = [
  { value: "30+", label: "Active Locations" },
  { value: "15+", label: "Texas Cities" },
  { value: "100%", label: "Licensed & Compliant" },
  { value: "24/7", label: "Support Coverage" },
];

const values = [
  {
    icon: Shield,
    title: "Fully Licensed",
    desc: "Every machine we place is properly licensed and compliant with Texas state and local gaming regulations.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    desc: "Expert installation with minimal disruption — most setups are completed within a single business day.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Round-the-clock technical and customer support. When a machine goes down, so does our team — immediately.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Sharing",
    desc: "Fair, transparent revenue sharing that genuinely benefits both our clients and our business.",
  },
  {
    icon: Users,
    title: "In-House IT Team",
    desc: "Dedicated software and hardware professionals available for rapid response across all service areas.",
  },
];

const serviceAreas = [
  "San Antonio",
  "New Braunfels",
  "Converse",
  "Boerne",
  "Helotes",
  "Leon Valley",
  "Schertz",
  "Seguin",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="container mx-auto relative">
          <p className="section-label mb-4">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-5 tracking-tight max-w-3xl">
            San Antonio's Trusted
            <br />
            <span className="text-cyan-shimmer">Skill Game Partner</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            777 Skills, a brand of Vending &amp; Delivery LLC, is a leading provider of licensed skill
            game machines and comprehensive support services in San Antonio, Texas, and
            surrounding areas.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-b border-border bg-muted/10 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-black text-gold-shimmer mb-1">{s.value}</div>
                <p className="text-sm text-muted-foreground font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <p className="section-label mb-4">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8">
            Built on Compliance, Driven by Results
          </h2>
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              777 Skills specializes in delivering high-quality gaming solutions that help
              businesses increase revenue while maintaining full compliance with all state
              and local regulations. We understand that every business is unique — which
              is why we offer customized solutions tailored to your specific needs.
            </p>
            <p>
              Our commitment to excellence, combined with our extensive experience in the
              industry, has made us the preferred choice for bars, restaurants, gas
              stations, and convenience stores looking to add skill game machines to their
              operations.
            </p>
            <p>
              From professional installation to ongoing technical support, we&apos;re with
              you every step of the way. Our team of experts ensures that your machines
              are always operating at peak performance, maximizing your revenue potential.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/10">
        <div className="container mx-auto">
          <p className="section-label mb-4">Our Values</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-12">
            Why Businesses Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <SpotlightCard
                  key={v.title}
                  animatedBorder
                  className="p-6 transition-colors duration-200"
                >
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label mb-4">Where We Operate</p>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                Serving Texas Businesses
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We proudly serve San Antonio and the surrounding region. New locations
                are added regularly — contact us to confirm coverage in your area.
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((city) => (
                  <span
                    key={city}
                    className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
                  >
                    {city}
                  </span>
                ))}
                <span className="px-4 py-2 rounded-full border border-border bg-muted/20 text-muted-foreground text-sm">
                  + more
                </span>
              </div>
            </div>

            {/* CTA card */}
            <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5">
              <h3 className="text-2xl font-black text-foreground mb-3">
                Ready to partner with us?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get a free consultation and we&apos;ll walk you through everything — from
                machine selection to installation and ongoing support.
              </p>
              <Link href="/contact">
                <button className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-primary text-background hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
