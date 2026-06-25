"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three"; // static — loaded once with the lazy chunk

/* ─────────────── Shader source ─────────────── */
const VERT = `
attribute float aSize;
attribute vec3  aColor;
varying   vec3  vColor;
varying   float vNear;

void main() {
  vColor = aColor;
  vec4  mv    = modelViewMatrix * vec4(position, 1.0);
  float depth = -mv.z;
  vNear = 1.0 - clamp((depth - 20.0) / 1300.0, 0.0, 1.0);
  gl_PointSize = clamp(aSize * 380.0 / depth, 0.6, 22.0);
  gl_Position  = projectionMatrix * mv;
}
`;

const FRAG = `
varying vec3  vColor;
varying float vNear;

void main() {
  vec2  uv   = gl_PointCoord - 0.5;
  float dist = length(uv);

  float core = 1.0 - smoothstep(0.0,  0.16, dist);
  float glow = pow(1.0 - smoothstep(0.16, 0.5, dist), 2.0);

  float a = core + glow * 0.7 * vNear;
  if (a < 0.004) discard;

  vec3 c = vColor + vec3(0.10, 0.14, 0.28) * core * vNear;
  gl_FragColor = vec4(c, a * (0.50 + vNear * 0.50));
}
`;

/* ─────────────── Params ─────────────── */
const N      = 3600;
const SPEED  = 0.95;
const YAW    = 0.26;
const PITCH  = 0.14;
const LERP   = 0.055;

function rnd(lo: number, hi: number) { return lo + Math.random() * (hi - lo); }

/* ─────────────── Component ─────────────── */
export default function StarField() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = ref.current;
    if (!mount) return;

    /* ── geometry buffers ── */
    const pos   = new Float32Array(N * 3);
    const col   = new Float32Array(N * 3);
    const sizes = new Float32Array(N);

    function spawn(i: number, zOverride?: number) {
      const angle  = rnd(0, Math.PI * 2);
      const radius = rnd(30, 620);
      pos[i * 3]     = Math.cos(angle) * radius;
      pos[i * 3 + 1] = Math.sin(angle) * radius;
      pos[i * 3 + 2] = zOverride ?? rnd(-1750, -25);

      const t = Math.random();
      const b = rnd(0.60, 1.0);
      if (t < 0.68) {
        col[i*3] = b*0.90; col[i*3+1] = b*0.93; col[i*3+2] = b;
      } else if (t < 0.88) {
        col[i*3] = b*0.72; col[i*3+1] = b*0.80; col[i*3+2] = b;
      } else {
        col[i*3] = b; col[i*3+1] = b*0.92; col[i*3+2] = b*0.70;
      }
      sizes[i] = rnd(3.0, 9.0);
    }

    for (let i = 0; i < N; i++) spawn(i);

    /* ── scene ── */
    const scene = new THREE.Scene();

    /* ── camera ── */
    const cam = new THREE.PerspectiveCamera(72, mount.clientWidth / mount.clientHeight, 0.1, 2600);
    cam.position.z = 400;

    /* ── renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x04060f, 1);
    mount.appendChild(renderer.domElement);

    /* ── geometry ── */
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos,   3));
    geo.setAttribute("aColor",   new THREE.BufferAttribute(col,   3));
    geo.setAttribute("aSize",    new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.ShaderMaterial({
      vertexShader:   VERT,
      fragmentShader: FRAG,
      transparent:    true,
      depthWrite:     false,
      blending:       THREE.AdditiveBlending,
    });

    scene.add(new THREE.Points(geo, mat));

    /* ── mouse / touch ── */
    let tx = 0, ty = 0, cx = 0, cy = 0;

    function onMoveNorm(nx: number, ny: number) {
      ty = nx * YAW;
      tx = -ny * PITCH;
    }
    const onMouse = (e: MouseEvent) =>
      onMoveNorm((e.clientX / innerWidth) * 2 - 1, (e.clientY / innerHeight) * 2 - 1);
    const onTouch = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      onMoveNorm(
        (e.touches[0].clientX / innerWidth) * 2 - 1,
        (e.touches[0].clientY / innerHeight) * 2 - 1,
      );
    };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchmove", onTouch, { passive: true });

    /* ── resize ── */
    const onResize = () => {
      if (!mount.isConnected) return;
      cam.aspect = mount.clientWidth / mount.clientHeight;
      cam.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    /* ── animation loop ── */
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    const colAttr = geo.attributes.aColor   as THREE.BufferAttribute;
    const szAttr  = geo.attributes.aSize    as THREE.BufferAttribute;

    let rafId: number;
    let alive = true;

    function tick() {
      if (!alive) return;
      rafId = requestAnimationFrame(tick);

      cam.position.z -= SPEED;

      for (let i = 0; i < N; i++) {
        if (posAttr.getZ(i) > cam.position.z + 15) {
          spawn(i, cam.position.z - rnd(900, 1750));
        }
      }
      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;
      szAttr.needsUpdate  = true;

      cx += (tx - cx) * LERP;
      cy += (ty - cy) * LERP;
      cam.rotation.x = cx;
      cam.rotation.y = cy;

      renderer.render(scene, cam);
    }

    tick();

    /* ── resume animation when tab becomes visible again ── */
    const onVisibility = () => {
      if (document.visibilityState === "visible" && alive) {
        cancelAnimationFrame(rafId);
        tick();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    /* ── cleanup ── */
    return () => {
      alive = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}
    />
  );
}
