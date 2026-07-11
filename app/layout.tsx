import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PhoneWidget from "@/components/sections/PhoneWidget";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    founder: siteConfig.owner,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alibeyköy",
      addressRegion: "İstanbul",
      addressCountry: "TR"
    },
    areaServed: siteConfig.serviceArea,
    description: siteConfig.description,
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$"
  };

  return (
    <html lang="tr">
      <body className={`${inter.variable} font-sans`}>
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
        <PhoneWidget />
        <FloatingActionButtons />
        <ScrollToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}