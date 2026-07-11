"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
          variant === "default" &&
            "bg-blue-600 text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] hover:bg-blue-700 hover:shadow-[0_12px_36px_rgba(37,99,235,0.32)]",
          variant === "outline" &&
            "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
          variant === "ghost" && "bg-transparent text-slate-900 hover:bg-slate-100",
          variant === "secondary" && "bg-slate-900 text-white hover:bg-slate-800",
          size === "default" && "h-11 px-5 py-2.5",
          size === "sm" && "h-9 px-4",
          size === "lg" && "h-12 px-6 text-base",
          size === "icon" && "h-11 w-11",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };