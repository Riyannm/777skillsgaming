"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/app/lib/utils";

interface ChromaGridProps {
  className?: string;
  opacity?: number;
}

export default function ChromaGrid({ className, opacity = 0.08 }: ChromaGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const gridSize = 50;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = `rgba(0, 180, 216, ${opacity})`;

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const wave = Math.sin((x + y + time) * 0.01) * 0.5 + 0.5;
          ctx.globalAlpha = opacity * wave;
          ctx.strokeRect(x, y, gridSize, gridSize);
        }
      }

      time += 0.5;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed inset-0 -z-10", className)}
    />
  );
}
