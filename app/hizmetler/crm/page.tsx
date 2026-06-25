import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import CrmContent from "./CrmContent";

const BASE_URL = "https://ayturkkorkmaz.com.tr";

export const metadata: Metadata = {
  title: "CRM Sistemleri | HubSpot, Salesforce, Zoho — Aleyna Aytürk Korkmaz",
  description:
    "Antalya'da CRM kurulum ve yönetim hizmeti. HubSpot, Salesforce, Zoho CRM özelleştirme ve optimizasyonu.",
  alternates: {
    canonical: `${BASE_URL}/hizmetler/crm`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/hizmetler/crm`,
    siteName: "Aleyna Aytürk Korkmaz",
    title: "CRM Sistemleri | HubSpot, Salesforce, Zoho",
    description:
      "HubSpot, Salesforce, Zoho CRM kurulum, özelleştirme ve optimizasyon hizmeti.",
    locale: "tr_TR",
    alternateLocale: "en_US",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "CRM Implementation & Management",
  name: "CRM Sistemleri — Antalya",
  description:
    "HubSpot, Salesforce ve Zoho CRM kurulum, özelleştirme, veri aktarımı ve ekip eğitimi hizmeti.",
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
  url: `${BASE_URL}/hizmetler/crm`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "CRM sistemi küçük işletmeler için gerekli mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, küçük işletmeler de CRM'den büyük fayda sağlar. Müşteri bilgilerini merkezi bir yerde toplamak, takip süreçlerini otomatikleştirmek ve satış fırsatlarını kaçırmamak için CRM şarttır.",
      },
    },
    {
      "@type": "Question",
      name: "Hangi CRM platformunu tercih etmeliyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İhtiyaçlarınıza göre değişir. HubSpot ücretsiz başlangıç planı ile küçük ekipler için idealdir. Salesforce büyük ve karmaşık süreçler için uygundur. Zoho ise maliyet-performans dengesi arayan işletmeler için önerilir.",
      },
    },
    {
      "@type": "Question",
      name: "CRM kurulumu ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Temel CRM kurulumu 1-2 hafta içinde tamamlanabilir. Özelleştirme, veri aktarımı ve ekip eğitimi dahil kapsamlı bir kurulum ise 4-8 hafta sürebilir.",
      },
    },
  ],
};

export default function CrmPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Navigation />
      <main>
        <CrmContent />
      </main>
      <Footer />
    </>
  );
}
