"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface ElectricButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function ElectricButton({
  children,
  onClick,
  className,
  type = "button",
}: ElectricButtonProps) {
  const [sparks, setSparks] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sparkIdRef = useRef(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newSparks = Array.from({ length: 8 }, () => ({
        x,
        y,
        id: sparkIdRef.current++,
      }));

      setSparks((prev) => [...prev, ...newSparks]);

      setTimeout(() => {
        setSparks((prev) => prev.filter((spark) => !newSparks.includes(spark)));
      }, 600);
    }

    onClick?.();
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={handleClick}
      className={cn(
        "relative px-8 py-4 rounded-lg font-semibold text-background overflow-hidden",
        "bg-primary",
        "transition-all duration-300",
        "hover:scale-105 hover:shadow-lg hover:shadow-primary/50",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        className
      )}
    >
      <span className="relative z-10">{children}</span>


      {/* Click sparks */}
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          className="absolute w-2 h-2 rounded-full bg-secondary"
          initial={{
            x: spark.x,
            y: spark.y,
            scale: 1,
            opacity: 1,
          }}
          animate={{
            x: spark.x + (Math.random() - 0.5) * 100,
            y: spark.y + (Math.random() - 0.5) * 100,
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        />
      ))}
    </button>
  );
}
