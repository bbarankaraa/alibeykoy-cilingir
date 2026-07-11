import {
  AlarmClock,
  CarFront,
  DoorOpen,
  ShieldCheck,
  KeyRound,
  Building2,
  House,
  Vault,
  Clock3,
  BadgeCheck,
  TimerReset,
  Wrench,
  BadgeEuro,
  ShieldAlert,
  ScanFace,
  Truck
} from "lucide-react";

export const stats = [
  { value: 10, suffix: "+", label: "Yıllık Deneyim" },
  { value: 5000, suffix: "+", label: "Mutlu Müşteri" },
  { value: 7, suffix: "/24", label: "Acil Hizmet" },
  { value: 15, suffix: " Dakika", label: "Ortalama Varış Süresi" }
] as const;

export const services = [
  {
    title: "Acil Çilingir",
    icon: AlarmClock,
    desc: "Kapıda kaldığınızda hızlı ve 7/24 müdahale."
  },
  {
    title: "Araç Kapısı Açma",
    icon: CarFront,
    desc: "Araç kapısı açma ve içeride kalan anahtar çözümleri."
  },
  {
    title: "Çelik Kapı Açma",
    icon: DoorOpen,
    desc: "Çelik kapılarda hasarsız açma işlemleri."
  },
  {
    title: "Kasa Açma",
    icon: Vault,
    desc: "Kilitli kasaların güvenli şekilde açılması."
  },
  {
    title: "Kilit Değişimi",
    icon: KeyRound,
    desc: "Kilit, silindir ve mekanizma değişimi."
  },
  {
    title: "Güvenlik Kilit Sistemleri",
    icon: ShieldCheck,
    desc: "Ekstra güvenlik sağlayan kilit çözümleri."
  },
  {
    title: "İş Yeri Çilingir Hizmeti",
    icon: Building2,
    desc: "Ofis ve ticari alanlara özel çilingir hizmetleri."
  },
  {
    title: "Ev Kapısı Açma",
    icon: House,
    desc: "Ev ve apartman kapılarında acil çilingir desteği."
  }
] as const;

export const reasons = [
  {
    title: "10 Yıllık Deneyim",
    icon: BadgeCheck,
    desc: "Sahada on yıllık tecrübe ve binlerce başarılı işlem."
  },
  {
    title: "Hızlı Ulaşım",
    icon: Truck,
    desc: "Eyüpsultan ve çevresine kısa sürede ulaşım."
  },
  {
    title: "Uygun Fiyat",
    icon: BadgeEuro,
    desc: "Şeffaf ve ekonomik fiyat politikası."
  },
  {
    title: "Profesyonel Hizmet",
    icon: ShieldAlert,
    desc: "Güvenilir ve kaliteli çilingir hizmeti."
  },
  {
    title: "7/24 Hizmet",
    icon: Clock3,
    desc: "Gece gündüz kesintisiz destek."
  },
  {
    title: "Modern Ekipman",
    icon: Wrench,
    desc: "Hasarsız açma için gelişmiş ekipman kullanımı."
  },
  {
    title: "Hasarsız Açma",
    icon: ScanFace,
    desc: "Mümkün olduğunca zarar vermeden işlem yapılır."
  },
  {
    title: "Uzman Çilingir",
    icon: TimerReset,
    desc: "Doğru tekniklerle hızlı ve güvenli çözüm."
  }
] as const;

export const steps = [
  {
    number: "1",
    title: "Bizi Arayın",
    desc: "Sorununuzu dinleyelim ve en uygun çözümü belirleyelim."
  },
  {
    number: "2",
    title: "Konumunuzu Paylaşın",
    desc: "Size en yakın ekibi yönlendirelim."
  },
  {
    number: "3",
    title: "Ekibimiz Gelsin",
    desc: "Profesyonel ekibimiz en kısa sürede adresinize ulaşır."
  },
  {
    number: "4",
    title: "Sorun Çözülsün",
    desc: "İşlem güvenli ve hasarsız şekilde tamamlanır."
  }
] as const;

export const reviews = [
  {
    name: "Mehmet K.",
    text: "Gece yarısı kapıda kaldım, 20 dakika içinde geldiler. Çok profesyonel ve hızlıydı.",
    rating: 5
  },
  {
    name: "Ayşe T.",
    text: "Kilit değişimi yaptırdım. Temiz işçilik, uygun fiyat ve güler yüzlü hizmet.",
    rating: 5
  },
  {
    name: "Mustafa A.",
    text: "Aracımın kapısı açıldı, hiçbir çizik olmadan teslim ettiler. Tavsiye ederim.",
    rating: 5
  },
  {
    name: "Elif S.",
    text: "Ofis kapısı için çağırdık. Çok kısa sürede çözüm sundular.",
    rating: 5
  },
  {
    name: "Hakan D.",
    text: "Ev kapısı açma konusunda gerçekten uzmanlar.",
    rating: 5
  },
  {
    name: "Zeynep Y.",
    text: "WhatsApp'tan yazdım, çok hızlı dönüş yaptılar.",
    rating: 5
  },
  {
    name: "Burak T.",
    text: "Kasa açma işlemi için çağırdık, işlerini çok iyi biliyorlar.",
    rating: 5
  },
  {
    name: "Ceren P.",
    text: "Fiyat ve hizmet dengesi gerçekten çok iyi.",
    rating: 5
  },
  {
    name: "Ali R.",
    text: "Alibeyköy'de en güvenilir çilingirlerden biri.",
    rating: 5
  },
  {
    name: "Fatma N.",
    text: "Gece de hizmet vermeleri büyük avantaj.",
    rating: 5
  }
] as const;

export const faqItems = [
  {
    q: "Ne kadar sürede geliyorsunuz?",
    a: "Konuma bağlı olarak çoğu durumda 15-30 dakika içerisinde adresinize ulaşıyoruz."
  },
  {
    q: "Gece hizmet veriyor musunuz?",
    a: "Evet. Haftanın 7 günü, günün 24 saati acil çilingir hizmeti sunuyoruz."
  },
  {
    q: "Her marka aracı açabiliyor musunuz?",
    a: "Birçok araç modeli için profesyonel araç kapısı açma hizmeti veriyoruz. Detaylı bilgi için bizi arayabilirsiniz."
  },
  {
    q: "Kasa açma hizmetiniz var mı?",
    a: "Evet. Uygun durumlarda profesyonel kasa açma hizmeti sağlıyoruz."
  },
  {
    q: "Fiyatlar nasıl belirleniyor?",
    a: "İşlem türü ve bulunduğunuz konuma göre net fiyat bilgisi telefon üzerinden verilmektedir."
  },
  {
    q: "Kilit değişimi yapıyor musunuz?",
    a: "Evet. Her marka kilit ve silindir değişimi ile güvenlik yükseltme hizmeti sunuyoruz."
  }
] as const;

export const coverageAreas = [
  "Eyüpsultan",
  "Alibeyköy",
  "Gaziosmanpaşa",
  "Kağıthane",
  "Sultangazi",
  "Yakın Bölgeler"
] as const;

export const trustPills = [
  "Hızlı Servis",
  "7/24 Hizmet",
  "Hasarsız Açma",
  "Modern Ekipman"
] as const;