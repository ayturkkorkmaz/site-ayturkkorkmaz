"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

const EMAIL = "ayturkkorkmazz@gmail.com";

export default function Contact() {
  const { lang } = useLang();
  const tx = t[lang].contact;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const channels = [
    {
      label:"E-posta", value:EMAIL, href:`mailto:${EMAIL}`,
      color:"rgba(255,255,255,0.85)", bg:"rgba(255,255,255,0.07)",
      icon:(
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="iletisim" className="section-pad" style={{ background: "var(--bg)" }}>
      <div className="sep" />
      <div ref={ref as React.RefObject<HTMLDivElement>}
        className="reveal-group max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

        {/* Left */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color:"rgba(255,255,255,0.45)" }}>
            {lang==="tr"?"İletişim":"Contact"}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6"
            style={{ color:"var(--text)", letterSpacing:"-0.02em" }}>
            {tx.heading}
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color:"var(--text-muted)" }}>{tx.sub}</p>

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl mb-8"
            style={{ background:"var(--surface)", border:"1px solid var(--border)" }}>
            <div className="w-2 h-2 rounded-full" style={{ background:"#22c55e", boxShadow:"0 0 6px #22c55e" }}/>
            <span className="text-sm" style={{ color:"var(--text-muted)" }}>{tx.reply}</span>
          </div>

          <div className="flex flex-col gap-3">
            {channels.map((ch, i) => (
              <a key={i} href={ch.href}
                target={"external" in ch ? "_blank" : undefined}
                rel={"external" in ch ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-2xl card-lift"
                style={{ background:"var(--surface)", border:"1px solid var(--border)", textDecoration:"none" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background:ch.bg, color:ch.color }}>{ch.icon}</div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color:"var(--text-muted)" }}>{ch.label}</p>
                  <p className="text-sm font-medium" style={{ color:ch.color }}>{ch.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right — Google Calendar */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color:"rgba(255,255,255,0.45)" }}>
            {lang==="tr"?"Randevu Al":"Book a Meeting"}
          </p>
          <h3 className="text-2xl font-semibold mb-4" style={{ color:"var(--text)", letterSpacing:"-0.02em" }}>
            {lang==="tr"?"Takvimden uygun bir zaman seç" : "Pick a time that works for you"}
          </h3>
          <p className="text-sm leading-relaxed mb-6" style={{ color:"var(--text-muted)" }}>
            {lang==="tr"
              ? "Doğrudan takvimimden müsait bir slot seç, görüşelim."
              : "Select an available slot directly from my calendar and let's talk."}
          </p>
          <div className="rounded-2xl overflow-hidden" style={{ border:"1px solid var(--border)", background:"#000" }}>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ew4Cqu3WlbaQU1NnrAsoJ2HfUzdyCzN-0hj1qEXhnDXvQgKb7SkMUi4xQojfdCB9D4fxtQtWI?gv=true"
              style={{
                border: 0,
                display: "block",
                filter: "invert(1) hue-rotate(180deg)",
              }}
              width="100%"
              height="600"
              frameBorder="0"
              title={lang==="tr"?"Randevu Takvimi":"Appointment Calendar"}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
