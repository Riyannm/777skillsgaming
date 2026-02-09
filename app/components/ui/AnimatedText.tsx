"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export default function AnimatedText({
  text,
  className,
  delay = 0,
  stagger = 0.05,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <p className={cn("inline-block", className)}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: delay + index * stagger,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
