"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function FloatingActionButtons() {
  return (
    <Link
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 left-4 z-[55] flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_15px_40px_rgba(34,197,94,0.35)] transition-transform duration-300 hover:-translate-y-1 md:left-6"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}