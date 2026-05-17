"use client";
import { useEffect, useRef } from "react";

const TOOLS = [
  { name: "HubSpot",    abbr: "HS", color: "#FF7A59", glow: "rgba(255,122,89,0.22)" },
  { name: "Salesforce", abbr: "SF", color: "#00A1E0", glow: "rgba(0,161,224,0.22)"  },
  { name: "Zoho",       abbr: "ZO", color: "#E42527", glow: "rgba(228,37,39,0.22)"  },
  { name: "Zapier",     abbr: "ZP", color: "#FF4A00", glow: "rgba(255,74,0,0.22)"   },
  { name: "Make",       abbr: "MK", color: "#9B6EF3", glow: "rgba(155,110,243,0.22)"},
  { name: "Next.js",    abbr: "NX", color: "#E0E0E0", glow: "rgba(224,224,224,0.12)"},
  { name: "Vercel",     abbr: "VC", color: "#C8C8C8", glow: "rgba(200,200,200,0.12)"},
  { name: "Figma",      abbr: "FG", color: "#A259FF", glow: "rgba(162,89,255,0.22)" },
];

const CARD_W  = 96;
const GAP     = 18;
const STRIDE  = CARD_W + GAP;
const N       = TOOLS.length;
const TRACK_W = N * STRIDE;          // one full copy width
const SPEED   = 0.46;                // px / frame

export default function LogoTicker() {
  /* two copies for seamless loop */
  const items = [...TOOLS, ...TOOLS];

  const containerRef  = useRef<HTMLDivElement>(null);
  const itemRefs      = useRef<(HTMLDivElement | null)[]>([]);
  const offsetRef     = useRef(0);
  const pausedRef     = useRef(false);
  const hoveredRef    = useRef<number | null>(null);
  const scalesRef     = useRef<number[]>(new Array(items.length).fill(1));
  const cwRef         = useRef(560);

  useEffect(() => {
    const updateCW = () => {
      if (containerRef.current) cwRef.current = containerRef.current.offsetWidth;
    };
    updateCW();
    const ro = new ResizeObserver(updateCW);
    if (containerRef.current) ro.observe(containerRef.current);

    let raf: number;

    const animate = () => {
      /* advance offset */
      if (!pausedRef.current) {
        offsetRef.current += SPEED;
        if (offsetRef.current >= TRACK_W) offsetRef.current -= TRACK_W;
      }

      const cw  = cwRef.current;
      const ctr = cw / 2;
      const mod = offsetRef.current;

      itemRefs.current.forEach((el, i) => {
        if (!el) return;

        /* raw screen-x for this item */
        let x = i * STRIDE - mod;
        /* if scrolled off left edge, bring in the second-copy version */
        if (x < -(CARD_W + 10)) x += TRACK_W * 2;

        /* ── focal-point maths ── */
        const itemCx  = x + CARD_W / 2;
        const rawDist = (itemCx - ctr) / (cw * 0.52);
        const dist    = Math.max(-1, Math.min(1, rawDist));
        const abs     = Math.abs(dist);

        const baseScale = 1 - abs * 0.36;
        const opacity   = Math.max(1 - abs * 0.76, 0.11);
        const rotY      = dist * 30;

        /* smooth hover scale (JS lerp → no CSS-transition fight) */
        const isHov       = hoveredRef.current === i;
        const targetScale = isHov ? Math.min(baseScale + 0.15, 1.14) : baseScale;
        scalesRef.current[i] += (targetScale - scalesRef.current[i]) * 0.18;
        const scale = scalesRef.current[i];

        el.style.left      = `${x}px`;
        el.style.transform = `translateY(-50%) rotateY(${rotY.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
        el.style.opacity   = opacity.toFixed(3);
      });

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        background: "rgba(4,6,15,0.88)",
        borderRadius: 20,
        border: "1px solid rgba(255,255,255,0.08)",
        overflow: "hidden",
        padding: "20px 0",
      }}
    >
      {/* 3D perspective track */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          height: 120,
          perspective: "660px",
          perspectiveOrigin: "50% 50%",
        }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; hoveredRef.current = null; }}
      >
        {items.map((tool, i) => (
          <div
            key={i}
            ref={el => { itemRefs.current[i] = el; }}
            style={{
              position:    "absolute",
              top:         "50%",
              left:        0,
              width:       CARD_W,
              willChange:  "transform, opacity",
              cursor:      "default",
            }}
            onMouseEnter={() => { hoveredRef.current = i; }}
            onMouseLeave={() => { hoveredRef.current = null; }}
          >
            {/* Glass card */}
            <div
              style={{
                background:          "rgba(255,255,255,0.045)",
                border:              "1px solid rgba(255,255,255,0.1)",
                borderRadius:        14,
                backdropFilter:      "blur(12px)",
                WebkitBackdropFilter:"blur(12px)",
                padding:             "14px 10px",
                display:             "flex",
                flexDirection:       "column",
                alignItems:          "center",
                gap:                 9,
              }}
            >
              {/* Coloured icon badge */}
              <div
                style={{
                  width:        40,
                  height:       40,
                  borderRadius: 10,
                  background:   tool.glow,
                  border:       `1px solid ${tool.color}28`,
                  display:      "flex",
                  alignItems:   "center",
                  justifyContent: "center",
                  boxShadow:    `0 0 12px ${tool.glow}`,
                }}
              >
                <span
                  style={{
                    color:       tool.color,
                    fontSize:    12,
                    fontWeight:  800,
                    letterSpacing: "-0.03em",
                    fontFamily:  "ui-monospace, monospace",
                  }}
                >
                  {tool.abbr}
                </span>
              </div>

              {/* Tool name */}
              <span
                style={{
                  color:          "rgba(255,255,255,0.5)",
                  fontSize:       10,
                  fontWeight:     500,
                  letterSpacing:  "0.02em",
                  textAlign:      "center",
                  whiteSpace:     "nowrap",
                }}
              >
                {tool.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Left + right edge fade */}
      <div
        style={{
          position:      "absolute",
          inset:         0,
          pointerEvents: "none",
          background:    "linear-gradient(90deg, rgba(4,6,15,0.94) 0%, transparent 17%, transparent 83%, rgba(4,6,15,0.94) 100%)",
        }}
      />
    </div>
  );
}
