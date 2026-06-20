export interface BlogSection {
  heading: string;
  body: string;
}

export interface BlogPostData {
  slug: string;
  date: string;
  ctaLink: string;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  sections: {
    tr: BlogSection[];
    en: BlogSection[];
  };
}

export const blogPosts: BlogPostData[] = [
  {
    slug: "geo-nedir",
    date: "2026-06-15",
    ctaLink: "/hizmetler/geo",
    title: {
      tr: "GEO Nedir? Generative Engine Optimization Rehberi",
      en: "What Is GEO? A Guide to Generative Engine Optimization",
    },
    description: {
      tr: "GEO (Generative Engine Optimization), markanızın ChatGPT, Gemini ve Perplexity gibi yapay zeka motorlarında görünür olmasını sağlayan optimizasyon disiplinidir.",
      en: "GEO (Generative Engine Optimization) is the optimization discipline that makes your brand visible in AI engines like ChatGPT, Gemini, and Perplexity.",
    },
    sections: {
      tr: [
        {
          heading: "GEO nedir?",
          body: "[İÇERİK: GEO tanımı, yapay zeka arama motorlarının çalışma mantığı, neden önemli olduğu]",
        },
        {
          heading: "GEO ile SEO arasındaki fark",
          body: "[İÇERİK: SEO vs GEO karşılaştırması, birbirini nasıl tamamladığı]",
        },
        {
          heading: "GEO nasıl uygulanır?",
          body: "[İÇERİK: schema markup, cevap-biçimli içerik, citation stratejisi adımları]",
        },
        {
          heading: "Türkiye'de GEO",
          body: "[İÇERİK: Türkiye pazarında GEO'nun durumu, yerel işletmeler için fırsatlar]",
        },
      ],
      en: [
        {
          heading: "What is GEO?",
          body: "[CONTENT: GEO definition, how AI search engines work, why it matters]",
        },
        {
          heading: "GEO vs SEO",
          body: "[CONTENT: SEO vs GEO comparison, how they complement each other]",
        },
        {
          heading: "How to implement GEO",
          body: "[CONTENT: schema markup, answer-format content, citation strategy steps]",
        },
        {
          heading: "GEO in Turkey",
          body: "[CONTENT: GEO landscape in Turkey, opportunities for local businesses]",
        },
      ],
    },
  },
  {
    slug: "isletmenizi-chatgptde-gorunur-yapma",
    date: "2026-06-10",
    ctaLink: "/hizmetler/geo",
    title: {
      tr: "İşletmenizi ChatGPT ve Gemini'de Nasıl Görünür Yaparsınız?",
      en: "How to Make Your Business Visible on ChatGPT and Gemini",
    },
    description: {
      tr: "İşletmenizin ChatGPT, Gemini ve Perplexity cevaplarında anılması için yapmanız gereken adımlar.",
      en: "Steps to get your business mentioned in ChatGPT, Gemini, and Perplexity answers.",
    },
    sections: {
      tr: [
        {
          heading: "AI motorları içeriği nasıl seçiyor?",
          body: "[İÇERİK: yapay zeka motorlarının kaynak seçim kriterleri, güven sinyalleri]",
        },
        {
          heading: "Yapılandırılmış veri ve schema markup",
          body: "[İÇERİK: JSON-LD kullanımı, hangi schema tipleri işe yarıyor]",
        },
        {
          heading: "Cevap-biçimli içerik oluşturma",
          body: "[İÇERİK: AI'ın alıntılayabileceği formatta içerik yazma teknikleri]",
        },
        {
          heading: "Üçüncü taraf citation'lar",
          body: "[İÇERİK: güvenilir kaynaklarda anılma stratejileri, dizin ve referans siteleri]",
        },
      ],
      en: [
        {
          heading: "How do AI engines choose content?",
          body: "[CONTENT: AI engine source selection criteria, trust signals]",
        },
        {
          heading: "Structured data and schema markup",
          body: "[CONTENT: JSON-LD usage, which schema types work]",
        },
        {
          heading: "Creating answer-format content",
          body: "[CONTENT: techniques for writing content that AI can quote]",
        },
        {
          heading: "Third-party citations",
          body: "[CONTENT: strategies for being mentioned on trusted sources, directories]",
        },
      ],
    },
  },
  {
    slug: "antalyada-seo-ajansi-nasil-secilir",
    date: "2026-06-05",
    ctaLink: "/hizmetler/seo",
    title: {
      tr: "Antalya'da SEO Ajansı Nasıl Seçilir?",
      en: "How to Choose an SEO Agency in Antalya",
    },
    description: {
      tr: "Antalya'da SEO ajansı seçerken dikkat etmeniz gereken kriterler ve doğru soruların rehberi.",
      en: "A guide to the criteria and right questions when choosing an SEO agency in Antalya.",
    },
    sections: {
      tr: [
        {
          heading: "SEO ajansı seçerken nelere dikkat etmeli?",
          body: "[İÇERİK: şeffaflık, referanslar, raporlama, garanti iddiaları konusunda uyarılar]",
        },
        {
          heading: "Yerel SEO neden farklı?",
          body: "[İÇERİK: yerel SEO'nun ulusal SEO'dan farkları, Google Business Profile önemi]",
        },
        {
          heading: "Sormanız gereken sorular",
          body: "[İÇERİK: ajansa sorulacak somut sorular listesi]",
        },
        {
          heading: "Kırmızı bayraklar",
          body: "[İÇERİK: kaçınılması gereken ajans davranışları, garantili sıralama vaatleri vb.]",
        },
      ],
      en: [
        {
          heading: "What to look for in an SEO agency",
          body: "[CONTENT: transparency, references, reporting, warnings about guarantee claims]",
        },
        {
          heading: "Why local SEO is different",
          body: "[CONTENT: how local SEO differs from national, Google Business Profile importance]",
        },
        {
          heading: "Questions you should ask",
          body: "[CONTENT: concrete list of questions to ask an agency]",
        },
        {
          heading: "Red flags",
          body: "[CONTENT: agency behaviors to avoid, guaranteed ranking promises etc.]",
        },
      ],
    },
  },
  {
    slug: "kobi-icin-seo-ve-web-rehberi",
    date: "2026-06-01",
    ctaLink: "/hizmetler/web-gelistirme",
    title: {
      tr: "Küçük İşletmeler İçin SEO ve Web Sitesi Rehberi",
      en: "SEO and Website Guide for Small Businesses",
    },
    description: {
      tr: "Küçük işletmelerin sınırlı bütçeyle etkili bir web sitesi ve SEO stratejisi oluşturması için rehber.",
      en: "A guide for small businesses to build an effective website and SEO strategy on a limited budget.",
    },
    sections: {
      tr: [
        {
          heading: "Küçük işletme için web sitesi neden önemli?",
          body: "[İÇERİK: dijital varlığın önemi, müşteri güveni, Google'da bulunabilirlik]",
        },
        {
          heading: "Uygun fiyatlı web sitesi nasıl yapılır?",
          body: "[İÇERİK: modern teknoloji seçenekleri, gereksiz maliyetlerden kaçınma]",
        },
        {
          heading: "Temel SEO adımları",
          body: "[İÇERİK: küçük işletmenin hemen uygulayabileceği SEO temelleri]",
        },
        {
          heading: "AI aramaya hazır site",
          body: "[İÇERİK: web sitesini GEO uyumlu yapma, schema markup temelleri]",
        },
      ],
      en: [
        {
          heading: "Why a website matters for small businesses",
          body: "[CONTENT: importance of digital presence, customer trust, Google discoverability]",
        },
        {
          heading: "How to build an affordable website",
          body: "[CONTENT: modern technology options, avoiding unnecessary costs]",
        },
        {
          heading: "Essential SEO steps",
          body: "[CONTENT: SEO fundamentals a small business can implement right away]",
        },
        {
          heading: "Making your site AI-search ready",
          body: "[CONTENT: making website GEO-compatible, schema markup basics]",
        },
      ],
    },
  },
];

export function getPostBySlug(slug: string): BlogPostData | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
