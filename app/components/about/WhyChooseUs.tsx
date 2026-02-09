"use client";

import { Shield, Wrench, DollarSign, Clock, Users } from "lucide-react";
import { cn } from "@/app/lib/utils";
import ScrollReveal from "../ui/ScrollReveal";
import ElectricBorder from "../ui/ElectricBorder";

const cards = [
  {
    id: 1,
    title: "Licensed & Compliant",
    description: "Fully licensed skill game machines ensuring compliance with all regulations",
    icon: Shield,
    size: "large",
    theme: "blue",
  },
  {
    id: 2,
    title: "Seamless Installation",
    description: "Professional installation services with minimal disruption to your business",
    icon: Wrench,
    size: "medium",
    theme: "orange",
  },
  {
    id: 3,
    title: "Revenue Sharing",
    description: "Fair and transparent revenue sharing model",
    icon: DollarSign,
    size: "small",
    theme: "blue",
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Round-the-clock technical and customer support",
    icon: Clock,
    size: "small",
    theme: "orange",
  },
  {
    id: 5,
    title: "In-House IT Team",
    description: "Dedicated IT professionals for software and hardware support",
    icon: Users,
    size: "small",
    theme: "blue",
  },
];

export default function WhyChooseUs() {
  return (
    <ScrollReveal stagger delay={0.1}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const isLarge = card.size === "large";
          const isMedium = card.size === "medium";
          const isBlue = card.theme === "blue";
          const borderColor = isBlue ? "#00B4D8" : "#F7941D";

          return (
            <ElectricBorder
              key={card.id}
              color={borderColor}
              sparks={false}
              className={cn(
                isLarge && "md:col-span-2 md:row-span-2",
                isMedium && "md:col-span-1 md:row-span-2"
              )}
            >
              <div
                className={cn(
                  "relative p-6 rounded-xl overflow-visible group cursor-pointer",
                  "bg-muted backdrop-blur-sm hover:shadow-2xl transition-shadow"
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    isBlue
                      ? "bg-gradient-to-br from-primary/10 to-transparent"
                      : "bg-gradient-to-br from-secondary/10 to-transparent"
                  )}
                />

                <div className="relative z-10">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                      isBlue ? "bg-primary/20" : "bg-secondary/20"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-6 h-6",
                        isBlue ? "text-primary" : "text-secondary"
                      )}
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-foreground line-clamp-2">{card.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">{card.description}</p>
                </div>
              </div>
            </ElectricBorder>
          );
        })}
      </div>
    </ScrollReveal>
  );
}
