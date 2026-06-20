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

export default function SssContent() {
  const { lang } = useLang();
  const tx = t[lang].sss;

  return (
    <div className="pt-28 pb-16">
      {/* ── Hero ── */}
      <Section className="section-pad max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="gold-text">{tx.heading}</span>
        </h1>
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {tx.sub}
        </p>
      </Section>

      {/* ── Categories ── */}
      {tx.categories.map(
        (
          cat: { title: string; items: { q: string; a: string; link?: string; linkLabel?: string }[] },
          ci: number,
        ) => (
          <div key={ci}>
            <div className="sep max-w-6xl mx-auto" />
            <Section className="section-pad max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">{cat.title}</h2>
              <div className="flex flex-col gap-6">
                {cat.items.map(
                  (
                    item: { q: string; a: string; link?: string; linkLabel?: string },
                    i: number,
                  ) => (
                    <div
                      key={i}
                      className="card-lift rounded-2xl p-6"
                      style={{
                        background: "var(--surface-2)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <h3 className="text-base font-semibold mb-2">{item.q}</h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item.a}
                        {item.link && (
                          <>
                            {" "}
                            <a
                              href={item.link}
                              className="underline"
                              style={{ color: "var(--accent-2)" }}
                            >
                              {item.linkLabel}
                            </a>
                          </>
                        )}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </Section>
          </div>
        ),
      )}

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
