"use client";

import { useRef, useState } from "react";
import { cn } from "@/app/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  animatedBorder?: boolean;
}

/**
 * Card with a cursor-following radial spotlight (reactbits-style).
 * Falls back gracefully — no spotlight shown until pointer enters.
 */
export default function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(0, 180, 216, 0.18)",
  animatedBorder = false,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-muted/20 transition-colors duration-300",
        animatedBorder ? "animated-border border-transparent" : "border-border",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px z-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 45%)`,
        }}
      />
      {children}
    </div>
  );
}
