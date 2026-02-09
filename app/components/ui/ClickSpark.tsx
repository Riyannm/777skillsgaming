"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/app/lib/utils";

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
  opacity: number;
}

interface ClickSparkProps {
  children: React.ReactNode;
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  className?: string;
}

export default function ClickSpark({
  children,
  sparkColor = "#00B4D8",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  className,
}: ClickSparkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const sparkIdRef = useRef(0);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSparks: Spark[] = [];
    for (let i = 0; i < sparkCount; i++) {
      const angle = (Math.PI * 2 * i) / sparkCount;
      newSparks.push({
        id: sparkIdRef.current++,
        x,
        y,
        angle,
        distance: 0,
        opacity: 1,
      });
    }

    setSparks((prev) => [...prev, ...newSparks]);

    // Animate sparks
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setSparks((prev) =>
        prev.map((spark) => {
          if (spark.id < newSparks[0].id) return spark;

          const distance = sparkRadius * progress;
          const opacity = 1 - progress;

          return {
            ...spark,
            distance,
            opacity,
          };
        })
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Remove completed sparks
        setSparks((prev) => prev.filter((s) => s.id < newSparks[0].id));
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className={cn("relative", className)}
    >
      {children}
      {sparks.map((spark) => {
        const sparkX = spark.x + Math.cos(spark.angle) * spark.distance;
        const sparkY = spark.y + Math.sin(spark.angle) * spark.distance;

        return (
          <div
            key={spark.id}
            className="absolute pointer-events-none"
            style={{
              left: `${sparkX}px`,
              top: `${sparkY}px`,
              width: `${sparkSize}px`,
              height: `${sparkSize}px`,
              transform: "translate(-50%, -50%)",
              opacity: spark.opacity,
              background: sparkColor,
              borderRadius: "50%",
              boxShadow: `0 0 ${sparkSize}px ${sparkColor}`,
              transition: "opacity 0.1s linear",
            }}
          />
        );
      })}
    </div>
  );
}
