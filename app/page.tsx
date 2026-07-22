"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Clock,
  Wrench,
  TrendingUp,
  Star,
  ChevronDown,
  Cpu,
  Headphones,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import Navigation from "./components/ui/Navigation";
// three.js is heavy — load it only on the client, after hydration, so it stays
// out of the initial JS bundle and never blocks first paint.
const Hyperspeed = dynamic(() => import("./components/backgrounds/Hyperspeed"), {
  ssr: false,
});
import SpotlightCard from "./components/ui/SpotlightCard";
import CountUp from "./components/ui/CountUp";
import ElectricBorder from "./components/ui/ElectricBorder";
import Tilt from "./components/ui/Tilt";
import MagneticButton from "./components/ui/MagneticButton";
import GlowOrbs from "./components/ui/GlowOrbs";
import { cn } from "./lib/utils";
import { products } from "./lib/products";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-label mb-3 flex items-center gap-2">
      <span className="inline-block h-px w-6 bg-primary/60" />
      {children}
    </p>
  );
}

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProductCard({ product, delay }: { product: (typeof products)[0]; delay: number }) {
  return (
    <FadeUp delay={delay} className="h-full">
      <Link href={`/products/${product.slug}`} className="group block h-full">
        <Tilt className="h-full">
        <SpotlightCard animatedBorder className="h-full transition-colors duration-300">
          {product.badge && (
            <span className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-[11px] font-bold bg-secondary text-background shadow-lg shadow-secondary/20">
              {product.badge}
            </span>
          )}
          <div className="relative z-10 flex h-full flex-col">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-background overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card/80 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-bold text-foreground text-lg mb-1 transition-colors group-hover:text-primary">
                {product.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                {product.shortDescription}
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-primary font-semibold transition-all group-hover:gap-2">
                View Details <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </SpotlightCard>
        </Tilt>
      </Link>
    </FadeUp>
  );
}

const trustItems = [
  { icon: Shield, text: "100% Licensed & Compliant" },
  { icon: Clock, text: "24/7 Emergency Support" },
  { icon: Wrench, text: "Professional Installation" },
  { icon: TrendingUp, text: "Revenue Sharing Model" },
  { icon: Star, text: "30+ Active Locations" },
  { icon: BadgeCheck, text: "In-House IT Team" },
];

const stats = [
  { end: 30, suffix: "+", label: "Active Locations" },
  { end: 15, suffix: "+", label: "Texas Cities Served" },
  { end: 100, suffix: "%", label: "Licensed & Compliant" },
  { value: "24/7", label: "Emergency Support" },
];

const whyUsFeatures = [
  {
    icon: BadgeCheck,
    title: "Fully Licensed",
    tag: "TX compliant",
    desc: "Every machine ships with current Texas licensing and passes local inspection. You never touch the paperwork, and you are never the one holding the risk.",
  },
  {
    icon: Wrench,
    title: "One-Day Install",
    tag: "Zero downtime",
    desc: "We set most locations up in a single visit, before you open. No mess left on your floor.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    tag: "365 days",
    desc: "A real tech picks up when a machine goes down at 2am, so it is back to earning fast.",
  },
  {
    icon: TrendingUp,
    title: "Fair Revenue Split",
    tag: "Paid monthly",
    desc: "You keep the bigger share and get one clear statement every month. No hidden fees.",
  },
  {
    icon: Cpu,
    title: "In-House Techs",
    tag: "No middlemen",
    desc: "Our own hardware and software team handles every repair. Nothing gets outsourced.",
  },
];

const servicesPreview = [
  {
    icon: Wrench,
    title: "Technical Support",
    desc: "Hardware troubleshooting, software updates, remote diagnostics, and preventive maintenance.",
  },
  {
    icon: Cpu,
    title: "Software Services",
    desc: "Game updates, system configuration, data management, and security patches.",
  },
  {
    icon: Headphones,
    title: "Customer Training",
    desc: "Staff training, 24/7 phone support, on-site assistance, and emergency response.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] overflow-hidden">
        {/* Animated background */}
        <Hyperspeed className="absolute inset-0" />

        {/* Readability + composition layers */}
        <div className="absolute inset-0 bg-background/30" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 50% 42%, transparent 30%, rgba(2,6,23,0.85) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        {/* Padded wrapper keeps content clear of the fixed nav and never centers under it */}
        <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 pb-16 pt-28 text-center sm:px-6 sm:pb-10 sm:pt-24">
          <div className="flex w-full max-w-4xl flex-col items-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-black leading-[1.08] text-foreground sm:text-6xl sm:leading-[1.05] lg:text-7xl"
          >
            Skill Game Machines
            <br />
            <span className="text-cyan-shimmer">That Actually Pay.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl"
          >
            Professional installation, 24/7 support, and transparent revenue sharing
            for bars, restaurants, and convenience stores across San Antonio and
            surrounding areas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:mt-10 sm:w-auto sm:flex-row"
          >
            <MagneticButton className="w-full sm:w-auto">
              <ElectricBorder color="#00B4D8" sparks style={{ borderRadius: "14px" }}>
                <Link href="/contact" className="block">
                  <button className="group flex w-full items-center justify-center gap-2 rounded-[14px] bg-primary px-8 py-4 font-bold text-background transition-all duration-200 hover:bg-primary/90">
                    Get a Free Consultation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </ElectricBorder>
            </MagneticButton>
            <MagneticButton className="w-full sm:w-auto">
              <Link href="/products" className="block">
                <button className="animated-border flex w-full items-center justify-center gap-2 rounded-[14px] border border-transparent bg-background/40 px-8 py-4 font-semibold text-foreground backdrop-blur-md transition-all duration-200 hover:bg-muted/40">
                  View Machines
                </button>
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Inline trust chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-muted-foreground sm:mt-12"
          >
            {[
              { icon: Shield, text: "Fully Licensed in TX" },
              { icon: Clock, text: "24/7 Support" },
              { icon: TrendingUp, text: "Zero Upfront Cost" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 text-primary" />
                {text}
              </span>
            ))}
          </motion.div>
          </div>
        </div>

        {/* Scroll cue — hidden on mobile to avoid overlapping the trust chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground/50 sm:flex"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Trust Marquee ────────────────────────────────── */}
      <section className="relative border-y border-border bg-muted/20 py-5 overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-12 pr-12">
          {[...trustItems, ...trustItems].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex flex-shrink-0 items-center gap-2.5 text-sm">
              <Icon className="h-4 w-4 flex-shrink-0 text-primary" />
              <span className="font-medium text-muted-foreground">{text}</span>
              <span className="ml-4 h-1 w-1 rounded-full bg-border" />
            </div>
          ))}
        </div>
      </section>

      {/* ─── Products ─────────────────────────────────────── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <FadeUp className="mb-14 max-w-2xl">
            <SectionLabel>Our Machines</SectionLabel>
            <h2 className="mb-4 text-3xl font-black text-foreground md:text-4xl">
              Built to earn. Built to last.
            </h2>
            <p className="text-lg text-muted-foreground">
              Every machine we place is licensed, installed, and serviced by our own
              team. You just collect.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {products.slice(0, 5).map((product, i) => (
              <ProductCard key={product.slug} product={product} delay={i * 0.08} />
            ))}
            <FadeUp delay={0.4} className="h-full">
              <Link href="/products" className="group block h-full">
                <div className="flex min-h-[300px] h-full flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-8 text-center transition-all duration-300 hover:border-primary/60 hover:bg-primary/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 transition-transform group-hover:scale-110">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="mb-1 text-lg font-bold text-foreground">See All Machines</p>
                    <p className="text-sm text-muted-foreground">Browse our complete product lineup</p>
                  </div>
                </div>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── Stats ────────────────────────────────────────── */}
      <section className="relative border-y border-border bg-muted/10 py-16 overflow-hidden">
        <GlowOrbs />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mb-1 text-4xl font-black tabular-nums text-primary md:text-5xl">
                    {"value" in stat ? (
                      stat.value
                    ) : (
                      <CountUp end={stat.end!} suffix={stat.suffix} />
                    )}
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Us ───────────────────────────────────────── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <FadeUp className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <SectionLabel>Why Choose 777 Skills</SectionLabel>
              <h2 className="text-3xl font-black text-foreground md:text-4xl">
                You run the venue. We run the machines.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Licensing, install, repairs, payouts. You get a check, not a to-do list.
              </p>
            </div>
            <Link href="/contact" className="flex-shrink-0">
              <button className="group flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-background transition-all duration-200 hover:bg-primary/90">
                Partner With Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </FadeUp>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUsFeatures.map((item, i) => (
              <FadeUp
                key={item.title}
                delay={i * 0.07}
                className={cn("h-full", i === 0 && "sm:col-span-2")}
              >
                <Tilt className="h-full">
                  <SpotlightCard
                    animatedBorder
                    className="group relative h-full p-6 transition-colors"
                  >
                    {/* oversized index watermark */}
                    <span className="pointer-events-none absolute -top-4 right-3 select-none text-7xl font-black leading-none text-primary/5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <span className="rounded-full border border-secondary/25 bg-secondary/10 px-2.5 py-0.5 text-[11px] font-semibold text-secondary">
                          {item.tag}
                        </span>
                      </div>
                      <h3
                        className={cn(
                          "mb-2 font-bold text-foreground",
                          i === 0 ? "text-2xl" : "text-lg"
                        )}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={cn(
                          "leading-relaxed text-muted-foreground",
                          i === 0 ? "max-w-md text-base" : "text-sm"
                        )}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </SpotlightCard>
                </Tilt>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Preview ─────────────────────────────── */}
      <section className="border-y border-border bg-muted/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <FadeUp className="mb-14">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <SectionLabel>What We Offer</SectionLabel>
                <h2 className="text-3xl font-black text-foreground md:text-4xl">
                  Complete Support From Day One.
                </h2>
              </div>
              <Link href="/services">
                <button className="group flex flex-shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80">
                  View all services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </FadeUp>

          <div className="divide-y divide-border/60 border-y border-border/60">
            {servicesPreview.map((service, i) => (
              <FadeUp key={service.title} delay={i * 0.08}>
                <Link
                  href="/services"
                  className="group relative flex items-center gap-4 py-6 sm:gap-6 sm:py-7"
                >
                  {/* hover wash */}
                  <span className="pointer-events-none absolute inset-y-0 -inset-x-4 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {/* index */}
                  <span className="relative z-10 w-7 flex-shrink-0 text-sm font-black text-primary/40 sm:w-10 sm:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* icon */}
                  <div className="relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40 text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 sm:h-12 sm:w-12">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  {/* text */}
                  <div className="relative z-10 min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {service.desc}
                    </p>
                  </div>
                  {/* arrow */}
                  <ArrowRight className="relative z-10 hidden h-5 w-5 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary sm:block" />
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact CTA ──────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
        {/* animated ambient light */}
        <GlowOrbs />
        <div className="container relative mx-auto text-center">
          <FadeUp>
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-secondary/10 px-4 py-1.5 text-xs font-semibold text-secondary">
              <Sparkles className="h-3.5 w-3.5" />
              Ready to Start?
            </div>
            <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-black text-foreground md:text-5xl">
              Add Skill Games to Your Business Today.
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
              No upfront costs. We handle everything. You earn revenue from day one.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton>
                <Link href="/contact" className="block">
                  <button className="group flex items-center justify-center gap-2 rounded-xl bg-primary px-10 py-4 font-bold text-background transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25">
                    Request Free Consultation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <a href="tel:+17267773595" className="block">
                  <button className="flex items-center justify-center gap-2 rounded-xl border border-border px-8 py-4 font-semibold text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-foreground">
                    Call 726-777-3595
                  </button>
                </a>
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
