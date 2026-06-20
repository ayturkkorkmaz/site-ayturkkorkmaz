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

export default function GoldeneyeContent() {
  const { lang } = useLang();
  const tx = t[lang].caseGoldeneye;

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
      </Section>

      {/* ── Özet kutusu ── */}
      <Section className="px-6 max-w-4xl mx-auto">
        <div
          className="rounded-2xl p-6 md:p-8 grid sm:grid-cols-2 gap-6"
          style={{
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
          }}
        >
          {tx.summary.map((item: { label: string; value: string }, i: number) => (
            <div key={i}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--accent)" }}>
                {item.label}
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <div className="sep max-w-6xl mx-auto mt-12" />

      {/* ── Müşteri ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{tx.client.heading}</h2>
        <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {tx.client.desc}
        </p>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── Zorluk / İhtiyaç ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{tx.challenge.heading}</h2>
        <ul className="flex flex-col gap-3">
          {tx.challenge.items.map((item: string, i: number) => (
            <li
              key={i}
              className="text-base leading-relaxed flex items-start gap-3"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── Ne yaptık ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{tx.work.heading}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tx.work.items.map((item: { title: string; desc: string }, i: number) => (
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

      {/* ── Yaklaşım ve Çıktılar ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{tx.results.heading}</h2>
        <div className="flex flex-col gap-6">
          {tx.results.items.map(
            (item: { label: string; value: string; real?: boolean; qualitative?: boolean }, i: number) => (
              <div
                key={i}
                className="card-lift rounded-2xl p-6"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent)" }}>
                  {item.label}
                </p>
                {item.real ? (
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: "var(--accent-2)" }}>
                    {item.value}
                  </p>
                ) : (
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.value}
                  </p>
                )}
              </div>
            ),
          )}
        </div>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      {/* ── Kullanılan yöntemler ── */}
      <Section className="section-pad max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{tx.methods.heading}</h2>
        <div className="flex flex-wrap gap-3">
          {tx.methods.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="text-xs font-medium px-4 py-2 rounded-full"
              style={{
                background: "var(--gold-dim)",
                color: "var(--accent-2)",
                border: "1px solid var(--border)",
              }}
            >
              {tag}
            </span>
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
