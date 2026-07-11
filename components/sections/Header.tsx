"use client";

import Link from "next/link";
import { Menu, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { useState } from "react";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/#hizmetler", label: "Hizmetler" },
  { href: "/#neden-biz", label: "Neden Biz" },
  { href: "/#yorumlar", label: "Yorumlar" },
  { href: "/#sss", label: "SSS" },
  { href: "/contact", label: "İletişim" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-glow">
            <span className="text-sm font-bold">AÇ</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">{siteConfig.name}</p>
            <p className="text-xs text-slate-500">7/24 Acil Çilingir</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-600 transition-colors hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button  className="rounded-full px-5">
            <Link href={siteConfig.phoneHref} aria-label="Hemen ara" className="flex items-center gap-1">
              <PhoneCall className="h-4 w-4" />
              Hemen Ara
            </Link>
          </Button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
            <Button  className="mt-2 rounded-full">
              <Link href={siteConfig.phoneHref}>Hemen Ara</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}