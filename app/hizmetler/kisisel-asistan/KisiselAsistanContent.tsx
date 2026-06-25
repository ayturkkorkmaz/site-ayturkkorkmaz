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

export default function KisiselAsistanContent() {
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
          {tr ? "Kişisel Asistan" : "Personal Assistant"}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="gold-text">
            {tr
              ? "AI Kişisel Asistan — Günlük İş Yükünüzü Hafifletin"
              : "AI Personal Assistant — Lighten Your Daily Workload"}
          </span>
        </h1>
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "Takvim yönetimi, e-posta takibi, görev organizasyonu ve hatırlatmalar — yapay zeka destekli kişisel asistanınız rutin işlerinizi üstlenir, siz işinize odaklanırsınız."
            : "Calendar management, email tracking, task organization, and reminders — your AI-powered personal assistant handles the routine so you can focus on your work."}
        </p>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── Kişisel asistan nedir? ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {tr ? "AI Kişisel Asistan Nedir?" : "What Is an AI Personal Assistant?"}
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "AI kişisel asistan, yapay zeka teknolojilerini kullanarak günlük iş süreçlerinizi otomatikleştiren ve yöneten akıllı bir sistemdir. E-postalarınızı takip eder, takviminizi düzenler, görevlerinizi organize eder ve önemli konularda sizi bilgilendirir. Dijital klondan farklı olarak, kişisel asistan müşterilerinizle iletişim kurmak yerine sizin iş verimliliğinizi artırmaya odaklanır."
            : "An AI personal assistant is an intelligent system that uses artificial intelligence to automate and manage your daily work processes. It tracks your emails, organizes your calendar, manages your tasks, and keeps you informed on important matters. Unlike a digital clone, a personal assistant focuses on boosting your productivity rather than communicating with your customers."}
        </p>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── Ne yapıyoruz? ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          {tr ? "Ne Yapıyoruz?" : "What Do We Do?"}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: tr ? "Takvim & Randevu Yönetimi" : "Calendar & Appointment Management",
              desc: tr
                ? "Takviminizi akıllıca yöneten, randevuları otomatik planlayan, çakışmaları engelleyen ve hatırlatmalar gönderen AI asistan kuruyoruz."
                : "We set up an AI assistant that smartly manages your calendar, auto-schedules appointments, prevents conflicts, and sends reminders.",
            },
            {
              title: tr ? "E-posta Takibi & Yanıtlama" : "Email Tracking & Responses",
              desc: tr
                ? "Gelen e-postalarınızı kategorize eden, öncelikli olanları işaretleyen ve rutin mesajlara otomatik taslak yanıtlar hazırlayan sistem kuruyoruz."
                : "We build a system that categorizes incoming emails, flags priorities, and drafts automatic responses for routine messages.",
            },
            {
              title: tr ? "Görev Organizasyonu" : "Task Organization",
              desc: tr
                ? "Yapılacaklar listenizi yöneten, görevleri önceliklendiren, ilerlemeyi takip eden ve zamanında tamamlanması için hatırlatmalar gönderen asistan."
                : "An assistant that manages your to-do list, prioritizes tasks, tracks progress, and sends reminders for timely completion.",
            },
            {
              title: tr ? "İş Akışı Otomasyonu" : "Workflow Automation",
              desc: tr
                ? "Tekrarlayan rutin işlerinizi otomatikleştiren, raporlama süreçlerini hızlandıran ve farklı araçlarınız arasında veri senkronizasyonu sağlayan akışlar kuruyoruz."
                : "We build flows that automate repetitive routine tasks, speed up reporting processes, and sync data between your different tools.",
            },
          ].map((item, i) => (
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
          {tr ? "Kimler İçin?" : "Who Is This For?"}
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "Yoğun iş temposunda e-posta, takvim ve görev yönetimine vakit ayıramayan girişimciler, serbest çalışanlar, doktorlar, avukatlar ve yöneticiler için. Teknik bilgi gerektirmez — asistanı biz kuruyor, kullanımını gösteriyoruz."
            : "For entrepreneurs, freelancers, doctors, lawyers, and managers who can't spare time for email, calendar, and task management in their busy schedules. No technical knowledge required — we set up the assistant and show you how to use it."}
        </p>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── Süreç ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          {tr ? "Nasıl Çalışıyoruz?" : "How Do We Work?"}
        </h2>
        <div className="flex flex-col gap-6">
          {[
            {
              num: "01",
              title: tr ? "İhtiyaç Analizi" : "Needs Analysis",
              desc: tr
                ? "Günlük iş akışınızı, kullandığınız araçları ve en çok zaman harcadığınız rutin görevleri analiz ediyoruz."
                : "We analyze your daily workflow, the tools you use, and the routine tasks that consume the most of your time.",
            },
            {
              num: "02",
              title: tr ? "Asistan Kurulumu & Entegrasyon" : "Assistant Setup & Integration",
              desc: tr
                ? "AI kişisel asistanınızı kuruyor, takvim, e-posta ve görev yönetimi araçlarınızla entegre ediyor ve ihtiyaçlarınıza göre özelleştiriyoruz."
                : "We set up your AI personal assistant, integrate it with your calendar, email, and task management tools, and customize it for your needs.",
            },
            {
              num: "03",
              title: tr ? "Eğitim & Sürekli İyileştirme" : "Training & Continuous Improvement",
              desc: tr
                ? "Asistanın kullanımını gösteriyor, geri bildirimlerinizle sistemi optimize ediyor ve yeni ihtiyaçlarınıza göre güncelliyoruz."
                : "We show you how to use the assistant, optimize the system with your feedback, and update it based on your evolving needs.",
            },
          ].map((step, i) => (
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
          {[
            {
              q: tr ? "AI kişisel asistan ne iş yapar?" : "What does an AI personal assistant do?",
              a: tr
                ? "AI kişisel asistan takvim yönetimi, e-posta takibi ve yanıtlama, görev organizasyonu, hatırlatmalar ve günlük iş akışı otomasyonu gibi rutin işlerinizi yapay zeka ile otomatikleştirir."
                : "An AI personal assistant automates your routine tasks using AI — calendar management, email tracking and responding, task organization, reminders, and daily workflow automation.",
            },
            {
              q: tr
                ? "Kişisel asistan ile dijital klon arasındaki fark nedir?"
                : "What's the difference between a personal assistant and a digital clone?",
              a: tr
                ? "Kişisel asistan günlük iş görevlerinizi yönetir (takvim, e-posta, görevler). Dijital klon ise markanızın sesini ve iletişim tarzını yansıtan, müşterilerinizle sizin adınıza iletişim kuran bir AI temsilidir."
                : "A personal assistant manages your daily work tasks (calendar, email, tasks). A digital clone is an AI representation that reflects your brand's voice and communication style, interacting with customers on your behalf.",
            },
            {
              q: tr
                ? "AI asistan kurulumu ne kadar sürer?"
                : "How long does it take to set up an AI assistant?",
              a: tr
                ? "Temel bir AI kişisel asistan 1-2 hafta içinde kurulabilir. İhtiyaçlarınıza göre özelleştirme ve entegrasyonlar dahil kapsamlı kurulum 2-4 hafta sürebilir."
                : "A basic AI personal assistant can be set up within 1-2 weeks. Comprehensive setup including customization and integrations for your needs can take 2-4 weeks.",
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
          {tr ? "AI Asistanınızı Kuralım" : "Let's Set Up Your AI Assistant"}
        </h2>
        <p
          className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {tr
            ? "Günlük rutin işlerinizi yapay zekaya devredin, zamandan tasarruf edin. Hemen iletişime geçin."
            : "Delegate your daily routine tasks to AI, save time. Get in touch now."}
        </p>
        <a
          href="/#iletisim"
          className="btn-gold inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-full"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          {tr ? "İletişime Geç" : "Get in Touch"}
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
