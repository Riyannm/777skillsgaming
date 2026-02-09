"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Code, Headphones } from "lucide-react";
import { cn } from "@/app/lib/utils";

const services = [
  {
    id: "technical",
    label: "Technical Support",
    icon: Settings,
    content: {
      title: "Technical Support Services",
      description: "Comprehensive technical support for all your skill game machine needs",
      items: [
        "Hardware troubleshooting and repairs",
        "Software updates and maintenance",
        "Network configuration and optimization",
        "Remote diagnostics and support",
        "Preventive maintenance programs",
      ],
    },
  },
  {
    id: "software",
    label: "Software Services",
    icon: Code,
    content: {
      title: "Software Support Services",
      description: "Expert software solutions and support",
      items: [
        "Game software updates",
        "System configuration",
        "Data management and reporting",
        "Security and compliance updates",
        "Custom software solutions",
      ],
    },
  },
  {
    id: "support",
    label: "24/7 Customer Support",
    icon: Headphones,
    content: {
      title: "24/7 Customer Support & Training",
      description: "Always available when you need us",
      items: [
        "Round-the-clock phone support",
        "On-site technical assistance",
        "Staff training programs",
        "Customer service excellence",
        "Emergency response services",
      ],
    },
  },
];

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  const activeService = services.find((s) => s.id === activeTab) || services[0];
  const Icon = activeService.icon;

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-primary/20 pb-4">
        {services.map((service) => {
          const ServiceIcon = service.icon;
          const isActive = activeTab === service.id;
          return (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all",
                isActive
                  ? "bg-primary text-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/20 hover:text-foreground"
              )}
            >
              <ServiceIcon className="w-5 h-5" />
              {service.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {activeService.content.title}
              </h3>
              <p className="text-muted-foreground">{activeService.content.description}</p>
            </div>
          </div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {activeService.content.items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start gap-3 p-4 rounded-lg bg-muted border border-primary/10"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
