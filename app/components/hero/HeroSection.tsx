"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Hyperspeed from "../backgrounds/Hyperspeed";
import GradientText from "../ui/GradientText";
import ElectricButton from "../ui/ElectricButton";
import ElectricBorder from "../ui/ElectricBorder";
import ScrollReveal from "../ui/ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />
      <Hyperspeed className="absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <ScrollReveal>
          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl font-black leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GradientText className="max-w-5xl mx-auto line-clamp-2">Licensed Skill Game Machines</GradientText>
          </motion.h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <motion.p
            className="text-2xl md:text-3xl mt-8 max-w-2xl mx-auto text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional installation, 24/7 support, and revenue sharing for businesses
            in San Antonio and surrounding areas.
          </motion.p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <motion.div
            className="flex gap-6 mt-12 justify-center items-center flex-col sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ElectricBorder sparks={true} color="#00B4D8" style={{ borderRadius: "16px" }}>
              <Link href="/contact">
                <button className="bg-primary text-background px-10 py-5 rounded-xl font-bold text-xl transition-all hover:bg-primary/90">
                  Get Started Today
                </button>
              </Link>
            </ElectricBorder>
            <ElectricBorder sparks={true} color="#38BDF8" style={{ borderRadius: "16px" }}>
              <Link href="/products">
                <button className="border-2 border-accent text-accent px-8 py-4 rounded-xl font-semibold bg-transparent hover:bg-accent/10 transition-colors">
                  View Products
                </button>
              </Link>
            </ElectricBorder>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
