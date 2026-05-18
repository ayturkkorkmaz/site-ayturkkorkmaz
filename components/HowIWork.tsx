"use client";
import { useRef, useState, useCallback } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

/* ── Blue palette ── */
const BLUE       = "#2563EB";
const BLUE_LIGHT = "#60A5FA";
const BLUE_DIM   = "rgba(37,99,235,0.1)";

/* ── Step icons ── */
const DiscoveryIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M15.5 15.5L20 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M10.5 8v2.5h2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const SolutionIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 3L3 8.5v7L12 21l9-5.5v-7L12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M12 12l9-3.5M12 12l-9-3.5M12 12v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const ExecutionIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M4 12.5L9 17.5L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const HandoffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 3v12M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 19h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const SupportIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.93 4.93l14.14 14.14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.3"/>
  </svg>
);
const ICONS = [DiscoveryIcon, SolutionIcon, ExecutionIcon, HandoffIcon, SupportIcon];

/* ── Bullet ── */
function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="flex-shrink-0 mt-0.5">
        <circle cx="6.5" cy="6.5" r="6" stroke={BLUE} strokeOpacity="0.35"/>
        <path d="M4 6.5l1.7 1.7 3-3.4" stroke={BLUE_LIGHT} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>{text}</span>
    </div>
  );
}

/* ── Deliverable chip ── */
function DeliverableChip({ text }: { text: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full"
      style={{
        background: BLUE_DIM,
        border: `1px solid rgba(37,99,235,0.2)`,
        color: "rgba(255,255,255,0.6)",
      }}
    >
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
        <path d="M1.5 4.5l2 2L7 2.5" stroke={BLUE_LIGHT} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {text}
    </span>
  );
}

