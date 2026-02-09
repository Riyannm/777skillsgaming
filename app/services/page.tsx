"use client";

import Navigation from "../components/ui/Navigation";
import ScrollReveal from "../components/ui/ScrollReveal";
import GradientText from "../components/ui/GradientText";
import ShinyText from "../components/ui/ShinyText";
import AnimatedText from "../components/ui/AnimatedText";
import ChromaGrid from "../components/backgrounds/ChromaGrid";
import SpotlightCard from "../components/services/SpotlightCard";
import { Settings, Code, Headphones, Wrench, Shield, Clock } from "lucide-react";

const services = [
  {
    category: "Technical Support Services",
    icon: Settings,
    description: "Comprehensive technical support for all your skill game machine needs",
    items: [
      {
        title: "Hardware Troubleshooting",
        description: "Expert diagnosis and repair of all hardware issues",
        icon: Wrench,
      },
      {
        title: "Software Updates",
        description: "Regular updates and maintenance to keep systems current",
        icon: Code,
      },
      {
        title: "Network Configuration",
        description: "Optimized network setup for reliable connectivity",
        icon: Shield,
      },
      {
        title: "Remote Diagnostics",
        description: "Quick problem identification and resolution",
        icon: Settings,
      },
      {
        title: "Preventive Maintenance",
        description: "Scheduled maintenance to prevent issues before they occur",
        icon: Clock,
      },
    ],
  },
  {
    category: "Software Support Services",
    icon: Code,
    description: "Expert software solutions and support",
    items: [
      {
        title: "Game Software Updates",
        description: "Latest game software and features",
        icon: Code,
      },
      {
        title: "System Configuration",
        description: "Custom system setup for your business needs",
        icon: Settings,
      },
      {
        title: "Data Management",
        description: "Comprehensive reporting and data analytics",
        icon: Shield,
      },
      {
        title: "Security Updates",
        description: "Regular security patches and compliance updates",
        icon: Shield,
      },
      {
        title: "Custom Solutions",
        description: "Tailored software solutions for unique requirements",
        icon: Code,
      },
    ],
  },
  {
    category: "24/7 Customer Support & Training",
    icon: Headphones,
    description: "Always available when you need us",
    items: [
      {
        title: "Phone Support",
        description: "Round-the-clock phone assistance",
        icon: Headphones,
      },
      {
        title: "On-Site Assistance",
        description: "Rapid response for critical issues",
        icon: Wrench,
      },
      {
        title: "Staff Training",
        description: "Comprehensive training programs for your team",
        icon: Settings,
      },
      {
        title: "Customer Service",
        description: "Dedicated support for all your questions",
        icon: Headphones,
      },
      {
        title: "Emergency Response",
        description: "24/7 emergency support services",
        icon: Clock,
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ChromaGrid />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <ShinyText className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                Our Services
              </ShinyText>
              <GradientText className="text-6xl md:text-7xl font-black mb-6 leading-tight max-w-4xl mx-auto line-clamp-2">
                Complete Support Solutions
              </GradientText>
              <div className="max-w-3xl mx-auto">
                <AnimatedText
                  text="From installation to ongoing support, we provide comprehensive services to ensure your skill game machines operate at peak performance."
                  className="text-muted-foreground text-lg md:text-xl"
                  delay={0.2}
                  stagger={0.03}
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger delay={0.15}>
            <div className="space-y-20">
              {services.map((service, serviceIndex) => {
                const CategoryIcon = service.icon;
                return (
                  <div key={service.category} className="mb-12">
                    <ScrollReveal delay={serviceIndex * 0.1}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                          <CategoryIcon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <GradientText className="text-3xl font-bold mb-2 line-clamp-2">
                            {service.category}
                          </GradientText>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal stagger delay={0.1}>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.items.map((item, itemIndex) => (
                          <SpotlightCard
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            delay={itemIndex * 0.2}
                          />
                        ))}
                      </div>
                    </ScrollReveal>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
