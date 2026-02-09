"use client";

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";

interface AuroraProps {
  className?: string;
}

export default function Aurora({ className }: AuroraProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden -z-10", className)}>
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(0, 180, 216, 0.4), transparent)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(247, 148, 29, 0.4), transparent)",
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(0, 180, 216, 0.3), rgba(247, 148, 29, 0.3))",
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
