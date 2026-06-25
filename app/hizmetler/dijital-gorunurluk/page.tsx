import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import DijitalGorunurlukContent from "./DijitalGorunurlukContent";

const BASE_URL = "https://ayturkkorkmaz.com.tr";

export const metadata: Metadata = {
  title: "Dijital Görünürlük Hizmeti | Online Varlık — Aleyna Aytürk Korkmaz",
  description:
    "Google Business Profile, sosyal medya, online itibar yönetimi ve dijital varlık güçlendirme. Antalya'da dijital görünürlük hizmeti.",
  alternates: {
    canonical: `${BASE_URL}/hizmetler/dijital-gorunurluk`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/hizmetler/dijital-gorunurluk`,
    siteName: "Aleyna Aytürk Korkmaz",
    title: "Dijital Görünürlük Hizmeti | Online Varlık",
    description:
      "Google Business Profile, sosyal medya ve online itibar yönetimi hizmeti.",
    locale: "tr_TR",
    alternateLocale: "en_US",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Visibility Management",
  name: "Dijital Görünürlük Hizmeti — Antalya",
  description:
    "Google Business Profile yönetimi, online itibar yönetimi, sosyal medya varlığı ve dizin kayıtları ile dijital görünürlük güçlendirme hizmeti.",
  provider: {
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#service`,
    name: "Aleyna Aytürk Korkmaz — Dijital Danışmanlık",
    url: BASE_URL,
  },
  areaServed: {
    "@type": "City",
    name: "Antalya",
    containedInPlace: {
      "@type": "Country",
      name: "Türkiye",
    },
  },
  url: `${BASE_URL}/hizmetler/dijital-gorunurluk`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dijital görünürlük neden önemli?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Müşterilerin büyük çoğunluğu bir hizmet veya ürün aramadan önce internet araştırması yapıyor. Dijital görünürlüğünüz zayıfsa potansiyel müşteriler sizi bulamaz ve rakiplerinize yönelir.",
      },
    },
    {
      "@type": "Question",
      name: "Google Business Profile neden önemli?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Business Profile, yerel aramalarda ve Google Haritalar'da görünmenizi sağlar. Doğru ve güncel profil bilgileri, müşteri yorumları ve fotoğraflar ile güvenilirliğinizi artırır ve daha fazla müşteriye ulaşırsınız.",
      },
    },
    {
      "@type": "Question",
      name: "Online itibar yönetimi neleri kapsar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online itibar yönetimi; Google ve sosyal medya yorumlarının takibi, olumsuz yorumlara profesyonel yanıt stratejisi, olumlu yorum teşviki ve marka algısının düzenli izlenmesini kapsar.",
      },
    },
  ],
};

export default function DijitalGorunurlukPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Navigation />
      <main>
        <DijitalGorunurlukContent />
      </main>
      <Footer />
    </>
  );
}
