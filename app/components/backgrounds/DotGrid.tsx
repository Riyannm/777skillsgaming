"use client";

import { cn } from "@/app/lib/utils";

interface DotGridProps {
  className?: string;
  opacity?: number;
  spacing?: number;
}

export default function DotGrid({
  className,
  opacity = 0.1,
  spacing = 40,
}: DotGridProps) {
  return (
    <div
      className={cn("absolute inset-0 -z-10", className)}
      style={{
        backgroundImage: `radial-gradient(circle, rgba(10, 17, 40, ${opacity}) 1px, transparent 1px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
      }}
    />
  );
}
