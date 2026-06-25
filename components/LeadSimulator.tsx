"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Cpu,
  Send,
  CheckCircle2,
  Loader2,
  User,
  Mail,
  Building2,
  Sparkles,
  ChevronRight,
} from "lucide-react";

/* ────────────────────────────── Types ────────────────────────────── */

interface NlpResult {
  projectType: string;
  architecture: string;
  timeline: string;
  keywords: string[];
}

interface LogEntry {
  id: number;
  tag: string;
  tagColor: string;
  message: string;
  done: boolean;
}

type Step = "input" | "contact" | "logs";

/* ────────────────────────────── NLP Mock ────────────────────────────── */

const KEYWORD_MAP: Record<string, { label: string; category: string }> = {
  crm:         { label: "CRM",           category: "crm" },
  müşteri:     { label: "CRM",           category: "crm" },
  "e-ticaret":  { label: "E-Ticaret",     category: "ecommerce" },
  eticaret:    { label: "E-Ticaret",     category: "ecommerce" },
  mağaza:      { label: "E-Ticaret",     category: "ecommerce" },
  mobil:       { label: "Mobil Uygulama", category: "mobile" },
  uygulama:    { label: "Mobil Uygulama", category: "mobile" },
  "yapay zeka": { label: "AI / ML",       category: "ai" },
  ai:          { label: "AI / ML",       category: "ai" },
  ml:          { label: "AI / ML",       category: "ai" },
  "büyük veri": { label: "Büyük Veri",    category: "bigdata" },
  veri:        { label: "Veri Analizi",   category: "bigdata" },
  "real-time":  { label: "Real-Time",     category: "realtime" },
  gerçek:      { label: "Real-Time",     category: "realtime" },
  otomasyon:   { label: "Otomasyon",     category: "automation" },
  bot:         { label: "Bot / Chatbot", category: "automation" },
  chatbot:     { label: "Bot / Chatbot", category: "automation" },
  iot:         { label: "IoT",           category: "iot" },
  sensör:      { label: "IoT",           category: "iot" },
  web:         { label: "Web Platformu", category: "web" },
  dashboard:   { label: "Dashboard",     category: "web" },
  panel:       { label: "Admin Paneli",  category: "web" },
};

const ARCH_MAP: Record<string, { arch: string; timeline: string }> = {
  crm:        { arch: "PostgreSQL + Redis + Microservices", timeline: "6–10 Hafta" },
  ecommerce:  { arch: "Next.js + Stripe + PostgreSQL + CDN", timeline: "8–14 Hafta" },
  mobile:     { arch: "React Native + Node.js + Firebase", timeline: "10–16 Hafta" },
  ai:         { arch: "Python + FastAPI + TensorFlow + S3", timeline: "12–20 Hafta" },
  bigdata:    { arch: "Kafka + Spark + ClickHouse + Airflow", timeline: "10–18 Hafta" },
  realtime:   { arch: "Node.js + WebSocket + Redis Pub/Sub", timeline: "4–8 Hafta" },
  automation: { arch: "Node.js + Zapier + PostgreSQL + MQTT", timeline: "4–6 Hafta" },
  iot:        { arch: "MQTT + InfluxDB + Grafana + AWS IoT", timeline: "8–14 Hafta" },
  web:        { arch: "Next.js + Tailwind + PostgreSQL + Vercel", timeline: "4–8 Hafta" },
};

function analyzeText(text: string): NlpResult | null {
  const lower = text.toLowerCase();
  if (lower.trim().length < 5) return null;

  const found = new Map<string, string>();
  for (const [keyword, { label, category }] of Object.entries(KEYWORD_MAP)) {
    if (lower.includes(keyword)) {
      found.set(category, label);
    }
  }

  if (found.size === 0) return null;

  const categories = [...found.keys()];
  const keywords = [...found.values()];
  const primary = categories[0];
  const archInfo = ARCH_MAP[primary] ?? ARCH_MAP.web;

  const projectType =
    keywords.length > 2
      ? `${keywords[0]} + ${keywords[1]} Entegrasyon Platformu`
      : keywords.length === 2
        ? `${keywords[0]} / ${keywords[1]} Çözümü`
        : `${keywords[0]} Sistemi`;

  return {
    projectType,
    architecture: archInfo.arch,
    timeline: archInfo.timeline,
    keywords,
  };
}

/* ────────────────────────────── Log Data ────────────────────────────── */

