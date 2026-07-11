"use client";

import AnimatedSectionTitle from "@/components/AnimatedSectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section id="yorumlar" className="bg-white px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <AnimatedSectionTitle
          centered
          eyebrow="Yorumlar"
          title="Müşterilerimizin deneyimleri"
          description="Gerçek kullanıcı deneyimi, acil servis hizmetinde en güçlü güven unsurudur."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.04, duration: 0.5 }}
            >
              <Card className="h-full rounded-[2rem] border-slate-200 bg-slate-50 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{review.text}</p>
                  <p className="mt-5 font-semibold text-slate-950">{review.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}