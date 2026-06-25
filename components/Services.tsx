"use client";
import React, { useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

/* ── Large illustrative SVGs for each service ── */
const illustrations: Record<string, React.ReactElement> = {
  seoGeo: (
    <svg viewBox="0 0 280 200" fill="none" className="w-full h-auto">
      {/* Browser window */}
      <rect x="40" y="20" width="200" height="140" rx="8" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" fill="rgba(37,99,235,0.05)"/>
      <path d="M40 44h200" stroke="rgba(96,165,250,0.2)" strokeWidth="1"/>
      <circle cx="56" cy="32" r="4" fill="rgba(96,165,250,0.3)"/>
      <circle cx="68" cy="32" r="4" fill="rgba(96,165,250,0.2)"/>
      <circle cx="80" cy="32" r="4" fill="rgba(96,165,250,0.15)"/>
      {/* Search bar */}
      <rect x="60" y="56" width="160" height="20" rx="10" fill="rgba(37,99,235,0.08)" stroke="rgba(96,165,250,0.2)" strokeWidth="1"/>
      <circle cx="76" cy="66" r="5" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5"/>
      <path d="M80 70l3 3" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Results */}
      <rect x="60" y="86" width="120" height="6" rx="3" fill="rgba(37,99,235,0.2)"/>
      <rect x="60" y="98" width="160" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
      <rect x="60" y="106" width="140" height="4" rx="2" fill="rgba(255,255,255,0.04)"/>
      <rect x="60" y="118" width="100" height="6" rx="3" fill="rgba(37,99,235,0.15)"/>
      <rect x="60" y="130" width="150" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
      <rect x="60" y="138" width="130" height="4" rx="2" fill="rgba(255,255,255,0.04)"/>
      {/* Arrow up */}
      <path d="M200 120l10-30" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
      <path d="M206 88l4 2-2 4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* AI sparkle */}
      <circle cx="230" cy="50" r="3" fill="rgba(96,165,250,0.4)"/>
      <path d="M230 44v12M224 50h12" stroke="rgba(96,165,250,0.3)" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  crm: (
    <svg viewBox="0 0 280 200" fill="none" className="w-full h-auto">
      {/* Dashboard */}
      <rect x="30" y="20" width="220" height="160" rx="8" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" fill="rgba(37,99,235,0.05)"/>
      <path d="M30 48h220" stroke="rgba(96,165,250,0.15)" strokeWidth="1"/>
      {/* Sidebar */}
      <path d="M80 48v132" stroke="rgba(96,165,250,0.12)" strokeWidth="1"/>
      <rect x="40" y="58" width="30" height="6" rx="3" fill="rgba(37,99,235,0.2)"/>
      <rect x="40" y="72" width="26" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
      <rect x="40" y="82" width="28" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
      <rect x="40" y="92" width="24" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
      {/* Cards */}
      <rect x="92" y="58" width="68" height="48" rx="6" fill="rgba(37,99,235,0.1)" stroke="rgba(96,165,250,0.2)" strokeWidth="1"/>
      <rect x="170" y="58" width="68" height="48" rx="6" fill="rgba(37,99,235,0.1)" stroke="rgba(96,165,250,0.2)" strokeWidth="1"/>
      {/* Chart */}
      <rect x="92" y="116" width="146" height="52" rx="6" fill="rgba(37,99,235,0.06)" stroke="rgba(96,165,250,0.15)" strokeWidth="1"/>
      <path d="M104 154l20-16 20 8 20-20 20 6 20-14 18-4" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M104 154l20-16 20 8 20-20 20 6 20-14 18-4v36H104z" fill="rgba(37,99,235,0.08)"/>
      {/* Users */}
      <circle cx="112" cy="76" r="6" stroke="rgba(96,165,250,0.4)" strokeWidth="1.2"/>
      <path d="M106 86a6 6 0 0112 0" stroke="rgba(96,165,250,0.3)" strokeWidth="1.2"/>
      <text x="126" y="74" fill="rgba(96,165,250,0.5)" fontSize="8" fontWeight="600">248</text>
      <text x="126" y="84" fill="rgba(255,255,255,0.25)" fontSize="6">contacts</text>
    </svg>
  ),
  digitalClone: (
    <svg viewBox="0 0 280 200" fill="none" className="w-full h-auto">
      {/* Chat interface */}
      <rect x="50" y="15" width="180" height="170" rx="12" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" fill="rgba(37,99,235,0.05)"/>
      {/* Header */}
      <rect x="50" y="15" width="180" height="32" rx="12" fill="rgba(37,99,235,0.08)"/>
      <circle cx="72" cy="31" r="8" fill="rgba(37,99,235,0.2)" stroke="rgba(96,165,250,0.3)" strokeWidth="1"/>
      <rect x="86" y="27" width="50" height="4" rx="2" fill="rgba(96,165,250,0.3)"/>
      <rect x="86" y="34" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.1)"/>
      <circle cx="218" cy="31" r="3" fill="#22c55e"/>
      {/* Messages */}
      <rect x="120" y="56" width="96" height="22" rx="8" fill="rgba(37,99,235,0.15)"/>
      <rect x="128" y="64" width="60" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
      <rect x="64" y="86" width="110" height="32" rx="8" fill="rgba(255,255,255,0.06)"/>
      <rect x="72" y="94" width="80" height="4" rx="2" fill="rgba(255,255,255,0.12)"/>
      <rect x="72" y="102" width="60" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
      <rect x="130" y="126" width="86" height="22" rx="8" fill="rgba(37,99,235,0.15)"/>
      <rect x="138" y="134" width="50" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
      {/* Input */}
      <rect x="62" y="158" width="156" height="18" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(96,165,250,0.15)" strokeWidth="1"/>
      {/* AI brain */}
      <circle cx="246" cy="60" r="14" stroke="rgba(96,165,250,0.25)" strokeWidth="1.5" fill="rgba(37,99,235,0.05)"/>
      <path d="M240 56c2-4 8-4 10 0M238 62h16M240 66c2 3 8 3 10 0" stroke="rgba(96,165,250,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M232 60l-4-2M260 60l4-2M232 68l-4 2M260 68l4 2" stroke="rgba(96,165,250,0.15)" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  assistant: (
    <svg viewBox="0 0 280 200" fill="none" className="w-full h-auto">
      {/* Phone */}
      <rect x="85" y="10" width="110" height="180" rx="16" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" fill="rgba(37,99,235,0.05)"/>
      <rect x="120" y="16" width="40" height="4" rx="2" fill="rgba(96,165,250,0.15)"/>
      {/* Calendar */}
      <rect x="97" y="32" width="86" height="56" rx="6" fill="rgba(37,99,235,0.08)" stroke="rgba(96,165,250,0.2)" strokeWidth="1"/>
      <path d="M97 46h86" stroke="rgba(96,165,250,0.15)" strokeWidth="1"/>
      {/* Days grid */}
      {[0,1,2,3,4,5,6].map((d) => (
        <React.Fragment key={d}>
          <rect x={101 + d * 11.5} y={50} width="8" height="8" rx="2" fill={d === 3 ? "rgba(37,99,235,0.3)" : "rgba(255,255,255,0.04)"}/>
          <rect x={101 + d * 11.5} y={62} width="8" height="8" rx="2" fill={d === 5 ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.04)"}/>
          <rect x={101 + d * 11.5} y={74} width="8" height="8" rx="2" fill="rgba(255,255,255,0.04)"/>
        </React.Fragment>
      ))}
      {/* Task list */}
      <rect x="97" y="96" width="86" height="14" rx="4" fill="rgba(37,99,235,0.06)" stroke="rgba(96,165,250,0.15)" strokeWidth="1"/>
      <rect x="103" y="101" width="4" height="4" rx="1" stroke="rgba(96,165,250,0.4)" strokeWidth="1"/>
      <rect x="111" y="101" width="40" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
      <rect x="97" y="114" width="86" height="14" rx="4" fill="rgba(37,99,235,0.06)" stroke="rgba(96,165,250,0.15)" strokeWidth="1"/>
      <path d="M103 120l2 2 4-4" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="111" y="119" width="50" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
      <rect x="97" y="132" width="86" height="14" rx="4" fill="rgba(37,99,235,0.06)" stroke="rgba(96,165,250,0.15)" strokeWidth="1"/>
      <rect x="103" y="137" width="4" height="4" rx="1" stroke="rgba(96,165,250,0.4)" strokeWidth="1"/>
      <rect x="111" y="137" width="34" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
      {/* Notification bell */}
      <circle cx="55" cy="50" r="12" fill="rgba(37,99,235,0.1)" stroke="rgba(96,165,250,0.25)" strokeWidth="1"/>
      <path d="M55 44v5a4 4 0 01-4 4h-1M55 44v5a4 4 0 004 4h1" stroke="rgba(96,165,250,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="55" cy="56" r="1.5" fill="rgba(96,165,250,0.4)"/>
      <circle cx="62" cy="44" r="3" fill="rgba(239,68,68,0.5)"/>
    </svg>
  ),
  web: (
    <svg viewBox="0 0 280 200" fill="none" className="w-full h-auto">
      {/* Laptop */}
      <rect x="35" y="20" width="210" height="130" rx="8" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" fill="rgba(37,99,235,0.05)"/>
      <path d="M35 42h210" stroke="rgba(96,165,250,0.15)" strokeWidth="1"/>
      <circle cx="49" cy="31" r="3.5" fill="rgba(96,165,250,0.25)"/>
      <circle cx="59" cy="31" r="3.5" fill="rgba(96,165,250,0.18)"/>
      <circle cx="69" cy="31" r="3.5" fill="rgba(96,165,250,0.12)"/>
      {/* Nav */}
      <rect x="150" y="28" width="30" height="5" rx="2.5" fill="rgba(96,165,250,0.15)"/>
      <rect x="186" y="28" width="24" height="5" rx="2.5" fill="rgba(96,165,250,0.15)"/>
      <rect x="216" y="28" width="20" height="5" rx="2.5" fill="rgba(37,99,235,0.3)"/>
      {/* Hero section */}
      <rect x="48" y="52" width="90" height="8" rx="4" fill="rgba(37,99,235,0.2)"/>
      <rect x="48" y="66" width="130" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
      <rect x="48" y="76" width="110" height="5" rx="2.5" fill="rgba(255,255,255,0.04)"/>
      <rect x="48" y="90" width="50" height="14" rx="7" fill="rgba(37,99,235,0.25)"/>
      {/* Image placeholder */}
      <rect x="170" y="52" width="62" height="52" rx="6" fill="rgba(37,99,235,0.08)" stroke="rgba(96,165,250,0.15)" strokeWidth="1"/>
      <circle cx="200" cy="72" r="10" stroke="rgba(96,165,250,0.2)" strokeWidth="1"/>
      <path d="M175 92l12-12 10 8 10-6 15 10" stroke="rgba(96,165,250,0.2)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Cards row */}
      <rect x="48" y="116" width="60" height="26" rx="4" fill="rgba(37,99,235,0.06)" stroke="rgba(96,165,250,0.12)" strokeWidth="1"/>
      <rect x="114" y="116" width="60" height="26" rx="4" fill="rgba(37,99,235,0.06)" stroke="rgba(96,165,250,0.12)" strokeWidth="1"/>
      <rect x="180" y="116" width="52" height="26" rx="4" fill="rgba(37,99,235,0.06)" stroke="rgba(96,165,250,0.12)" strokeWidth="1"/>
      {/* Laptop base */}
      <path d="M20 150h240" stroke="rgba(96,165,250,0.2)" strokeWidth="2" strokeLinecap="round"/>
      {/* Speed indicator */}
      <path d="M255 70l-8 0" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M255 78l-6 0" stroke="rgba(96,165,250,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="258" y="73" fill="rgba(96,165,250,0.4)" fontSize="7" fontWeight="600">100</text>
    </svg>
  ),
  visibility: (
    <svg viewBox="0 0 280 200" fill="none" className="w-full h-auto">
      {/* Eye */}
      <path d="M140 60C100 60 60 100 60 100s40 40 80 40 80-40 80-40-40-40-80-40z" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" fill="rgba(37,99,235,0.03)"/>
      <circle cx="140" cy="100" r="20" stroke="rgba(96,165,250,0.35)" strokeWidth="1.5" fill="rgba(37,99,235,0.08)"/>
      <circle cx="140" cy="100" r="8" fill="rgba(37,99,235,0.25)"/>
      <circle cx="136" cy="96" r="3" fill="rgba(96,165,250,0.2)"/>
      {/* Orbiting elements */}
      <circle cx="80" cy="60" r="14" fill="rgba(37,99,235,0.06)" stroke="rgba(96,165,250,0.2)" strokeWidth="1"/>
      <text x="74" y="64" fill="rgba(96,165,250,0.5)" fontSize="10" fontWeight="bold">G</text>
      <circle cx="200" cy="55" r="12" fill="rgba(37,99,235,0.06)" stroke="rgba(96,165,250,0.2)" strokeWidth="1"/>
      <rect x="194" y="51" width="12" height="8" rx="1" stroke="rgba(96,165,250,0.4)" strokeWidth="1"/>
      <circle cx="60" cy="130" r="10" fill="rgba(37,99,235,0.06)" stroke="rgba(96,165,250,0.15)" strokeWidth="1"/>
      <circle cx="220" cy="135" r="11" fill="rgba(37,99,235,0.06)" stroke="rgba(96,165,250,0.15)" strokeWidth="1"/>
      {/* Connecting lines */}
      <path d="M94 62l26 24M186 60l-26 26M70 126l50-20M210 130l-50-24" stroke="rgba(96,165,250,0.1)" strokeWidth="1" strokeDasharray="3 3"/>
      {/* Star rating */}
      <g transform="translate(110, 150)">
        {[0,1,2,3,4].map(i => (
          <path key={i} d={`M${i*14} 0l2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8z`}
            fill={i < 4 ? "rgba(96,165,250,0.35)" : "rgba(96,165,250,0.1)"} stroke="rgba(96,165,250,0.3)" strokeWidth="0.5"/>
        ))}
      </g>
    </svg>
  ),
};

export default function Services() {
  const { lang } = useLang();
  const tx = t[lang].services;
  const headRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.15 }
    );
    if (headRef.current) obs.observe(headRef.current);
    itemRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const links: Record<string, string> = {
    seoGeo: "/hizmetler/seo-geo",
    crm: "/hizmetler/crm",
    digitalClone: "/hizmetler/dijital-klon",
    assistant: "/hizmetler/kisisel-asistan",
    web: "/hizmetler/web-gelistirme",
    visibility: "/hizmetler/dijital-gorunurluk",
  };

  return (
    <section id="hizmetler" className="section-pad" style={{ background: "var(--surface)" }}>
      <div className="sep mb-0" />
      <div className="max-w-6xl mx-auto pt-2">
        {/* Header */}
        <div ref={headRef as React.RefObject<HTMLDivElement>} className="reveal mb-16 md:mb-20 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>
            {tx.heading}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4" style={{ color: "var(--text)", letterSpacing: "-0.02em" }}>
            {tx.sub}
          </h2>
        </div>

        {/* Zigzag services */}
        <div className="flex flex-col gap-20 md:gap-28">
          {tx.items.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                ref={el => { itemRefs.current[i] = el; }}
                className={`reveal flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-16`}
              >
                {/* Illustration */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <div className="rounded-2xl p-6 md:p-8"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
                    {illustrations[item.icon]}
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "var(--text)", letterSpacing: "-0.02em" }}>
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                    {item.desc}
                  </p>
                  <span className="text-xs font-medium px-3 py-1.5 rounded-full inline-block mb-6"
                    style={{ color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    {item.for}
                  </span>
                  <div>
                    <a href={links[item.icon] || "#"}
                      className="inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: "#60A5FA", textDecoration: "none" }}>
                      {lang === "tr" ? "Detaylı Bilgi" : "Learn More"}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6"
                          strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
