import Navigation from "../components/ui/Navigation";
import ScrollReveal from "../components/ui/ScrollReveal";
import GradientText from "../components/ui/GradientText";
import ElectricBorder from "../components/ui/ElectricBorder";
import ShinyText from "../components/ui/ShinyText";
import CountUp from "../components/ui/CountUp";
import DotGrid from "../components/backgrounds/DotGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - 777 Skills | Licensed Skill Game Machines in San Antonio",
  description: "Learn about 777 Skills, LLC - your trusted provider of licensed skill game machines and support services in San Antonio, TX and surrounding areas.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DotGrid />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <ShinyText className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                About Us
              </ShinyText>
              <GradientText className="text-5xl md:text-6xl font-bold mb-6 max-w-2xl mx-auto line-clamp-2">
                Your Trusted Partner
              </GradientText>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="prose prose-invert max-w-none mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground text-lg mb-6">
                777 skills (Vending & Delivery LLC ), LLC is a leading provider of licensed skill game machines and comprehensive
                support services in San Antonio, Texas, and surrounding areas. We specialize in
                delivering high-quality gaming solutions that help businesses increase revenue while
                maintaining full compliance with all regulations.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Our commitment to excellence, combined with our extensive experience in the industry,
                has made us the preferred choice for businesses looking to add skill game machines to
                their operations. We understand that every business is unique, which is why we offer
                customized solutions tailored to your specific needs.
              </p>
              <p className="text-gray-300 text-lg">
                From professional installation to ongoing technical support, we're with you every
                step of the way. Our team of experts ensures that your machines are always operating
                at peak performance, maximizing your revenue potential.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <ElectricBorder color="#00B4D8" sparks={false} className="max-w-sm mx-auto">
                <div className="p-8 rounded-xl bg-muted text-center hover:shadow-2xl transition-shadow">
                  <div className="text-5xl font-bold text-primary mb-2">
                    <CountUp end={30} suffix="+" />
                  </div>
                  <p className="text-muted-foreground text-lg">Active Accounts</p>
                </div>
              </ElectricBorder>
              <ElectricBorder color="#F7941D" sparks={false} className="max-w-sm mx-auto">
                <div className="p-8 rounded-xl bg-muted text-center hover:shadow-2xl transition-shadow">
                  <div className="text-5xl font-bold text-secondary mb-2">
                    <CountUp end={5} />
                  </div>
                  <p className="text-muted-foreground text-lg">Service Areas</p>
                </div>
              </ElectricBorder>
              <ElectricBorder color="#38BDF8" sparks={false} className="max-w-sm mx-auto">
                <div className="p-8 rounded-xl bg-muted text-center hover:shadow-2xl transition-shadow">
                  <div className="text-5xl font-bold text-accent mb-2">
                    <CountUp end={100} suffix="%" />
                  </div>
                  <p className="text-muted-foreground text-lg">Licensed & Compliant</p>
                </div>
              </ElectricBorder>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger delay={0.1}>
  <div className="mb-16 text-center">
    <GradientText className="text-3xl font-bold mb-6">Service Areas</GradientText>
    <ElectricBorder color="#00B4D8" sparks={false} className="max-w-lg mx-auto">
      <div className="p-6 rounded-lg bg-muted hover:shadow-2xl transition-shadow">
        <p className="text-foreground font-medium text-lg">All Over Texas</p>
      </div>
    </ElectricBorder>
  </div>
</ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div>
              <GradientText className="text-3xl font-bold mb-6">Why Choose 777 Skills?</GradientText>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Fully Licensed:</strong> All our machines are
                    properly licensed and compliant with state and local regulations.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-blue mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Professional Installation:</strong> Our expert
                    team ensures seamless installation with minimal disruption to your business.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-blue mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    <strong className="text-white">24/7 Support:</strong> Round-the-clock technical
                    and customer support whenever you need it.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-blue mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    <strong className="text-white">Revenue Sharing:</strong> Fair and transparent
                    revenue sharing model that benefits both parties.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-blue mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    <strong className="text-white">In-House IT Team:</strong> Dedicated IT
                    professionals for software and hardware support.
                  </p>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
