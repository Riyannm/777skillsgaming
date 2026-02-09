import Navigation from "../components/ui/Navigation";
import ProductCard from "../components/products/ProductCard";
import ScrollReveal from "../components/ui/ScrollReveal";
import GradientText from "../components/ui/GradientText";
import ShinyText from "../components/ui/ShinyText";
import Iridescence from "../components/backgrounds/Iridescence";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - 777 Skills | Skill Game Machines",
  description: "Browse our selection of licensed skill game machines including 43\" and 32\" cabinets, dual screen setups, and self-dispensing kiosks.",
};

const products = [
  {
    title: "43\" Metal Cabinet",
    description: "Durable metal cabinet design perfect for high-traffic locations. Built to last with reinforced construction and secure locking mechanisms.",
    image: "placeholder",
    features: [
      "43-inch high-definition display",
      "Reinforced metal construction",
      "Secure locking mechanism",
      "Easy maintenance access",
      "Energy efficient operation",
      "Compliant with all regulations",
    ],
    href: "/products/43-metal-cabinet",
  },
  {
    title: "43\" Dual Screen",
    description: "Dual screen setup for enhanced gaming experience. Perfect for locations wanting to maximize player engagement.",
    image: "https://via.placeholder.com/600x400/020617/00B4D8?text=43%22+Dual+Screen",
    features: [
      "Dual 43-inch displays",
      "Synchronized gameplay",
      "Premium graphics quality",
      "Advanced sound system",
      "Multi-player capability",
      "High-resolution displays",
    ],
    href: "/products/43-dual-screen",
  },
  {
    title: "43\" Wooden Cabinet",
    description: "Classic wooden cabinet with modern technology. Combines traditional aesthetics with cutting-edge gaming technology.",
    image: "https://via.placeholder.com/600x400/020617/00B4D8?text=43%22+Wooden+Cabinet",
    features: [
      "Traditional wood finish",
      "43-inch display",
      "Elegant design",
      "Durable construction",
      "Customizable finishes",
      "Premium materials",
    ],
    href: "/products/43-wooden-cabinet",
  },
  {
    title: "32\" Metal Cabinet",
    description: "Compact metal cabinet ideal for smaller spaces. Full features in a space-efficient design.",
    image: "https://via.placeholder.com/600x400/020617/00B4D8?text=32%22+Metal+Cabinet",
    features: [
      "32-inch display",
      "Space-efficient design",
      "Full feature set",
      "Affordable pricing",
      "Easy installation",
      "Low maintenance",
    ],
    href: "/products/32-metal-cabinet",
  },
  {
    title: "Self-Dispensing KIOSK",
    description: "Automated self-service kiosk solution. Fully automated operation with secure payment processing.",
    image: "https://via.placeholder.com/600x400/020617/00B4D8?text=Self-Dispensing+KIOSK",
    features: [
      "Fully automated operation",
      "Touch screen interface",
      "Secure payment processing",
      "24/7 operation capability",
      "Remote monitoring",
      "Cashless payment options",
    ],
    href: "/products/self-dispensing-kiosk",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Iridescence />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <ShinyText className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                Our Products
              </ShinyText>
              <GradientText className="text-5xl md:text-6xl font-bold mb-6 max-w-2xl mx-auto line-clamp-2">
                Skill Game Machines
              </GradientText>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Premium quality skill game machines designed for maximum performance, reliability, and compliance.
                All our machines are fully licensed and meet the highest industry standards.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
