"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneCall, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { trustPills } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_top_right,_rgba(15,23,42,0.08),transparent_30%),linear-gradient(to_bottom,#ffffff,#f8fbff)]" />
      <div className="pointer-events-none absolute inset-0 opacity-5 [background-image:linear-gradient(rgba(15,23,42,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.6)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:px-6 lg:grid-cols-2 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="mb-5 inline-flex rounded-full border border-blue-200 bg-white/75 px-4 py-2 text-xs font-medium text-blue-700 shadow-sm backdrop-blur">
            Alibeyköy • Eyüpsultan • İstanbul • 7/24 Acil Servis
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Alibeyköy’de 7/24 Profesyonel Çilingir Hizmeti
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-slate-600 md:text-lg">
            Kapıda kaldığınızda, araç anahtarınız içeride unuttuğunuzda ya da kilit değişimi gerektiğinde hızlı ve zarar vermeden çözüm sunuyoruz. 10 yıllık tecrübemizle Eyüpsultan ve çevresinde güvenli servis sağlıyoruz.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button  size="lg" className="rounded-full px-7">
              <Link href={siteConfig.phoneHref} aria-label="Hemen Ara" className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4" />
                Hemen Ara
              </Link>
            </Button>
            <Button  variant="outline" size="lg" className="rounded-full border-slate-200 bg-white px-7">
              <Link href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp ile iletişim" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {trustPills.map((pill) => (
              <div key={pill} className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur">
                {pill}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl animate-pulseSoft" />
          <div className="absolute right-6 bottom-6 h-32 w-32 rounded-full bg-emerald-500/15 blur-2xl" />

          <div className="glass relative overflow-hidden rounded-[2rem] p-4 md:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),transparent_40%)]" />
            <Image
              src="/locksmith-illustration.svg"
              alt="Çilingir illüstrasyonu"
              width={900}
              height={900}
              priority
              className="relative z-10 h-auto w-full drop-shadow-2xl"
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-4 top-4 rounded-2xl border border-white/30 bg-white/80 px-4 py-3 shadow-premium backdrop-blur-xl"
            >
              <div className="text-xs text-slate-500">Acil Durum</div>
              <div className="font-semibold text-slate-950">Hızlı müdahale</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 right-4 rounded-2xl border border-blue-200 bg-white/90 px-4 py-3 shadow-premium backdrop-blur-xl"
            >
              <div className="text-xs text-slate-500">7/24</div>
              <div className="font-semibold text-slate-950">Her zaman açık</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}