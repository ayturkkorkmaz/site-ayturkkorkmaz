"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTransition } from "@/lib/transition-context";

/* ────────────────────────────── Types ────────────────────────────── */

interface PageTransitionLayoutProps {
  children: ReactNode;
}

/* ────────────────────────────── Skeleton Shimmer ────────────────────────────── */

function SkeletonOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ background: "var(--bg, #07090e)" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-24">
        {/* Navigation skeleton */}
        <div className="flex items-center justify-between mb-16">
          <SkeletonBlock w="120px" h="28px" />
          <div className="hidden md:flex gap-6">
            <SkeletonBlock w="60px" h="16px" />
            <SkeletonBlock w="72px" h="16px" />
            <SkeletonBlock w="56px" h="16px" />
            <SkeletonBlock w="64px" h="16px" />
          </div>
          <SkeletonBlock w="140px" h="36px" rounded="full" />
        </div>

        {/* Hero skeleton */}
        <div className="mb-12">
          <SkeletonBlock w="80px" h="14px" className="mb-4" />
          <SkeletonBlock w="100%" h="44px" className="mb-3 max-w-xl" />
          <SkeletonBlock w="100%" h="44px" className="mb-6 max-w-md" />
          <SkeletonBlock w="100%" h="20px" className="mb-2 max-w-lg" />
          <SkeletonBlock w="100%" h="20px" className="mb-8 max-w-sm" />
          <div className="flex gap-3">
            <SkeletonBlock w="180px" h="48px" rounded="xl" />
            <SkeletonBlock w="140px" h="48px" rounded="xl" />
          </div>
        </div>

        {/* Content cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <SkeletonBlock w="40px" h="40px" rounded="lg" className="mb-4" />
              <SkeletonBlock w="70%" h="20px" className="mb-3" />
              <SkeletonBlock w="100%" h="14px" className="mb-2" />
              <SkeletonBlock w="90%" h="14px" className="mb-2" />
              <SkeletonBlock w="60%" h="14px" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SkeletonBlock({
  w,
  h,
  rounded = "lg",
  className = "",
}: {
  w: string;
  h: string;
  rounded?: string;
  className?: string;
}) {
  return (
    <div
      className={`skeleton-shimmer ${className}`}
      style={{
        width: w,
        height: h,
        borderRadius:
          rounded === "full" ? "9999px" : rounded === "xl" ? "12px" : rounded === "lg" ? "8px" : "4px",
        background: "rgba(255,255,255,0.04)",
        overflow: "hidden",
        position: "relative",
      }}
    />
  );
}

/* ────────────────────────────── Page wrapper ────────────────────────────── */

const pageVariants = {
  initial: { opacity: 0, y: 6 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

const pageTransition = {
  duration: 0.28,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

export default function PageTransitionLayout({ children }: PageTransitionLayoutProps) {
  const pathname = usePathname();
  const { state, completeTransition } = useTransition();
  const prevPathRef = useRef(pathname);

  // When pathname changes, transition is complete
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      completeTransition();
    }
  }, [pathname, completeTransition]);

  return (
    <>
      {/* Skeleton overlay during transition */}
      <AnimatePresence>{state.showSkeleton && <SkeletonOverlay />}</AnimatePresence>

      {/* Page content with enter/exit animation */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={pageTransition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

/* ────────────────────────────── MorphElement ────────────────────────────── */

/**
 * Wrap any element that should morph (move/resize) across pages.
 * Give it a unique `layoutId` that matches on both source and target pages.
 *
 * @example
 * // On list page
 * <MorphElement layoutId={`card-${id}`}>
 *   <ServiceCard />
 * </MorphElement>
 *
 * // On detail page
 * <MorphElement layoutId={`card-${id}`}>
 *   <ServiceHero />
 * </MorphElement>
 */
export function MorphElement({
  layoutId,
  children,
  className,
}: {
  layoutId: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div layoutId={layoutId} className={className} transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}>
      {children}
    </motion.div>
  );
}
