"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import LogoMark from "./LogoMark";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

// The nav is the top arc of a giant dial: items sit at fixed angles on the
// circle and the whole dial rotates so the active route lands at the apex.
// The page's sections form a static concentric ring just inside the line.
const STEP = 10; // degrees between main items
const APEX = 56;

const SUB_GAP = 42;
const SUB_STEP = 10; // enough room for both English and Spanish labels

const SPRING = {
  type: "spring",
  stiffness: 150,
  damping: 19,
  mass: 1.1,
} as const;

export default function ArcNav({
  visible,
  pathname,
}: {
  visible: boolean;
  pathname: string;
}) {
  const reduceMotion = useReducedMotion();
  const { dict } = useLanguage();

  const items = [
    { href: "/", label: dict.profile.shortName, alt: "dot_gabo — AQP" },
    { href: "/work", label: dict.nav.work },
    { href: "/about", label: dict.nav.about },
  ];

  const found = items.findIndex((item) => item.href === pathname);
  const activeIndex = found === -1 ? 0 : found;
  const rotation = -(activeIndex - 1) * STEP;

  const anchors = dict.nav.subs[pathname] ?? [];
  const [activeSub, setActiveSub] = useState(0);

  // Scrollspy: highlight the section currently in view.
  useEffect(() => {
    setActiveSub(0);
    const ids = (dict.nav.subs[pathname] ?? []).map((anchor) => anchor.id);
    if (ids.length === 0) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        let current = 0;
        ids.forEach((id, i) => {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 200) current = i;
        });
        setActiveSub(current);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pathname, dict]);

  const spring = reduceMotion ? { duration: 0 } : SPRING;

  const slide = visible ? "translate-y-0" : "-translate-y-full";

  return (
    <>
      {/* backdrop lives in its own fixed layer: a backdrop-filter inside the
          translating container gets composited over its siblings in Chromium */}
      <div
        aria-hidden
        className={`arc-nav-bg pointer-events-none fixed inset-x-0 top-0 z-40 hidden h-40 transition-transform duration-300 md:block ${slide}`}
      />

      <div
        className={`arc-dial pointer-events-none fixed inset-x-0 top-0 z-50 hidden h-40 overflow-hidden transition-transform duration-300 md:block ${slide}`}
      >
        {/* the arc — top edge of the main dial */}
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 rounded-full border hairline"
          style={{
            width: "calc(var(--dial-radius) * 2)",
            height: "calc(var(--dial-radius) * 2)",
            top: APEX,
          }}
        />

        {Array.from({ length: 41 }, (_, i) => (
          <span
            key={i}
            aria-hidden
            className="dial-tick"
            style={{
              top: `calc(${APEX}px + var(--dial-radius))`,
              height: i % 5 === 0 ? 8 : 4,
              transform: `rotate(${(i - 20) * 1.5}deg) translateY(calc(-1 * var(--dial-radius)))`,
            }}
          />
        ))}

        {/* 12 o'clock index, just under the apex */}
        <span
          aria-hidden
          className="absolute left-1/2 w-0.5 -translate-x-1/2 bg-accent"
          style={{ top: APEX - 3, height: 14 }}
        />

        {/* main dial */}
        <motion.nav
          aria-label="Primary"
          className="absolute left-1/2 h-0 w-0"
          style={{ top: `calc(${APEX}px + var(--dial-radius))` }}
          initial={false}
          animate={{ rotate: rotation }}
          transition={spring}
        >
          {items.map((item, i) => {
            const isActive = i === activeIndex;
            const distance = Math.abs(i - activeIndex);
            return (
              <div
                key={item.href}
                className="absolute left-0 top-0"
                style={{
                  transform: `rotate(${(i - 1) * STEP}deg) translateY(calc(-1 * var(--dial-radius)))`,
                }}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: -((i - 1) * STEP + rotation) }}
                  transition={spring}
                  className="h-0 w-0"
                >
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`pointer-events-auto block w-max -translate-x-1/2 -translate-y-full pb-4 text-sm whitespace-nowrap transition-[color,opacity] duration-500 ${
                      isActive
                        ? "font-medium text-ink"
                        : "text-soft hover:text-ink"
                    }`}
                    style={{
                      opacity: isActive ? 1 : distance === 1 ? 0.9 : 0.55,
                    }}
                  >
                    {i === 0 ? (
                      <span className="logo-wrapper block">
                        <span className="logo-sizer">{item.alt}</span>
                        <span className="logo-text primary">{item.label}</span>
                        <span className="logo-text secondary">{item.alt}</span>
                      </span>
                    ) : (
                      item.label
                    )}
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </motion.nav>

        {/* inner ring — the page's sections, concentric with the arc so each
            label runs parallel to the line at a constant 40px inside it */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            className="absolute left-1/2 h-0 w-0"
            style={{ top: `calc(${APEX}px + var(--dial-radius))` }}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {anchors.map((anchor, i) => {
              const angle = (i - (anchors.length - 1) / 2) * SUB_STEP;
              const isActive = i === activeSub;
              return (
                <div
                  key={anchor.id}
                  className="absolute left-0 top-0"
                  style={{
                    transform: `rotate(${angle}deg) translateY(calc(${SUB_GAP}px - var(--dial-radius)))`,
                  }}
                >
                  <a
                    href={`#${anchor.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`pointer-events-auto block w-max -translate-x-1/2 font-mono text-[11px] tracking-wide whitespace-nowrap transition-colors duration-300 ${
                      isActive ? "text-ink" : "text-soft hover:text-ink"
                    }`}
                  >
                    <span
                      className="inline-block"
                      style={{ transform: `rotate(${-angle}deg)` }}
                    >
                      {anchor.label}
                    </span>
                  </a>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* fixed ends of the arc: logo mark, language and theme switches */}
        <div
          className="pointer-events-auto absolute"
          style={{ left: "max(1.25rem, calc(50% - 560px))", top: 24 }}
        >
          <Link
            href="/"
            aria-label="Gabriel Nuñez — home"
            className="block text-ink transition-opacity duration-200 hover:opacity-70"
          >
            <LogoMark size={34} />
          </Link>
        </div>
        <div
          className="pointer-events-auto absolute flex items-center gap-2"
          style={{ right: "max(1.25rem, calc(50% - 560px))", top: 24 }}
        >
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