/* ────────────────────────────────────────
   Main component
──────────────────────────────────────── */
export default function HowIWork() {
  const { lang } = useLang();
  const tx    = t[lang].process;
  const steps = tx.steps;

  const scrollRef  = useRef<HTMLDivElement>(null);
  const fillRef    = useRef<HTMLDivElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [progress,   setProgress]   = useState(0);

  /* ── Track horizontal scroll ── */
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    const p   = max > 0 ? el.scrollLeft / max : 0;
    setProgress(p);

    // Direct DOM update for smooth fill animation
    if (fillRef.current) {
      fillRef.current.style.width = `${p * 100}%`;
    }

    // Find which card is most centred
    const centre = el.scrollLeft + el.clientWidth / 2;
    let closest = 0, minDist = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - centre);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveStep(closest);
  }, []);

  /* ── Scroll to card i ── */
  const scrollToCard = useCallback((i: number) => {
    const container = scrollRef.current;
    const card      = cardRefs.current[i];
    if (!container || !card) return;
    const offset = card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;
    container.scrollTo({ left: offset, behavior: "smooth" });
  }, []);

  return (
    <section id="surec" style={{ background: "var(--surface)" }}>
      <div className="sep" />

      <div className="pt-10 pb-10">

        {/* ── Header ── */}
        <div className="px-5 sm:px-8 max-w-6xl mx-auto mb-8">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
            style={{ color: BLUE_LIGHT, opacity: 0.7 }}
          >
            {tx.heading}
          </p>
          <h2
            className="text-3xl lg:text-4xl font-semibold"
            style={{ color: "var(--text)", letterSpacing: "-0.025em" }}
          >
            {tx.sub}
          </h2>
        </div>

        {/* ── Horizontal progress indicator ── */}
        <div className="px-5 sm:px-8 max-w-6xl mx-auto mb-8">
          {/* Step labels – desktop only */}
          <div className="hidden sm:flex justify-between mb-3">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className="flex-1 text-xs font-semibold text-center px-1 leading-tight"
                style={{
                  color: i <= activeStep ? BLUE_LIGHT : "rgba(255,255,255,0.22)",
                  transition: "color 0.3s ease",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                {step.num}. {step.title}
              </button>
            ))}
          </div>

          {/* Track + dots */}
          <div className="relative flex items-center" style={{ height: 28 }}>
            {/* Track */}
            <div
              className="absolute inset-x-0"
              style={{
                height: 2,
                borderRadius: 2,
                background: "rgba(37,99,235,0.12)",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            {/* Animated fill */}
            <div
              ref={fillRef}
              className="absolute left-0"
              style={{
                height: 2,
                borderRadius: 2,
                width: `${progress * 100}%`,
                background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LIGHT})`,
                boxShadow: `0 0 8px rgba(37,99,235,0.45)`,
                top: "50%",
                transform: "translateY(-50%)",
                transition: "width 0.08s linear",
              }}
            />
            {/* Step dots */}
            <div className="absolute inset-x-0 flex justify-between">
              {steps.map((_, i) => {
                const isActive    = i === activeStep;
                const isCompleted = i < activeStep;
                return (
                  <button
                    key={i}
                    onClick={() => scrollToCard(i)}
                    className="flex items-center justify-center rounded-full focus:outline-none"
                    style={{
                      width:      isActive ? 22 : 14,
                      height:     isActive ? 22 : 14,
                      background: i <= activeStep ? BLUE : "var(--surface-2, #0c0f18)",
                      border:     `2px solid ${i <= activeStep ? BLUE : "rgba(37,99,235,0.28)"}`,
                      boxShadow:  isActive
                        ? `0 0 0 5px rgba(37,99,235,0.14), 0 0 18px rgba(37,99,235,0.3)`
                        : "none",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    {isCompleted && (
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4l2.2 2.2L7 1.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile: current step label */}
          <div className="flex sm:hidden justify-center mt-3">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              {steps[activeStep].num} — {steps[activeStep].title}
            </span>
          </div>
        </div>

        {/* ── Cards – horizontal scroll ── */}
        <div className="relative">
          {/* Edge fades */}
          <div
            className="absolute left-0 top-0 bottom-4 w-8 sm:w-12 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, var(--surface), transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-4 w-8 sm:w-12 z-10 pointer-events-none"
            style={{ background: "linear-gradient(-90deg, var(--surface), transparent)" }}
          />

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto px-5 sm:px-8 pb-4 no-scrollbar"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {steps.map((step, i) => {
              const Icon     = ICONS[i] ?? ICONS[0];
              const isActive = i === activeStep;
              return (
                <div
                  key={i}
                  ref={el => { cardRefs.current[i] = el; }}
                  className="flex-shrink-0 flex flex-col rounded-2xl"
                  style={{
                    scrollSnapAlign: "center",
                    width: "min(440px, 82vw)",
                    padding: "1.5rem",
                    background: "rgba(255,255,255,0.035)",
                    border: `1px solid ${isActive ? "rgba(37,99,235,0.35)" : "rgba(255,255,255,0.08)"}`,
                    boxShadow: isActive
                      ? "0 20px 60px rgba(0,0,0,0.4), 0 4px 16px rgba(37,99,235,0.1)"
                      : "none",
                    transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                  }}
                >
                  {/* Icon + ghost number */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: BLUE_DIM, color: BLUE_LIGHT }}
                    >
                      <Icon />
                    </div>
                    <p
                      className="font-bold leading-none select-none"
                      style={{
                        fontSize: "clamp(2.8rem, 10vw, 4.5rem)",
                        letterSpacing: "-0.05em",
                        background: `linear-gradient(135deg, rgba(37,99,235,0.16), rgba(96,165,250,0.06))`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {step.num}
                    </p>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-semibold mb-2"
                    style={{
                      fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
                      color: "var(--text)",
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {step.desc}
                  </p>

                  {/* Activities */}
                  <p
                    className="text-xs font-semibold tracking-[0.15em] uppercase mb-2.5"
                    style={{ color: BLUE_LIGHT, opacity: 0.6 }}
                  >
                    {lang === "tr" ? "Yapılacaklar" : "Activities"}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 mb-4">
                    {step.bullets.map((b, j) => <Bullet key={j} text={b} />)}
                  </div>

                  {/* Deliverables */}
                  <p
                    className="text-xs font-semibold tracking-[0.15em] uppercase mb-2"
                    style={{ color: BLUE_LIGHT, opacity: 0.6 }}
                  >
                    {lang === "tr" ? "Çıktılar" : "Deliverables"}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {step.deliverables.map((d, j) => <DeliverableChip key={j} text={d} />)}
                  </div>

                  {/* Footer */}
                  <div
                    className="flex items-center justify-between pt-3 mt-auto"
                    style={{ borderTop: "1px solid rgba(37,99,235,0.1)" }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          background: BLUE_DIM,
                          color: BLUE_LIGHT,
                          border: `1px solid rgba(37,99,235,0.2)`,
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <circle cx="5" cy="5" r="4" stroke={BLUE} strokeWidth="1.2"/>
                          <path d="M5 3v2.5l1.5 1" stroke={BLUE} strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                        {step.tag}
                      </div>
                      <span className="text-xs flex items-center gap-1" style={{ color: "rgba(255,255,255,0.32)" }}>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                          <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" strokeWidth="1.1"/>
                          <path d="M5.5 3.2v2.5l1.4 0.9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                        </svg>
                        {step.duration}
                      </span>
                    </div>

                    {/* Mini dot progress */}
                    <div className="flex items-center gap-1.5">
                      {steps.map((_, j) => (
                        <div
                          key={j}
                          style={{
                            height: 4,
                            borderRadius: 2,
                            background: j === i ? BLUE : "rgba(37,99,235,0.2)",
                            width: j === i ? 18 : 4,
                            transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Dot navigation ── */}
        <div className="flex justify-center gap-2 mt-3 px-5">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className="focus:outline-none"
              style={{
                height: 4,
                borderRadius: 2,
                background: i === activeStep ? BLUE : "rgba(37,99,235,0.22)",
                width: i === activeStep ? 20 : 4,
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
