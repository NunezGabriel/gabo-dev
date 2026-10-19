"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const alphabet = "01ABCDEF23456789{}[]<>/+=:;";

export default function DataField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: -1000, y: -1000 };
    let width = 0, height = 0, columns = 0, frame = 0, lastFrame = 0, lastChange = 0, tick = 0;
    let glyphs: string[] = [];
    let dark = document.documentElement.classList.contains("dark");

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = "12px monospace";
      ctx.textAlign = "center";
      const base = dark ? 215 : 35;
      const green = [31, 129, 127];
      glyphs.forEach((glyph, i) => {
        const x = (i % columns) * 26 + 13;
        const y = Math.floor(i / columns) * 28 + 20;
        const distance = Math.hypot(x - pointer.x, y - pointer.y);
        const light = Math.max(0, 1 - distance / 170);
        const color = green.map(channel => Math.round(base + (channel - base) * light));
        ctx.fillStyle = `rgba(${color.join(",")},${(dark ? .075 : .05) + light * .6})`;
        ctx.fillText(glyph, x, y);
      });
    };
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      columns = Math.ceil(width / 26);
      glyphs = Array.from({ length: columns * Math.ceil(height / 28) }, (_, i) => alphabet[(i * 17 + i % 11) % alphabet.length]);
      draw();
    };
    const animate = (time: number) => {
      if (time - lastFrame > 33) {
        lastFrame = time;
        if (time - lastChange > 600) {
          lastChange = time;
          tick++;
          for (let i = 0; i < glyphs.length; i += 31) {
            const index = (i + tick * 7) % glyphs.length;
            glyphs[index] = alphabet[Math.floor(Math.random() * alphabet.length)];
          }
        }
        draw();
      }
      frame = requestAnimationFrame(animate);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      pointer.x = pointer.y = -1000;
      draw();
      if (!paused && !reduced.matches && !document.hidden) frame = requestAnimationFrame(animate);
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch" || paused || reduced.matches) return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };
    const leave = () => { pointer.x = pointer.y = -1000; };
    const theme = new MutationObserver(() => {
      const nextDark = document.documentElement.classList.contains("dark");
      if (nextDark === dark) return;
      dark = nextDark;
      draw();
    });
    resize();
    sync();
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("blur", leave);
    document.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", sync);
    reduced.addEventListener("change", sync);
    return () => {
      cancelAnimationFrame(frame);
      theme.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("blur", leave);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", sync);
      reduced.removeEventListener("change", sync);
    };
  }, [paused]);

  return <>
    <canvas ref={canvasRef} className="data-field" aria-hidden="true" />
    <button className="field-toggle" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={lang === "es" ? "Pausar animación del fondo" : "Pause background animation"}>
      <span aria-hidden="true">{paused ? "Ⅱ" : "✳"}</span> {lang === "es" ? "FONDO" : "FIELD"} / {paused ? "OFF" : "ON"}
    </button>
  </>;
}
