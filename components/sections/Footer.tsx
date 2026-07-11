import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold">{siteConfig.name}</h3>
            <p className="mt-1 text-sm text-white/50">{siteConfig.owner}</p>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/65">
            7/24 acil çilingir, oto çilingir, kapı açma ve güvenlik çözümleri.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Sayfalar</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <Link href="/" className="hover:text-white">Ana Sayfa</Link>
            <Link href="/about" className="hover:text-white">Hakkımızda</Link>
            <Link href="/contact" className="hover:text-white">İletişim</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">İletişim</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <a href={siteConfig.phoneHref} className="hover:text-white">{siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>{siteConfig.address}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Sosyal</h4>
          <div className="mt-4 flex items-center gap-3">
            <Link href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <FaWhatsapp />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/45">
        © 2026 {siteConfig.name}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}