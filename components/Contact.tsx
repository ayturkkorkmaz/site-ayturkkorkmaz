"use client";
import { useState, useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

const EMAIL = "ayturkkorkmazz@gmail.com";
const PHONE = "+90 0552 350 7807";
const WP    = "905523507807";

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

  const [form, setForm]     = useState({ name:"", email:"", message:"" });
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method:"POST", headers:{"Content-Type":"application/json", Accept:"application/json"},
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({name:"",email:"",message:""}); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inp: React.CSSProperties = {
    background:"var(--surface)", border:"1px solid var(--border)", color:"var(--text)",
    borderRadius:"10px", padding:"12px 16px", fontSize:"14px", width:"100%",
    outline:"none", transition:"border-color 0.2s",
  };

  const channels = [
    {
      label:"E-posta", value:EMAIL, href:`mailto:${EMAIL}`,
      color:"var(--gold)", bg:"var(--gold-dim)",
      icon:(
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      label:"Telefon", value:PHONE, href:`tel:${PHONE.replace(/\s/g,"")}`,
      color:"var(--text)", bg:"var(--surface-2)",
      icon:(
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 3h3.5l1.5 3.5-2 1.2a9.8 9.8 0 004.3 4.3l1.2-2L15 11.5V15a1 1 0 01-1 1C6.3 16 2 11.7 2 4a1 1 0 011-1z"
            stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label:"WhatsApp", value:lang==="tr"?"Hızlıca yaz":"Message now",
      href:`https://wa.me/${WP}`, external:true,
      color:"#16a34a", bg:"rgba(37,211,102,0.1)",
      icon:(
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.476.652 4.797 1.793 6.804L2 30l7.374-1.77A13.936 13.936 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
          <path d="M22.5 19.57c-.3-.15-1.77-.873-2.046-.972-.274-.1-.473-.15-.673.15-.199.3-.773.972-.948 1.172-.174.199-.349.224-.648.075-.3-.15-1.266-.467-2.412-1.488-.891-.795-1.493-1.776-1.668-2.076-.174-.3-.018-.462.13-.61.134-.135.3-.35.45-.524.15-.175.2-.3.3-.5.1-.2.05-.374-.025-.524-.075-.15-.673-1.623-.923-2.222-.242-.583-.489-.504-.673-.513l-.573-.01c-.2 0-.523.075-.797.374-.274.3-1.047 1.023-1.047 2.497 0 1.473 1.072 2.896 1.221 3.096.15.2 2.11 3.22 5.113 4.516.715.31 1.273.495 1.707.633.718.229 1.372.197 1.889.119.576-.086 1.773-.725 2.023-1.424.25-.7.25-1.298.175-1.423-.074-.124-.274-.2-.573-.35z" fill="white"/>
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
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color:"var(--gold)" }}>
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

        {/* Right */}
        <div>
          {status==="success" ? (
            <div className="flex flex-col items-center justify-center min-h-[340px] rounded-2xl p-10 text-center"
              style={{ background:"var(--surface)", border:"1px solid rgba(201,168,76,0.2)" }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                style={{ background:"var(--gold-dim)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-base font-medium" style={{ color:"var(--text)" }}>{tx.success}</p>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-4">
              {[{key:"name",label:tx.name,type:"text"},{key:"email",label:tx.email,type:"email"}].map((f) => (
                <div key={f.key}>
                  <label className="block text-xs mb-2" style={{ color:"var(--text-muted)" }}>{f.label}</label>
                  <input type={f.type} required value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({...form,[f.key]:e.target.value})} style={inp}
                    onFocus={(e) => (e.currentTarget.style.borderColor="rgba(201,168,76,0.5)")}
                    onBlur={(e)  => (e.currentTarget.style.borderColor="var(--border)")}/>
                </div>
              ))}
              <div>
                <label className="block text-xs mb-2" style={{ color:"var(--text-muted)" }}>{tx.message}</label>
                <textarea required rows={5} value={form.message}
                  onChange={(e) => setForm({...form,message:e.target.value})}
                  style={{...inp,resize:"none"}}
                  onFocus={(e) => (e.currentTarget.style.borderColor="rgba(201,168,76,0.5)")}
                  onBlur={(e)  => (e.currentTarget.style.borderColor="var(--border)")}/>
              </div>
              {status==="error" && <p className="text-xs text-red-500">{tx.error}</p>}
              <button type="submit" disabled={status==="sending"}
                className="btn-gold text-sm font-semibold py-3.5 rounded-full mt-2"
                style={{ background:status==="sending"?"rgba(201,168,76,0.4)":"var(--gold)", color:"#fff", cursor:status==="sending"?"not-allowed":"pointer" }}>
                {status==="sending"?tx.sending:tx.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
