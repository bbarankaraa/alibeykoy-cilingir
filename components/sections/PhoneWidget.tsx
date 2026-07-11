"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function PhoneWidget() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="fixed bottom-20 right-4 z-[60] hidden md:block"
      >
        <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>
          <Link
            href={siteConfig.phoneHref}
            className="group relative flex items-center gap-3 overflow-hidden rounded-[1.5rem] border border-white/20 bg-slate-950/90 px-4 py-3 text-white shadow-[0_18px_60px_rgba(15,23,42,0.45)] backdrop-blur-xl"
            aria-label="Hemen Ara"
          >
            <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.25)_45%,transparent_70%)] bg-[length:200%_100%] opacity-0 transition-opacity duration-300 group-hover:animate-shimmer group-hover:opacity-100" />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-glow">
              <PhoneCall className="h-5 w-5" />
              <span className="absolute inset-0 rounded-2xl border border-blue-300/40 animate-ring" />
            </span>
            <div className="relative">
              <div className="text-sm font-semibold">Hemen Ara</div>
              <div className="text-xs text-white/65">7/24 Acil Çilingir</div>
            </div>
          </Link>
        </motion.div>
      </motion.div>

      <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-xl md:hidden">
        <Link
          href={siteConfig.phoneHref}
          className="flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-4 py-4 text-white shadow-glow"
          aria-label="Hemen ara"
        >
          <PhoneCall className="h-5 w-5" />
          <div className="text-left">
            <div className="text-sm font-semibold">Hemen Ara</div>
            <div className="text-xs text-white/80">7/24 Acil Çilingir</div>
          </div>
        </Link>
      </div>
    </>
  );
}