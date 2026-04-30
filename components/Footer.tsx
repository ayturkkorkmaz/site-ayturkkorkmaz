"use client";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const tx = t[lang].footer;

  return (
    <footer className="px-6 py-10" style={{ background:"var(--surface)", borderTop:"1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <nav className="flex items-center gap-6 flex-wrap justify-center">
          {[
            { label: lang==="tr"?"Hizmetler":"Services", href:"#hizmetler" },
            { label: lang==="tr"?"Süreç":"Process",      href:"#surec" },
            { label: lang==="tr"?"Hakkımda":"About",     href:"#hakkimda" },
            { label: lang==="tr"?"İletişim":"Contact",   href:"#iletisim" },
          ].map((l) => (
            <a key={l.href} href={l.href} className="text-xs"
              style={{ color:"var(--text-muted)", transition:"color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color="var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color="var(--text-muted)")}>
              {l.label}
            </a>
          ))}
        </nav>
        <p className="text-xs" style={{ color:"var(--text-muted)" }}>
          © {new Date().getFullYear()} Aleyna Aytürk Korkmaz. {tx.rights}
        </p>
      </div>
    </footer>
  );
}
