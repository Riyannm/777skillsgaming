"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/app/lib/utils";

interface FloatingLinesProps {
  className?: string;
  opacity?: number;
}

export default function FloatingLines({ className, opacity = 0.15 }: FloatingLinesProps) {
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

    const lines: Array<{
      x: number;
      y: number;
      length: number;
      angle: number;
      speed: number;
    }> = [];

    for (let i = 0; i < 20; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: 50 + Math.random() * 100,
        angle: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.3,
      });
    }

    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = `rgba(0, 180, 216, ${opacity})`;
      ctx.lineWidth = 1;

      lines.forEach((line) => {
        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;

        if (line.x < 0) line.x = canvas.width;
        if (line.x > canvas.width) line.x = 0;
        if (line.y < 0) line.y = canvas.height;
        if (line.y > canvas.height) line.y = 0;

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(
          line.x + Math.cos(line.angle) * line.length,
          line.y + Math.sin(line.angle) * line.length
        );
        ctx.stroke();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed inset-0 -z-10", className)}
    />
  );
}
