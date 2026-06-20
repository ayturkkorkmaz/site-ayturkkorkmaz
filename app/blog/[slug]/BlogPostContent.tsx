"use client";

import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { getPostBySlug } from "@/lib/blog-posts";
import { useReveal } from "@/lib/useReveal";

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`reveal ${className}`}>
      {children}
    </section>
  );
}

export default function BlogPostContent({ slug }: { slug: string }) {
  const { lang } = useLang();
  const tx = t[lang].blog;
  const post = getPostBySlug(slug);
  if (!post) return null;

  const sections = post.sections[lang];

  return (
    <div className="pt-28 pb-16">
      {/* ── Hero ── */}
      <Section className="section-pad max-w-3xl mx-auto text-center">
        <p
          className="text-xs font-medium mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          {new Date(post.date).toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="gold-text">{post.title[lang]}</span>
        </h1>
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {post.description[lang]}
        </p>
      </Section>

      {/* ── Content sections ── */}
      {sections.map((section, i) => (
        <div key={i}>
          <div className="sep max-w-6xl mx-auto" />
          <Section className="section-pad max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{section.heading}</h2>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {section.body}
            </p>
          </Section>
        </div>
      ))}

      <div className="sep max-w-6xl mx-auto" />

      {/* ── CTA ── */}
      <Section className="section-pad max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{tx.postCta.heading}</h2>
        <p
          className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {tx.postCta.desc}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={post.ctaLink}
            className="btn-gold inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-full"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            {tx.postCta.service}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="/blog"
            className="btn-outline inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-full"
            style={{ border: "1px solid var(--border)", color: "var(--text)" }}
          >
            {tx.postCta.allPosts}
          </a>
        </div>
      </Section>
    </div>
  );
}
