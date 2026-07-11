"use client";

import AnimatedSectionTitle from "@/components/AnimatedSectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="bg-slate-50 px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <AnimatedSectionTitle
          centered
          eyebrow="Hizmetler"
          title="İhtiyacınız olan tüm çilingir hizmetleri"
          description="Ev, araç, iş yeri ve kasa açma işlemlerinde uzman ekip, modern ekipman ve hızlı servis."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <Card className="group h-full rounded-[2rem] border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-premium">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
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