"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Wrench, Code, Shield, Settings, Clock, Headphones, HelpCircle, LucideIcon } from "lucide-react";
import { cn } from "@/app/lib/utils";

// Mapping icons dynamically since Lucide icons cannot be directly passed from Server to Client Components easily if serialized
const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Code,
  Shield,
  Settings,
  Clock,
  Headphones,
};

interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

interface ServiceCategory {
  category: string;
  iconName: string;
  description: string;
  items: ServiceItem[];
}

interface ServicesAccordionListProps {
  categories: ServiceCategory[];
}

export default function ServicesAccordionList({ categories }: ServicesAccordionListProps) {
  // Store expanded item index in format "categoryIndex-itemIndex"
  // Default to expanding the first item of the first category
  const [expandedId, setExpandedId] = useState<string | null>("0-0");

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-16">
      {categories.map((cat, catIndex) => {
        const CatIcon = iconMap[cat.iconName] || HelpCircle;
        const displayNum = String(catIndex + 1).padStart(2, "0");

        return (
          <div
            key={cat.category}
            className="relative p-6 md:p-8 rounded-2xl border border-border bg-muted/20 backdrop-blur-sm"
          >
            {/* Background Number */}
            <div className="absolute top-4 right-6 text-7xl md:text-8xl font-black text-primary/5 select-none font-heading leading-none">
              {displayNum}
            </div>

            {/* Category Header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                <CatIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
                  Section {displayNum}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-foreground font-heading">
                  {cat.category}
                </h2>
                <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                  {cat.description}
                </p>
              </div>
            </div>

            {/* Accordion List */}
            <div className="divide-y divide-border/60">
              {cat.items.map((item, itemIndex) => {
                const itemKey = `${catIndex}-${itemIndex}`;
                const isExpanded = expandedId === itemKey;
                const ItemIcon = iconMap[item.iconName] || HelpCircle;

                return (
                  <div key={item.title} className="py-4 first:pt-0 last:pb-0">
                    <button
                      onClick={() => toggleItem(itemKey)}
                      className="w-full flex items-center justify-between text-left group py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors border",
                            isExpanded
                              ? "bg-primary text-background border-primary"
                              : "bg-muted border-border text-muted-foreground group-hover:text-foreground group-hover:border-primary/40"
                          )}
                        >
                          <ItemIcon className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-foreground text-base md:text-lg group-hover:text-primary transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-muted-foreground group-hover:text-foreground"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-12 pr-4 pb-2 pt-1 text-sm md:text-base text-muted-foreground leading-relaxed">
                            {item.description}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
