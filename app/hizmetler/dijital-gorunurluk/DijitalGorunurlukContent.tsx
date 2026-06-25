"use client";

import { useLang } from "@/lib/LangContext";
import { useReveal } from "@/lib/useReveal";

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

export default function DijitalGorunurlukContent() {
  const { lang } = useLang();
  const tr = lang === "tr";

  const cards = [
    {
      title: tr ? "Google Business Profile" : "Google Business Profile",
      desc: tr
        ? "Google İşletme Profilinizi oluşturuyor, optimize ediyor ve düzenli güncelliyoruz. Yerel aramalarda ve Google Haritalar'da üst sıralarda yer almanızı sağlıyoruz."
        : "We create, optimize and regularly update your Google Business Profile. We help you rank higher in local searches and Google Maps.",
    },
    {
      title: tr ? "Online İtibar Yönetimi" : "Online Reputation Management",
      desc: tr
        ? "Google ve sosyal medya yorumlarını takip ediyor, olumsuz yorumlara profesyonel yanıt stratejisi geliştiriyor ve olumlu müşteri deneyimlerinin paylaşılmasını teşvik ediyoruz."
        : "We monitor Google and social media reviews, develop professional response strategies for negative reviews and encourage sharing of positive customer experiences.",
    },
    {
      title: tr ? "Sosyal Medya Varlığı" : "Social Media Presence",
      desc: tr
        ? "İşletmenizin sosyal medya hesaplarını oluşturuyor, profil optimizasyonu yapıyor ve tutarlı bir marka kimliği oluşturmanıza yardımcı oluyoruz."
        : "We set up your business social media accounts, optimize profiles and help you build a consistent brand identity.",
    },
    {
      title: tr ? "Dizin & Rehber Kayıtları" : "Directory & Listing Registrations",
      desc: tr
        ? "Sektörel dizinler, yerel rehberler ve online platformlara işletmenizi kayıt ediyor, NAP (İsim, Adres, Telefon) tutarlılığını sağlıyoruz."
        : "We register your business in industry directories, local guides and online platforms, ensuring NAP (Name, Address, Phone) consistency.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: tr ? "Durum Analizi" : "Status Analysis",
      desc: tr
        ? "Mevcut dijital varlığınızı analiz ediyor, eksiklikleri ve fırsatları belirliyoruz. Rakip analizi ile sektörünüzdeki konumunuzu değerlendiriyoruz."
        : "We analyze your current digital presence, identify gaps and opportunities. We assess your position in the industry with competitor analysis.",
    },
    {
      num: "02",
      title: tr ? "Optimizasyon & Kurulum" : "Optimization & Setup",
      desc: tr
        ? "Google Business Profile, sosyal medya profilleri ve dizin kayıtlarını oluşturuyor veya optimize ediyoruz. Tutarlı marka görselleri ve bilgileri hazırlıyoruz."
        : "We create or optimize Google Business Profile, social media profiles and directory listings. We prepare consistent brand visuals and information.",
    },
    {
      num: "03",
      title: tr ? "İzleme & Raporlama" : "Monitoring & Reporting",
      desc: tr
        ? "Dijital görünürlüğünüzü düzenli olarak izliyor, yorum yönetimi yapıyor ve aylık performans raporları sunuyoruz."
        : "We regularly monitor your digital visibility, manage reviews and provide monthly performance reports.",
    },
  ];

  const faqs = [
    {
      q: tr ? "Dijital görünürlük neden önemli?" : "Why is digital visibility important?",
      a: tr
        ? "Müşterilerin büyük çoğunluğu bir hizmet veya ürün aramadan önce internet araştırması yapıyor. Dijital görünürlüğünüz zayıfsa potansiyel müşteriler sizi bulamaz ve rakiplerinize yönelir."
        : "The majority of customers research online before looking for a service or product. If your digital visibility is weak, potential customers can't find you and turn to your competitors.",
    },
    {
      q: tr ? "Google Business Profile neden önemli?" : "Why is Google Business Profile important?",
      a: tr
        ? "Google Business Profile, yerel aramalarda ve Google Haritalar'da görünmenizi sağlar. Doğru ve güncel profil bilgileri, müşteri yorumları ve fotoğraflar ile güvenilirliğinizi artırır."
        : "Google Business Profile helps you appear in local searches and Google Maps. Accurate and up-to-date profile information, customer reviews and photos increase your credibility.",
    },
    {
      q: tr ? "Online itibar yönetimi neleri kapsar?" : "What does online reputation management include?",
      a: tr
        ? "Google ve sosyal medya yorumlarının takibi, olumsuz yorumlara profesyonel yanıt stratejisi, olumlu yorum teşviki ve marka algısının düzenli izlenmesini kapsar."
        : "It includes monitoring Google and social media reviews, professional response strategies for negative reviews, encouraging positive reviews and regular monitoring of brand perception.",
    },
  ];

  return (
    <div className="pt-28 pb-16">
      {/* ── Hero ── */}
      <Section className="section-pad max-w-4xl mx-auto text-center">
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          style={{ color: "var(--accent)" }}
        >
          {tr ? "Dijital Görünürlük" : "Digital Visibility"}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="gold-text">
            {tr
              ? "Dijital Görünürlük — Online Varlığınızı Güçlendirin"
              : "Digital Visibility — Strengthen Your Online Presence"}
          </span>
        </h1>
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "Google Business Profile, sosyal medya, online itibar yönetimi ve dizin kayıtları ile işletmenizin dijital varlığını güçlendiriyoruz. Müşterileriniz sizi her yerde bulsun."
            : "We strengthen your business's digital presence with Google Business Profile, social media, online reputation management and directory listings. Let your customers find you everywhere."}
        </p>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── Dijital görünürlük nedir ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {tr ? "Dijital Görünürlük Nedir?" : "What is Digital Visibility?"}
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "Dijital görünürlük, işletmenizin internette ne kadar kolay bulunabildiğidir. Google aramalarında, Google Haritalar'da, sosyal medyada ve online dizinlerde tutarlı ve güçlü bir varlık göstermek, potansiyel müşterilerinizin sizi keşfetmesini ve güvenmesini sağlar."
            : "Digital visibility is how easily your business can be found online. Showing a consistent and strong presence in Google searches, Google Maps, social media and online directories helps potential customers discover and trust you."}
        </p>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── Ne yapıyoruz? ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          {tr ? "Ne Yapıyoruz?" : "What We Do"}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((item, i) => (
            <div
              key={i}
              className="card-lift rounded-2xl p-6"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
              }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--accent-2)" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── Kimler için? ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {tr ? "Kimler İçin?" : "Who Is It For?"}
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "Yerel müşterilere ulaşmak isteyen fiziksel mağaza ve ofis sahipleri, Google Haritalar'da görünür olmak isteyen restoranlar, klinikler ve hizmet sağlayıcılar, online itibarını yönetmek isteyen markalar ve dijital varlığını sıfırdan kurmak isteyen yeni işletmeler."
            : "Physical store and office owners wanting to reach local customers, restaurants, clinics and service providers wanting to be visible on Google Maps, brands wanting to manage their online reputation, and new businesses wanting to build their digital presence from scratch."}
        </p>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── Süreç ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          {tr ? "Nasıl Çalışıyoruz?" : "How We Work"}
        </h2>
        <div className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="card-lift flex items-start gap-5 rounded-2xl p-6"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
              }}
            >
              <span
                className="text-2xl font-bold flex-shrink-0"
                style={{ color: "var(--accent)" }}
              >
                {step.num}
              </span>
              <div>
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── SSS ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          {tr ? "Sık Sorulan Sorular" : "Frequently Asked Questions"}
        </h2>
        <div className="flex flex-col gap-6">
          {faqs.map((item, i) => (
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
          {tr ? "Dijital Varlığınızı Güçlendirelim" : "Let's Strengthen Your Digital Presence"}
        </h2>
        <p
          className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "İşletmenizin dijital görünürlüğünü artıralım. Ücretsiz durum analizi için hemen iletişime geçin."
            : "Let's boost your business's digital visibility. Contact us for a free status analysis."}
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
