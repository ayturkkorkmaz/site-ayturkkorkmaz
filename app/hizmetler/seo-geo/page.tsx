import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import SeoGeoContent from "./SeoGeoContent";

const BASE_URL = "https://ayturkkorkmaz.com.tr";

export const metadata: Metadata = {
  title: "SEO & GEO Hizmetleri | Antalya — Aleyna Aytürk Korkmaz",
  description:
    "Antalya'da SEO ve GEO hizmetleri. Google'da üst sıralara çıkın, ChatGPT ve Gemini'de görünür olun. Aleyna Aytürk Korkmaz.",
  alternates: {
    canonical: `${BASE_URL}/hizmetler/seo-geo`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/hizmetler/seo-geo`,
    siteName: "Aleyna Aytürk Korkmaz",
    title: "SEO & GEO Hizmetleri | Antalya",
    description:
      "Google'da üst sıralara çıkın, ChatGPT ve Gemini'de görünür olun.",
    locale: "tr_TR",
    alternateLocale: "en_US",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "SEO & GEO Optimization",
  name: "SEO & GEO Hizmetleri — Antalya",
  description:
    "Google arama sonuçlarında üst sıralara çıkma ve yapay zeka motorlarında (ChatGPT, Gemini, Perplexity) görünür olma hizmeti.",
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
  url: `${BASE_URL}/hizmetler/seo-geo`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "SEO ve GEO arasındaki fark nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO, Google gibi arama motorlarında üst sıralarda yer almayı hedefler. GEO ise ChatGPT, Gemini ve Perplexity gibi yapay zeka motorlarının cevaplarında markanızın anılmasını sağlar. İkisi birbirini tamamlayan stratejilerdir.",
      },
    },
    {
      "@type": "Question",
      name: "SEO ve GEO'yu birlikte uygulamak neden önemli?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kullanıcılar artık hem Google'da hem de AI asistanlarda arama yapıyor. Sadece SEO ile AI cevaplarında görünmezsiniz; sadece GEO ile Google sıralamalarınız etkilenmez. İkisini birlikte uygulayarak tüm dijital kanalları kapsarsınız.",
      },
    },
    {
      "@type": "Question",
      name: "Google'da üst sıralara çıkmak ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yerel SEO genellikle 1-3 ay içinde ilk iyileştirmeleri gösterir. Kalıcı sonuçlar için 3-6 aylık sürekli çalışma önerilir. GEO sonuçları ise içerik optimizasyonu sonrası daha hızlı yansıyabilir.",
      },
    },
    {
      "@type": "Question",
      name: "Yapay zeka motorlarında nasıl görünür olurum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO stratejisi ile markanızın otoritesini, yapılandırılmış verinizi ve içerik kalitesini optimize ediyoruz. Böylece ChatGPT, Gemini ve Perplexity sizi kaynak olarak gösterir.",
      },
    },
  ],
};

export default function SeoGeoPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Navigation />
      <main>
        <SeoGeoContent />
      </main>
      <Footer />
    </>
  );
}
