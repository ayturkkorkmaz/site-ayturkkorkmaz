"use client";

import {
  useRef,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";
import { FlipProvider, useFlip, type FlipRect } from "@/lib/flip-context";

/* ════════════════════════════════════════════════════════════════════
   FLIP ANIMATION CONFIG
   ════════════════════════════════════════════════════════════════════ */

const FLIP_DURATION = 480;
const FLIP_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

/* ════════════════════════════════════════════════════════════════════
   FlipContainer — wraps the grid and the expanded overlay
   ════════════════════════════════════════════════════════════════════ */

interface FlipContainerProps {
  children: ReactNode;
  className?: string;
}

export function FlipContainer({ children, className }: FlipContainerProps) {
  return (
    <FlipProvider>
      <div className={`relative ${className ?? ""}`}>{children}</div>
      <FlipOverlay />
    </FlipProvider>
  );
}

/* ════════════════════════════════════════════════════════════════════
   FlipCard — individual card in the grid
   ════════════════════════════════════════════════════════════════════ */

interface FlipCardProps {
  id: string;
  /** Content shown in collapsed (grid) mode */
  children: ReactNode;
  /** Content shown when expanded (detail mode) */
  expandedContent: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function FlipCard({
  id,
  children,
  expandedContent: _expandedContent,
  className,
  style,
}: FlipCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { state, captureFirst, expand } = useFlip();
  const isActive = state.activeCardId === id;

  const handleClick = useCallback(() => {
    if (state.isExpanded) return;
    const el = cardRef.current;
    if (!el) return;

    // ── FIRST: capture current position ──
    const rect = el.getBoundingClientRect();
    captureFirst(id, {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    });

    // ── Trigger expansion (DOM update → LAST/INVERT/PLAY in overlay) ──
    expand(id);
  }, [id, state.isExpanded, captureFirst, expand]);

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className={`cursor-pointer ${className ?? ""}`}
      style={{
        ...style,
        visibility: isActive ? "hidden" : "visible",
      }}
    >
      {children}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   FlipOverlay — the expanded view that FLIP-animates into place
   ════════════════════════════════════════════════════════════════════ */

function FlipOverlay() {
  const { state, getFirst, collapse } = useFlip();
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [expandedContent, setExpandedContent] = useState<ReactNode>(null);
  const animatingRef = useRef(false);

  // Find the expanded content from the active FlipCard
  // We use a portal-like approach: FlipCard registers its expandedContent
  useEffect(() => {
    if (!state.isExpanded || !state.activeCardId) {
      return;
    }

    // Small delay to let DOM paint, then run FLIP
    requestAnimationFrame(() => {
      runFlipAnimation();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isExpanded, state.activeCardId]);

  const runFlipAnimation = useCallback(() => {
    const id = state.activeCardId;
    if (!id) return;

    const firstRect = getFirst(id);
    if (!firstRect) return;

    const overlay = overlayRef.current;
    if (!overlay) return;

    // ── LAST: measure where the overlay lands ──
    const lastRect: FlipRect = {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // ── INVERT: calculate the delta ──
    const deltaX = firstRect.x - lastRect.x;
    const deltaY = firstRect.y - lastRect.y + window.scrollY;
    const scaleX = firstRect.width / lastRect.width;
    const scaleY = firstRect.height / lastRect.height;

    // Apply will-change for GPU compositing
    overlay.style.willChange = "transform";

    // ── PLAY: animate from inverted → final using Web Animations API ──
    animatingRef.current = true;

    const animation = overlay.animate(
      [
        {
          transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scaleX}, ${scaleY})`,
          borderRadius: "16px",
        },
        {
          transform: "translate3d(0, 0, 0) scale(1, 1)",
          borderRadius: "0px",
        },
      ],
      {
        duration: FLIP_DURATION,
        easing: FLIP_EASING,
        fill: "forwards",
      },
    );

    // Inverse-scale children to prevent distortion
    const content = contentRef.current;
    if (content) {
      content.animate(
        [
          {
            transform: `scale(${1 / scaleX}, ${1 / scaleY})`,
            opacity: "0.6",
          },
          {
            transform: "scale(1, 1)",
            opacity: "1",
          },
        ],
        {
          duration: FLIP_DURATION,
          easing: FLIP_EASING,
          fill: "forwards",
        },
      );
    }

    animation.onfinish = () => {
      overlay.style.willChange = "auto";
      animatingRef.current = false;
    };
  }, [state.activeCardId, getFirst]);

  const handleCollapse = useCallback(() => {
    if (animatingRef.current) return;

    const id = state.activeCardId;
    if (!id) return;

    const firstRect = getFirst(id);
    const overlay = overlayRef.current;
    const content = contentRef.current;
    if (!firstRect || !overlay) return;

    // Reverse FLIP: animate back to card position
    const deltaX = firstRect.x;
    const deltaY = firstRect.y + window.scrollY;
    const scaleX = firstRect.width / window.innerWidth;
    const scaleY = firstRect.height / window.innerHeight;

    overlay.style.willChange = "transform";
    animatingRef.current = true;

    const animation = overlay.animate(
      [
        {
          transform: "translate3d(0, 0, 0) scale(1, 1)",
          borderRadius: "0px",
        },
        {
          transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scaleX}, ${scaleY})`,
          borderRadius: "16px",
        },
      ],
      {
        duration: FLIP_DURATION,
        easing: FLIP_EASING,
        fill: "forwards",
      },
    );

    // Inverse-scale children during collapse
    if (content) {
      content.animate(
        [
          {
            transform: "scale(1, 1)",
            opacity: "1",
          },
          {
            transform: `scale(${1 / scaleX}, ${1 / scaleY})`,
            opacity: "0.6",
          },
        ],
        {
          duration: FLIP_DURATION,
          easing: FLIP_EASING,
          fill: "forwards",
        },
      );
    }

    animation.onfinish = () => {
      overlay.style.willChange = "auto";
      animatingRef.current = false;
      collapse();
      setExpandedContent(null);
    };
  }, [state.activeCardId, getFirst, collapse]);

  // Escape key to close
  useEffect(() => {
    if (!state.isExpanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCollapse();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.isExpanded, handleCollapse]);

  if (!state.isExpanded) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[999]"
        style={{
          background: "rgba(4, 6, 15, 0.85)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          animation: `flipBackdropIn ${FLIP_DURATION}ms ease forwards`,
        }}
        onClick={handleCollapse}
      />

      {/* Expanded overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[1000] overflow-y-auto"
        style={{
          background: "var(--bg, #07090e)",
          transformOrigin: "top left",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleCollapse}
          className="fixed top-5 right-5 z-[1001] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.7)",
          }}
          aria-label="Kapat"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Content wrapper — receives inverse scale */}
        <div ref={contentRef} style={{ transformOrigin: "top left" }}>
          <FlipExpandedContentSlot />
        </div>
      </div>
    </>
  );
}

/* ════════════════════════════════════════════════════════════════════
   FlipExpandedContentSlot — renders active card's expandedContent
   We use a separate component tree to inject content.
   ════════════════════════════════════════════════════════════════════ */

function FlipExpandedContentSlot() {
  const { state } = useFlip();

  if (!state.activeCardId) return null;

  // The expanded content is injected via FlipCardExpanded
  return <FlipCardExpandedPortal cardId={state.activeCardId} />;
}

/* ── Registry for expanded content ── */

type ExpandedContentMap = Map<string, ReactNode>;
const expandedContentRegistry: ExpandedContentMap = new Map();

export function registerExpandedContent(id: string, content: ReactNode) {
  expandedContentRegistry.set(id, content);
}

export function unregisterExpandedContent(id: string) {
  expandedContentRegistry.delete(id);
}

function FlipCardExpandedPortal({ cardId }: { cardId: string }) {
  const content = expandedContentRegistry.get(cardId);
  return <>{content ?? null}</>;
}

/* ════════════════════════════════════════════════════════════════════
   FlipCardWithContent — convenience wrapper that auto-registers
   ════════════════════════════════════════════════════════════════════ */

interface FlipCardWithContentProps {
  id: string;
  children: ReactNode;
  expandedContent: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function FlipCardWithContent({
  id,
  children,
  expandedContent,
  className,
  style,
}: FlipCardWithContentProps) {
  // Register expanded content on mount, unregister on unmount
  useEffect(() => {
    registerExpandedContent(id, expandedContent);
    return () => unregisterExpandedContent(id);
  }, [id, expandedContent]);

  return (
    <FlipCard
      id={id}
      expandedContent={expandedContent}
      className={className}
      style={style}
    >
      {children}
    </FlipCard>
  );
}
