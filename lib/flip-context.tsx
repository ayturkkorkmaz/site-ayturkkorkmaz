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

export interface FlipRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface FlipState {
  activeCardId: string | null;
  isExpanded: boolean;
}

interface FlipContextValue {
  state: FlipState;
  /** Store a card's FIRST rect before expansion */
  captureFirst: (id: string, rect: FlipRect) => void;
  /** Retrieve the stored FIRST rect */
  getFirst: (id: string) => FlipRect | null;
  /** Expand a card (triggers FLIP) */
  expand: (id: string) => void;
  /** Collapse back to grid */
  collapse: () => void;
}

/* ────────────────────────────── Context ────────────────────────────── */

const FlipContext = createContext<FlipContextValue | null>(null);

export function FlipProvider({ children }: { children: ReactNode }) {
  const rectsRef = useRef<Map<string, FlipRect>>(new Map());
  const [state, setState] = useState<FlipState>({
    activeCardId: null,
    isExpanded: false,
  });

  const captureFirst = useCallback((id: string, rect: FlipRect) => {
    rectsRef.current.set(id, rect);
  }, []);

  const getFirst = useCallback((id: string): FlipRect | null => {
    return rectsRef.current.get(id) ?? null;
  }, []);

  const expand = useCallback((id: string) => {
    setState({ activeCardId: id, isExpanded: true });
  }, []);

  const collapse = useCallback(() => {
    setState({ activeCardId: null, isExpanded: false });
  }, []);

  return (
    <FlipContext.Provider value={{ state, captureFirst, getFirst, expand, collapse }}>
      {children}
    </FlipContext.Provider>
  );
}

export function useFlip() {
  const ctx = useContext(FlipContext);
  if (!ctx) throw new Error("useFlip must be used within <FlipProvider>");
  return ctx;
}
