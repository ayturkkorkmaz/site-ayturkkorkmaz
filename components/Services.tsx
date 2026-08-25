"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

/* ── Service images mapping ── */
const serviceImages: Record<string, { src: string; alt: string }> = {
  seoGeo: { src: "/service-seo-geo.jpeg", alt: "SEO & GEO Hizmetleri" },
  crm: { src: "/service-crm.jpeg", alt: "CRM Sistemleri" },
  digitalClone: { src: "/service-dijital-klon.jpeg", alt: "Dijital Klon" },
  assistant: { src: "/service-kisisel-asistan.jpeg", alt: "Kişisel Asistan" },
  web: { src: "/service-web.jpeg", alt: "Web Sitesi Geliştirme" },
  visibility: { src: "/service-dijital-gorunurluk.jpeg", alt: "Dijital Görünürlük" },
};

export default function Services() {
  const { lang } = useLang();
  const tx = t[lang].services;
  const headRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.15 }
    );
    if (headRef.current) obs.observe(headRef.current);
    itemRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const links: Record<string, string> = {
    seoGeo: "/hizmetler/seo-geo",
    crm: "/hizmetler/crm",
    digitalClone: "/hizmetler/dijital-klon",
    assistant: "/hizmetler/kisisel-asistan",
    web: "/hizmetler/web-gelistirme",
    visibility: "/hizmetler/dijital-gorunurluk",
  };

  return (
    <section id="hizmetler" className="section-pad" style={{ background: "var(--surface)" }}>
      <div className="sep mb-0" />
      <div className="max-w-6xl mx-auto pt-2">
        {/* Header */}
        <div ref={headRef as React.RefObject<HTMLDivElement>} className="reveal mb-16 md:mb-20 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>
            {tx.heading}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4" style={{ color: "var(--text)", letterSpacing: "-0.02em" }}>
            {tx.sub}
          </h2>
        </div>

        {/* Zigzag services */}
        <div className="flex flex-col gap-20 md:gap-28">
          {tx.items.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                ref={el => { itemRefs.current[i] = el; }}
                className={`reveal flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-16`}
              >
                {/* Illustration */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <div className="rounded-2xl overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
                    {serviceImages[item.icon] && (
                      <Image
                        src={serviceImages[item.icon].src}
                        alt={serviceImages[item.icon].alt}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    )}
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "var(--text)", letterSpacing: "-0.02em" }}>
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                    {item.desc}
                  </p>
                  <span className="text-xs font-medium px-3 py-1.5 rounded-full inline-block mb-6"
                    style={{ color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    {item.for}
                  </span>
                  <div>
                    <a href={links[item.icon] || "#"}
                      className="inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: "#60A5FA", textDecoration: "none" }}>
                      {lang === "tr" ? "Detaylı Bilgi" : "Learn More"}
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
