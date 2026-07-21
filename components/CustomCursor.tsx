"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, motion } from "motion/react";

interface TrailPoint {
  x: number;
  y: number;
  t: number;
}

const TRAIL_LIFE = 380; // ms a slash segment stays visible

const readInkColor = () =>
  getComputedStyle(document.documentElement).getPropertyValue("--ink").trim();

// A light ring follows the cursor with a touch of spring lag, and a canvas
// draws a fading "slash" trail behind it. Both use the theme's ink color
// (black in light mode, white in dark) so the trail stays clearly visible
// against the near-white canvas background.
export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 600, damping: 35, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 600, damping: 35, mass: 0.4 });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<TrailPoint[]>([]);
  const rafRef = useRef<number | null>(null);
  const hoveringRef = useRef(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const inkRef = useRef("#1d1d1f");

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduceMotion) return;

    document.documentElement.classList.add("custom-cursor-active");
    inkRef.current = readInkColor();

    const themeObserver = new MutationObserver(() => {
      inkRef.current = readInkColor();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const resize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      rafRef.current = null;
      if (!ctx || !canvas) return;
      const now = performance.now();
      pointsRef.current = pointsRef.current.filter(
        (p) => now - p.t < TRAIL_LIFE,
      );

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pts = pointsRef.current;
      for (let i = 1; i < pts.length; i++) {
        const prev = pts[i - 1];
        const cur = pts[i];
        const age = (now - cur.t) / TRAIL_LIFE; // 0 = fresh, 1 = gone
        const alpha = Math.max(0, 1 - age) * 0.85;
        if (alpha <= 0) continue;
        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(cur.x, cur.y);
        ctx.strokeStyle = inkRef.current;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = Math.max(0.5, 2.6 * (1 - age));
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      if (pts.length > 0) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    const scheduleDraw = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      pointsRef.current.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      scheduleDraw();

      const target = e.target as Element | null;
      const interactive = !!target?.closest(
        'a, button, [role="button"], input, textarea, select',
      );
      if (interactive !== hoveringRef.current) {
        hoveringRef.current = interactive;
        ringRef.current?.classList.toggle("cc-hover", interactive);
      }
    };

    const onLeave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [x, y]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[999] hidden md:block"
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      <motion.div
        ref={ringRef}
        className="cc-ring"
        style={{ x: springX, y: springY }}
      />
    </div>
  );
}
