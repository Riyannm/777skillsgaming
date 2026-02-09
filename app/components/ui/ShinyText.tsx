"use client";

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function ShinyText({ children, className }: ShinyTextProps) {
  return (
    <motion.span
      className={cn("relative inline-block", className)}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-blue to-transparent opacity-50"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0, 180, 216, 0.5), transparent)",
        }}
      />
    </motion.span>
  );
}
