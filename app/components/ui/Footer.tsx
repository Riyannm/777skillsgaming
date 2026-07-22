"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

const badges = ["Texas Licensed", "24/7 Support", "30+ Locations", "Fully Compliant"];

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-border bg-gradient-to-b from-muted/20 to-background">
      {/* top glow line */}
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* ── CTA band ── */}
      <div className="border-b border-border/60">
        <div className="container mx-auto flex flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h3 className="text-2xl font-black text-foreground sm:text-3xl">
              Ready to add skill games?
            </h3>
            <p className="mt-1.5 text-muted-foreground">
              Free consultation, no upfront cost, revenue from day one.
            </p>
          </div>
          <div className="flex flex-shrink-0 gap-3">
            <Link href="/contact" className="flex-1 md:flex-none">
              <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-background transition-all duration-200 hover:bg-primary/90 sm:px-7">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <a href="tel:+17267773595" className="flex-1 md:flex-none">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-6 py-3.5 font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-muted/40 sm:px-7">
                <Phone className="h-4 w-4 text-primary" />
                Call Us
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main ── */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2">
            <Logo size="md" href="/" className="mb-4" />
            <p className="mb-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Licensed skill game machines for San Antonio bars, stores, and
              restaurants. We install them, support them, and split the revenue.
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="h-px w-0 bg-primary transition-all duration-200 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+17267773595"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                  726-777-3595
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@777skills.com"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                  info@777skills.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=7001+I-10+Suite+229+San+Antonio+TX+78213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>
                    7001 I-10, Suite 229
                    <br />
                    San Antonio, TX 78213
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-border/60">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} 777 Skills, LLC. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
