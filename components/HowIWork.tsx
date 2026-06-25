"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

const BLUE = "#2563EB";
const BLUE_LIGHT = "#60A5FA";

export default function HowIWork() {
  const { lang } = useLang();
  const tx = t[lang].process;
  const steps = tx.steps;
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
      }),
      { threshold: 0.2 }
    );
    cardRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="surec" ref={sectionRef} style={{ background: "var(--surface)" }}>
      <div className="sep" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left — sticky heading */}
          <div className="lg:w-5/12 lg:sticky lg:top-28 lg:self-start">
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: BLUE_LIGHT, opacity: 0.7 }}
            >
              {tx.heading}
            </p>
            <h2
              className="text-3xl lg:text-4xl font-semibold mb-5"
              style={{ color: "var(--text)", letterSpacing: "-0.025em" }}
            >
              {tx.sub}
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              {lang === "tr"
                ? "Sizinle iş birliği yaparak, hedeflerinizi gerçekleştirecek yaratıcı ve stratejik çözümler sunuyoruz. Her adımda yanınızdayız."
                : "We work with you to deliver creative and strategic solutions that achieve your goals. We're by your side every step of the way."}
            </p>

          </div>

          {/* Right — scrolling cards */}
          <div className="lg:w-7/12 flex flex-col gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                id={`step-${i}`}
                ref={el => { cardRefs.current[i] = el; }}
                className="reveal rounded-2xl p-6 md:p-8"
                style={{
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Number + title */}
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className="text-3xl md:text-4xl font-bold flex-shrink-0 leading-none"
                    style={{
                      background: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-1" style={{ color: "var(--text)" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-5 ml-0 md:ml-14">
                  {step.bullets.map((b, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0 mt-0.5">
                        <circle cx="6" cy="6" r="5.5" stroke={BLUE} strokeOpacity="0.3"/>
                        <path d="M3.5 6l1.5 1.5 3-3" stroke={BLUE_LIGHT} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Deliverables + tags */}
                <div className="flex flex-wrap gap-2 ml-0 md:ml-14">
                  {step.deliverables.map((d, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(37,99,235,0.1)",
                        border: "1px solid rgba(37,99,235,0.2)",
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4l2 2L7 2" stroke={BLUE_LIGHT} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {d}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center gap-3 mt-5 pt-4 ml-0 md:ml-14" style={{ borderTop: "1px solid rgba(37,99,235,0.08)" }}>
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(37,99,235,0.1)", color: BLUE_LIGHT, border: "1px solid rgba(37,99,235,0.2)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <circle cx="5" cy="5" r="4" stroke={BLUE} strokeWidth="1.2"/>
                      <path d="M5 3v2.5l1.5 1" stroke={BLUE} strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    {step.tag}
                  </span>
                  <span className="text-xs flex items-center gap-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1"/>
                      <path d="M5 3v2.5l1.3 0.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
