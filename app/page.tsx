import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowIWork from "@/components/HowIWork";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    /* ── Person ── */
    {
      "@type": "Person",
      "@id": "https://aleynaayturkkorkmaz.com/#person",
      name: "Aleyna Aytürk Korkmaz",
      url: "https://aleynaayturkkorkmaz.com",
      email: "ayturkkorkmazz@gmail.com",
      jobTitle: "CRM Danışmanı & Dijital Çözüm Uzmanı",
      description:
        "CRM kurulum & yönetim, web sitesi geliştirme ve otomasyon entegrasyonu konularında uzaktan, global hizmet sunan dijital danışman.",
      knowsAbout: [
        "CRM Systems",
        "HubSpot",
        "Salesforce",
        "Zoho CRM",
        "Digital Transformation",
        "Workflow Automation",
        "Zapier",
        "Make (Integromat)",
        "Web Development",
        "Next.js",
        "API Integration",
      ],
      knowsLanguage: ["tr", "en"],
      sameAs: [],
    },
    /* ── ProfessionalService ── */
    {
      "@type": "ProfessionalService",
      "@id": "https://aleynaayturkkorkmaz.com/#service",
      name: "Aleyna Aytürk Korkmaz — Dijital Danışmanlık",
      url: "https://aleynaayturkkorkmaz.com",
      email: "ayturkkorkmazz@gmail.com",
      description:
        "CRM kurulum & yönetim, web sitesi geliştirme, otomasyon ve API entegrasyonu, dijital dönüşüm danışmanlığı.",
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Dijital Danışmanlık Hizmetleri",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "CRM Kurulum & Yönetim",
              description:
                "HubSpot, Salesforce, Zoho ve diğer CRM sistemlerinin kurulum, özelleştirme ve optimizasyonu.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Sitesi Tasarım & Geliştirme",
              description:
                "Kurumsal web siteleri ve landing page'ler. Hızlı, mobil uyumlu ve SEO-ready.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Otomasyon & Entegrasyon",
              description:
                "Zapier ve Make ile iş akışı otomasyonu. Sistemler arası API entegrasyonları.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dijital Danışmanlık",
              description:
                "Dijital dönüşüm stratejisi, süreç analizi, teknoloji seçimi ve roadmap oluşturma.",
            },
          },
        ],
      },
      provider: { "@id": "https://aleynaayturkkorkmaz.com/#person" },
    },
    /* ── WebSite ── */
    {
      "@type": "WebSite",
      "@id": "https://aleynaayturkkorkmaz.com/#website",
      url: "https://aleynaayturkkorkmaz.com",
      name: "Aleyna Aytürk Korkmaz",
      description: "CRM Danışmanı & Dijital Çözüm Uzmanı",
      inLanguage: ["tr-TR", "en-US"],
      publisher: { "@id": "https://aleynaayturkkorkmaz.com/#person" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <HowIWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
