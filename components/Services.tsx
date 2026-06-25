"use client";
import React, { useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

const icons: Record<string, React.ReactElement> = {
  seoGeo: (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 16l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  crm: (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="7" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 12h10M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="21" cy="7" r="4" fill="var(--bg)" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M21 5v2l1 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  digitalClone: (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 8l3-3M22 5l-1.5 1.5M19 12l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
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
  assistant: (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <rect x="5" y="3" width="18" height="22" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 9h8M10 13h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="14" cy="19" r="2" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M12 19h-2M16 19h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  visibility: (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <path d="M14 6C8 6 3 14 3 14s5 8 11 8 11-8 11-8-5-8-11-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
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
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>
            {tx.heading}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold" style={{ color: "var(--text)", letterSpacing: "-0.02em" }}>
            {tx.sub}
          </h2>
        </div>

        <div ref={gridRef as React.RefObject<HTMLDivElement>} className="reveal-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tx.items.map((item, i) => {
            const links: Record<string, string> = {
              seoGeo: "/hizmetler/seo-geo",
              crm: "/hizmetler/crm",
              digitalClone: "/hizmetler/dijital-klon",
              assistant: "/hizmetler/kisisel-asistan",
              web: "/hizmetler/web-gelistirme",
              visibility: "/hizmetler/dijital-gorunurluk",
            };
            return (
              <a key={i} href={links[item.icon] || "#"}
                className="card-lift rounded-2xl p-7 block no-underline"
                style={{ background: "var(--bg)", border: "1px solid var(--border)", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg)"; }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)" }}>
                  {icons[item.icon]}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                <span className="text-xs font-medium px-3 py-1.5 rounded-full inline-block"
                  style={{ color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  {item.for}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