function buildLogs(projectType: string): Omit<LogEntry, "done">[] {
  return [
    { id: 1, tag: "INFO",        tagColor: "text-blue-400",    message: "Girdi metni NLP modeli ile normalize ediliyor..." },
    { id: 2, tag: "SUCCESS",     tagColor: "text-emerald-400", message: `Proje kategorisi '${projectType}' olarak sınıflandırıldı.` },
    { id: 3, tag: "AWS",         tagColor: "text-amber-400",   message: "API Gateway tetiklendi, AWS Lambda (LeadReceiverFunc) çalıştırılıyor..." },
    { id: 4, tag: "DB",          tagColor: "text-purple-400",  message: `PostgreSQL veritabanına güvenli bağlantı kuruldu ve yeni müşteri kaydı (Lead ID: #${Math.floor(1000 + Math.random() * 9000)}) oluşturuldu.` },
    { id: 5, tag: "INTEGRATION", tagColor: "text-cyan-400",    message: "Zapier webhook tetiklendi, HubSpot CRM'e senkronizasyon tamamlandı." },
    { id: 6, tag: "NOTIFY",      tagColor: "text-pink-400",    message: "Discord/Slack kanalına 'Yeni Proje Talebi' bildirimi gönderildi." },
    { id: 7, tag: "COMPLETED",   tagColor: "text-emerald-400", message: "İşlem başarılı. Onay e-postası alıcının inbox'ına teslim edildi." },
  ];
}

/* ────────────────────────────── Component ────────────────────────────── */

