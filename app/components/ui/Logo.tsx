"use client";

import Link from "next/link";
import { cn } from "@/app/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      {/* Logo SVG - Interlocking abstract shapes: Left (cyan) rounded top→downward V, Right (orange) pointed top→upward V */}
      <svg
        className={cn(sizeClasses[size], "transition-transform group-hover:scale-105")}
        viewBox="0 0 80 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left shape - Light blue (cyan): rounded top, curves right, narrows to sharp downward V */}
        <path
          d="M8 6 Q12 3, 16 6 Q18 8, 18 12 L18 20 L22 30 L26 38 L26 28 L22 20 L18 12 L16 6 Z"
          fill="#00B4D8"
        />
        
        {/* Right shape - Bright orange: pointed top, angles left, narrows to sharp upward V */}
        <path
          d="M72 6 L68 3 L64 6 Q62 8, 62 12 L62 20 L58 30 L54 38 L54 28 L58 20 L62 12 L64 6 Z"
          fill="#F7941D"
        />
        
        {/* Interlock center - blue slightly in front of orange where they overlap */}
        <path
          d="M26 28 L54 28 L54 38 L26 38 Z"
          fill="#00B4D8"
          opacity="0.9"
        />
      </svg>

      {/* Text - Dark blue serif (visible on dark background) */}
      {showText && (
        <span className={cn("font-serif font-bold text-foreground", textSizes[size], "tracking-tight")}>
          777 SKILLS
        </span>
      )}
    </Link>
  );
}
