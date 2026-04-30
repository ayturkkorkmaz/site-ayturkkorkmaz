"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLang();
  const tx = t[lang].hero;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const words = tx.title.split(" ");

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Krem zemin gradient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(160deg, #fdf9f2 0%, #f8f0e3 40%, #f3e8d4 100%)",
        }}
      />

      {/* Yumuşak amber orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-1 absolute rounded-full"
          style={{
            width: "520px", height: "520px",
            top: "-100px", left: "-100px",
            background: "radial-gradient(circle, rgba(201,155,60,0.14) 0%, transparent 65%)",
            filter: "blur(55px)",
          }}
        />
        <div className="orb-2 absolute rounded-full"
          style={{
            width: "400px", height: "400px",
            bottom: "-60px", right: "-80px",
            background: "radial-gradient(circle, rgba(180,130,40,0.1) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Dot grid — krem tonlu */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(150,110,50,0.1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Badge */}
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(14px)",
          transition: "opacity 0.6s ease 0.1s, transform 0.65s cubic-bezier(0.23,1,0.32,1) 0.1s",
        }} className="inline-flex mb-8">
          <span className="text-xs font-medium tracking-[0.2em] px-4 py-1.5 rounded-full uppercase"
            style={{
              color: "var(--text-muted)",
              border: "1px solid rgba(180,155,110,0.25)",
              background: "rgba(237,229,216,0.6)",
              backdropFilter: "blur(8px)",
            }}>
            {tx.badge}
          </span>
        </div>

        {/* Name */}
        <p className="text-sm font-medium tracking-[0.18em] uppercase mb-4"
          style={{
            color: "var(--text-muted)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.6s ease 0.25s, transform 0.65s cubic-bezier(0.23,1,0.32,1) 0.25s",
          }}>
          {tx.name}
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
          style={{ letterSpacing: "-0.025em" }}>
          {words.map((word, i) => {
            const isGold = word === "Dijital" || word === "Digital";
            const isAmp  = word === "&";
            return (
              <span key={`${lang}-${i}`}
                className={isGold ? "gold-text hero-word" : "hero-word"}
                style={{
                  color: isAmp ? "var(--gold)" : isGold ? undefined : "var(--text)",
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
        <p className="text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed"
          style={{
            color: "var(--text-muted)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(14px)",
            transition: `opacity 0.7s ease ${0.4+words.length*0.08+0.15}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${0.4+words.length*0.08+0.15}s`,
          }}>
          {tx.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(14px)",
            transition: `opacity 0.7s ease ${0.4+words.length*0.08+0.3}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${0.4+words.length*0.08+0.3}s`,
          }}>
          <a href="#iletisim"
            className="btn-gold inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-full"
            style={{ background: "var(--gold)", color: "#fff" }}>
            {tx.cta1}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#hizmetler"
            className="btn-outline text-sm font-medium px-8 py-3.5 rounded-full"
            style={{ color: "var(--text)", border: "1px solid rgba(180,155,110,0.35)", background: "rgba(253,249,242,0.6)" }}>
            {tx.cta2}
          </a>
        </div>
      </div>

    </section>
  );
}
