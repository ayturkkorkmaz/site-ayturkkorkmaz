"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import LogoTicker from "@/components/LogoTicker";

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

  return (
    <section id="hakkimda" className="section-pad" style={{ background: "var(--surface)" }}>
      <div className="sep" />
      <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal-group max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>
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
          <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>
            {tx.tools}
          </p>
          <LogoTicker />
        </div>
      </div>
    </section>
  );
}
