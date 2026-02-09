"use client";

// CREDIT
// Component inspired by @BalintFerenczy on X
// https://codepen.io/BalintFerenczy/pen/KwdoyEN

import { useEffect, useRef, useState } from "react";
import { cn } from "@/app/lib/utils";

import ClickSpark from "./ClickSpark";

interface ElectricBorderProps {
  children: React.ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  sparks?: boolean;
  sparkColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ElectricBorder({
  children,
  color = "#00B4D8",
  speed = 1.2,
  chaos = 0.1,
  thickness = 2,
  sparks = false,
  sparkColor,
  className,
  style,
}: ElectricBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setDimensions({ width: rect.width, height: rect.height });
        }
      }
    };

    // Initial measurement with a small delay to ensure DOM is ready
    const timeout = setTimeout(updateDimensions, 100);
    updateDimensions();

    // Use ResizeObserver for better performance
    let resizeObserver: ResizeObserver | null = null;
    if (containerRef.current && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateDimensions);
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", updateDimensions);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateDimensions);
      if (resizeObserver && containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0 || dimensions.height === 0) return;

    const svg = svgRef.current;
    const path = svg.querySelector("path");
    if (!path) return;

    const animate = () => {
      timeRef.current += 0.016 * speed; // ~60fps

      const { width, height } = dimensions;
      const points: number[] = [];
      const segments = 20;
      const segmentLength = (width * 2 + height * 2) / segments;

      // Top edge
      for (let i = 0; i <= segments / 4; i++) {
        const x = (width / (segments / 4)) * i;
        const noise = Math.sin(timeRef.current + x * chaos) * (thickness * 2);
        points.push(x, noise);
      }

      // Right edge
      for (let i = 1; i <= segments / 4; i++) {
        const y = (height / (segments / 4)) * i;
        const noise = Math.sin(timeRef.current + (width + y) * chaos) * (thickness * 2);
        points.push(width + noise, y);
      }

      // Bottom edge
      for (let i = segments / 4 - 1; i >= 0; i--) {
        const x = (width / (segments / 4)) * i;
        const noise = Math.sin(timeRef.current + (width * 2 + height + x) * chaos) * (thickness * 2);
        points.push(x, height + noise);
      }

      // Left edge
      for (let i = segments / 4 - 1; i > 0; i--) {
        const y = (height / (segments / 4)) * i;
        const noise = Math.sin(timeRef.current + (width * 2 + height * 2 + y) * chaos) * (thickness * 2);
        points.push(noise, y);
      }

      // Create smooth path
      let pathData = `M ${points[0]} ${points[1]}`;
      for (let i = 2; i < points.length - 2; i += 2) {
        const x = points[i];
        const y = points[i + 1];
        const nextX = points[i + 2];
        const nextY = points[i + 3];

        const cp1x = x + (nextX - x) / 3;
        const cp1y = y + (nextY - y) / 3;
        const cp2x = x + (nextX - x) * 2 / 3;
        const cp2y = y + (nextY - y) * 2 / 3;

        pathData += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${nextX} ${nextY}`;
      }
      pathData += " Z";

      path.setAttribute("d", pathData);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions, speed, chaos, thickness]);

  const content = (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={style}
    >
      {/* SVG Border */}
      <svg
        ref={svgRef}
        className="absolute inset-0 pointer-events-none"
        width={dimensions.width || "100%"}
        height={dimensions.height || "100%"}
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id={`electric-gradient-${color.replace("#", "")}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="50%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="1" />
          </linearGradient>
          <filter id={`glow-${color.replace("#", "")}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d=""
          fill="none"
          stroke={`url(#electric-gradient-${color.replace("#", "")})`}
          strokeWidth={thickness}
          filter={`url(#glow-${color.replace("#", "")})`}
          style={{
            transition: "none",
          }}
        />
      </svg>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );

  // Wrap with ClickSpark if enabled
  if (sparks) {
    return (
      <ClickSpark
        sparkColor={sparkColor || color}
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {content}
      </ClickSpark>
    );
  }

  return content;
}
