"use client";

import {
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
  type CSSProperties,
} from "react";

/* ════════════════════════════════════════════════════════════════════
   PHYSICS CONFIG
   ════════════════════════════════════════════════════════════════════ */

/** Hooke's Law spring constant — higher = stiffer snap-back */
const SPRING_K = 0.12;
/** Velocity damping — 0..1, lower = more oscillation */
const DAMPING = 0.72;
/** Trigger radius in px — mouse must be within this to attract */
const TRIGGER_RADIUS = 40;
/** Max displacement from center in px */
const MAX_DISPLACEMENT = 15;
/** Velocity threshold to stop the animation loop */
const VELOCITY_THRESHOLD = 0.01;
/** Position threshold to snap to zero */
const POSITION_THRESHOLD = 0.1;

/* ════════════════════════════════════════════════════════════════════
   Types
   ════════════════════════════════════════════════════════════════════ */

interface MagneticElementProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Override trigger radius (default: 40px) */
  triggerRadius?: number;
  /** Override max displacement (default: 15px) */
  maxDisplacement?: number;
  /** Override spring stiffness (default: 0.12) */
  stiffness?: number;
  /** Override damping (default: 0.72) */
  damping?: number;
  /** HTML tag to render (default: div) */
  as?: keyof HTMLElementTagNameMap;
}

interface PhysicsState {
  /** Current displacement from center */
  x: number;
  y: number;
  /** Current velocity */
  vx: number;
  vy: number;
  /** Target position (mouse-derived, 0 when mouse is outside) */
  targetX: number;
  targetY: number;
  /** Whether mouse is within trigger area */
  isAttracted: boolean;
  /** RAF handle */
  rafId: number | null;
}

/* ════════════════════════════════════════════════════════════════════
   Component
   ════════════════════════════════════════════════════════════════════ */

export default function MagneticElement({
  children,
  className,
  style,
  triggerRadius = TRIGGER_RADIUS,
  maxDisplacement = MAX_DISPLACEMENT,
  stiffness = SPRING_K,
  damping: dampingProp = DAMPING,
  as: Tag = "div",
}: MagneticElementProps) {
  const elRef = useRef<HTMLElement>(null);
  const physics = useRef<PhysicsState>({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    targetX: 0,
    targetY: 0,
    isAttracted: false,
    rafId: null,
  });

  /* ── Physics simulation loop (Hooke's Law: F = -kx) ── */
  const tick = useCallback(() => {
    const p = physics.current;
    const el = elRef.current;
    if (!el) return;

    if (p.isAttracted) {
      // Attract toward target with spring
      const forceX = (p.targetX - p.x) * stiffness;
      const forceY = (p.targetY - p.y) * stiffness;
      p.vx = (p.vx + forceX) * dampingProp;
      p.vy = (p.vy + forceY) * dampingProp;
    } else {
      // Spring back to origin (F = -kx)
      const forceX = -stiffness * p.x;
      const forceY = -stiffness * p.y;
      p.vx = (p.vx + forceX) * dampingProp;
      p.vy = (p.vy + forceY) * dampingProp;
    }

    p.x += p.vx;
    p.y += p.vy;

    // Snap to zero when close enough and velocity is negligible
    const isSettled =
      !p.isAttracted &&
      Math.abs(p.x) < POSITION_THRESHOLD &&
      Math.abs(p.y) < POSITION_THRESHOLD &&
      Math.abs(p.vx) < VELOCITY_THRESHOLD &&
      Math.abs(p.vy) < VELOCITY_THRESHOLD;

    if (isSettled) {
      p.x = 0;
      p.y = 0;
      p.vx = 0;
      p.vy = 0;
      el.style.transform = "translate3d(0, 0, 0)";
      el.style.willChange = "auto";
      p.rafId = null;
      return; // Stop the loop
    }

    el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
    p.rafId = requestAnimationFrame(tick);
  }, [stiffness, dampingProp]);

  const startLoop = useCallback(() => {
    const p = physics.current;
    if (p.rafId !== null) return; // Already running
    const el = elRef.current;
    if (el) el.style.willChange = "transform";
    p.rafId = requestAnimationFrame(tick);
  }, [tick]);

  /* ── Mouse tracking ── */
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = elRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      const p = physics.current;
      const effectiveRadius = triggerRadius + Math.max(rect.width, rect.height) / 2;

      if (distance < effectiveRadius) {
        // Inside trigger zone — calculate clamped target
        const strength = 1 - Math.min(distance / effectiveRadius, 1);
        const rawX = distX * strength;
        const rawY = distY * strength;

        // Clamp to max displacement
        const mag = Math.sqrt(rawX * rawX + rawY * rawY);
        if (mag > maxDisplacement) {
          const scale = maxDisplacement / mag;
          p.targetX = rawX * scale;
          p.targetY = rawY * scale;
        } else {
          p.targetX = rawX;
          p.targetY = rawY;
        }

        p.isAttracted = true;
        startLoop();
      } else if (p.isAttracted) {
        // Just left the zone
        p.isAttracted = false;
        p.targetX = 0;
        p.targetY = 0;
        startLoop();
      }
    },
    [triggerRadius, maxDisplacement, startLoop],
  );

  const handleMouseLeave = useCallback(() => {
    const p = physics.current;
    p.isAttracted = false;
    p.targetX = 0;
    p.targetY = 0;
    startLoop();
  }, [startLoop]);

  /* ── Lifecycle ── */
  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // Listen on window for mousemove so we detect approach from outside
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);

      // Cancel any running animation
      const p = physics.current;
      if (p.rafId !== null) {
        cancelAnimationFrame(p.rafId);
        p.rafId = null;
      }
    };
  }, [handleMouseMove, handleMouseLeave]);

  // We need to use createElement since Tag is dynamic
  const TagName = Tag as React.ElementType;

  return (
    <TagName
      ref={elRef}
      className={className}
      style={{
        ...style,
        willChange: "auto",
      }}
    >
      {children}
    </TagName>
  );
}
