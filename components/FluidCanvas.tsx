"use client";

import { useRef, useEffect, useCallback } from "react";

/* ════════════════════════════════════════════════════════════════════
   CONFIG
   ════════════════════════════════════════════════════════════════════ */

/** Max simultaneous particles */
const MAX_PARTICLES = 120;
/** Minimum mouse speed (px/frame) to spawn particles */
const MIN_SPEED = 3;
/** Particle lifetime in frames (~60fps) */
const PARTICLE_LIFETIME = 80;
/** Particles spawned per frame when moving fast */
const SPAWN_RATE = 2;
/** Particles spawned on click burst */
const CLICK_BURST = 18;
/** Particle base radius */
const BASE_RADIUS = 2.5;
/** How much velocity influences spawn spread */
const SPREAD_FACTOR = 0.6;
/** Canvas opacity (subtle background effect) */
const CANVAS_OPACITY = 0.55;

/* ════════════════════════════════════════════════════════════════════
   Types
   ════════════════════════════════════════════════════════════════════ */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  life: number;
  maxLife: number;
  hue: number;
  /** Organic noise offset */
  noisePhase: number;
  noiseSpeed: number;
}

interface MouseState {
  x: number;
  y: number;
  prevX: number;
  prevY: number;
  speed: number;
}

interface FluidCanvasProps {
  /** Base hue for particles (0-360). Default: 217 (blue) */
  hue?: number;
  /** Hue range for variation. Default: 30 */
  hueRange?: number;
  /** Canvas z-index. Default: 0 */
  zIndex?: number;
  className?: string;
}

/* ════════════════════════════════════════════════════════════════════
   Component
   ════════════════════════════════════════════════════════════════════ */

export default function FluidCanvas({
  hue: baseHue = 217,
  hueRange = 30,
  zIndex = 0,
  className,
}: FluidCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<MouseState>({
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
    speed: 0,
  });
  const rafRef = useRef<number>(0);
  const dprRef = useRef(1);

  /* ── Spawn helper ── */
  const spawnParticle = useCallback(
    (
      x: number,
      y: number,
      vxBase: number,
      vyBase: number,
      speedMultiplier: number,
    ): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const spread = (0.5 + Math.random() * 1.5) * speedMultiplier * SPREAD_FACTOR;

      return {
        x,
        y,
        vx: vxBase * 0.3 + Math.cos(angle) * spread,
        vy: vyBase * 0.3 + Math.sin(angle) * spread,
        radius: BASE_RADIUS + Math.random() * 2,
        life: PARTICLE_LIFETIME,
        maxLife: PARTICLE_LIFETIME,
        hue: baseHue + (Math.random() - 0.5) * hueRange,
        noisePhase: Math.random() * Math.PI * 2,
        noiseSpeed: 0.02 + Math.random() * 0.03,
      };
    },
    [baseHue, hueRange],
  );

  /* ── Render loop ── */
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = dprRef.current;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    // Clear with fade (creates trail effect)
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    const mouse = mouseRef.current;
    const particles = particlesRef.current;

    // Calculate mouse speed
    const dx = mouse.x - mouse.prevX;
    const dy = mouse.y - mouse.prevY;
    mouse.speed = Math.sqrt(dx * dx + dy * dy);
    mouse.prevX = mouse.x;
    mouse.prevY = mouse.y;

    // Spawn particles when mouse moves fast
    if (mouse.speed > MIN_SPEED && particles.length < MAX_PARTICLES) {
      const count = Math.min(
        SPAWN_RATE,
        MAX_PARTICLES - particles.length,
      );
      for (let i = 0; i < count; i++) {
        particles.push(
          spawnParticle(mouse.x, mouse.y, dx, dy, mouse.speed * 0.15),
        );
      }
    }

    // Update & draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      // Update position with organic noise
      p.noisePhase += p.noiseSpeed;
      p.x += p.vx + Math.sin(p.noisePhase) * 0.3;
      p.y += p.vy + Math.cos(p.noisePhase * 1.3) * 0.3;

      // Dampen velocity (fluid drag)
      p.vx *= 0.96;
      p.vy *= 0.96;

      // Decay
      p.life -= 1;

      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }

      // Draw
      const progress = 1 - p.life / p.maxLife;
      const alpha = Math.sin(progress * Math.PI) * 0.5; // bell curve opacity
      const radius = p.radius * (1 + progress * 0.8); // grow slightly

      // Glow layer
      const gradient = ctx.createRadialGradient(
        p.x,
        p.y,
        0,
        p.x,
        p.y,
        radius * 3,
      );
      gradient.addColorStop(
        0,
        `hsla(${p.hue}, 70%, 60%, ${alpha * 0.6})`,
      );
      gradient.addColorStop(
        0.4,
        `hsla(${p.hue}, 60%, 50%, ${alpha * 0.2})`,
      );
      gradient.addColorStop(1, `hsla(${p.hue}, 50%, 40%, 0)`);

      ctx.beginPath();
      ctx.arc(p.x, p.y, radius * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 80%, 75%, ${alpha * 0.9})`;
      ctx.fill();
    }

    // Metaball-like connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const cdx = a.x - b.x;
        const cdy = a.y - b.y;
        const dist = Math.sqrt(cdx * cdx + cdy * cdy);
        const maxDist = 60;

        if (dist < maxDist) {
          const alphaA = Math.sin((1 - a.life / a.maxLife) * Math.PI) * 0.5;
          const alphaB = Math.sin((1 - b.life / b.maxLife) * Math.PI) * 0.5;
          const lineAlpha = Math.min(alphaA, alphaB) * (1 - dist / maxDist) * 0.3;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `hsla(${(a.hue + b.hue) / 2}, 60%, 55%, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    rafRef.current = requestAnimationFrame(render);
  }, [spawnParticle]);

  /* ── Resize handler ── */
  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    dprRef.current = dpr;

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, []);

  /* ── Click burst ── */
  const handleClick = useCallback(
    (e: MouseEvent) => {
      const particles = particlesRef.current;
      const spaceLeft = MAX_PARTICLES - particles.length;
      const count = Math.min(CLICK_BURST, spaceLeft);

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + Math.random() * 0.3;
        const speed = 1.5 + Math.random() * 3;
        particles.push(
          spawnParticle(
            e.clientX,
            e.clientY,
            Math.cos(angle) * speed,
            Math.sin(angle) * speed,
            1,
          ),
        );
      }
    },
    [spawnParticle],
  );

  /* ── Lifecycle ── */
  useEffect(() => {
    resize();

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("click", handleClick);

    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(rafRef.current);
    };
  }, [resize, render, handleClick]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className ?? ""}`}
      style={{
        zIndex,
        opacity: CANVAS_OPACITY,
      }}
    />
  );
}
