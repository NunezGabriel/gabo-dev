"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const root = document.documentElement;
    const hide = () => {
      root.classList.remove("custom-cursor-active");
      if (cursor.current) cursor.current.dataset.visible = "false";
    };
    const move = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!media.matches || event.pointerType === "touch" || target?.closest('input, textarea, [contenteditable="true"]')) {
        hide();
        return;
      }
      if (!cursor.current) return;
      cursor.current.style.transform = 'translate3d(' + event.clientX + 'px,' + event.clientY + 'px,0)';
      cursor.current.dataset.visible = "true";
      cursor.current.dataset.hover = String(!!target?.closest('a, button, summary, select, [role="button"], video'));
      if (!root.classList.contains("custom-cursor-active")) root.classList.add("custom-cursor-active");
    };
    const press = () => { if (cursor.current) cursor.current.dataset.pressed = "true"; };
    const release = () => { if (cursor.current) cursor.current.dataset.pressed = "false"; };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", press);
    window.addEventListener("pointerup", release);
    window.addEventListener("blur", hide);
    document.addEventListener("pointerleave", hide);
    media.addEventListener("change", hide);
    return () => {
      hide();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("blur", hide);
      document.removeEventListener("pointerleave", hide);
      media.removeEventListener("change", hide);
    };
  }, []);

  return <div ref={cursor} className="data-cursor" aria-hidden="true"><span /></div>;
}
