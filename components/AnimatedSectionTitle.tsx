"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export default function AnimatedSectionTitle({
  eyebrow,
  title,
  description,
  centered,
  className
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className={cn(centered && "text-center", className)}
    >
      {eyebrow && (
        <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-medium tracking-[0.22em] text-slate-500 shadow-sm backdrop-blur">
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-sm  leading-7 text-slate-600 md:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}