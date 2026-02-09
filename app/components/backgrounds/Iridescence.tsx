"use client";

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";

interface IridescenceProps {
  className?: string;
}

export default function Iridescence({ className }: IridescenceProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden -z-10", className)}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(45deg, rgba(0, 180, 216, 0.1), rgba(247, 148, 29, 0.1), rgba(0, 180, 216, 0.1))",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{
          background: "radial-gradient(circle at 30% 50%, rgba(0, 180, 216, 0.15), transparent 50%), radial-gradient(circle at 70% 50%, rgba(247, 148, 29, 0.15), transparent 50%)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
