"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/app/lib/utils";
import Logo from "./Logo";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Floating Island Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl transition-all duration-300",
          scrolled ? "top-3" : "top-6"
        )}
      >
        <div
          className={cn(
            "relative w-full rounded-full transition-all duration-300 border backdrop-blur-xl px-6 md:px-8",
            scrolled
              ? "bg-background/90 border-primary/20 py-2 md:py-2.5 shadow-lg shadow-black/40"
              : "bg-background/70 border-border/80 py-2.5 md:py-4 shadow-md shadow-black/10"
          )}
          style={{
            boxShadow: scrolled ? "0 0 20px rgba(0, 180, 216, 0.08), 0 10px 30px rgba(0, 0, 0, 0.5)" : undefined,
          }}
        >
          {/* Subtle cyan glow line inside when scrolled */}
          {scrolled && (
            <div className="absolute inset-x-12 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />
          )}

          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <Logo size="md" />

            {/* Middle: Links */}
            <div className="hidden md:flex items-center gap-1.5 bg-muted/30 border border-border/40 rounded-full px-2 py-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-250 font-heading tracking-wide",
                      isActive
                        ? "text-background"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 bg-primary rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right: Phone link & Get Started */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+17267773595"
                className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                726-777-3595
              </a>
              
              <Link href="/contact">
                <button className="px-5 py-2 rounded-full text-xs font-bold bg-primary text-background hover:bg-primary/95 transition-all duration-200 hover:shadow-md hover:shadow-primary/25 active:scale-95 tracking-wide">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Navigation Trigger */}
            <button
              className="md:hidden p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="fixed top-0 right-0 z-50 h-full w-80 bg-background border-l border-border md:hidden flex flex-col shadow-2xl shadow-black"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <Logo size="sm" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col p-6 gap-2 flex-1">
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-3">
                  Navigation
                </div>
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-full text-base font-semibold transition-all duration-200",
                          isActive
                            ? "bg-primary text-background border border-primary/20 shadow-md shadow-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground px-2">
                  <Shield className="w-4 h-4 text-success" />
                  <span>Licensed &amp; Operating in Texas</span>
                </div>
                
                <a
                  href="tel:+17267773595"
                  className="flex items-center gap-2.5 px-4 py-3 rounded-full text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors border border-border"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  726-777-3595
                </a>
                
                <Link href="/contact" className="block">
                  <button className="w-full py-3.5 rounded-full text-sm font-bold bg-primary text-background hover:bg-primary/95 transition-all shadow-md shadow-primary/15">
                    Get Started
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
