import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://ayturkkorkmaz.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  /* ── Temel ── */
  title: {
    default: "Aleyna Aytürk Korkmaz — SEO, GEO & Dijital Çözüm Uzmanı | Antalya",
    template: "%s | Aleyna Aytürk Korkmaz",
  },
  description:
    "Antalya'da SEO & GEO hizmetleri, CRM sistemleri, dijital klon, web sitesi geliştirme ve dijital görünürlük çözümleri. İşletmenizi dijitalde görünür yapıyorum.",
  keywords: [
    "SEO Antalya",
    "GEO hizmeti",
    "generative engine optimization",
    "CRM kurulum Antalya",
    "dijital klon",
    "web sitesi Antalya",
    "dijital görünürlük",
    "Google Business Profile",
    "ChatGPT görünürlük",
    "yerel SEO",
    "yapay zeka görünürlük",
    "dijital danışmanlık Antalya",
    "Aleyna Aytürk Korkmaz",
    "SEO danışmanı Antalya",
    "web geliştirme Antalya",
  ],
  authors: [{ name: "Aleyna Aytürk Korkmaz", url: BASE_URL }],
  creator: "Aleyna Aytürk Korkmaz",
  publisher: "Aleyna Aytürk Korkmaz",
  category: "Business & Technology Consulting",

  /* ── Canonical & alternates ── */
  alternates: {
    canonical: BASE_URL,
    languages: {
      "tr-TR": BASE_URL,
      "en-US": `${BASE_URL}/en`,
    },
  },

  /* ── Open Graph ── */
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Aleyna Aytürk Korkmaz",
    title: "Aleyna Aytürk Korkmaz — SEO, GEO & Dijital Çözüm Uzmanı | Antalya",
    description:
      "Antalya'da SEO & GEO hizmetleri, CRM sistemleri, dijital klon, web sitesi geliştirme ve dijital görünürlük çözümleri. İşletmenizi dijitalde görünür yapıyorum.",
    locale: "tr_TR",
    alternateLocale: "en_US",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Aleyna Aytürk Korkmaz — SEO, GEO & Dijital Çözüm Uzmanı | Antalya",
      },
    ],
  },

  /* ── Twitter / X ── */
  twitter: {
    card: "summary_large_image",
    title: "Aleyna Aytürk Korkmaz — SEO, GEO & Dijital Çözüm Uzmanı | Antalya",
    description:
      "Antalya'da SEO & GEO hizmetleri, CRM sistemleri, dijital klon, web sitesi geliştirme ve dijital görünürlük çözümleri. İşletmenizi dijitalde görünür yapıyorum.",
    images: [`${BASE_URL}/og-image.png`],
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Verification placeholders ── */
  verification: {
    google: "1TFdrruxJVF6hB_8-n_a8tA9GQlUqI3az5hjzkihfpQ",
  },

  /* ── Diğer ── */
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: true, email: true, address: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        {/* ── GEO meta tags ── */}
        <meta name="geo.region"      content="TR" />
        <meta name="geo.placename"   content="Antalya, Türkiye" />
        <meta name="geo.position"    content="36.8969;30.7133" />
        <meta name="ICBM"            content="36.8969, 30.7133" />
        <meta name="language"        content="Turkish, English" />
        <meta name="revisit-after"   content="7 days" />
        <meta name="rating"          content="general" />

        {/* ── Favicon ── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
