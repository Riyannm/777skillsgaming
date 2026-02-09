"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/app/lib/utils";

interface SpotlightCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

export default function SpotlightCard({
  title,
  description,
  icon: Icon,
  className,
  delay = 0,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    setMousePosition({ x: (mouseX / width) * 100, y: (mouseY / height) * 100 });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={cn(
        "relative group p-6 rounded-xl bg-muted border border-primary/20 overflow-visible",
        "transition-all duration-300",
        "hover:border-primary/50",
        className
      )}
    >
      {/* Spotlight beam */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 180, 216, 0.2), transparent 70%)`,
        }}
      />

      {/* Glow effect */}
      <div
        className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 180, 216, 0.4), transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon with motion */}
        <motion.div
          className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Icon className="w-6 h-6 text-primary" />
        </motion.div>

        {/* Title with scale-in on hover */}
        <motion.h3
          className="text-xl font-bold text-foreground mb-2"
          animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">{description}</p>
      </div>

      {/* Shine effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
          }}
        />
      )}
    </motion.div>
  );
}
