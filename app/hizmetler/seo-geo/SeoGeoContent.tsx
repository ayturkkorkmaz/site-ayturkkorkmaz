"use client";

import { useLang } from "@/lib/LangContext";
import { useReveal } from "@/lib/useReveal";
import Link from "next/link";

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`reveal ${className}`}>
      {children}
    </section>
  );
}

export default function SeoGeoContent() {
  const { lang } = useLang();
  const tr = lang === "tr";

  return (
    <div className="pt-28 pb-16">
      {/* ── Hero ── */}
      <Section className="section-pad max-w-4xl mx-auto text-center">
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          style={{ color: "var(--accent)" }}
        >
          {tr ? "SEO & GEO" : "SEO & GEO"}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="gold-text">
            {tr
              ? "SEO & GEO — Google'da ve AI'da Görünür Olun"
              : "SEO & GEO — Be Visible on Google & AI"}
          </span>
        </h1>
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "Google arama sonuçlarında üst sıralara çıkın, ChatGPT ve Gemini gibi yapay zeka motorlarında markanız anılsın. SEO ve GEO'yu birlikte uygulayarak dijital görünürlüğünüzü maksimuma çıkarın."
            : "Rank higher on Google search results and get your brand mentioned by AI engines like ChatGPT and Gemini. Maximize your digital visibility by combining SEO and GEO strategies."}
        </p>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── Two Columns: SEO & GEO ── */}
      <Section className="section-pad max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          {tr ? "İki Güçlü Strateji, Tek Çatı Altında" : "Two Powerful Strategies, One Roof"}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* SEO Column */}
          <div
            className="card-lift rounded-2xl p-8"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
            }}
          >
            <h3
              className="text-xl font-bold mb-3"
              style={{ color: "var(--accent-2)" }}
            >
              {tr ? "SEO — Arama Motoru Optimizasyonu" : "SEO — Search Engine Optimization"}
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              {tr
                ? "Google, Bing ve diğer arama motorlarında sitenizi üst sıralara taşıyoruz. Teknik SEO, on-page optimizasyon, yerel SEO ve backlink stratejileri ile organik trafiğinizi artırıyoruz."
                : "We boost your site to the top of Google, Bing and other search engines. We increase your organic traffic through technical SEO, on-page optimization, local SEO and backlink strategies."}
            </p>
            <Link
              href="/hizmetler/seo"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--accent)" }}
            >
              {tr ? "Detaylı bilgi →" : "Learn more →"}
            </Link>
          </div>

          {/* GEO Column */}
          <div
            className="card-lift rounded-2xl p-8"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
            }}
          >
            <h3
              className="text-xl font-bold mb-3"
              style={{ color: "var(--accent-2)" }}
            >
              {tr ? "GEO — Üretken Motor Optimizasyonu" : "GEO — Generative Engine Optimization"}
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              {tr
                ? "ChatGPT, Gemini ve Perplexity gibi yapay zeka motorları artık kullanıcıların ilk başvuru noktası oluyor. GEO ile markanızın bu AI cevaplarında görünür ve güvenilir şekilde yer almasını sağlıyoruz."
                : "AI engines like ChatGPT, Gemini and Perplexity are becoming users' first point of contact. With GEO, we ensure your brand is visible and trusted in these AI responses."}
            </p>
            <Link
              href="/hizmetler/geo"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--accent)" }}
            >
              {tr ? "Detaylı bilgi →" : "Learn more →"}
            </Link>
          </div>
        </div>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── Neden birlikte? ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {tr ? "Neden SEO ve GEO Birlikte?" : "Why SEO and GEO Together?"}
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "Kullanıcıların bir kısmı hala Google'da arama yaparken, giderek artan bir kesim sorularını ChatGPT veya Gemini'ye yöneltiyor. Sadece SEO yaparsanız AI cevaplarında görünmezsiniz; sadece GEO yaparsanız Google sıralamanız etkilenmez. İkisini birlikte uygulayarak hem geleneksel aramada hem de yapay zeka destekli platformlarda tam görünürlük elde edersiniz."
            : "While some users still search on Google, an increasing number are turning to ChatGPT or Gemini with their questions. If you only do SEO, you won't appear in AI answers; if you only do GEO, your Google rankings won't benefit. By applying both together, you achieve full visibility across both traditional search and AI-powered platforms."}
        </p>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── SSS ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          {tr ? "Sık Sorulan Sorular" : "Frequently Asked Questions"}
        </h2>
        <div className="flex flex-col gap-6">
          {[
            {
              q: tr
                ? "SEO ve GEO arasındaki fark nedir?"
                : "What is the difference between SEO and GEO?",
              a: tr
                ? "SEO, Google gibi arama motorlarında üst sıralarda yer almayı hedefler. GEO ise ChatGPT, Gemini ve Perplexity gibi yapay zeka motorlarının cevaplarında markanızın anılmasını sağlar. İkisi birbirini tamamlayan stratejilerdir."
                : "SEO aims to rank higher in search engines like Google. GEO ensures your brand is mentioned in AI engine responses like ChatGPT, Gemini and Perplexity. They are complementary strategies.",
            },
            {
              q: tr
                ? "SEO ve GEO'yu birlikte uygulamak neden önemli?"
                : "Why is it important to apply SEO and GEO together?",
              a: tr
                ? "Kullanıcılar artık hem Google'da hem de AI asistanlarda arama yapıyor. İkisini birlikte uygulayarak tüm dijital kanalları kapsarsınız."
                : "Users now search both on Google and AI assistants. By applying both, you cover all digital channels.",
            },
            {
              q: tr
                ? "Google'da üst sıralara çıkmak ne kadar sürer?"
                : "How long does it take to rank higher on Google?",
              a: tr
                ? "Yerel SEO genellikle 1-3 ay içinde ilk iyileştirmeleri gösterir. Kalıcı sonuçlar için 3-6 aylık sürekli çalışma önerilir."
                : "Local SEO typically shows initial improvements within 1-3 months. Sustained results require 3-6 months of continuous work.",
            },
            {
              q: tr
                ? "Yapay zeka motorlarında nasıl görünür olurum?"
                : "How do I become visible on AI engines?",
              a: tr
                ? "GEO stratejisi ile markanızın otoritesini, yapılandırılmış verinizi ve içerik kalitesini optimize ediyoruz. Böylece ChatGPT, Gemini ve Perplexity sizi kaynak olarak gösterir."
                : "With our GEO strategy, we optimize your brand authority, structured data and content quality so ChatGPT, Gemini and Perplexity show you as a source.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
              }}
            >
              <h3 className="text-base font-semibold mb-2">{item.q}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── CTA ── */}
      <Section className="section-pad max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {tr ? "Dijital Görünürlüğünüzü Artıralım" : "Let's Boost Your Digital Visibility"}
        </h2>
        <p
          className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "SEO ve GEO stratejileri ile hem Google'da hem de yapay zeka motorlarında görünür olun. Ücretsiz ön analiz için hemen iletişime geçin."
            : "Be visible on both Google and AI engines with combined SEO and GEO strategies. Contact us for a free preliminary analysis."}
        </p>
        <a
          href="/#iletisim"
          className="btn-gold inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-full"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          {tr ? "Ücretsiz Analiz Al" : "Get Free Analysis"}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </Section>
    </div>
  );
}