export default function LeadSimulator() {
  /* ── State ── */
  const [step, setStep] = useState<Step>("input");
  const [projectText, setProjectText] = useState("");
  const [nlpResult, setNlpResult] = useState<NlpResult | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const logContainerRef = useRef<HTMLDivElement>(null);

  /* ── Debounced NLP ── */
  const handleTextChange = useCallback((value: string) => {
    setProjectText(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setNlpResult(analyzeText(value));
    }, 800);
  }, []);

  /* ── Auto-scroll logs ── */
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  /* ── Submit & Log Simulation ── */
  const handleSubmit = () => {
    if (!nlpResult || !name.trim() || !email.trim()) return;
    setIsSubmitting(true);
    setStep("logs");

    const logTemplates = buildLogs(nlpResult.projectType);
    logTemplates.forEach((tpl, i) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, { ...tpl, done: false }]);

        setTimeout(() => {
          setLogs((prev) =>
            prev.map((l) => (l.id === tpl.id ? { ...l, done: true } : l))
          );
          if (i === logTemplates.length - 1) {
            setIsSubmitting(false);
          }
        }, 800);
      }, i * 1300);
    });
  };

  const canProceedToContact = !!nlpResult;
  const canSubmit = !!nlpResult && name.trim().length > 0 && email.trim().length > 0;

  /* ────────────────────────────── Render ────────────────────────────── */

  return (
    <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.03] blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-400 text-xs font-mono tracking-wider mb-6">
            <Terminal className="w-3.5 h-3.5" />
            CANLI SİMÜLASYON
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Lead Toplama & Otomasyon
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-lg mx-auto leading-relaxed">
            Projenizi anlatın — yapay zeka analiz etsin, otomasyon pipeline&apos;ı canlanıp çalışsın.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-10 font-mono text-xs">
          {(["input", "contact", "logs"] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  step === s
                    ? "border-emerald-400 bg-emerald-400/10 text-emerald-400"
                    : (["input", "contact", "logs"].indexOf(step) > i)
                      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-500"
                      : "border-white/10 text-white/20"
                }`}
              >
                {["input", "contact", "logs"].indexOf(step) > i ? (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                ) : (
                  i + 1
                )}
              </div>
              {i < 2 && (
                <div className={`w-10 h-px ${["input", "contact", "logs"].indexOf(step) > i ? "bg-emerald-500/40" : "bg-white/10"}`} />
              )}
            </div>
          ))}
        </div>

        {/* ──────── Card ──────── */}
        <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden">
          {/* Card header bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <span className="font-mono text-[11px] text-white/30 ml-2">
              {step === "input" && "nlp-analyzer.ts"}
              {step === "contact" && "lead-form.ts"}
              {step === "logs" && "deploy-pipeline.log"}
            </span>
          </div>

          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {/* ════════ STEP 1: Project Input ════════ */}
              {step === "input" && (
                <motion.div
                  key="input"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="flex items-center gap-2 text-sm font-medium text-white/80 mb-3">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    Proje Fikrinizi Detaylıca Anlatın
                  </label>

                  <textarea
                    rows={5}
                    value={projectText}
                    onChange={(e) => handleTextChange(e.target.value)}
                    placeholder="Örn: Müşteri takibi için bir CRM sistemi istiyorum, e-ticaret entegrasyonu ve otomasyon olsun..."
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white/90 placeholder:text-white/20 font-mono resize-none focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                  />

                  {/* NLP Result Box */}
                  <AnimatePresence>
                    {nlpResult && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-5">
                          {/* AI badge */}
                          <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs font-mono text-emerald-400/80 tracking-wider">
                              AI ANALİZ SONUCU
                            </span>
                          </div>

                          <div className="space-y-3 font-mono text-sm">
                            <NlpRow label="Algılanan Proje Tipi" value={nlpResult.projectType} />
                            <NlpRow label="Önerilen Mimari" value={nlpResult.architecture} />
                            <NlpRow label="Tahmini Geliştirme Süresi" value={nlpResult.timeline} />
                          </div>

                          {/* Keyword chips */}
                          <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-emerald-500/10">
                            {nlpResult.keywords.map((kw) => (
                              <span
                                key={kw}
                                className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-[11px] font-mono border border-emerald-500/15"
                              >
                                {kw}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Next button */}
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setStep("contact")}
                      disabled={!canProceedToContact}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/30"
                    >
                      Devam Et
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ════════ STEP 2: Contact Info ════════ */}
              {step === "contact" && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm text-white/50 mb-6 font-mono">
                    &gt; İletişim bilgilerinizi girin — pipeline tetiklenmeye hazır.
                  </p>

                  <div className="space-y-4">
                    <InputField
                      icon={<User className="w-4 h-4" />}
                      placeholder="Adınız Soyadınız"
                      value={name}
                      onChange={setName}
                    />
                    <InputField
                      icon={<Mail className="w-4 h-4" />}
                      placeholder="E-posta Adresiniz"
                      type="email"
                      value={email}
                      onChange={setEmail}
                    />
                    <InputField
                      icon={<Building2 className="w-4 h-4" />}
                      placeholder="Şirket Adı (opsiyonel)"
                      value={company}
                      onChange={setCompany}
                    />
                  </div>

                  {/* NLP summary reminder */}
                  {nlpResult && (
                    <div className="mt-5 p-3 rounded-lg border border-white/[0.06] bg-white/[0.02] font-mono text-[11px] text-white/30">
                      Proje: {nlpResult.projectType} · {nlpResult.architecture}
                    </div>
                  )}

                  <div className="mt-6 flex items-center justify-between">
                    <button
                      onClick={() => setStep("input")}
                      className="text-sm text-white/30 hover:text-white/60 transition-colors font-mono"
                    >
                      ← Geri
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!canSubmit}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-emerald-500 text-black hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
                    >
                      <Send className="w-4 h-4" />
                      Projeyi Gönder & Otomasyonu Başlat
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ════════ STEP 3: Log Monitor ════════ */}
              {step === "logs" && (
                <motion.div
                  key="logs"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Log header */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </span>
                    <span className="font-mono text-xs text-emerald-400/80 tracking-wider">
                      SİSTEM LOG MONİTÖR — CANLI
                    </span>
                  </div>

                  {/* Log container */}
                  <div
                    ref={logContainerRef}
                    className="rounded-xl border border-white/[0.06] bg-black/40 p-4 sm:p-5 max-h-[420px] overflow-y-auto space-y-3 font-mono text-sm"
                  >
                    {logs.map((log) => (
                      <motion.div
                        key={log.id}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-start gap-3"
                      >
                        {/* Status icon */}
                        <div className="flex-shrink-0 mt-0.5">
                          {log.done ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Loader2 className="w-4 h-4 text-white/40 animate-spin" />
                          )}
                        </div>

                        {/* Tag + Message */}
                        <div className="min-w-0">
                          <span className={`${log.tagColor} font-semibold`}>[{log.tag}]</span>{" "}
                          <span className={`${log.done ? "text-white/70" : "text-white/40"} transition-colors duration-300`}>
                            {log.message}
                          </span>
                        </div>
                      </motion.div>
                    ))}

                    {/* Blinking cursor */}
                    {isSubmitting && (
                      <div className="flex items-center gap-1 text-white/20 mt-1">
                        <span className="animate-pulse">▌</span>
                      </div>
                    )}
                  </div>

                  {/* Completion message */}
                  <AnimatePresence>
                    {!isSubmitting && logs.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-6 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.05] text-center"
                      >
                        <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                        <p className="text-sm text-emerald-300 font-medium">
                          Tüm sistemler başarıyla tetiklendi!
                        </p>
                        <p className="text-xs text-white/30 mt-1 font-mono">
                          Bu bir simülasyondur — gerçek bir backend çalıştırılmamıştır.
                        </p>

                        <button
                          onClick={() => {
                            setStep("input");
                            setProjectText("");
                            setNlpResult(null);
                            setName("");
                            setEmail("");
                            setCompany("");
                            setLogs([]);
                          }}
                          className="mt-4 text-xs text-white/30 hover:text-white/60 transition-colors font-mono underline underline-offset-2"
                        >
                          Simülasyonu Sıfırla
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[11px] text-white/15 font-mono mt-6">
          Bu bileşen bir portfolyo demo&apos;sudur. Hiçbir veri saklanmaz veya iletilmez.
        </p>
      </div>
    </section>
  );
}

/* ────────────────────────────── Sub-components ────────────────────────────── */

function NlpRow({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"
    >
      <span className="text-white/30 text-xs whitespace-nowrap">{label}:</span>
      <span className="text-emerald-300 text-sm">{value}</span>
    </motion.div>
  );
}

function InputField({
  icon,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  icon: React.ReactNode;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] pl-10 pr-4 py-2.5 text-sm text-white/90 placeholder:text-white/20 font-mono focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all"
      />
    </div>
  );
}
