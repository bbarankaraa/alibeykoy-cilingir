"use client";

import AnimatedSectionTitle from "@/components/AnimatedSectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { reasons } from "@/lib/data";

export default function WhyUsSection() {
  return (
    <section id="neden-biz" className="bg-white px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <AnimatedSectionTitle
          centered
          eyebrow="Neden Biz"
          title="Neden Alibeyköy Çilingir?"
          description="Acil durumlarda hız, güven ve zarar vermeden çözüm sunmak için çalışıyoruz."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
            >
              <Card className="h-full rounded-[2rem] border-slate-200 bg-slate-50 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}