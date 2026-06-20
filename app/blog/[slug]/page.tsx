import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { blogPosts, getPostBySlug, getAllSlugs } from "@/lib/blog-posts";
import BlogPostContent from "./BlogPostContent";

const BASE_URL = "https://ayturkkorkmaz.com.tr";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title.tr} — Aleyna Aytürk Korkmaz`,
    description: post.description.tr,
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${BASE_URL}/blog/${post.slug}`,
      siteName: "Aleyna Aytürk Korkmaz",
      title: post.title.tr,
      description: post.description.tr,
      locale: "tr_TR",
      alternateLocale: "en_US",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.tr,
    description: post.description.tr,
    datePublished: post.date,
    inLanguage: "tr-TR",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
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
    url: `${BASE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={blogPostingJsonLd} />
      <Navigation />
      <main>
        <BlogPostContent slug={slug} />
      </main>
      <Footer />
    </>
  );
}
