import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import WebGelistirmeContent from "./WebGelistirmeContent";

const BASE_URL = "https://ayturkkorkmaz.com.tr";

export const metadata: Metadata = {
  title: "Antalya Web Sitesi Geliştirme | KOBİ Dostu — Aleyna Aytürk Korkmaz",
  description:
    "Küçük işletmeler için uygun fiyatlı, hızlı ve AI aramada görünür modern web siteleri. Next.js, SEO ve GEO uyumlu geliştirme.",
  alternates: {
    canonical: `${BASE_URL}/hizmetler/web-gelistirme`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/hizmetler/web-gelistirme`,
    siteName: "Aleyna Aytürk Korkmaz",
    title: "Antalya Web Sitesi Geliştirme | KOBİ Dostu",
    description:
      "Küçük işletmeler için uygun fiyatlı, hızlı ve AI aramada görünür modern web siteleri.",
    locale: "tr_TR",
    alternateLocale: "en_US",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Development",
  name: "Web Sitesi Geliştirme",
  description:
    "Küçük işletmeler için uygun fiyatlı, hızlı ve yapay zekanın okuyabildiği modern web siteleri geliştirme hizmeti.",
  provider: {
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#service`,
    name: "Aleyna Aytürk Korkmaz — Dijital Danışmanlık",
    url: BASE_URL,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Antalya",
      containedInPlace: { "@type": "Country", name: "Türkiye" },
    },
    {
      "@type": "Country",
      name: "Türkiye",
    },
  ],
  url: `${BASE_URL}/hizmetler/web-gelistirme`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Küçük işletmem için uygun fiyatlı web sitesi yapıyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Küçük işletmelerin bütçesine uygun, gereksiz karmaşıklık içermeyen, hızlı ve profesyonel web siteleri geliştiriyorum. Her proje ihtiyaca göre fiyatlandırılır.",
      },
    },
    {
      "@type": "Question",
      name: "Web sitem AI aramada çıkacak şekilde mi yapılıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Geliştirdiğim siteler schema markup, temiz HTML yapısı ve cevap-biçimli içerik ile hem Google hem de ChatGPT, Gemini, Perplexity gibi AI arama motorlarında görünür olacak şekilde optimize ediliyor.",
      },
    },
    {
      "@type": "Question",
      name: "Web sitesi ne kadar sürede hazır olur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Projenin kapsamına bağlı olarak basit bir kurumsal site genellikle 2-4 hafta içinde tamamlanır. Süreç; ihtiyaç analizi, tasarım onayı, geliştirme ve yayın aşamalarını içerir.",
      },
    },
  ],
};

export default function WebGelistirmePage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Navigation />
      <main>
        <WebGelistirmeContent />
      </main>
      <Footer />
    </>
  );
}
