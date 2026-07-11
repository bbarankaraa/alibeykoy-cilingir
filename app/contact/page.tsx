import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Acil çilingir için Alibeyköy Çilingir ile hemen iletişime geçin. 7/24 telefon, WhatsApp ve hızlı servis."
};

export default function ContactPage() {
  return <ContactSection standalone />;
}