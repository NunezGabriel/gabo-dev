"use client";

import { useEffect, useState, type PointerEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useLanguage } from "./LanguageProvider";

const WIDTH = 380;
const HEIGHT = 290;

// Render outside card transforms so the floating preview tracks viewport coordinates.
export default function HoverVideoPreview({ video, title, children, className }: {
  video?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const reduceMotion = useReducedMotion();
  const { lang } = useLanguage();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 270, damping: 30 });
  const springY = useSpring(y, { stiffness: 270, damping: 30 });

  useEffect(() => {
    const hide = () => setHovered(false);
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") hide(); };
    window.addEventListener("scroll", hide, { passive: true });
    window.addEventListener("resize", hide);
    window.addEventListener("blur", hide);
    window.addEventListener("keydown", escape);
    return () => {
      window.removeEventListener("scroll", hide);
      window.removeEventListener("resize", hide);
      window.removeEventListener("blur", hide);
      window.removeEventListener("keydown", escape);
    };
  }, []);

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (!video || event.pointerType === "touch" || window.innerWidth < 768 || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if ((event.target as Element).closest("details, button, a")) { setHovered(false); return; }
    const nextX = event.clientX + WIDTH + 32 > window.innerWidth ? event.clientX - WIDTH - 28 : event.clientX + 28;
    const px = Math.max(12, Math.min(nextX, window.innerWidth - WIDTH - 12));
    const py = Math.max(12, Math.min(event.clientY - HEIGHT / 2, window.innerHeight - HEIGHT - 12));
    x.set(px); y.set(py);
    if (!hovered) { springX.jump(px); springY.jump(py); }
    setHovered(true);
  };

  return <div className={className} onPointerEnter={move} onPointerMove={move} onPointerLeave={() => setHovered(false)}>
    {children}
    {typeof document !== "undefined" && createPortal(<AnimatePresence>{hovered && video &&
      <motion.div className="video-preview" aria-hidden="true" style={{ x: reduceMotion ? x : springX, y: reduceMotion ? y : springY, width: WIDTH }}
        initial={{ opacity: 0, scale: reduceMotion ? 1 : .97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: reduceMotion ? 1 : .98 }} transition={{ duration: reduceMotion ? 0 : .18 }}>
        <div className="preview-heading"><span className="status-pixel" />{title}<span className="ml-auto">{lang === "es" ? "VISTA PREVIA" : "PREVIEW"}</span></div>
        <video src={video} className="aspect-video w-full object-contain" autoPlay={!reduceMotion} muted loop playsInline preload="metadata" />
        <p>{lang === "es" ? "Esc para cerrar · abre la demo para ver los controles" : "Esc to close · open the demo for playback controls"}</p>
      </motion.div>
    }</AnimatePresence>, document.body)}
  </div>;
}
