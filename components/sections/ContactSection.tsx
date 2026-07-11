"use client";

import AnimatedSectionTitle from "@/components/AnimatedSectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";
import { MessageCircle, PhoneCall, MapPin, Clock3 } from "lucide-react";
import Link from "next/link";

export default function ContactSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="iletisim" className={`px-4 py-16 text-white md:px-6 lg:py-24 ${standalone ? "bg-slate-950" : "bg-slate-950"}`}>
      <div className="mx-auto max-w-7xl">
        <AnimatedSectionTitle
          centered
          eyebrow="İletişim"
          title="Acil çilingire mi ihtiyacınız var?"
          description="Hemen arayın, konumunuzu paylaşın, en kısa sürede yönlendirme yapalım."
          className="text-white [&_h2]:text-white [&_p]:text-white/65"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white shadow-premium backdrop-blur-xl lg:col-span-2">
            <CardContent className="space-y-5 p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-glow">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-white/50">7/24 Acil Hat</p>
                  <h3 className="text-2xl font-semibold">{siteConfig.phone}</h3>
                </div>
              </div>

              <div className="grid gap-3">
                <Button  size="lg" className="rounded-full">
                  <Link href={siteConfig.phoneHref} aria-label="Hemen Ara" className="flex items-center gap-2">
                    <PhoneCall className="h-4 w-4" />
                    Hemen Ara
                  </Link>
                </Button>
                <Button  variant="outline" size="lg" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
                  <Link href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp ile iletişim" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Link>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-white/70">
                    <Clock3 className="h-4 w-4" />
                    <span className="text-sm">Çalışma Saatleri</span>
                  </div>
                  <p className="mt-2 font-semibold">7/24</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-white/70">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Servis Bölgesi</span>
                  </div>
                  <p className="mt-2 font-semibold">Eyüpsultan • Alibeyköy</p>
                </div>
              </div>

              <div className="rounded-2xl border border-green-400/20 bg-green-500/10 p-4 text-sm text-green-200">
                En hızlı dönüş için arama yapmanız önerilir.
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/5 shadow-premium backdrop-blur-xl lg:col-span-3">
            <CardContent className="p-0">
              <div className="border-b border-white/10 p-5 md:p-6">
                <p className="text-sm text-white/50">Harita</p>
                <h3 className="text-xl font-semibold">Konum ve erişim</h3>
              </div>
              <div className="h-[320px] md:h-[480px]">
                <iframe
                  title="Alibeyköy Çilingir Harita"
                  className="h-full w-full"
                  src="https://www.google.com/maps?q=Alibeyk%C3%B6y%2C%20Ey%C3%BCpsultan%2C%20%C4%B0stanbul&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}