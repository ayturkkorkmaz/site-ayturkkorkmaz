"use client";

import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
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

export default function WebGelistirmeContent() {
  const { lang } = useLang();
  const tx = t[lang].webDev;

  return (
    <div className="pt-28 pb-16">
      {/* ── Hero ── */}
      <Section className="section-pad max-w-4xl mx-auto text-center">
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          style={{ color: "var(--accent)" }}
        >
          {tx.badge}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="gold-text">{tx.heading}</span>
        </h1>
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {tx.intro}
        </p>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── Nasıl yapıyoruz? ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{tx.howWeBuild.heading}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tx.howWeBuild.items.map((item: { title: string; desc: string }, i: number) => (
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{tx.whoFor.heading}</h2>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {tx.whoFor.desc}
        </p>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── Süreç ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{tx.process.heading}</h2>
        <div className="flex flex-col gap-6">
          {tx.process.steps.map(
            (step: { num: string; title: string; desc: string }, i: number) => (
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
            ),
          )}
        </div>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── SSS ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{tx.faq.heading}</h2>
        <div className="flex flex-col gap-6">
          {tx.faq.items.map((item: { q: string; a: string }, i: number) => (
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{tx.cta.heading}</h2>
        <p
          className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {tx.cta.desc}
        </p>
        <a
          href="/#iletisim"
          className="btn-gold inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-full"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          {tx.cta.button}
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
