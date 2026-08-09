import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/ui/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import { cn } from "@/app/lib/utils";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "777 Skills | Licensed Skill Game Machines — San Antonio, TX",
    template: "%s | 777 Skills",
  },
  description:
    "777 Skills provides licensed skill game machines, professional installation, and 24/7 support for businesses in San Antonio, TX and surrounding areas.",
  keywords: [
    "skill game machines",
    "777 skills",
    "San Antonio gaming",
    "licensed skill games Texas",
    "game machine installation",
    "revenue sharing gaming",
  ],
  metadataBase: new URL("https://777skills.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://777skills.com",
    siteName: "777 Skills",
    title: "777 Skills | Licensed Skill Game Machines — San Antonio, TX",
    description:
      "San Antonio's premier provider of licensed skill game machines. Professional installation, 24/7 support, and revenue sharing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "777 Skills | Licensed Skill Game Machines",
    description:
      "San Antonio's premier provider of licensed skill game machines.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "777 Skills",
              legalName: "Vending & Delivery LLC",
              alternateName: "Vending & Delivery LLC",
              url: "https://777skills.com",
              telephone: "+17267773595",
              email: "info@777skills.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7001 I-10, Suite 229",
                addressLocality: "San Antonio",
                addressRegion: "TX",
                postalCode: "78213",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 29.4241,
                  longitude: -98.4936,
                },
                geoRadius: "100000",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              description:
                "777 Skills provides licensed skill game machines and comprehensive support services in San Antonio, TX and surrounding areas.",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          spaceGrotesk.variable,
          inter.variable,
          "antialiased min-h-screen flex flex-col bg-background text-foreground"
        )}
      >
        <ScrollProgress />
        {children}
        <Footer />
      </body>
    </html>
  );
}
