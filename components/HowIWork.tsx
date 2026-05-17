"use client";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

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

const PURPLE       = "#7C3AED";
const PURPLE_LIGHT = "#A78BFA";
const PURPLE_DIM   = "rgba(124,58,237,0.1)";

/* N = 5 steps; transitions at 0.25, 0.5, 0.75 */
const T = [0, 0.25, 0.5, 0.75, 1.0]; // boundaries
const W = 0.06; // half-width of each transition

/* ── Bullet ── */
function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="flex-shrink-0 mt-0.5">
        <circle cx="6.5" cy="6.5" r="6" stroke={PURPLE} strokeOpacity="0.35"/>
        <path d="M4 6.5l1.7 1.7 3-3.4" stroke={PURPLE_LIGHT} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>{text}</span>
    </div>
  );
}

/* ── Deliverable chip ── */
function DeliverableChip({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full"
      style={{
        background: "rgba(124,58,237,0.08)",
        border: "1px solid rgba(124,58,237,0.2)",
        color: "rgba(255,255,255,0.6)",
      }}>
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
        <path d="M1.5 4.5l2 2L7 2.5" stroke={PURPLE_LIGHT} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
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
  const steps = tx.steps; // 5 steps
  const N     = steps.length;

  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [desktop, setDesktop]       = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setDesktop(mq.matches);
    const fn = (e: MediaQueryListEvent) => setDesktop(e.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  /* ── Scroll tracking ── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const spring = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  /* ── Progress line ── */
  const lineH = useTransform(spring, [0, 1], ["0%", "100%"]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  /* ── Card X positions — 5 cards, transitions at T[1]=0.25, T[2]=0.5, T[3]=0.75 ── */
  // Card 0: visible from start, exits left at T[1]
  const c0x = useTransform(scrollYProgress,
    [0, T[1]-W, T[1]+W],
    ["0%", "0%", "-115%"]);
  // Card 1: enters right at T[1], exits left at T[2]
  const c1x = useTransform(scrollYProgress,
    [T[1]-W, T[1]+W, T[2]-W, T[2]+W],
    ["115%", "0%", "0%", "-115%"]);
  // Card 2: enters right at T[2], exits left at T[3]
  const c2x = useTransform(scrollYProgress,
    [T[2]-W, T[2]+W, T[3]-W, T[3]+W],
    ["115%", "0%", "0%", "-115%"]);
  // Card 3: enters right at T[3], exits left at T[4]-W
  const c3x = useTransform(scrollYProgress,
    [T[3]-W, T[3]+W, T[4]-W-0.01, T[4]],
    ["115%", "0%", "0%", "-115%"]);
  // Card 4: enters right at T[4]-ish, stays
  const c4x = useTransform(scrollYProgress,
    [T[3]+W, T[4]],
    ["115%", "0%"]);

  /* ── Card opacity ── */
  const c0op = useTransform(scrollYProgress, [0, T[1]-W, T[1]+W], [1, 1, 0]);
  const c1op = useTransform(scrollYProgress, [T[1]-W, T[1]+W, T[2]-W, T[2]+W], [0, 1, 1, 0]);
  const c2op = useTransform(scrollYProgress, [T[2]-W, T[2]+W, T[3]-W, T[3]+W], [0, 1, 1, 0]);
  const c3op = useTransform(scrollYProgress, [T[3]-W, T[3]+W, T[4]-W-0.01, T[4]], [0, 1, 1, 0]);
  const c4op = useTransform(scrollYProgress, [T[3]+W, T[4]], [0, 1]);

  const cardXs  = [c0x, c1x, c2x, c3x, c4x];
  const cardOps = [c0op, c1op, c2op, c3op, c4op];

  /* ── Active step for sidebar ── */
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (desktop) setActiveStep(Math.min(Math.floor(v * N), N - 1));
  });

  return (
    <section
      ref={sectionRef}
      id="surec"
      style={{
        height: desktop ? `${N * 100}vh` : "auto",
        position: "relative",
        background: "var(--surface)",
      }}
    >
      {/* ── MOBILE: stacked ── */}
      {!desktop && (
        <div className="section-pad">
          <div className="sep" />
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                style={{ color: PURPLE_LIGHT, opacity: 0.7 }}>
                {tx.heading}
              </p>
              <h2 className="text-3xl font-semibold"
                style={{ color: "var(--text)", letterSpacing: "-0.02em" }}>
                {tx.sub}
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              {steps.map((step, i) => {
                const Icon = ICONS[i] ?? ICONS[0];
                return (
                  <div key={i} className="rounded-2xl p-6"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: PURPLE_DIM, color: PURPLE }}>
                        <Icon />
                      </div>
                      <div className="flex-1 pt-1">
                        <span className="text-xs font-bold tabular-nums" style={{ color: PURPLE, opacity: 0.6 }}>{step.num}</span>
                        <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>{step.desc}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {step.bullets.map((b, j) => <Bullet key={j} text={b} />)}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {step.deliverables.map((d, j) => <DeliverableChip key={j} text={d} />)}
                    </div>
                    <div className="flex items-center justify-between pt-3"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                        style={{ background: PURPLE_DIM, color: PURPLE_LIGHT, border: `1px solid rgba(124,58,237,0.2)` }}>
                        {step.tag}
                      </div>
                      <span className="text-xs flex items-center gap-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                          <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" strokeWidth="1.1"/>
                          <path d="M5.5 3.5v2.2l1.3 0.9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                        </svg>
                        {step.duration}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── DESKTOP: sticky horizontal slide ── */}
      {desktop && (
        <div style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          background: "var(--surface)",
        }}>
          <div className="sep flex-shrink-0" />

          {/* Header */}
          <div className="flex-shrink-0 max-w-6xl mx-auto w-full px-8 pt-10 pb-4">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
              style={{ color: PURPLE_LIGHT, opacity: 0.7 }}>
              {tx.heading}
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold"
              style={{ color: "var(--text)", letterSpacing: "-0.025em" }}>
              {tx.sub}
            </h2>
          </div>

          {/* Body */}
          <div className="flex flex-1 overflow-hidden max-w-6xl mx-auto w-full px-8 pb-10">

            {/* ── Left: progress line + step list ── */}
            <div className="flex-shrink-0 flex flex-col justify-center pr-8" style={{ width: 210 }}>
              <div className="relative" style={{ paddingLeft: 4 }}>
                {/* Track */}
                <div className="absolute" style={{
                  left: 22, top: 22, width: 2,
                  height: "calc(100% - 44px)",
                  background: "rgba(124,58,237,0.1)", borderRadius: 2,
                }} />
                {/* Animated fill */}
                <div className="absolute overflow-hidden" style={{
                  left: 22, top: 22, width: 2,
                  height: "calc(100% - 44px)", borderRadius: 2,
                }}>
                  <motion.div style={{
                    position: "absolute", inset: 0,
                    background: `linear-gradient(180deg, ${PURPLE}, ${PURPLE_LIGHT})`,
                    originY: 0, scaleY: lineH,
                    boxShadow: `0 0 12px rgba(124,58,237,0.55)`,
                  }} />
                </div>

                {/* Step dots */}
                {steps.map((step, i) => {
                  const isActive    = i === activeStep;
                  const isCompleted = i < activeStep;
                  return (
                    <div key={i} className="flex items-center gap-4 py-4 relative z-10">
                      <motion.div
                        className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold"
                        animate={{
                          backgroundColor: isActive ? PURPLE : isCompleted ? "rgba(124,58,237,0.18)" : "rgba(124,58,237,0.06)",
                          borderColor: isActive ? PURPLE : isCompleted ? "rgba(124,58,237,0.5)" : "rgba(124,58,237,0.2)",
                          color: isActive ? "#fff" : PURPLE_LIGHT,
                          scale: isActive ? 1.1 : 1,
                          boxShadow: isActive
                            ? "0 0 0 5px rgba(124,58,237,0.12), 0 0 18px rgba(124,58,237,0.3)"
                            : "none",
                        }}
                        transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
                        style={{ border: "1.5px solid" }}
                      >
                        {isCompleted
                          ? <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                              <path d="M2.5 6.8l3 3 5-5.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          : step.num}
                      </motion.div>

                      <motion.p
                        className="text-sm font-semibold leading-tight"
                        animate={{ opacity: isActive ? 1 : isCompleted ? 0.5 : 0.28 }}
                        transition={{ duration: 0.3 }}
                        style={{ color: "var(--text)" }}
                      >
                        {step.title}
                      </motion.p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Right: sliding cards (RIGHT-IN / LEFT-OUT) ── */}
            <div className="flex-1 overflow-hidden flex items-center" style={{ position: "relative" }}>
              {steps.map((step, i) => {
                const Icon = ICONS[i] ?? ICONS[0];
                return (
                  <motion.div
                    key={i}
                    style={{
                      position: "absolute",
                      inset: 0,
                      x: cardXs[i],
                      opacity: cardOps[i],
                      display: "flex",
                      alignItems: "center",
                      padding: "0 1rem",
                    }}
                  >
                    {/* Card */}
                    <div
                      className="w-full rounded-3xl"
                      style={{
                        background: "rgba(255,255,255,0.035)",
                        border: `1px solid ${i === activeStep ? "rgba(124,58,237,0.32)" : "rgba(255,255,255,0.1)"}`,
                        boxShadow: i === activeStep
                          ? "0 24px 64px rgba(0,0,0,0.4), 0 4px 20px rgba(124,58,237,0.1)"
                          : "none",
                        maxHeight: "calc(100vh - 220px)",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        padding: "2rem 2.5rem",
                        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                      }}
                    >
                      {/* Top row: icon + ghost number */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                          style={{ background: PURPLE_DIM, color: PURPLE_LIGHT, flexShrink: 0 }}>
                          <Icon />
                        </div>
                        <p className="font-bold leading-none select-none"
                          style={{
                            fontSize: "clamp(3rem, 5vw, 5.5rem)",
                            letterSpacing: "-0.05em",
                            background: `linear-gradient(135deg, rgba(124,58,237,0.14), rgba(167,139,250,0.06))`,
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                          }}>
                          {step.num}
                        </p>
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold mb-2"
                        style={{ fontSize: "clamp(1.35rem, 2vw, 1.8rem)", color: "var(--text)", letterSpacing: "-0.025em" }}>
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm leading-relaxed mb-5"
                        style={{ color: "rgba(255,255,255,0.5)", maxWidth: "48ch" }}>
                        {step.desc}
                      </p>

                      {/* Activities label */}
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3"
                        style={{ color: PURPLE_LIGHT, opacity: 0.6 }}>
                        {lang === "tr" ? "Yapılacaklar" : "Activities"}
                      </p>

                      {/* Bullets — 2 col */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-5">
                        {step.bullets.map((b, j) => <Bullet key={j} text={b} />)}
                      </div>

                      {/* Deliverables */}
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-2.5"
                        style={{ color: PURPLE_LIGHT, opacity: 0.6 }}>
                        {lang === "tr" ? "Çıktılar" : "Deliverables"}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {step.deliverables.map((d, j) => <DeliverableChip key={j} text={d} />)}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 mt-auto"
                        style={{ borderTop: "1px solid rgba(124,58,237,0.12)" }}>
                        <div className="flex items-center gap-3">
                          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                            style={{ background: PURPLE_DIM, color: PURPLE_LIGHT, border: `1px solid rgba(124,58,237,0.2)` }}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <circle cx="5" cy="5" r="4" stroke={PURPLE} strokeWidth="1.2"/>
                              <path d="M5 3v2.5l1.5 1" stroke={PURPLE} strokeWidth="1.2" strokeLinecap="round"/>
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

                        {/* Dot nav */}
                        <div className="flex items-center gap-2">
                          {steps.map((_, j) => (
                            <div key={j} style={{
                              height: 4, borderRadius: 2,
                              background: j === i ? PURPLE : "rgba(124,58,237,0.2)",
                              width: j === i ? 20 : 4,
                              transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
                            }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
            style={{ opacity: hintOpacity }}
          >
            <p className="text-xs tracking-[0.18em] uppercase"
              style={{ color: "rgba(124,58,237,0.5)" }}>
              scroll
            </p>
            <motion.div
              style={{ width: 1, height: 24, borderRadius: 1, background: `linear-gradient(180deg, ${PURPLE}, transparent)` }}
              animate={{ scaleY: [0.1, 1, 0.1], originY: "top" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}
