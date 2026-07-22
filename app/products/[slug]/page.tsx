import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, ArrowLeft, Phone } from "lucide-react";
import Navigation from "../../components/ui/Navigation";
import SpotlightCard from "../../components/ui/SpotlightCard";
import { products, getProductBySlug } from "../../lib/products";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.title,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  // Related products (other 2 that aren't this one)
  const related = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/10 pt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Image */}
            <div className="relative">
              {product.badge && (
                <span className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full text-sm font-semibold bg-secondary text-background">
                  {product.badge}
                </span>
              )}
              <div className="relative aspect-square rounded-2xl border border-border bg-gradient-to-br from-muted to-background overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  priority
                  className="object-contain p-10"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="section-label mb-3">Licensed Machine</p>
              <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
                {product.title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {product.fullDescription}
              </p>

              {/* Spec Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-3 rounded-xl border border-border bg-muted/20"
                  >
                    <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide">
                      {spec.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-10">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <button className="group flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-primary text-background hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95">
                    Request a Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a href="tel:+17267773595">
                  <button className="flex items-center gap-2 px-6 py-4 rounded-xl font-semibold border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all">
                    <Phone className="w-4 h-4" />
                    726-777-3595
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-foreground">Other Machines</h2>
            <Link href="/products">
              <button className="group flex items-center gap-1.5 text-sm text-primary font-semibold hover:text-primary/80 transition-colors">
                View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group block h-full">
                <SpotlightCard animatedBorder className="h-full overflow-hidden transition-colors duration-300">
                  <div className="relative z-10">
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-background">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                        {p.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {p.shortDescription}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all products
        </Link>
      </div>
    </main>
  );
}
