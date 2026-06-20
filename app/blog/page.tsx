import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogListContent from "./BlogListContent";

const BASE_URL = "https://ayturkkorkmaz.com.tr";

export const metadata: Metadata = {
  title: "Blog | SEO, GEO ve AI Otomasyon — Aleyna Aytürk Korkmaz",
  description:
    "SEO, GEO (Generative Engine Optimization), AI otomasyon ve web geliştirme hakkında rehberler ve yazılar.",
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/blog`,
    siteName: "Aleyna Aytürk Korkmaz",
    title: "Blog | SEO, GEO ve AI Otomasyon",
    description:
      "SEO, GEO, AI otomasyon ve web geliştirme hakkında rehberler ve yazılar.",
    locale: "tr_TR",
    alternateLocale: "en_US",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main>
        <BlogListContent />
      </main>
      <Footer />
    </>
  );
}
