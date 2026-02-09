"use client";

import { useRef, ReactElement, cloneElement, isValidElement, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  staggerDelay?: number;
  baseOpacity?: number;
  enableBlur?: boolean;
  baseRotation?: number;
  blurStrength?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({
  children,
  className,
  delay = 0.1,
  stagger = false,
  staggerDelay = 0.2,
  baseOpacity = 0,
  enableBlur = false,
  baseRotation = 0,
  blurStrength = 4,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  // Debug logging
  useEffect(() => {
    if (isInView) {
      console.log('[ScrollReveal] Triggered:', { delay, stagger, staggerDelay });
    }
  }, [isInView, delay, stagger, staggerDelay]);

  const variants = {
    hidden: {
      opacity: 0, // Force opacity 0 for initial state
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
      rotate: baseRotation,
      filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  // If stagger is enabled, use Framer Motion's staggerChildren
  if (stagger) {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    };

    const itemVariants = {
      hidden: {
        opacity: 0,
        y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
        x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
      },
    };

    // Handle both array and single child
    const childrenArray = Array.isArray(children) ? children : [children];
    
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className={cn(className)}
      >
        {childrenArray.map((child, index) => {
          // If child is a div/container with children, wrap it
          if (isValidElement(child) && typeof child.type === 'string' && child.type === 'div') {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative z-10"
              >
                {child}
              </motion.div>
            );
          }
          
          // For other elements, wrap in motion.div
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative z-10"
            >
              {child}
            </motion.div>
          );
        })}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={cn("relative z-10", className)}
      style={{ opacity: isInView ? undefined : 0 }} // Force initial opacity
    >
      {children}
    </motion.div>
  );
}
