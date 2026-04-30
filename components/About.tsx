"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

const tools = [
  { name: "HubSpot",    color: "#FF7A59" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "Zoho",       color: "#E42527" },
  { name: "Zapier",     color: "#FF4A00" },
  { name: "Make",       color: "#8B5CF6" },
  { name: "Next.js",    color: "#111110" },
  { name: "Vercel",     color: "#111110" },
  { name: "Figma",      color: "#A259FF" },
];

export default function About() {
  const { lang } = useLang();
  const tx = t[lang].about;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { value: "20+",  label: lang === "tr" ? "Tamamlanan Proje" : "Projects Delivered" },
    { value: "3",    label: lang === "tr" ? "Hizmet Alanı"     : "Service Areas" },
    { value: "100%", label: lang === "tr" ? "Uzaktan Çalışma"  : "Remote Work" },
    { value: "24h",  label: lang === "tr" ? "Yanıt Süresi"     : "Response Time" },
  ];

  return (
    <section id="hakkimda" className="section-pad" style={{ background: "var(--surface)" }}>
      <div className="sep" />
      <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal-group max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            {tx.heading}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8" style={{ color: "var(--text)", letterSpacing: "-0.02em" }}>
            Aleyna Aytürk Korkmaz
          </h2>
          <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>{tx.p1}</p>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>{tx.p2}</p>
          <div className="mt-10">
            <a href="#iletisim" className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--gold)" }}>
              {lang === "tr" ? "İletişime geç" : "Get in touch"}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right */}
        <div>
          <div className="grid grid-cols-2 gap-3 mb-10">
            {stats.map((s, i) => (
              <div key={i} className="rounded-2xl p-5"
                style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
                <div className="text-2xl font-bold mb-1" style={{ color: "var(--gold)" }}>{s.value}</div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>
            {tx.tools}
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool.name} className="text-xs font-medium px-3 py-1.5 rounded-full"
                style={{ color: tool.color, background: "var(--bg)", border: "1px solid var(--border)" }}>
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
