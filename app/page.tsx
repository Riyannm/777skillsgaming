import HeroSection from "./components/hero/HeroSection";
import Navigation from "./components/ui/Navigation";
import ProductCard from "./components/products/ProductCard";
import WhyChooseUs from "./components/about/WhyChooseUs";
import ServiceTabs from "./components/services/ServiceTabs";
import ContactForm from "./components/contact/ContactForm";
import ScrollReveal from "./components/ui/ScrollReveal";
import GradientText from "./components/ui/GradientText";
import ElectricBorder from "./components/ui/ElectricBorder";
import CountUp from "./components/ui/CountUp";
import Aurora from "./components/backgrounds/Aurora";
import ShinyText from "./components/ui/ShinyText";

const products = [
  {
    title: "43\" Metal Cabinet",
    description: "Durable metal cabinet design perfect for high-traffic locations",
    image: "/products/img5.png",
    features: [
      "43-inch high-definition display",
      "Reinforced metal construction",
      "Secure locking mechanism",
      "Easy maintenance access",
    ],
    href: "/products/43-metal-cabinet",
  },
  {
    title: "43\" Dual Screen",
    description: "Dual screen setup for enhanced gaming experience",
    image: "/products/img4.png",
    features: [
      "Dual 43-inch displays",
      "Synchronized gameplay",
      "Premium graphics",
      "Advanced sound system",
    ],
    href: "/products/43-dual-screen",
  },
  {
    title: "43\" Wooden Cabinet",
    description: "Classic wooden cabinet with modern technology",
    image: "/products/img3.png",
    features: [
      "Traditional wood finish",
      "43-inch display",
      "Elegant design",
      "Durable construction",
    ],
    href: "/products/43-wooden-cabinet",
  },
  {
    title: "32\" Metal Cabinet",
    description: "Compact metal cabinet ideal for smaller spaces",
    image: "/products/img1.png",
    features: [
      "32-inch display",
      "Space-efficient design",
      "Full feature set",
      "Affordable pricing",
    ],
    href: "/products/32-metal-cabinet",
  },
  {
    title: "Self-Dispensing KIOSK",
    description: "Automated self-service kiosk solution",
    image: "/products/img2.png",
    features: [
      "Fully automated operation",
      "Touch screen interface",
      "Secure payment processing",
      "24/7 operation capability",
    ],
    href: "/products/self-dispensing-kiosk",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <ShinyText className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                Our Products
              </ShinyText>
              <GradientText className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl mx-auto line-clamp-2">
                Skill Game Machines
              </GradientText>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Premium quality skill game machines designed for maximum performance and reliability
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger delay={0.1}>
            <div className="relative">
              <div 
                className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 scroll-smooth"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                  scrollBehavior: "smooth",
                }}
              >
                {products.map((product) => (
                  <div key={product.title} className="shrink-0 w-[90vw] sm:w-[400px] snap-start">
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <Aurora />
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <ShinyText className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                Why Choose Us
              </ShinyText>
              <GradientText className="text-5xl md:text-6xl font-bold mb-4 max-w-2xl mx-auto line-clamp-2">
                Your Trusted Partner
              </GradientText>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive solutions for your skill game machine needs
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger delay={0.2}>
            <WhyChooseUs />
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <ShinyText className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                Our Services
              </ShinyText>
              <GradientText className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl mx-auto line-clamp-2">
                Complete Support Solutions
              </GradientText>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From installation to ongoing support, we've got you covered
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger delay={0.15}>
            <ServiceTabs />
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <Aurora />
        <div className="container mx-auto">
          <ScrollReveal stagger delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <ElectricBorder color="#00B4D8" sparks={false} className="max-w-sm mx-auto">
                <div className="p-8 rounded-xl bg-muted hover:shadow-2xl transition-shadow">
                  <div className="text-5xl font-bold text-primary mb-2">
                    <CountUp end={30} suffix="+" />
                  </div>
                  <p className="text-muted-foreground text-lg">Active Locations</p>
                </div>
              </ElectricBorder>
              <ElectricBorder color="#F7941D" sparks={false} className="max-w-sm mx-auto">
                <div className="p-8 rounded-xl bg-muted hover:shadow-2xl transition-shadow">
                  <div className="text-5xl font-bold text-secondary mb-2">
                    24/7
                  </div>
                  <p className="text-muted-foreground text-lg">Support Available</p>
                </div>
              </ElectricBorder>
              <ElectricBorder color="#38BDF8" sparks={false} className="max-w-sm mx-auto">
                <div className="p-8 rounded-xl bg-muted hover:shadow-2xl transition-shadow">
                  <div className="text-5xl font-bold text-accent mb-2">
                    <CountUp end={100} suffix="%" />
                  </div>
                  <p className="text-muted-foreground text-lg">Licensed & Compliant</p>
                </div>
              </ElectricBorder>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <ShinyText className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                Get In Touch
              </ShinyText>
              <GradientText className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl mx-auto line-clamp-2">
                Request a Free Consultation
              </GradientText>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how we can help grow your business with skill game machines
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
