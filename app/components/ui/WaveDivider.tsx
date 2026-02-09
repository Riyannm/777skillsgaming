"use client";

import { cn } from "@/app/lib/utils";

interface WaveDividerProps {
  className?: string;
  flip?: boolean;
}

export default function WaveDivider({ className, flip = false }: WaveDividerProps) {
  return (
    <div className={cn("relative w-full h-24 overflow-hidden", className)}>
      <svg
        className={cn("absolute bottom-0 w-full h-full", flip && "rotate-180")}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C300,20 600,100 900,60 C1050,40 1150,50 1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00B4D8" />
            <stop offset="50%" stopColor="#F7941D" />
            <stop offset="100%" stopColor="#00B4D8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
