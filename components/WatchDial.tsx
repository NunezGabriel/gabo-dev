"use client";

import { useEffect, useRef } from "react";

const RING_RADIUS = 48;
const RING_LENGTH = 2 * Math.PI * RING_RADIUS;

// Minimal swiss-railway style dial: real time hands, red second hand,
// outer ring fills with page scroll.
export default function WatchDial({ size = 38 }: { size?: number }) {
  const hourRef = useRef<SVGGElement>(null);
  const minuteRef = useRef<SVGGElement>(null);
  const secondRef = useRef<SVGGElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    let raf: number;

    const tick = () => {
      const now = new Date();
      const ms = now.getMilliseconds();
      const s = now.getSeconds() + ms / 1000;
      const m = now.getMinutes() + s / 60;
      const h = (now.getHours() % 12) + m / 60;

      hourRef.current?.setAttribute("transform", `rotate(${h * 30} 50 50)`);
      minuteRef.current?.setAttribute("transform", `rotate(${m * 6} 50 50)`);
      secondRef.current?.setAttribute("transform", `rotate(${s * 6} 50 50)`);

      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      ringRef.current?.setAttribute(
        "stroke-dashoffset",
        String(RING_LENGTH * (1 - progress))
      );
    };

    raf = requestAnimationFrame(tick);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const ticks = Array.from({ length: 12 }, (_, i) => {
    const isQuarter = i % 3 === 0;
    return (
      <rect
        key={i}
        className="watch-tick"
        x={isQuarter ? 48.5 : 49.2}
        y={9}
        width={isQuarter ? 3 : 1.6}
        height={isQuarter ? 9.5 : 6}
        rx={0.8}
        transform={`rotate(${i * 30} 50 50)`}
      />
    );
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="shrink-0"
    >
      {/* scroll progress bezel */}
      <circle
        ref={ringRef}
        className="watch-progress"
        cx="50"
        cy="50"
        r={RING_RADIUS}
        fill="none"
        strokeWidth="3"
        strokeDasharray={RING_LENGTH}
        strokeDashoffset={RING_LENGTH}
        strokeLinecap="round"
        transform="rotate(-90 50 50)"
      />

      <circle className="watch-face" cx="50" cy="50" r="44" strokeWidth="1" />

      {ticks}

      <g ref={hourRef}>
        <line className="watch-hand" x1="50" y1="56" x2="50" y2="30" strokeWidth="5" />
      </g>
      <g ref={minuteRef}>
        <line className="watch-hand" x1="50" y1="58" x2="50" y2="17" strokeWidth="3.4" />
      </g>
      <g ref={secondRef}>
        <line className="watch-second" x1="50" y1="60" x2="50" y2="26" strokeWidth="1.6" />
        <circle className="watch-second" cx="50" cy="24" r="3.6" strokeWidth="0" />
      </g>

      <circle cx="50" cy="50" r="2.2" fill="var(--ink)" />
    </svg>
  );
}
