"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

export default function HowIWork() {
  const { lang } = useLang();
  const tx = t[lang].process;
  const headRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    [headRef, stepsRef].forEach((r) => r.current && obs.observe(r.current));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="surec" className="section-pad" style={{ background: "var(--bg)" }}>
      <div className="sep" />
      <div className="max-w-6xl mx-auto">
        <div ref={headRef as React.RefObject<HTMLDivElement>} className="reveal mb-12 md:mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            {tx.heading}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold" style={{ color: "var(--text)", letterSpacing: "-0.02em" }}>
            {tx.sub}
          </h2>
        </div>

        <div ref={stepsRef as React.RefObject<HTMLDivElement>} className="reveal-group grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px"
            style={{ background: "linear-gradient(90deg, var(--gold), rgba(201,168,76,0.15))" }}
          />
          {tx.steps.map((step, i) => (
            <div key={i} className="flex flex-col">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 font-bold text-sm tracking-widest relative z-10"
                style={{
                  background: "var(--bg)",
                  border: "1.5px solid var(--gold)",
                  color: "var(--gold)",
                  boxShadow: "0 0 0 6px var(--bg), 0 4px 16px rgba(201,168,76,0.15)",
                }}>
                {step.num}
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--text)" }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
