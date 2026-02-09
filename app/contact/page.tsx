import Navigation from "../components/ui/Navigation";
import ContactForm from "../components/contact/ContactForm";
import MapEmbed from "../components/contact/MapEmbed";
import ScrollReveal from "../components/ui/ScrollReveal";
import GradientText from "../components/ui/GradientText";
import ShinyText from "../components/ui/ShinyText";
import FloatingLines from "../components/backgrounds/FloatingLines";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - 777 Skills | San Antonio, TX",
  description: "Get in touch with 777 Skills for skill game machine installation and support. Located at 7001 I-10, Suite 229, San Antonio, TX 78213.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FloatingLines />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <ShinyText className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                Contact Us
              </ShinyText>
              <GradientText className="text-5xl md:text-6xl font-bold mb-6 max-w-2xl mx-auto line-clamp-2">
                Get In Touch
              </GradientText>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Ready to add skill game machines to your business? Contact us today for a free consultation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm mb-1">Phone</p>
                        <a href="tel:+12105551234" className="text-foreground hover:text-primary transition-colors">
                          (210) 555-1234
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm mb-1">Email</p>
                        <a href="mailto:info@777skills.com" className="text-foreground hover:text-primary transition-colors">
                          info@777skills.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm mb-1">Office Address</p>
                        <p className="text-foreground">
                          7001 I-10, Suite 229<br />
                          San Antonio, TX 78213
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm mb-1">Business Hours</p>
                        <p className="text-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed<br />
                          <span className="text-primary">24/7 Emergency Support Available</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-primary/20">
                  <h3 className="text-xl font-bold text-foreground mb-4">Service Areas</h3>
                  <p className="text-muted-foreground mb-4">
                    We proudly serve the following areas:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["San Antonio", "New Braunfels", "Converse", "Boerne", "Helotes"].map((city) => (
                      <span
                        key={city}
                        className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Map */}
          <ScrollReveal delay={0.3}>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Find Us</h2>
              <MapEmbed />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
