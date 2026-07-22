"use client";

import { motion } from "framer-motion";

/**
 * Slow-drifting ambient light orbs for section backgrounds. Purely decorative
 * and non-interactive.
 */
export default function GlowOrbs({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <motion.div
        className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/15 blur-[110px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/3 h-64 w-64 rounded-full bg-accent/10 blur-[100px]"
        animate={{ x: [0, 40, -30, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
