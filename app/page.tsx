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
      "@id": "https://ayturkkorkmaz.com.tr/#person",
      name: "Aleyna Aytürk Korkmaz",
      url: "https://ayturkkorkmaz.com.tr",
      email: "ayturkkorkmazz@gmail.com",
      jobTitle: "SEO, GEO & Dijital Çözüm Uzmanı",
      description:
        "Antalya'da SEO & GEO hizmetleri, CRM sistemleri, dijital klon, web sitesi geliştirme ve dijital görünürlük çözümleri sunan dijital uzman.",
      knowsAbout: [
        "SEO",
        "GEO",
        "Generative Engine Optimization",
        "CRM Systems",
        "HubSpot",
        "Salesforce",
        "Zoho CRM",
        "Digital Clone",
        "AI Chatbot",
        "Web Development",
        "Next.js",
        "Digital Visibility",
        "Google Business Profile",
        "Schema Markup",
      ],
      knowsLanguage: ["tr", "en"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Antalya",
        addressCountry: "TR",
      },
      sameAs: [
        "https://www.linkedin.com/in/aleynaayt%C3%BCrkkorkmaz",
      ],
    },
    /* ── ProfessionalService ── */
    {
      "@type": "ProfessionalService",
      "@id": "https://ayturkkorkmaz.com.tr/#service",
      name: "Aleyna Aytürk Korkmaz — SEO, GEO & Dijital Çözümler",
      url: "https://ayturkkorkmaz.com.tr",
      email: "ayturkkorkmazz@gmail.com",
      description:
        "Antalya'da SEO & GEO hizmetleri, CRM kurulum, dijital klon, web geliştirme ve dijital görünürlük çözümleri.",
      areaServed: {
        "@type": "City",
        name: "Antalya",
        containedInPlace: {
          "@type": "Country",
          name: "Turkey",
        },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Dijital Danışmanlık Hizmetleri",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO & GEO Hizmetleri",
              description:
                "Google ve yapay zeka arama motorlarında görünürlük optimizasyonu. Teknik SEO, yerel SEO ve GEO.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "CRM Sistemleri",
              description:
                "HubSpot, Salesforce, Zoho CRM kurulum, özelleştirme ve optimizasyonu.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dijital Klon",
              description:
                "Markanızın sesini ve değerlerini yansıtan yapay zeka destekli dijital temsilci oluşturma.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Kişisel Asistan",
              description:
                "AI destekli kişisel asistan kurulumu. Takvim yönetimi, e-posta takibi ve görev organizasyonu.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Sitesi Geliştirme",
              description:
                "Hızlı, modern, SEO/GEO uyumlu kurumsal web siteleri.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dijital Görünürlük",
              description:
                "Google Business Profile, online itibar yönetimi ve dijital varlık güçlendirme.",
            },
          },
        ],
      },
      provider: { "@id": "https://ayturkkorkmaz.com.tr/#person" },
    },
    /* ── WebSite ── */
    {
      "@type": "WebSite",
      "@id": "https://ayturkkorkmaz.com.tr/#website",
      url: "https://ayturkkorkmaz.com.tr",
      name: "Aleyna Aytürk Korkmaz",
      description: "SEO, GEO & Dijital Çözüm Uzmanı — Antalya",
      inLanguage: ["tr-TR", "en-US"],
      publisher: { "@id": "https://ayturkkorkmaz.com.tr/#person" },
    },
    /* ── LocalBusiness ── */
    {
      "@type": "LocalBusiness",
      "@id": "https://ayturkkorkmaz.com.tr/#localbusiness",
      name: "Aleyna Aytürk Korkmaz — Dijital Çözümler",
      description:
        "Antalya'da SEO, GEO, CRM, dijital klon, web geliştirme ve dijital görünürlük hizmetleri.",
      url: "https://ayturkkorkmaz.com.tr",
      email: "ayturkkorkmazz@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Antalya",
        addressRegion: "Antalya",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.8969,
        longitude: 30.7133,
      },
      areaServed: {
        "@type": "City",
        name: "Antalya",
      },
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
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
