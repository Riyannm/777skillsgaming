"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/app/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className,
  colors = ["#00B4D8", "#38BDF8", "#00B4D8"], // primary -> accent -> primary
  animationSpeed = 2.5,
  showBorder = false,
}: GradientTextProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const offsetRef = useRef(0);

  // Ensure first and last colors match for seamless loop
  const gradientColors = colors.length > 0 && colors[0] === colors[colors.length - 1]
    ? colors
    : [...colors, colors[0]];

  useEffect(() => {
    const animate = () => {
      offsetRef.current += 0.5 * animationSpeed;
      if (offsetRef.current >= 360) offsetRef.current = 0;

      if (spanRef.current) {
        // Create animated gradient by shifting color positions
        const angle = (offsetRef.current * Math.PI) / 180;
        const gradientStops = gradientColors.map((color, index) => {
          const basePosition = (index / (gradientColors.length - 1)) * 100;
          const wave = Math.sin(angle + index * 0.5) * 5;
          const position = Math.max(0, Math.min(100, basePosition + wave));
          return `${color} ${position}%`;
        }).join(", ");

        spanRef.current.style.backgroundImage = `linear-gradient(to right, ${gradientStops})`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gradientColors, animationSpeed]);

  return (
    <span
      ref={spanRef}
      className={cn(
        "bg-clip-text text-transparent",
        showBorder && "border border-current",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(to right, ${gradientColors.join(", ")})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        // Fallback color
        color: gradientColors[0],
      }}
    >
      {children}
    </span>
  );
}
