"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionContextType = {
  value: string | null;
  setValue: (value: string | null) => void;
};

const AccordionContext = React.createContext<AccordionContextType | null>(null);

export function Accordion({
  children,
  className
}: {
  children: React.ReactNode;
  type: "single";
  collapsible?: boolean;
  className?: string;
}) {
  const [value, setValue] = React.useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ value, setValue }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  children,
  value,
  className
}: {
  children: React.ReactNode;
  value: string;
  className?: string;
}) {
  return (
    <div className={cn("border-b border-slate-200", className)} data-value={value}>
      {children}
    </div>
  );
}

export function AccordionTrigger({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(AccordionContext);

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-medium text-slate-900 transition-colors hover:text-blue-600",
        className
      )}
      onClick={(e) => {
        const parent = e.currentTarget.parentElement as HTMLElement | null;
        const value = parent?.getAttribute("data-value");
        if (!ctx || !value) return;
        ctx.setValue(ctx.value === value ? null : value);
      }}
    >
      <span>{children}</span>
      <ChevronDown className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200" />
    </button>
  );
}

export function AccordionContent({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(AccordionContext);
  return (
    <div
      className={cn(
        "grid overflow-hidden text-sm text-slate-600 transition-all duration-300",
        className,
        ctx?.value ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
      )}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}