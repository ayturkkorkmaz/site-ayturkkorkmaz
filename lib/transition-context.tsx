"use client";

import {
  createContext,
  useContext,
  useCallback,
  useRef,
  useState,
  type ReactNode,
} from "react";

/* ────────────────────────────── Types ────────────────────────────── */

interface PrefetchEntry {
  href: string;
  fetchedAt: number;
}

interface TransitionState {
  /** Route currently transitioning to (null = idle) */
  targetRoute: string | null;
  /** Shared layoutId pairs to morph between pages */
  morphIds: string[];
  /** Whether the skeleton should be visible */
  showSkeleton: boolean;
}

interface TransitionContextValue {
  state: TransitionState;
  /** Register a prefetch hit from hover */
  registerPrefetch: (href: string) => void;
  /** Check if a route was recently prefetched */
  isPrefetched: (href: string) => boolean;
  /** Begin a page transition (called by UltraLink on click) */
  startTransition: (href: string, morphIds?: string[]) => void;
  /** Mark transition as complete (called by PageTransitionLayout) */
  completeTransition: () => void;
}

/* ────────────────────────────── Context ────────────────────────────── */

const TransitionContext = createContext<TransitionContextValue | null>(null);

const PREFETCH_TTL = 30_000; // 30s cache validity
const MAX_CACHE_SIZE = 20;

export function TransitionProvider({ children }: { children: ReactNode }) {
  const cacheRef = useRef<Map<string, PrefetchEntry>>(new Map());
  const [state, setState] = useState<TransitionState>({
    targetRoute: null,
    morphIds: [],
    showSkeleton: false,
  });

  const registerPrefetch = useCallback((href: string) => {
    const cache = cacheRef.current;
    // Evict stale entries
    if (cache.size >= MAX_CACHE_SIZE) {
      const oldest = [...cache.entries()].sort((a, b) => a[1].fetchedAt - b[1].fetchedAt)[0];
      if (oldest) cache.delete(oldest[0]);
    }
    cache.set(href, { href, fetchedAt: Date.now() });
  }, []);

  const isPrefetched = useCallback((href: string) => {
    const entry = cacheRef.current.get(href);
    if (!entry) return false;
    if (Date.now() - entry.fetchedAt > PREFETCH_TTL) {
      cacheRef.current.delete(href);
      return false;
    }
    return true;
  }, []);

  const startTransition = useCallback((href: string, morphIds: string[] = []) => {
    setState({
      targetRoute: href,
      morphIds,
      showSkeleton: true,
    });
  }, []);

  const completeTransition = useCallback(() => {
    setState({
      targetRoute: null,
      morphIds: [],
      showSkeleton: false,
    });
  }, []);

  return (
    <TransitionContext.Provider
      value={{ state, registerPrefetch, isPrefetched, startTransition, completeTransition }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("useTransition must be used within <TransitionProvider>");
  return ctx;
}
