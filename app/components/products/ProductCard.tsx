"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/app/lib/utils";
import MagnetButton from "../ui/MagnetButton";
import ElectricBorder from "../ui/ElectricBorder";
import PlaceholderImage from "../ui/PlaceholderImage";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  href?: string;
}

export default function ProductCard({
  title,
  description,
  image,
  features,
  href,
}: ProductCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  return (
    <ElectricBorder color="#F7941D" sparks={false} className="max-w-sm">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group bg-muted backdrop-blur-sm rounded-xl p-6 overflow-visible hover:shadow-2xl transition-shadow"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
      >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 180, 216, 0.15), transparent 70%)`,
        }}
      />

      {/* Glare effect on image */}
      <div className="relative mb-4 rounded-lg overflow-hidden">
        <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          {image.startsWith('https://via.placeholder.com') || image.includes('placeholder') ? (
            <PlaceholderImage
              width={400}
              height={300}
              text={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0, x: "-100%" }}
              animate={{
                opacity: [0, 0.6, 0],
                x: ["-100%", "100%"],
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                background: "linear-gradient(90deg, transparent, rgba(144, 224, 239, 0.5), transparent)",
              }}
            />
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2 text-foreground line-clamp-2">{title}</h3>
      <p className="text-muted-foreground mb-4 text-base leading-relaxed line-clamp-3">{description}</p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {href ? (
        <a href={href}>
          <MagnetButton className="w-full">Learn More</MagnetButton>
        </a>
      ) : (
        <MagnetButton className="w-full">Learn More</MagnetButton>
      )}
      </motion.div>
    </ElectricBorder>
  );
}
