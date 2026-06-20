import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog-posts";

const BASE_URL = "https://ayturkkorkmaz.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          tr: BASE_URL,
          en: `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/hizmetler/geo`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          tr: `${BASE_URL}/hizmetler/geo`,
          en: `${BASE_URL}/en/hizmetler/geo`,
        },
      },
    },
    {
      url: `${BASE_URL}/hizmetler/seo`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          tr: `${BASE_URL}/hizmetler/seo`,
          en: `${BASE_URL}/en/hizmetler/seo`,
        },
      },
    },
    {
      url: `${BASE_URL}/hizmetler/ai-otomasyon`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          tr: `${BASE_URL}/hizmetler/ai-otomasyon`,
          en: `${BASE_URL}/en/hizmetler/ai-otomasyon`,
        },
      },
    },
    {
      url: `${BASE_URL}/hizmetler/web-gelistirme`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          tr: `${BASE_URL}/hizmetler/web-gelistirme`,
          en: `${BASE_URL}/en/hizmetler/web-gelistirme`,
        },
      },
    },
    {
      url: `${BASE_URL}/sss`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          tr: `${BASE_URL}/sss`,
          en: `${BASE_URL}/en/sss`,
        },
      },
    },
    {
      url: `${BASE_URL}/vaka-calismalari/goldeneye-optik`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          tr: `${BASE_URL}/vaka-calismalari/goldeneye-optik`,
          en: `${BASE_URL}/en/vaka-calismalari/goldeneye-optik`,
        },
      },
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          tr: `${BASE_URL}/blog`,
          en: `${BASE_URL}/en/blog`,
        },
      },
    },
    ...getAllSlugs().map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          tr: `${BASE_URL}/blog/${slug}`,
          en: `${BASE_URL}/en/blog/${slug}`,
        },
      },
    })),
  ];
}
