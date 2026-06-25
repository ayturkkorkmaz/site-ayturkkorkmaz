"use client";

import { useCallback, useRef, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "@/lib/transition-context";

/* ────────────────────────────── Types ────────────────────────────── */

interface UltraLinkProps {
  href: string;
  children: ReactNode;
  /** Framer Motion layoutIds to morph during this transition */
  morphIds?: string[];
  /** Minimum hover time (ms) before prefetch fires — prevents drive-by fetches */
  hoverDelay?: number;
  /** Extra class names */
  className?: string;
  /** Scroll to top on navigation (default: true) */
  scroll?: boolean;
  /** Replace history instead of push */
  replace?: boolean;
  /** onClick passthrough */
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  /** Anchor target */
  target?: string;
  /** aria-label */
  "aria-label"?: string;
}

/* ────────────────────────────── Component ────────────────────────────── */

/**
 * Drop-in `<Link>` replacement with:
 * - Debounced hover prefetching (fires only after `hoverDelay` ms of sustained hover)
 * - Skeleton transition trigger on click
 * - layoutId morph coordination with PageTransitionLayout
 */
export default function UltraLink({
  href,
  children,
  morphIds = [],
  hoverDelay = 80,
  className,
  scroll = true,
  replace = false,
  onClick,
  target,
  "aria-label": ariaLabel,
}: UltraLinkProps) {
  const router = useRouter();
  const { registerPrefetch, isPrefetched, startTransition } = useTransition();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Hover prefetch with debounce ── */
  const handleMouseEnter = useCallback(() => {
    // Skip if already cached
    if (isPrefetched(href)) return;

    timerRef.current = setTimeout(() => {
      // Next.js router.prefetch fetches RSC payload + JS chunks
      router.prefetch(href);
      registerPrefetch(href);
    }, hoverDelay);
  }, [href, hoverDelay, router, registerPrefetch, isPrefetched]);

  const handleMouseLeave = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  /* ── Click — trigger skeleton transition ── */
  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;

      // Don't intercept external links or modified clicks
      if (target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey) return;

      // Same-page anchors — let browser handle
      if (href.startsWith("#")) return;

      // Fire transition (skeleton + morph)
      startTransition(href, morphIds);
    },
    [href, morphIds, onClick, startTransition, target],
  );

  return (
    <Link
      href={href}
      scroll={scroll}
      replace={replace}
      className={className}
      target={target}
      aria-label={ariaLabel}
      prefetch={false} // We handle prefetch manually via hover
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
