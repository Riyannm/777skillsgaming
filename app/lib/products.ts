export interface Product {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  images: string[];
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  badge?: string;
}

export const products: Product[] = [
  {
    slug: "43-metal-cabinet",
    title: '43" Metal Cabinet',
    shortDescription:
      "Durable metal cabinet design perfect for high-traffic locations. Built to last with reinforced construction and secure locking mechanisms.",
    fullDescription:
      "Our 43\" Metal Cabinet is engineered for the demands of high-traffic commercial environments. With a reinforced steel frame, tamper-resistant locking system, and a stunning 43-inch high-definition display, this machine delivers both resilience and an exceptional player experience. Ideal for bars, restaurants, and convenience stores.",
    image: "/products/img5.png",
    images: ["/products/img5.png"],
    badge: "Most Popular",
    features: [
      "43-inch high-definition display",
      "Reinforced metal construction",
      "Secure locking mechanism",
      "Easy maintenance access",
      "Energy efficient operation",
      "Compliant with all Texas regulations",
    ],
    specs: [
      { label: "Screen Size", value: '43"' },
      { label: "Cabinet Material", value: "Reinforced Steel" },
      { label: "Display Type", value: "HD LED" },
      { label: "Operating Hours", value: "24/7 Capable" },
      { label: "Compliance", value: "Texas Licensed" },
    ],
  },
  {
    slug: "43-dual-screen",
    title: '43" Dual Screen',
    shortDescription:
      "Dual screen setup for enhanced gaming experience. Perfect for locations wanting to maximize player engagement.",
    fullDescription:
      "The 43\" Dual Screen cabinet takes the player experience to another level. Two synchronized 43-inch HD displays create an immersive visual environment that keeps players engaged longer and drives higher revenue for your location.",
    image: "/products/img4.png",
    images: ["/products/img4.png"],
    features: [
      "Dual 43-inch HD displays",
      "Synchronized gameplay",
      "Premium graphics quality",
      "Advanced sound system",
      "Multi-player capability",
      "High-resolution touch screens",
    ],
    specs: [
      { label: "Screen Size", value: '2 × 43"' },
      { label: "Cabinet Material", value: "Steel & Composite" },
      { label: "Display Type", value: "Dual HD LED" },
      { label: "Operating Hours", value: "24/7 Capable" },
      { label: "Compliance", value: "Texas Licensed" },
    ],
  },
  {
    slug: "43-wooden-cabinet",
    title: '43" Wooden Cabinet',
    shortDescription:
      "Classic wooden cabinet with modern technology. Combines traditional aesthetics with cutting-edge gaming technology.",
    fullDescription:
      "The 43\" Wooden Cabinet blends the timeless look of solid wood craftsmanship with the latest in skill game technology. A perfect fit for upscale bars, lounges, and establishments that value both style and performance.",
    image: "/products/img3.png",
    images: ["/products/img3.png"],
    features: [
      "Traditional wood finish",
      "43-inch HD display",
      "Elegant premium design",
      "Durable hardwood construction",
      "Customizable finishes available",
      "Premium speaker system",
    ],
    specs: [
      { label: "Screen Size", value: '43"' },
      { label: "Cabinet Material", value: "Hardwood" },
      { label: "Display Type", value: "HD LED" },
      { label: "Operating Hours", value: "24/7 Capable" },
      { label: "Compliance", value: "Texas Licensed" },
    ],
  },
  {
    slug: "32-metal-cabinet",
    title: '32" Metal Cabinet',
    shortDescription:
      "Compact metal cabinet ideal for smaller spaces. Full features in a space-efficient design.",
    fullDescription:
      "The 32\" Metal Cabinet delivers the full 777 Skills experience in a compact footprint. Perfect for venues where space is limited but revenue opportunity is not. Same rugged build quality, same great gameplay.",
    image: "/products/img1.png",
    images: ["/products/img1.png"],
    features: [
      "32-inch HD display",
      "Space-efficient design",
      "Full feature set",
      "Reinforced metal frame",
      "Quick installation",
      "Low power consumption",
    ],
    specs: [
      { label: "Screen Size", value: '32"' },
      { label: "Cabinet Material", value: "Reinforced Steel" },
      { label: "Display Type", value: "HD LED" },
      { label: "Operating Hours", value: "24/7 Capable" },
      { label: "Compliance", value: "Texas Licensed" },
    ],
  },
  {
    slug: "self-dispensing-kiosk",
    title: "Self-Dispensing KIOSK",
    shortDescription:
      "Automated self-service kiosk solution for maximum convenience and revenue generation.",
    fullDescription:
      "The Self-Dispensing KIOSK is 777 Skills' most advanced product. Fully automated, touch-driven, and built for high-volume environments, this kiosk handles player transactions end-to-end — no staff interaction required. A true revenue-generating machine.",
    image: "/products/img2.png",
    images: ["/products/img2.png"],
    badge: "New",
    features: [
      "Fully automated operation",
      "Intuitive touch screen interface",
      "Secure payment processing",
      "24/7 unattended operation",
      "Real-time remote monitoring",
      "ADA compliant design",
    ],
    specs: [
      { label: "Interface", value: "Touch Screen" },
      { label: "Operation", value: "Fully Automated" },
      { label: "Payment", value: "Multi-method" },
      { label: "Operating Hours", value: "24/7 Unattended" },
      { label: "Compliance", value: "Texas Licensed + ADA" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
