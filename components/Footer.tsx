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
            { label: lang==="tr"?"Sıkça Sorulan Sorular":"FAQ", href:"/sss" },
            { label: lang==="tr"?"Vaka Çalışmaları":"Case Studies", href:"/vaka-calismalari/goldeneye-optik" },
            { label: "Blog", href:"/blog" },
          ].map((l) => (
            <a key={l.href} href={l.href} className="text-xs"
              style={{ color:"var(--text-muted)", transition:"color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color="var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color="var(--text-muted)")}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/aleynaayt%C3%BCrkkorkmaz" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-lg"
            style={{ color:"var(--text-muted)", background:"rgba(255,255,255,0.05)", border:"1px solid var(--border)", transition:"color 0.2s, background 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color="#60A5FA"; e.currentTarget.style.background="rgba(96,165,250,0.1)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color="var(--text-muted)"; e.currentTarget.style.background="rgba(255,255,255,0.05)"; }}>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M4.5 7.5v6M4.5 4.5v.01M7.5 13.5v-4a2 2 0 0 1 4 0v4M7.5 7.5v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="1.5" y="1.5" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="1.4"/>
            </svg>
          </a>
          <p className="text-xs" style={{ color:"var(--text-muted)" }}>
            © {new Date().getFullYear()} Aleyna Aytürk Korkmaz. {tx.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
