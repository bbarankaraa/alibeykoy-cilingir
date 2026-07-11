"use client";

import AnimatedSectionTitle from "@/components/AnimatedSectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/lib/data";

export default function FaqSection() {
  return (
    <section id="sss" className="bg-slate-50 px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <AnimatedSectionTitle
          centered
          eyebrow="SSS"
          title="Sık sorulan sorular"
          description="Karar vermeden önce en çok sorulan soruların yanıtlarını inceleyin."
        />

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm md:p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-slate-200">
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}