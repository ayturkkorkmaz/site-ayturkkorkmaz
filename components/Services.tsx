"use client";
import React, { useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

const icons: Record<string, React.ReactElement> = {
  crm: (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="7" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 12h10M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="21" cy="7" r="4" fill="var(--bg)" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M21 5v2l1 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  web: (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="5" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 10h22" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="7" cy="7.5" r="1" fill="currentColor"/>
      <circle cx="10.5" cy="7.5" r="1" fill="currentColor"/>
    </svg>
  ),
  automation: (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <circle cx="7" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="21" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="21" cy="21" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 14h4M15 9.5l2 2M15 18.5l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  consulting: (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <path d="M14 4L4 9v5c0 5.25 4.27 10.16 10 11.33C19.73 24.16 24 19.25 24 14V9L14 4z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M10 14l2.5 2.5L18 11" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function Services() {
  const { lang } = useLang();
  const tx = t[lang].services;
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    [headRef, gridRef].forEach((r) => r.current && obs.observe(r.current));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="hizmetler" className="section-pad" style={{ background: "var(--surface)" }}>
      <div className="sep mb-0" />
      <div className="max-w-6xl mx-auto pt-2">
        <div ref={headRef as React.RefObject<HTMLDivElement>} className="reveal mb-12 md:mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            {tx.heading}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold" style={{ color: "var(--text)", letterSpacing: "-0.02em" }}>
            {tx.sub}
          </h2>
        </div>

        <div ref={gridRef as React.RefObject<HTMLDivElement>} className="reveal-group grid grid-cols-1 md:grid-cols-2 gap-4">
          {tx.items.map((item, i) => (
            <div key={i}
              className="card-lift rounded-2xl p-7 cursor-default"
              style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#fffdf8"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg)"; }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--gold-dim)", color: "var(--gold)" }}>
                {icons[item.icon]}
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text)" }}>{item.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full inline-block"
                style={{ color: "var(--gold)", background: "var(--gold-dim)" }}>
                {item.for}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
