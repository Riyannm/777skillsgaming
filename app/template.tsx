"use client";

import { motion } from "framer-motion";

/**
 * Re-mounts on every route change, giving a smooth cross-page fade.
 * Opacity-only on purpose: a `transform` here would turn the fixed
 * Navigation into an absolutely-positioned element (CSS containing-block rule).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
