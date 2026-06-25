"use client";

import { useState } from "react";
import { useLang } from "@/lib/LangContext";
import { useReveal } from "@/lib/useReveal";

/* ── Reveal wrapper ── */
function R({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return <section ref={ref as React.RefObject<HTMLElement>} className={`reveal ${className}`}>{children}</section>;
}

export default function CrmContent() {
  const { lang } = useLang();
  const tr = lang === "tr";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-20">

      {/* ════════════════════════════════════════════
          HERO — sol hizalı, editoryal serif
          ════════════════════════════════════════════ */}
      <R className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="lg:w-7/12">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider mb-8"
              style={{ background: "rgba(37,99,235,0.08)", color: "var(--accent-2)", border: "1px solid rgba(37,99,235,0.15)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              CRM SİSTEMLERİ
            </div>

            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl italic leading-[1.05] tracking-tight mb-7"
              style={{ color: "var(--text)" }}
            >
              {tr ? (
                <>Müşterilerinizi<br/><span style={{ color: "var(--accent-2)" }}>tanıyın, takip edin,</span><br/>büyütün.</>
              ) : (
                <>Know your customers,<br/><span style={{ color: "var(--accent-2)" }}>track, and</span><br/>grow them.</>
              )}
            </h1>

            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: "var(--text-muted)" }}>
              {tr
                ? "Excel tabloları ve yapışkan notlarla müşteri takibi devri bitti. HubSpot, Salesforce veya Zoho — hangisi sizin için doğruysa onu kuruyor, ekibinizi eğitiyor, süreçlerinizi otomatikleştiriyorum."
                : "The era of tracking customers with spreadsheets and sticky notes is over. HubSpot, Salesforce or Zoho — I set up whichever is right for you, train your team, and automate your processes."}
            </p>

            <a
              href="/#iletisim"
              className="btn-gold inline-flex items-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-full mt-8"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              {tr ? "Ücretsiz Analiz" : "Free Analysis"}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          {/* Sağ: rakamlar */}
          <div className="lg:w-5/12 w-full grid grid-cols-2 gap-3">
            {[
              { num: "3x", label: tr ? "Daha hızlı müşteri yanıtı" : "Faster customer response" },
              { num: "%40", label: tr ? "Satış dönüşüm artışı" : "Sales conversion increase" },
              { num: "0", label: tr ? "Kaçırılan takip" : "Missed follow-ups" },
              { num: "7/24", label: tr ? "Otomasyon çalışır" : "Automation works" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 flex flex-col justify-between"
                style={{
                  background: i === 0 ? "rgba(37,99,235,0.06)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${i === 0 ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.06)"}`,
                  minHeight: i < 2 ? "130px" : "110px",
                }}
              >
                <span
                  className="font-display text-3xl md:text-4xl italic"
                  style={{ color: i === 0 ? "var(--accent-2)" : "var(--text)" }}
                >
                  {stat.num}
                </span>
                <span className="text-xs mt-2 leading-snug" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </R>

      {/* ════════════════════════════════════════════
          SORUN → ÇÖZÜM
          ════════════════════════════════════════════ */}
      <div style={{ background: "var(--surface)" }}>
        <R className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Sol: Sorun */}
            <div className="p-8 md:p-10 md:border-r" style={{ borderColor: "var(--border)" }}>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase" style={{ color: "#f87171" }}>
                {tr ? "Sorun" : "Problem"}
              </span>
              <h2
                className="font-display text-3xl md:text-4xl italic mt-4 mb-6"
                style={{ color: "var(--text)" }}
              >
                {tr ? "Müşteri verisi her yerde dağınık" : "Customer data scattered everywhere"}
              </h2>
              <ul className="space-y-3">
                {(tr
                  ? [
                    "Satış fırsatları Excel'de kayboluyor",
                    "Kim kime ne söyledi, kimse bilmiyor",
                    "Takip aramaları unutuluyor",
                    "Raporlama saatler alıyor",
                  ]
                  : [
                    "Sales leads get lost in spreadsheets",
                    "Nobody knows who said what to whom",
                    "Follow-up calls get forgotten",
                    "Reporting takes hours",
                  ]
                ).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0">
                      <path d="M4 8h8" stroke="#f87171" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sağ: Çözüm */}
            <div className="p-8 md:p-10">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase" style={{ color: "#34d399" }}>
                {tr ? "Çözüm" : "Solution"}
              </span>
              <h2
                className="font-display text-3xl md:text-4xl italic mt-4 mb-6"
                style={{ color: "var(--text)" }}
              >
                {tr ? "Tek platform, tam kontrol" : "Single platform, full control"}
              </h2>
              <ul className="space-y-3">
                {(tr
                  ? [
                    "Tüm müşteri verileri tek ekranda",
                    "Otomatik hatırlatma ve takip akışları",
                    "Ekip içi şeffaf iletişim kaydı",
                    "Tek tıkla performans raporları",
                  ]
                  : [
                    "All customer data on one screen",
                    "Automatic reminders and follow-up flows",
                    "Transparent team communication log",
                    "One-click performance reports",
                  ]
                ).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0">
                      <path d="M4 8l2.5 2.5L12 5" stroke="#34d399" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </R>
      </div>

      {/* ════════════════════════════════════════════
          NE YAPIYORUM — asimetrik bento grid
          ════════════════════════════════════════════ */}
      <R className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase block mb-3" style={{ color: "var(--accent-2)" }}>
              {tr ? "Hizmet kapsamı" : "Scope of service"}
            </span>
            <h2 className="font-display text-3xl md:text-4xl italic" style={{ color: "var(--text)" }}>
              {tr ? "Kurulumdan eğitime, uçtan uca." : "End to end, from setup to training."}
            </h2>
          </div>
          <p className="text-sm max-w-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {tr
              ? "Her işletmenin CRM ihtiyacı farklıdır. Süreci sizin operasyonunuza göre şekillendiriyorum."
              : "Every business has different CRM needs. I shape the process according to your operation."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Büyük kart — sol */}
          <div
            className="md:col-span-2 rounded-2xl p-7 md:p-9 relative overflow-hidden group"
            style={{ background: "rgba(37,99,235,0.04)", border: "1px solid rgba(37,99,235,0.12)" }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-blue-500/[0.06] blur-[80px] group-hover:bg-blue-500/[0.1] transition-all duration-700" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase" style={{ color: "var(--accent-2)" }}>01</span>
            <h3 className="font-display text-2xl md:text-3xl italic mt-3 mb-3" style={{ color: "var(--text)" }}>
              {tr ? "CRM Kurulum & Özelleştirme" : "CRM Setup & Customization"}
            </h3>
            <p className="text-sm leading-relaxed max-w-lg" style={{ color: "var(--text-muted)" }}>
              {tr
                ? "HubSpot, Salesforce veya Zoho — hangi platform doğruysa onu seçiyoruz. Pipeline yapısı, özel alanlar, satış aşamaları ve otomasyon kurallarını sıfırdan konfigüre ediyorum."
                : "HubSpot, Salesforce or Zoho — we choose the right platform. I configure pipeline structure, custom fields, sales stages and automation rules from scratch."}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {(tr ? ["Pipeline Tasarımı", "Özel Alan Yapılandırması", "Otomasyon Kuralları"] : ["Pipeline Design", "Custom Field Config", "Automation Rules"]).map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-md text-[11px] font-mono" style={{ background: "rgba(37,99,235,0.08)", color: "var(--accent-2)", border: "1px solid rgba(37,99,235,0.15)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Küçük kart — sağ üst */}
          <div className="rounded-2xl p-6 flex flex-col justify-between" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-muted)" }}>02</span>
              <h3 className="font-display text-xl italic mt-3 mb-2" style={{ color: "var(--text)" }}>
                {tr ? "Veri Aktarımı" : "Data Migration"}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {tr ? "Mevcut müşteri verilerinizi temizliyor, eşleştiriyor ve yeni sisteme güvenle aktarıyorum." : "I clean, map and safely migrate your existing customer data to the new system."}
              </p>
            </div>
          </div>

          {/* Alt sol */}
          <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-muted)" }}>03</span>
            <h3 className="font-display text-xl italic mt-3 mb-2" style={{ color: "var(--text)" }}>
              {tr ? "Entegrasyonlar" : "Integrations"}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {tr ? "E-posta, takvim, muhasebe yazılımı ve diğer araçlarınızla CRM'i konuşturuyorum." : "I connect your CRM with email, calendar, accounting software and other tools."}
            </p>
          </div>

          {/* Alt orta + sağ — büyük */}
          <div
            className="md:col-span-2 rounded-2xl p-7 md:p-9 relative overflow-hidden group"
            style={{ background: "rgba(52,211,153,0.03)", border: "1px solid rgba(52,211,153,0.1)" }}
          >
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-emerald-500/[0.05] blur-[80px] group-hover:bg-emerald-500/[0.09] transition-all duration-700" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase" style={{ color: "#34d399" }}>04</span>
            <h3 className="font-display text-2xl md:text-3xl italic mt-3 mb-3" style={{ color: "var(--text)" }}>
              {tr ? "Ekip Eğitimi & Devam Eden Destek" : "Team Training & Ongoing Support"}
            </h3>
            <p className="text-sm leading-relaxed max-w-lg" style={{ color: "var(--text-muted)" }}>
              {tr
                ? "Sistemi kurmak yetmez — kullanılması gerekir. Ekibinize canlı eğitim, kullanıcı kılavuzu ve ilk 30 gün destek veriyorum. Takılırsanız yanınızdayım."
                : "Setting up the system isn't enough — it needs to be used. I provide live training, user guides and first 30 days support for your team."}
            </p>
          </div>
        </div>
      </R>

      {/* ════════════════════════════════════════════
          PLATFORM KARŞILAŞTIRMA
          ════════════════════════════════════════════ */}
      <div style={{ background: "var(--surface)" }}>
        <R className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl italic mb-3" style={{ color: "var(--text)" }}>
            {tr ? "Hangi CRM sana uygun?" : "Which CRM fits you?"}
          </h2>
          <p className="text-sm mb-10 max-w-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {tr ? "Üçünü de kuruyorum. Hangisini seçeceğimize birlikte karar verelim." : "I set up all three. Let's decide together which one to choose."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                name: "HubSpot",
                fit: tr ? "Küçük / Orta" : "Small / Medium",
                price: tr ? "Ücretsiz plan var" : "Free plan available",
                strong: tr ? "Kullanım kolaylığı, pazarlama otomasyonu" : "Ease of use, marketing automation",
                color: "#FF7A59",
              },
              {
                name: "Salesforce",
                fit: tr ? "Orta / Büyük" : "Medium / Large",
                price: tr ? "Kurumsal fiyatlandırma" : "Enterprise pricing",
                strong: tr ? "Ölçeklenebilirlik, derin özelleştirme" : "Scalability, deep customization",
                color: "#00A1E0",
              },
              {
                name: "Zoho CRM",
                fit: tr ? "Küçük / Orta" : "Small / Medium",
                price: tr ? "Uygun maliyet" : "Affordable",
                strong: tr ? "Fiyat-performans, Zoho ekosistemi" : "Price-performance, Zoho ecosystem",
                color: "#E42527",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-2xl p-6 md:p-7 group hover:scale-[1.02] transition-transform duration-300"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full" style={{ background: p.color }} />
                  <span className="font-display text-2xl italic" style={{ color: "var(--text)" }}>{p.name}</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.15em] block mb-1" style={{ color: "var(--text-muted)" }}>
                      {tr ? "Uygun ölçek" : "Best fit"}
                    </span>
                    <span className="text-sm font-medium" style={{ color: "var(--text)" }}>{p.fit}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.15em] block mb-1" style={{ color: "var(--text-muted)" }}>
                      {tr ? "Fiyatlandırma" : "Pricing"}
                    </span>
                    <span className="text-sm font-medium" style={{ color: "var(--text)" }}>{p.price}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.15em] block mb-1" style={{ color: "var(--text-muted)" }}>
                      {tr ? "Güçlü yanı" : "Strength"}
                    </span>
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>{p.strong}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </R>
      </div>

      {/* ════════════════════════════════════════════
          SÜREÇ — yatay timeline
          ════════════════════════════════════════════ */}
      <R className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-4xl italic mb-14" style={{ color: "var(--text)" }}>
          {tr ? "Nasıl ilerliyor?" : "How it works"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Yatay çizgi — sadece desktop */}
          <div className="hidden md:block absolute top-6 left-[16.67%] right-[16.67%] h-px" style={{ background: "var(--border)" }} />

          {[
            {
              step: "01",
              title: tr ? "Keşif & Analiz" : "Discovery & Analysis",
              desc: tr ? "Mevcut süreçlerinizi anlıyorum. Hangi CRM doğru, hangi entegrasyonlar gerekli — birlikte karar veriyoruz." : "I understand your current processes. Which CRM is right, which integrations are needed — we decide together.",
              time: tr ? "1–2 gün" : "1–2 days",
            },
            {
              step: "02",
              title: tr ? "Kurulum & Aktarım" : "Setup & Migration",
              desc: tr ? "Platformu kuruyor, özelleştiriyor, mevcut verilerinizi temizleyip aktarıyorum. Entegrasyonları bağlıyorum." : "I set up the platform, customize it, clean and migrate your data. I connect integrations.",
              time: tr ? "1–3 hafta" : "1–3 weeks",
            },
            {
              step: "03",
              title: tr ? "Eğitim & Devreye Alma" : "Training & Go-Live",
              desc: tr ? "Ekibinize eğitim, ilk 30 gün destek. Raporlama dashboard'ı hazırlıyorum. Sistem canlıya alınıyor." : "Team training, first 30 days support. I prepare the reporting dashboard. System goes live.",
              time: tr ? "1 hafta + destek" : "1 week + support",
            },
          ].map((item, i) => (
            <div key={i} className="relative px-0 md:px-6 pb-10 md:pb-0">
              {/* Nokta */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-mono mb-5 relative z-10"
                style={{
                  background: i === 0 ? "rgba(37,99,235,0.12)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${i === 0 ? "rgba(37,99,235,0.3)" : "rgba(255,255,255,0.08)"}`,
                  color: i === 0 ? "var(--accent-2)" : "var(--text-muted)",
                }}
              >
                {item.step}
              </div>

              <h3 className="font-display text-xl italic mb-2" style={{ color: "var(--text)" }}>{item.title}</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md" style={{ background: "rgba(255,255,255,0.04)", color: "var(--text-muted)", border: "1px solid rgba(255,255,255,0.06)" }}>
                {item.time}
              </span>

              {/* Dikey çizgi — sadece mobilde */}
              {i < 2 && (
                <div className="md:hidden absolute left-6 top-12 w-px h-full" style={{ background: "var(--border)" }} />
              )}
            </div>
          ))}
        </div>
      </R>

      {/* ════════════════════════════════════════════
          SSS — accordion
          ════════════════════════════════════════════ */}
      <div style={{ background: "var(--surface)" }}>
        <R className="max-w-3xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl italic mb-10" style={{ color: "var(--text)" }}>
            {tr ? "Merak edilenler" : "FAQ"}
          </h2>

          <div className="space-y-2">
            {[
              {
                q: tr ? "CRM küçük işletmeler için de gerekli mi?" : "Is CRM necessary for small businesses?",
                a: tr
                  ? "Evet. 5 kişilik bir ekip bile CRM ile müşteri takibi yapınca kaçırılan fırsat sayısı sıfıra düşüyor. Üstelik HubSpot gibi platformlarda ücretsiz planlar mevcut."
                  : "Yes. Even a 5-person team drops missed opportunities to zero with CRM tracking. Plus, platforms like HubSpot offer free plans.",
              },
              {
                q: tr ? "Hangi platformu tercih etmeliyim?" : "Which platform should I choose?",
                a: tr
                  ? "Bütçenize ve ekip büyüklüğünüze bağlı. Küçük ekip + sınırlı bütçe → HubSpot. Büyük ve karmaşık operasyon → Salesforce. Fiyat-performans → Zoho. Birlikte analiz yapıp karar veriyoruz."
                  : "Depends on your budget and team size. Small team + limited budget → HubSpot. Large and complex operation → Salesforce. Price-performance → Zoho. We analyze and decide together.",
              },
              {
                q: tr ? "Kurulum ne kadar sürer?" : "How long does setup take?",
                a: tr
                  ? "Temel kurulum 1-2 haftada biter. Veri aktarımı, özelleştirme ve eğitim dahil kapsamlı kurulum 3-6 hafta sürebilir."
                  : "Basic setup takes 1-2 weeks. A comprehensive setup including data migration, customization and training can take 3-6 weeks.",
              },
              {
                q: tr ? "Mevcut verilerimi kaybeder miyim?" : "Will I lose my existing data?",
                a: tr
                  ? "Hayır. Aktarım öncesi tam yedek alıyorum. Veriler temizleniyor, eşleştiriliyor ve doğrulanarak yeni sisteme aktarılıyor."
                  : "No. I take a full backup before migration. Data is cleaned, mapped and verified before being transferred to the new system.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-colors"
                style={{
                  background: openFaq === i ? "rgba(255,255,255,0.04)" : "transparent",
                  border: "1px solid",
                  borderColor: openFaq === i ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-[15px] pr-4" style={{ color: "var(--text)" }}>{item.q}</span>
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    className="flex-shrink-0 transition-transform duration-200"
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}
                  >
                    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" style={{ color: "var(--text-muted)" }}/>
                  </svg>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openFaq === i ? "200px" : "0",
                    opacity: openFaq === i ? 1 : 0,
                  }}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </R>
      </div>

      {/* ════════════════════════════════════════════
          CTA
          ════════════════════════════════════════════ */}
      <R className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl italic mb-3" style={{ color: "var(--text)" }}>
              {tr ? "CRM'inizi kuralım." : "Let's set up your CRM."}
            </h2>
            <p className="text-sm max-w-md leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {tr
                ? "15 dakikalık ücretsiz görüşmede mevcut süreçlerinizi analiz edelim, doğru platformu birlikte seçelim."
                : "In a free 15-minute call, let's analyze your current processes and choose the right platform together."}
            </p>
          </div>
          <a
            href="/#iletisim"
            className="btn-gold inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-full flex-shrink-0"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            {tr ? "Ücretsiz Görüşme" : "Free Consultation"}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </R>
    </div>
  );
}
