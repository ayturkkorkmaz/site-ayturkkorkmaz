import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import DijitalKlonContent from "./DijitalKlonContent";

const BASE_URL = "https://ayturkkorkmaz.com.tr";

export const metadata: Metadata = {
  title: "Dijital Klon Hizmeti | AI Asistan — Aleyna Aytürk Korkmaz",
  description:
    "İşletmeniz için yapay zeka destekli dijital klon ve asistan oluşturma. 7/24 müşteri iletişimi, otomatik yanıtlar. Antalya.",
  alternates: {
    canonical: `${BASE_URL}/hizmetler/dijital-klon`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/hizmetler/dijital-klon`,
    siteName: "Aleyna Aytürk Korkmaz",
    title: "Dijital Klon Hizmeti | AI Asistan",
    description:
      "Yapay zeka destekli dijital klon ve asistan oluşturma. 7/24 müşteri iletişimi.",
    locale: "tr_TR",
    alternateLocale: "en_US",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Digital Clone & Assistant",
  name: "Dijital Klon Hizmeti — Antalya",
  description:
    "İşletmeler için yapay zeka destekli dijital klon ve asistan oluşturma. 7/24 müşteri iletişimi ve otomatik yanıt sistemi.",
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
  url: `${BASE_URL}/hizmetler/dijital-klon`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dijital klon nedir ve nasıl çalışır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dijital klon, işletmenizin bilgi birikimini, üslubunu ve hizmet anlayışını öğrenen yapay zeka destekli bir asıstandır. Web sitenizde, WhatsApp'ta veya sosyal medyada 7/24 müşterilerinizle etkileşime geçer.",
      },
    },
    {
      "@type": "Question",
      name: "Dijital klon gerçek bir insanın yerini alır mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır, dijital klon insan ekibinizin yerini almaz, onları destekler. Sık sorulan sorulara anında yanıt verir, randevu alır ve karmaşık konuları insan ekibinize yönlendirir.",
      },
    },
    {
      "@type": "Question",
      name: "Dijital klon kurulumu ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Temel bir dijital klon 1-2 hafta içinde kurulabilir. İşletmenize özel eğitim ve entegrasyon dahil kapsamlı kurulum 3-4 hafta sürebilir.",
      },
    },
  ],
};

export default function DijitalKlonPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Navigation />
      <main>
        <DijitalKlonContent />
      </main>
      <Footer />
    </>
  );
}
