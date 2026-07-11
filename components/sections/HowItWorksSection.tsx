"use client";

import AnimatedSectionTitle from "@/components/AnimatedSectionTitle";
import { motion } from "framer-motion";
import { steps } from "@/lib/data";

export default function HowItWorksSection() {
  return (
    <section className="bg-slate-50 px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <AnimatedSectionTitle
          centered
          eyebrow="Nasıl Çalışır"
          title="Sadece 4 adımda çözüm"
          description="Acil çilingir sürecini olabildiğince basit, hızlı ve anlaşılır tutuyoruz."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.06, duration: 0.6 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-semibold text-white shadow-glow">
                {step.number}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}