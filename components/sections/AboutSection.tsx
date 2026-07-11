"use client";

import AnimatedSectionTitle from "@/components/AnimatedSectionTitle";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { trustPills } from "@/lib/data";

const stats = [
  { value: "10+", label: "Yıl Hizmet" },
  { value: "5000+", label: "Başarılı Müdahale" },
  { value: "24/7", label: "Ulaşılabilirlik" }
];

export default function AboutSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <AnimatedSectionTitle
          centered
          eyebrow="Hakkımızda"
          title="İşletmeler için güvenilir ve hızlı çilingir çözümü"
          description="Alibeyköy Çilingir, Vedat Mutlu liderliğinde 10 yıllık deneyimle hasarsız açma, kilit değişimi ve 7/24 acil servis sunar."
        />

        <Card className="mt-12 overflow-hidden rounded-[2rem] border-slate-200 bg-slate-50 shadow-sm">
          <CardContent className="space-y-8 p-6 md:p-10">
            <div className="flex flex-col items-center gap-6 border-b border-slate-200 pb-8 text-center">
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <Image src="/logo.png" width={96} height={96} alt="Alibeyköy Çilingir Logo" className="h-20 w-20 object-contain" />
              </div>
              <div>
                <p className="mb-2 text-xs tracking-[0.25em] text-slate-500">ALİBEYKÖY ÇİLİNGİR</p>
                <h2 className="text-3xl font-bold text-slate-950 md:text-5xl">Vedat Mutlu</h2>
                <p className="mt-3 text-sm text-slate-600 md:text-lg">10 yıllık tecrübe, 7/24 ulaşılabilir servis</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {trustPills.map((item) => (
                <Badge key={item} className="rounded-full bg-white px-4 py-2 text-slate-700">
                  {item}
                </Badge>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <p className="text-3xl font-bold text-blue-600">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-5 text-sm leading-7 text-slate-600 md:text-base">
              <p>
                Land Dijital yerine bu projede Alibeyköy Çilingir markası için tamamen profesyonel ve dönüşüm odaklı bir kurumsal yapı kurgulanmıştır. Amacımız yalnızca bir web sitesi yapmak değil; arayan müşteriyi hızla aksiyona yönlendiren premium bir dijital deneyim sunmaktır.
              </p>
              <p>
                Kapıda kaldığınızda, araç anahtarınız içeride unuttuğunuzda ya da kilit değişimi gerektiğinde hızlı ve hasarsız çözüm üretmek için çalışıyoruz. Eyüpsultan, Alibeyköy ve İstanbul genelinde güvenli servis hedefliyoruz.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}