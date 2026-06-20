"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

const serviceLinks = [
  { labelTr: "SEO", labelEn: "SEO", href: "/hizmetler/seo" },
  { labelTr: "GEO", labelEn: "GEO", href: "/hizmetler/geo" },
  { labelTr: "AI Otomasyon", labelEn: "AI Automation", href: "/hizmetler/ai-otomasyon" },
  { labelTr: "Web Geliştirme", labelEn: "Web Dev", href: "/hizmetler/web-gelistirme" },
];

export default function Navigation() {
  const { lang, toggle } = useLang();
  const tx = t[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
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

  const openDrop = () => {
    if (dropTimer.current) clearTimeout(dropTimer.current);
    setDropOpen(true);
  };
  const closeDrop = () => {
    dropTimer.current = setTimeout(() => setDropOpen(false), 150);
  };

  const topLinks = [
    { label: tx.howIWork, href: "#surec" },
    { label: tx.about, href: "#hakkimda" },
    { label: tx.contact, href: "#iletisim" },
  ];

  const textColor = "rgba(255,255,255,0.82)";
  const textMuted = "rgba(255,255,255,0.4)";
  const borderColor = "rgba(255,255,255,0.16)";
  const logoColor = "#ffffff";
  const hoverColor = "#ffffff";
  const ctaBg = "#2563EB";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: "background 0.5s ease, box-shadow 0.5s ease",
        background: scrolled
          ? "rgba(4,6,15,0.9)"
          : "linear-gradient(180deg, rgba(4,6,15,0.65) 0%, rgba(4,6,15,0) 100%)",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.07)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex-shrink-0 text-sm font-semibold tracking-[0.08em]"
          style={{ color: logoColor, transition: "color 0.4s ease", letterSpacing: "0.04em" }}
        >
          Aytürk Korkmaz
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {/* Hizmetler dropdown */}
          <div
            className="relative"
            onMouseEnter={openDrop}
            onMouseLeave={closeDrop}
          >
            <button
              className="text-sm font-medium inline-flex items-center gap-1"
              style={{ color: textColor, transition: "color 0.3s ease", letterSpacing: "0.01em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
              onClick={() => setDropOpen((v) => !v)}
            >
              {tx.services}
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                style={{
                  transition: "transform 0.25s ease",
                  transform: dropOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                paddingTop: "8px",
                opacity: dropOpen ? 1 : 0,
                pointerEvents: dropOpen ? "auto" : "none",
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
            >
              <div
                className="rounded-xl py-2"
                style={{
                  background: "rgba(4,6,15,0.95)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  minWidth: "180px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                }}
              >
                {serviceLinks.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm font-medium"
                    style={{ color: textMuted, transition: "color 0.2s, background 0.2s" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = textMuted;
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {lang === "tr" ? s.labelTr : s.labelEn}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Other top-level links */}
          {topLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium"
              style={{ color: textColor, transition: "color 0.3s ease", letterSpacing: "0.01em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-xs font-semibold tracking-widest px-2.5 py-1 rounded"
            style={{
              color: textMuted,
              border: `1px solid ${borderColor}`,
              transition: "background 0.2s, color 0.2s, border-color 0.4s",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = textMuted;
            }}
          >
            {lang === "tr" ? "EN" : "TR"}
          </button>

          <a
            ref={btnRef}
            href="#iletisim"
            className="btn-gold inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full"
            style={{
              background: ctaBg,
              color: "#fff",
              transition:
                "transform 0.45s cubic-bezier(0.23,1,0.32,1), box-shadow 0.45s cubic-bezier(0.23,1,0.32,1), background 0.4s ease",
            }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
          >
            {tx.cta}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="cta-arrow"
              style={{ transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1)" }}
            >
              <path
                d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            className="text-xs font-semibold tracking-widest px-2 py-1 rounded"
            style={{ color: textMuted, border: `1px solid ${borderColor}`, transition: "color 0.4s, border-color 0.4s" }}
          >
            {lang === "tr" ? "EN" : "TR"}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 p-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-5 h-px"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  transition: "transform 0.3s ease, opacity 0.3s ease, background 0.4s ease",
                  transform: menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(2px,2px)"
                      : i === 2
                        ? "rotate(-45deg) translate(2px,-2px)"
                        : "none"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{
            background: "rgba(4,6,15,0.97)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Hizmetler accordion */}
          <button
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="text-base font-medium py-1 flex items-center justify-between w-full text-left"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {tx.services}
            <svg
              width="12"
              height="12"
              viewBox="0 0 10 10"
              fill="none"
              style={{
                transition: "transform 0.25s ease",
                transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {mobileServicesOpen && (
            <div className="flex flex-col gap-3 pl-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
              {serviceLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium py-0.5"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {lang === "tr" ? s.labelTr : s.labelEn}
                </a>
              ))}
            </div>
          )}

          {/* Other links */}
          {topLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium py-1"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {l.label}
            </a>
          ))}

          <a
            href="#iletisim"
            onClick={() => setMenuOpen(false)}
            className="btn-gold text-sm font-semibold px-5 py-3 rounded-full text-center mt-2"
            style={{ background: "var(--gold)", color: "#fff" }}
          >
            {tx.cta}
          </a>
        </div>
      )}
      <style>{`.btn-gold:hover .cta-arrow { transform: translateX(4px); }`}</style>
    </header>
  );
}
