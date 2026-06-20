import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import AiOtomasyonContent from "./AiOtomasyonContent";

const BASE_URL = "https://ayturkkorkmaz.com.tr";

export const metadata: Metadata = {
  title: "AI Otomasyon & n8n | İş Akışı Otomasyonu — Aleyna Aytürk Korkmaz",
  description:
    "n8n tabanlı iş akışı otomasyonu, AI içerik otomasyonu ve CRM entegrasyonları. Tekrarlayan işleri yapay zeka ile otomatikleştirin.",
  alternates: {
    canonical: `${BASE_URL}/hizmetler/ai-otomasyon`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/hizmetler/ai-otomasyon`,
    siteName: "Aleyna Aytürk Korkmaz",
    title: "AI Otomasyon & n8n | İş Akışı Otomasyonu",
    description:
      "n8n tabanlı iş akışı otomasyonu, AI içerik otomasyonu ve CRM entegrasyonları.",
    locale: "tr_TR",
    alternateLocale: "en_US",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Automation",
  name: "AI Otomasyon",
  description:
    "İşletmelerin tekrarlayan işlerini yapay zeka ve n8n tabanlı iş akışlarıyla otomatikleştiren danışmanlık hizmeti.",
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
  url: `${BASE_URL}/hizmetler/ai-otomasyon`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "İşletmem için hangi işleri otomatikleştirebilirim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form yanıtları, e-posta bildirimleri, sosyal medya paylaşımları, müşteri takibi, fatura hatırlatmaları, CRM veri girişi ve raporlama gibi tekrarlayan işlerin çoğu otomatikleştirilebilir.",
      },
    },
    {
      "@type": "Question",
      name: "n8n nedir, ne için kullanılır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "n8n, açık kaynaklı bir iş akışı otomasyon platformudur. Farklı uygulamaları birbirine bağlayarak tekrarlayan görevleri otomatik hale getirir. Zapier ve Make'e alternatif olarak kendi sunucunuzda çalışabilir, böylece verileriniz sizde kalır.",
      },
    },
    {
      "@type": "Question",
      name: "Yapay zeka otomasyonu pahalı mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI otomasyon, işletme büyüklüğüne ve ihtiyaçlara göre ölçeklenebilir. n8n gibi açık kaynak araçlar sayesinde altyapı maliyeti düşük tutulabilir. Otomasyon sayesinde kazanılan zaman ve azaltılan hata oranı, yatırımı kısa sürede geri kazandırır.",
      },
    },
  ],
};

export default function AiOtomasyonPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Navigation />
      <main>
        <AiOtomasyonContent />
      </main>
      <Footer />
    </>
  );
}
