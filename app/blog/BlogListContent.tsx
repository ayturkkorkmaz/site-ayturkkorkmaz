"use client";

import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { blogPosts } from "@/lib/blog-posts";
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

export default function BlogListContent() {
  const { lang } = useLang();
  const tx = t[lang].blog;

  return (
    <div className="pt-28 pb-16">
      <Section className="section-pad max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="gold-text">{tx.heading}</span>
        </h1>
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {tx.sub}
        </p>
      </Section>

      <div className="sep max-w-6xl mx-auto" />

      <Section className="section-pad max-w-4xl mx-auto">
        <div className="flex flex-col gap-6">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-lift rounded-2xl p-6 md:p-8 block"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                textDecoration: "none",
              }}
            >
              <p
                className="text-xs font-medium mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                {new Date(post.date).toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="text-lg md:text-xl font-bold mb-2" style={{ color: "var(--text)" }}>
                {post.title[lang]}
              </h2>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                {post.description[lang]}
              </p>
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--accent-2)" }}
              >
                {tx.readMore} →
              </span>
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
}
