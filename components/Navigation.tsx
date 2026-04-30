"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

export default function Navigation() {
  const { lang, toggle } = useLang();
  const tx = t[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const onMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.28;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.28;
    btn.style.transform = `translate(${dx}px,${dy}px) scale(1.04)`;
  }, []);

  const onLeave = useCallback(() => {
    if (btnRef.current) btnRef.current.style.transform = "";
  }, []);

  const links = [
    { label: tx.services, href: "#hizmetler" },
    { label: tx.howIWork, href: "#surec" },
    { label: tx.about,    href: "#hakkimda" },
    { label: tx.contact,  href: "#iletisim" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: "background 0.4s ease, box-shadow 0.4s ease",
        background: scrolled ? "rgba(250,248,244,0.92)" : "rgba(253,249,242,0)",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(180,155,110,0.15)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex-shrink-0 text-base font-semibold tracking-wide" style={{ color: "var(--text)" }}>
          Aytürk Korkmaz
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium"
              style={{ color: "var(--text)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={toggle}
            className="text-xs font-semibold tracking-widest px-2.5 py-1 rounded"
            style={{ color: "var(--text-muted)", border: "1px solid var(--border)", transition: "background 0.2s, color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface)"; e.currentTarget.style.color = "var(--text)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-muted)"; }}>
            {lang === "tr" ? "EN" : "TR"}
          </button>

          <a ref={btnRef} href="#iletisim"
            className="btn-gold inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full"
            style={{ background: "var(--gold)", color: "#fff", transition: "transform 0.45s cubic-bezier(0.23,1,0.32,1), box-shadow 0.45s cubic-bezier(0.23,1,0.32,1)" }}
            onMouseMove={onMove} onMouseLeave={onLeave}>
            {tx.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="cta-arrow"
              style={{ transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1)" }}>
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggle} className="text-xs font-semibold tracking-widest px-2 py-1 rounded"
            style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}>
            {lang === "tr" ? "EN" : "TR"}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 p-1">
            {[0, 1, 2].map((i) => (
              <span key={i} className="block w-5 h-px" style={{
                background: "var(--text)",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen ? (i===0?"rotate(45deg) translate(2px,2px)":i===2?"rotate(-45deg) translate(2px,-2px)":"none") : "none",
                opacity: menuOpen && i===1 ? 0 : 1,
              }}/>
            ))}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(250,248,244,0.97)", borderTop: "1px solid var(--border)", backdropFilter: "blur(20px)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-base font-medium py-1" style={{ color: "var(--text-muted)" }}>
              {l.label}
            </a>
          ))}
          <a href="#iletisim" onClick={() => setMenuOpen(false)}
            className="btn-gold text-sm font-semibold px-5 py-3 rounded-full text-center mt-2"
            style={{ background: "var(--gold)", color: "#fff" }}>
            {tx.cta}
          </a>
        </div>
      )}
      <style>{`.btn-gold:hover .cta-arrow { transform: translateX(4px); }`}</style>
    </header>
  );
}
