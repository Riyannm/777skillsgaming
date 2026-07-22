import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/ui/Navigation";
import SpotlightCard from "../components/ui/SpotlightCard";
import Tilt from "../components/ui/Tilt";
import { products } from "../lib/products";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our selection of licensed skill game machines — 43\" metal and wooden cabinets, dual screen setups, and self-dispensing kiosks. Available for San Antonio businesses.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto relative">
          <p className="section-label mb-3">Our Machines</p>
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-4 tracking-tight">
            Skill Game Machines
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Every machine is licensed, installed, and supported by our team. We handle
            compliance — you handle growth.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group block h-full"
              >
                <Tilt className="h-full">
                  <SpotlightCard animatedBorder className="h-full overflow-hidden transition-colors duration-300">
                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-xs font-semibold bg-secondary text-background shadow-lg shadow-secondary/20">
                        {product.badge}
                      </span>
                    )}

                    <div className="relative z-10 flex h-full flex-col">
                      {/* Image */}
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-background overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h2 className="font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors">
                          {product.title}
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                          {product.shortDescription}
                        </p>

                        {/* Specs chips */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {product.specs.slice(0, 3).map((spec) => (
                            <span
                              key={spec.label}
                              className="px-2.5 py-1 rounded-md bg-muted border border-border text-xs text-muted-foreground"
                            >
                              {spec.label}: <span className="text-foreground font-medium">{spec.value}</span>
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold group-hover:gap-2.5 transition-all duration-200">
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </SpotlightCard>
                </Tilt>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center py-12 px-6 rounded-2xl border border-dashed border-primary/30 bg-primary/5">
            <p className="section-label mb-3">Interested?</p>
            <h3 className="text-3xl font-black text-foreground mb-3">
              Not sure which machine fits your location?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We'll assess your space and recommend the best setup — completely free.
            </p>
            <Link href="/contact">
              <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-primary text-background hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95">
                Get a Free Recommendation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
