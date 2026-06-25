import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import KisiselAsistanContent from "./KisiselAsistanContent";

const BASE_URL = "https://ayturkkorkmaz.com.tr";

export const metadata: Metadata = {
  title: "Kişisel Asistan Hizmeti | AI Destekli İş Yönetimi — Aleyna Aytürk Korkmaz",
  description:
    "Yapay zeka destekli kişisel asistan ile takvim yönetimi, e-posta takibi, görev organizasyonu ve hatırlatmalar. Antalya'da AI asistan hizmeti.",
  alternates: {
    canonical: `${BASE_URL}/hizmetler/kisisel-asistan`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/hizmetler/kisisel-asistan`,
    siteName: "Aleyna Aytürk Korkmaz",
    title: "Kişisel Asistan Hizmeti | AI Destekli İş Yönetimi",
    description:
      "Yapay zeka destekli kişisel asistan ile günlük iş yükünüzü hafifleten akıllı çözümler.",
    locale: "tr_TR",
    alternateLocale: "en_US",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Personal Assistant",
  name: "Kişisel Asistan Hizmeti",
  description:
    "Yapay zeka destekli kişisel asistan kurulumu. Takvim yönetimi, e-posta takibi, görev organizasyonu ve iş akışı otomasyonu.",
  provider: {
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#service`,
    name: "Aleyna Aytürk Korkmaz — Dijital Çözümler",
    url: BASE_URL,
  },
  areaServed: {
    "@type": "City",
    name: "Antalya",
    containedInPlace: { "@type": "Country", name: "Türkiye" },
  },
  url: `${BASE_URL}/hizmetler/kisisel-asistan`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "AI kişisel asistan ne iş yapar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI kişisel asistan takvim yönetimi, e-posta takibi ve yanıtlama, görev organizasyonu, hatırlatmalar ve günlük iş akışı otomasyonu gibi rutin işlerinizi yapay zeka ile otomatikleştirir.",
      },
    },
    {
      "@type": "Question",
      name: "Kişisel asistan ile dijital klon arasındaki fark nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kişisel asistan günlük iş görevlerinizi yönetir (takvim, e-posta, görevler). Dijital klon ise markanızın sesini ve iletişim tarzını yansıtan, müşterilerinizle sizin adınıza iletişim kuran bir AI temsilidir.",
      },
    },
    {
      "@type": "Question",
      name: "AI asistan kurulumu ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Temel bir AI kişisel asistan 1-2 hafta içinde kurulabilir. İhtiyaçlarınıza göre özelleştirme ve entegrasyonlar dahil kapsamlı kurulum 2-4 hafta sürebilir.",
      },
    },
  ],
};

export default function KisiselAsistanPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Navigation />
      <main>
        <KisiselAsistanContent />
      </main>
      <Footer />
    </>
  );
}
