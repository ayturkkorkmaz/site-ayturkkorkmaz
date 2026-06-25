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

export default function CrmContent() {
  const { lang } = useLang();
  const tr = lang === "tr";

  const cards = [
    {
      title: tr ? "CRM Kurulum & Özelleştirme" : "CRM Setup & Customization",
      desc: tr
        ? "HubSpot, Salesforce veya Zoho CRM'i işletmenizin ihtiyaçlarına göre kuruyoruz. Pipeline, alan ve otomasyon yapılandırması dahil."
        : "We set up HubSpot, Salesforce or Zoho CRM tailored to your business needs. Includes pipeline, field and automation configuration.",
    },
    {
      title: tr ? "Veri Aktarımı & Entegrasyon" : "Data Migration & Integration",
      desc: tr
        ? "Mevcut verilerinizi güvenle yeni CRM'e aktarıyoruz. E-posta, takvim, muhasebe ve diğer araçlarla entegrasyon sağlıyoruz."
        : "We safely migrate your existing data to the new CRM. We integrate with email, calendar, accounting and other tools.",
    },
    {
      title: tr ? "Ekip Eğitimi & Onboarding" : "Team Training & Onboarding",
      desc: tr
        ? "Ekibinizin CRM'i etkin kullanabilmesi için kapsamlı eğitim ve onboarding süreci yürütüyoruz."
        : "We run comprehensive training and onboarding processes so your team can use the CRM effectively.",
    },
    {
      title: tr ? "Performans & Raporlama" : "Performance & Reporting",
      desc: tr
        ? "Satış performansı, müşteri etkileşimi ve dönüşüm oranlarını takip eden özel dashboard ve raporlar oluşturuyoruz."
        : "We create custom dashboards and reports that track sales performance, customer engagement and conversion rates.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: tr ? "Analiz" : "Analysis",
      desc: tr
        ? "Mevcut süreçlerinizi ve ihtiyaçlarınızı analiz ediyor, size en uygun CRM çözümünü belirliyoruz."
        : "We analyze your current processes and needs, then determine the best CRM solution for you.",
    },
    {
      num: "02",
      title: tr ? "Kurulum" : "Setup",
      desc: tr
        ? "CRM platformunu kuruyor, özelleştiriyor ve mevcut verilerinizi aktarıyoruz."
        : "We install, customize the CRM platform and migrate your existing data.",
    },
    {
      num: "03",
      title: tr ? "Eğitim & Destek" : "Training & Support",
      desc: tr
        ? "Ekibinizi eğitiyor, süreçleri optimize ediyor ve devam eden destek sağlıyoruz."
        : "We train your team, optimize processes and provide ongoing support.",
    },
  ];

  const faqs = [
    {
      q: tr ? "CRM sistemi küçük işletmeler için gerekli mi?" : "Is a CRM system necessary for small businesses?",
      a: tr
        ? "Evet, küçük işletmeler de CRM'den büyük fayda sağlar. Müşteri bilgilerini merkezi bir yerde toplamak, takip süreçlerini otomatikleştirmek ve satış fırsatlarını kaçırmamak için CRM şarttır."
        : "Yes, small businesses also benefit greatly from CRM. A CRM is essential for centralizing customer information, automating follow-up processes and not missing sales opportunities.",
    },
    {
      q: tr ? "Hangi CRM platformunu tercih etmeliyim?" : "Which CRM platform should I choose?",
      a: tr
        ? "İhtiyaçlarınıza göre değişir. HubSpot ücretsiz başlangıç planı ile küçük ekipler için idealdir. Salesforce büyük ve karmaşık süreçler için uygundur. Zoho ise maliyet-performans dengesi arayan işletmeler için önerilir."
        : "It depends on your needs. HubSpot is ideal for small teams with its free starter plan. Salesforce suits large and complex processes. Zoho is recommended for businesses seeking cost-performance balance.",
    },
    {
      q: tr ? "CRM kurulumu ne kadar sürer?" : "How long does CRM setup take?",
      a: tr
        ? "Temel CRM kurulumu 1-2 hafta içinde tamamlanabilir. Özelleştirme, veri aktarımı ve ekip eğitimi dahil kapsamlı bir kurulum ise 4-8 hafta sürebilir."
        : "Basic CRM setup can be completed within 1-2 weeks. A comprehensive setup including customization, data migration and team training can take 4-8 weeks.",
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
          {tr ? "CRM Sistemleri" : "CRM Systems"}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="gold-text">
            {tr
              ? "CRM Sistemleri — Müşteri İlişkilerinizi Güçlendirin"
              : "CRM Systems — Strengthen Your Customer Relations"}
          </span>
        </h1>
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "HubSpot, Salesforce ve Zoho CRM kurulum, özelleştirme ve yönetim hizmeti. Müşteri verilerinizi merkezi bir sistemde toplayın, satış süreçlerinizi otomatikleştirin."
            : "HubSpot, Salesforce and Zoho CRM setup, customization and management services. Centralize your customer data and automate your sales processes."}
        </p>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── CRM nedir ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {tr ? "CRM Nedir?" : "What is CRM?"}
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "CRM (Customer Relationship Management), müşteri ilişkilerinizi merkezi bir sistemde yönetmenizi sağlayan yazılımlardır. Müşteri bilgileri, iletişim geçmişi, satış fırsatları ve pazarlama kampanyalarını tek bir platformda birleştirerek ekibinizin daha verimli çalışmasını sağlar."
            : "CRM (Customer Relationship Management) is software that lets you manage your customer relationships in a centralized system. It unifies customer information, communication history, sales opportunities and marketing campaigns in a single platform, enabling your team to work more efficiently."}
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
            ? "Müşteri takibi yapmak isteyen küçük ve orta ölçekli işletmeler, satış ekiplerinin performansını artırmak isteyen şirketler, müşteri verilerini dağınık tablolar yerine merkezi bir sistemde yönetmek isteyenler ve pazarlama otomasyonu kurmak isteyen markalar."
            : "Small and medium businesses wanting to track customers, companies looking to boost their sales team performance, those wanting to manage customer data in a centralized system instead of scattered spreadsheets, and brands looking to set up marketing automation."}
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
          {tr ? "CRM Sisteminizi Kuralım" : "Let's Set Up Your CRM"}
        </h2>
        <p
          className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "İşletmenize en uygun CRM çözümünü birlikte belirleyelim. Ücretsiz danışmanlık için hemen iletişime geçin."
            : "Let's determine the best CRM solution for your business together. Contact us for free consultation."}
        </p>
        <a
          href="/#iletisim"
          className="btn-gold inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-full"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          {tr ? "Ücretsiz Danışmanlık" : "Free Consultation"}
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
