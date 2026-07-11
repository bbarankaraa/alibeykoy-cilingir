"use client";

import AnimatedSectionTitle from "@/components/AnimatedSectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { coverageAreas } from "@/lib/data";

export default function CoverageSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <AnimatedSectionTitle
          centered
          eyebrow="Hizmet Bölgesi"
          title="İstanbul Avrupa Yakası’nda hızlı servis"
          description="Eyüpsultan ve çevresinde acil çilingir için konum bazlı hızlı yönlendirme yapıyoruz."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {coverageAreas.map((area, idx) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
            >
              <Card className="rounded-[2rem] border-slate-200 bg-slate-50 shadow-sm">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-slate-950">{area}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Hızlı ulaşım, yerinde müdahale ve 7/24 destek.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}