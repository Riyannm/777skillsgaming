import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "777 Skills - Licensed Skill Game Machines | San Antonio, TX",
  description: "777 Skills provides licensed skill game machines and comprehensive support services in San Antonio, TX and surrounding areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "777 Skills",
              url: "https://777skills.com",
              telephone: "+12105551234",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7001 I-10, Suite 229",
                addressLocality: "San Antonio",
                addressRegion: "TX",
                postalCode: "78213",
                addressCountry: "US",
              },
              description: "777 Skills provides licensed skill game machines and comprehensive support services in San Antonio, TX and surrounding areas.",
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
