"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { cn } from "@/app/lib/utils";

interface Product {
  title: string;
  description: string;
  image: string;
  features: string[];
  href?: string;
}

interface ProductShowcaseProps {
  products: Product[];
}

export default function ProductShowcase({ products }: ProductShowcaseProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    updateScrollButtons();
    scrollContainer.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      scrollContainer.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [products]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth * 0.9; // Match card width
      const gap = 24; // gap-6 = 1.5rem = 24px
      const scrollAmount = cardWidth + gap;
      
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
        }}
        onScroll={updateScrollButtons}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="shrink-0 w-[90vw] sm:w-[400px] snap-start"
          >
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      {/* Scroll buttons with fade effect */}
      <div className="hidden md:flex justify-center gap-4 mt-6">
        <motion.button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={cn(
            "p-3 rounded-full bg-primary/20 hover:bg-primary/40 text-foreground transition-all duration-300",
            "disabled:opacity-30 disabled:cursor-not-allowed",
            "hover:scale-110 active:scale-95"
          )}
          aria-label="Scroll left"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={cn(
            "p-3 rounded-full bg-primary/20 hover:bg-primary/40 text-foreground transition-all duration-300",
            "disabled:opacity-30 disabled:cursor-not-allowed",
            "hover:scale-110 active:scale-95"
          )}
          aria-label="Scroll right"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </div>
  );
}
