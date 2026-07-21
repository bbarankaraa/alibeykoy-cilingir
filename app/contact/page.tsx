import type { Metadata } from "next";
import Script from "next/script";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Acil çilingir için Alibeyköy Çilingir ile hemen iletişime geçin. 7/24 telefon, WhatsApp ve hızlı servis.",
};

export default function ContactPage() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C5PLVJGRH2"
        strategy="afterInteractive"
      />

      <Script id="google-analytics-contact" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C5PLVJGRH2');
        `}
      </Script>

      <ContactSection standalone />
    </>
  );
}