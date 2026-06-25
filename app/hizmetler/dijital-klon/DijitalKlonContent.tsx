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

export default function DijitalKlonContent() {
  const { lang } = useLang();
  const tr = lang === "tr";

  const cards = [
    {
      title: tr ? "AI Chatbot Geliştirme" : "AI Chatbot Development",
      desc: tr
        ? "İşletmenize özel, doğal dilde iletişim kurabilen yapay zeka chatbot'ları geliştiriyoruz. Web sitesi, WhatsApp ve sosyal medya entegrasyonu."
        : "We develop AI chatbots customized for your business that communicate in natural language. Website, WhatsApp and social media integration.",
    },
    {
      title: tr ? "Marka Sesi & Kişilik Eğitimi" : "Brand Voice & Personality Training",
      desc: tr
        ? "Dijital klonunuza markanızın üslubunu, bilgi birikimini ve hizmet anlayışını öğretiyoruz. Müşterileriniz gerçek bir ekip üyesiyle konuşuyor gibi hisseder."
        : "We teach your digital clone your brand's tone, knowledge base and service approach. Your customers feel like they're talking to a real team member.",
    },
    {
      title: tr ? "7/24 Müşteri İletişimi" : "24/7 Customer Communication",
      desc: tr
        ? "Dijital klonunuz mesai saatleri dışında bile müşterilerinize anında yanıt verir. Randevu alma, bilgi verme ve yönlendirme işlemlerini otomatik yürütür."
        : "Your digital clone responds to customers instantly even outside business hours. It handles appointment booking, providing information and directing inquiries automatically.",
    },
    {
      title: tr ? "Bilgi Tabanı & Eğitim" : "Knowledge Base & Training",
      desc: tr
        ? "Hizmetleriniz, ürünleriniz ve sık sorulan sorularla dijital klonunuzu eğitiyoruz. Sürekli öğrenen bir sistem sayesinde zamanla daha doğru yanıtlar verir."
        : "We train your digital clone with your services, products and FAQs. Thanks to a continuously learning system, it provides more accurate answers over time.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: tr ? "Analiz & Planlama" : "Analysis & Planning",
      desc: tr
        ? "İşletmenizin ihtiyaçlarını, müşteri sorularını ve iletişim kanallarını analiz ediyoruz. Dijital klonun kapsamını ve özelliklerini birlikte belirliyoruz."
        : "We analyze your business needs, customer questions and communication channels. We define the scope and features of the digital clone together.",
    },
    {
      num: "02",
      title: tr ? "Geliştirme & Eğitim" : "Development & Training",
      desc: tr
        ? "Dijital klonu oluşturuyor, markanızın bilgi birikimi ve üslubuyla eğitiyoruz. Test süreciyle doğruluğunu ve performansını optimize ediyoruz."
        : "We build the digital clone and train it with your brand's knowledge base and tone. We optimize accuracy and performance through testing.",
    },
    {
      num: "03",
      title: tr ? "Yayın & Sürekli İyileştirme" : "Launch & Continuous Improvement",
      desc: tr
        ? "Dijital klonunuzu yayına alıyor, müşteri etkileşimlerini izliyor ve sürekli iyileştirmeler yapıyoruz. Düzenli raporlarla performansı takip ediyorsunuz."
        : "We launch your digital clone, monitor customer interactions and make continuous improvements. You track performance with regular reports.",
    },
  ];

  const faqs = [
    {
      q: tr ? "Dijital klon nedir ve nasıl çalışır?" : "What is a digital clone and how does it work?",
      a: tr
        ? "Dijital klon, işletmenizin bilgi birikimini, üslubunu ve hizmet anlayışını öğrenen yapay zeka destekli bir asıstandır. Web sitenizde, WhatsApp'ta veya sosyal medyada 7/24 müşterilerinizle etkileşime geçer."
        : "A digital clone is an AI-powered assistant that learns your business's knowledge, tone and service approach. It interacts with your customers 24/7 on your website, WhatsApp or social media.",
    },
    {
      q: tr ? "Dijital klon gerçek bir insanın yerini alır mı?" : "Does a digital clone replace a real person?",
      a: tr
        ? "Hayır, dijital klon insan ekibinizin yerini almaz, onları destekler. Sık sorulan sorulara anında yanıt verir, randevu alır ve karmaşık konuları insan ekibinize yönlendirir."
        : "No, a digital clone doesn't replace your human team, it supports them. It instantly answers FAQs, books appointments and directs complex issues to your human team.",
    },
    {
      q: tr ? "Dijital klon kurulumu ne kadar sürer?" : "How long does digital clone setup take?",
      a: tr
        ? "Temel bir dijital klon 1-2 hafta içinde kurulabilir. İşletmenize özel eğitim ve entegrasyon dahil kapsamlı kurulum 3-4 hafta sürebilir."
        : "A basic digital clone can be set up within 1-2 weeks. Comprehensive setup including custom training and integration can take 3-4 weeks.",
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
          {tr ? "Dijital Klon" : "Digital Clone"}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="gold-text">
            {tr
              ? "Dijital Klon — Markanızın AI Temsilcisi"
              : "Digital Clone — Your Brand's AI Representative"}
          </span>
        </h1>
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "İşletmenizin bilgi birikimini ve iletişim tarzını öğrenen yapay zeka asistanı. 7/24 müşteri iletişimi, otomatik yanıtlar ve akıllı yönlendirme."
            : "An AI assistant that learns your business's knowledge and communication style. 24/7 customer communication, automatic responses and smart routing."}
        </p>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── Dijital klon nedir ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {tr ? "Dijital Klon Nedir?" : "What is a Digital Clone?"}
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "Dijital klon, işletmenizi temsil eden ve markanızın sesini, bilgisini ve değerlerini yansıtan yapay zeka destekli bir asıstandır. Müşterilerinizin sorularına anında, tutarlı ve kişiselleştirilmiş yanıtlar verir. Bir chatbot'tan çok daha fazlası — markanızın dijital temsilcisi."
            : "A digital clone is an AI-powered assistant that represents your business, reflecting your brand's voice, knowledge and values. It provides instant, consistent and personalized responses to your customers' questions. Much more than a chatbot — it's your brand's digital representative."}
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
            ? "Müşteri sorularına 7/24 yanıt vermek isteyen klinikler ve sağlık kuruluşları, randevu ve bilgi taleplerini otomatikleştirmek isteyen hizmet sektörü işletmeleri, online müşteri deneyimini iyileştirmek isteyen e-ticaret markaları ve ekibinin yükünü hafifletmek isteyen her ölçekteki işletme."
            : "Clinics and healthcare organizations wanting to respond to customer questions 24/7, service sector businesses looking to automate appointment and information requests, e-commerce brands wanting to improve online customer experience, and businesses of all sizes looking to lighten their team's workload."}
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
          {tr ? "Dijital Klonunuzu Oluşturalım" : "Let's Create Your Digital Clone"}
        </h2>
        <p
          className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "İşletmeniz için yapay zeka destekli dijital asistan oluşturalım. Ücretsiz demo için hemen iletişime geçin."
            : "Let's create an AI-powered digital assistant for your business. Contact us for a free demo."}
        </p>
        <a
          href="/#iletisim"
          className="btn-gold inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-full"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          {tr ? "Ücretsiz Demo Al" : "Get Free Demo"}
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
