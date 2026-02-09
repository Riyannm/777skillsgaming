"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface LaserCursorProps {
  enabled?: boolean;
}

export default function LaserCursor({ enabled = false }: LaserCursorProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!enabled || !isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enabled, isDesktop, cursorX, cursorY]);

  if (!enabled || !isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary-blue to-primary-orange pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-primary-blue/20 to-primary-orange/20 pointer-events-none z-[9998] blur-3xl"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
