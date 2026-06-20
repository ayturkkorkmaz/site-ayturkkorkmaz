import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import GoldeneyeContent from "./GoldeneyeContent";

const BASE_URL = "https://ayturkkorkmaz.com.tr";

export const metadata: Metadata = {
  title:
    "Vaka Çalışması: GoldenEye Optik | Yerel SEO & AI Görünürlük — Aleyna Aytürk Korkmaz",
  description:
    "GoldenEye Optik için yerel SEO, çok dilli içerik ve AI görünürlük çalışması. Kadriye/Antalya'da optik mağaza vaka çalışması.",
  alternates: {
    canonical: `${BASE_URL}/vaka-calismalari/goldeneye-optik`,
  },
  openGraph: {
    type: "article",
    url: `${BASE_URL}/vaka-calismalari/goldeneye-optik`,
    siteName: "Aleyna Aytürk Korkmaz",
    title: "Vaka Çalışması: GoldenEye Optik | Yerel SEO & AI Görünürlük",
    description:
      "GoldenEye Optik için yerel SEO, çok dilli içerik ve AI görünürlük çalışması.",
    locale: "tr_TR",
    alternateLocale: "en_US",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vaka Çalışması: GoldenEye Optik — Yerel SEO & AI Görünürlük",
  description:
    "Kadriye/Antalya'daki GoldenEye Optik mağazası için gerçekleştirilen yerel SEO, çok dilli içerik ve AI görünürlük çalışmasının detayları.",
  about: {
    "@type": "LocalBusiness",
    name: "GoldenEye Optik",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kadriye",
      addressRegion: "Antalya",
      addressCountry: "TR",
    },
  },
  author: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Aleyna Aytürk Korkmaz",
    url: BASE_URL,
  },
  publisher: {
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#service`,
    name: "Aleyna Aytürk Korkmaz — Dijital Danışmanlık",
    url: BASE_URL,
  },
  url: `${BASE_URL}/vaka-calismalari/goldeneye-optik`,
  inLanguage: "tr-TR",
  areaServed: {
    "@type": "City",
    name: "Antalya",
    containedInPlace: {
      "@type": "Country",
      name: "Türkiye",
    },
  },
};

export default function GoldeneyePage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <Navigation />
      <main>
        <GoldeneyeContent />
      </main>
      <Footer />
    </>
  );
}
