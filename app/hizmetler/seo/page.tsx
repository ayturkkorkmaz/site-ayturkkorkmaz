import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import SeoContent from "./SeoContent";

const BASE_URL = "https://ayturkkorkmaz.com.tr";

export const metadata: Metadata = {
  title: "Antalya SEO Hizmeti | Google'da Üst Sıralar — Aleyna Aytürk Korkmaz",
  description:
    "Antalya'daki yerel işletmeler için teknik SEO, on-page optimizasyon, yerel SEO ve Google Business Profile yönetimi. Aleyna Aytürk Korkmaz SEO danışmanlığı.",
  alternates: {
    canonical: `${BASE_URL}/hizmetler/seo`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/hizmetler/seo`,
    siteName: "Aleyna Aytürk Korkmaz",
    title: "Antalya SEO Hizmeti | Google'da Üst Sıralar",
    description:
      "Antalya'daki yerel işletmeler için teknik SEO, on-page optimizasyon ve yerel SEO hizmeti.",
    locale: "tr_TR",
    alternateLocale: "en_US",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Search Engine Optimization",
  name: "SEO Hizmeti — Antalya",
  description:
    "Antalya'daki yerel işletmelerin Google'da üst sıralara çıkmasını sağlayan teknik SEO, on-page optimizasyon ve yerel SEO hizmeti.",
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
  url: `${BASE_URL}/hizmetler/seo`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Antalya'da SEO ajansı önerir misin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aleyna Aytürk Korkmaz olarak Antalya'daki yerel işletmelere özel SEO danışmanlığı sunuyorum. Büyük ajans maliyetleri olmadan, işletmenize odaklı ve şeffaf bir SEO süreci yürütüyorum.",
      },
    },
    {
      "@type": "Question",
      name: "Google'da üst sıralara nasıl çıkarım?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teknik SEO (site hızı, mobil uyumluluk, schema markup), kaliteli içerik optimizasyonu, yerel SEO (Google Business Profile, harita görünürlüğü) ve güvenilir backlink stratejisi ile Google'da üst sıralara çıkabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Yerel işletmem için SEO ne kadar sürede sonuç verir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yerel SEO genellikle ilk iyileştirmeleri 1-3 ay içinde göstermeye başlar. Kalıcı ve güçlü sıralamalar için 3-6 aylık sürekli çalışma önerilir. Sonuç, sektöre ve rekabet durumuna göre değişir.",
      },
    },
    {
      "@type": "Question",
      name: "SEO ile GEO arasındaki fark nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO, Google arama sonuçlarında üst sıralarda yer almayı hedefler. GEO ise ChatGPT, Gemini, Perplexity gibi yapay zeka motorlarının cevaplarında markanızın anılmasını optimize eder. İkisi birbirini tamamlar; detaylı bilgi için GEO hizmet sayfamıza göz atabilirsiniz.",
      },
    },
  ],
};

export default function SeoPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Navigation />
      <main>
        <SeoContent />
      </main>
      <Footer />
    </>
  );
}
