"use client";

import AnimatedSectionTitle from "@/components/AnimatedSectionTitle";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";

function CountUpNumber({ value, suffix }: { value: number; suffix: string }) {
  const current = useCountUp(value);
  return (
    <>
      {current}
      {suffix}
    </>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <AnimatedSectionTitle
          centered
          eyebrow="Rakamlarla Güven"
          title="Hızlı, güvenilir ve profesyonel çilingir hizmeti"
          description="On yıllık saha tecrübemiz, binlerce başarılı müdahale ve 7/24 erişilebilir servis yapısıyla İstanbul’da hızlı çözüm sunuyoruz."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div className="text-4xl font-semibold text-slate-950">
                <CountUpNumber value={item.value} suffix={item.suffix} />
              </div>
              <p className="mt-2 text-sm text-slate-500">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}