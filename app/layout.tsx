import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";
import { TransitionProvider } from "@/lib/transition-context";
import PageTransitionLayout from "@/components/PageTransitionLayout";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
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
    "Antalya'da SEO & GEO hizmetleri, CRM sistemleri, dijital klon, web sitesi geliştirme ve dijital görünürlük çözümleri. İşletmenizi uçtan uca dijitalleştiriyorum.",
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
      "Antalya'da SEO & GEO hizmetleri, CRM sistemleri, dijital klon, web sitesi geliştirme ve dijital görünürlük çözümleri. İşletmenizi uçtan uca dijitalleştiriyorum.",
    locale: "tr_TR",
    alternateLocale: "en_US",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
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
      "Antalya'da SEO & GEO hizmetleri, CRM sistemleri, dijital klon, web sitesi geliştirme ve dijital görünürlük çözümleri. İşletmenizi uçtan uca dijitalleştiriyorum.",
    images: [`${BASE_URL}/opengraph-image`],
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

  /* ── Favicon / Icons ── */
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },

  /* ── Diğer ── */
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: true, email: true, address: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${instrumentSerif.variable}`}>
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
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body>
        <TransitionProvider>
          <LangProvider>
            <PageTransitionLayout>{children}</PageTransitionLayout>
          </LangProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}
