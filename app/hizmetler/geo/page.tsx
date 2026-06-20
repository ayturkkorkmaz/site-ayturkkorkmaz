import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import GeoContent from "./GeoContent";

const BASE_URL = "https://ayturkkorkmaz.com.tr";

export const metadata: Metadata = {
  title: "GEO Hizmeti Antalya | Yapay Zeka Aramada Görünürlük — Aleyna Aytürk Korkmaz",
  description:
    "GEO (Generative Engine Optimization) ile markanızı ChatGPT, Gemini ve Perplexity cevaplarında görünür kılın. Antalya ve Türkiye için GEO danışmanlığı.",
  alternates: {
    canonical: `${BASE_URL}/hizmetler/geo`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/hizmetler/geo`,
    siteName: "Aleyna Aytürk Korkmaz",
    title: "GEO Hizmeti Antalya | Yapay Zeka Aramada Görünürlük",
    description:
      "GEO (Generative Engine Optimization) ile markanızı ChatGPT, Gemini ve Perplexity cevaplarında görünür kılın.",
    locale: "tr_TR",
    alternateLocale: "en_US",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Generative Engine Optimization",
  name: "GEO — Generative Engine Optimization",
  description:
    "Markanızın ChatGPT, Gemini, Perplexity ve Google AI Overviews gibi yapay zeka cevaplarında görünür ve alıntılanır olmasını sağlayan optimizasyon hizmeti.",
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
  url: `${BASE_URL}/hizmetler/geo`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "GEO nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO (Generative Engine Optimization), markanızın ChatGPT, Gemini, Perplexity gibi yapay zeka motorlarının cevaplarında görünür ve alıntılanır olmasını sağlayan optimizasyon disiplinidir.",
      },
    },
    {
      "@type": "Question",
      name: "İşletmemi ChatGPT'de nasıl görünür yaparım?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Schema markup, cevap-biçimli içerik, üçüncü taraf kaynaklarda atıf oluşturma ve yapılandırılmış veri optimizasyonu ile işletmeniz yapay zeka cevaplarında alıntılanabilir hale gelir.",
      },
    },
    {
      "@type": "Question",
      name: "GEO ile SEO arasındaki fark nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO, Google arama sonuçlarında sıralama hedefler. GEO ise yapay zeka motorlarının (ChatGPT, Gemini, Perplexity) ürettiği cevaplarda markanızın anılmasını ve alıntılanmasını optimize eder. İkisi birlikte çalışır.",
      },
    },
    {
      "@type": "Question",
      name: "Antalya'da GEO hizmeti veriyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Aleyna Aytürk Korkmaz olarak Antalya ve tüm Türkiye'deki işletmelere uzaktan GEO danışmanlık hizmeti sunuyorum.",
      },
    },
  ],
};

export default function GeoPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Navigation />
      <main>
        <GeoContent />
      </main>
      <Footer />
    </>
  );
}
