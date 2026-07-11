import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: siteConfig.description
};

export default function AboutPage() {
  return <AboutSection />;
}