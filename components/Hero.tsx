"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

const StarField = dynamic(() => import("@/components/StarField"), { ssr: false });

/* ── Hero ── */
export default function Hero() {
  const { lang } = useLang();
  const tx = t[lang].hero;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(id);
  }, []);

  const words = tx.title.split(" ");

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#04060f" }}>

      <StarField />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1,
        background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 30%, rgba(4,6,15,0.75) 100%)",
      }} />

      {/* Content — single centred column */}
      <div className="flex-1 flex items-center justify-center relative" style={{ zIndex: 2 }}>
        <div className="max-w-3xl mx-auto w-full px-6 py-28 lg:py-32 flex flex-col items-start">

          {/* Badge */}
          <div style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.65s cubic-bezier(0.23,1,0.32,1) 0.1s",
          }} className="inline-flex mb-8">
            <span className="text-xs font-medium tracking-[0.14em] px-4 py-1.5 rounded-full"
              style={{
                color: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(8px)",
              }}>
              {tx.badge}
            </span>
          </div>

          {/* Name */}
          <p className="text-sm font-medium tracking-[0.18em] uppercase mb-4"
            style={{
              color: "rgba(255,255,255,0.4)",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.6s ease 0.25s, transform 0.65s cubic-bezier(0.23,1,0.32,1) 0.25s",
            }}>
            {tx.name}
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
            style={{ letterSpacing: "-0.025em" }}>
            {words.map((word, i) => {
              const isGold = word === "Dijital" || word === "Digital";
              const isAmp  = word === "&";
              return (
                <span key={`${lang}-${i}`}
                  className={isGold ? "gold-text hero-word" : "hero-word"}
                  style={{
                    color: isAmp ? "#60A5FA" : isGold ? undefined : "rgba(255,255,255,0.95)",
                    animationDelay: `${0.4 + i * 0.08}s`,
                    marginRight: i < words.length - 1 ? "0.26em" : 0,
                    animationPlayState: mounted ? "running" : "paused",
                  }}>
                  {word}
                </span>
              );
            })}
          </h1>

          {/* Tagline */}
          <p className="text-lg font-light mb-10 leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.55)",
              maxWidth: "44ch",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(14px)",
              transition: `opacity 0.7s ease ${0.4 + words.length * 0.08 + 0.15}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${0.4 + words.length * 0.08 + 0.15}s`,
            }}>
            {tx.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(14px)",
              transition: `opacity 0.7s ease ${0.4 + words.length * 0.08 + 0.3}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${0.4 + words.length * 0.08 + 0.3}s`,
            }}>
            <a href="#iletisim"
              className="btn-gold inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-full"
              style={{ background: "#2563EB", color: "#fff" }}>
              {tx.cta1}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#hizmetler"
              className="btn-outline text-sm font-medium px-8 py-3.5 rounded-full"
              style={{
                color: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(8px)",
              }}>
              {tx.cta2}
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
