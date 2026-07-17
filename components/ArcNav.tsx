"use client";

import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import LogoMark from "./LogoMark";
import ThemeToggle from "./ThemeToggle";

// The nav is the top arc of a giant dial: items sit at fixed angles on the
// circle and the whole dial rotates so the active route lands at the apex.
const R = 1200; // dial radius (px)
const STEP = 11; // degrees between items
const APEX = 44; // px from container top to the arc's highest point

const items = [
  { href: "/", label: "Gabriel Nuñez", alt: "gabo.dev — AQP" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

// In-page anchors shown under the arc for the active route.
const subsections: Record<string, { label: string; href: string }[]> = {
  "/": [
    { label: "What I do", href: "#what-i-do" },
    { label: "Selected work", href: "#selected-work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  "/work": [
    { label: "Personal & community", href: "#personal" },
    { label: "Client & team", href: "#client-work" },
  ],
  "/about": [
    { label: "Career", href: "#career" },
    { label: "Education", href: "#education" },
    { label: "Beyond the code", href: "#beyond" },
  ],
};

export default function ArcNav({
  visible,
  pathname,
}: {
  visible: boolean;
  pathname: string;
}) {
  const reduceMotion = useReducedMotion();
  const found = items.findIndex((item) => item.href === pathname);
  const activeIndex = found === -1 ? 0 : found;
  const rotation = -(activeIndex - 1) * STEP;
  const anchors = subsections[pathname] ?? [];

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 hidden h-36 overflow-hidden transition-transform duration-300 md:block ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="arc-nav-bg absolute inset-0" />

      {/* the arc — top edge of the dial */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 rounded-full border hairline"
        style={{ width: R * 2, height: R * 2, top: APEX }}
      />

      {/* 12 o'clock index, just under the apex */}
      <span
        aria-hidden
        className="absolute left-1/2 w-px -translate-x-1/2 bg-ink/40"
        style={{ top: APEX + 3, height: 9 }}
      />

      {/* rotating dial with the nav items */}
      <motion.nav
        aria-label="Primary"
        className="absolute left-1/2 h-0 w-0"
        style={{ top: APEX + R }}
        initial={false}
        animate={{ rotate: rotation }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 150, damping: 19, mass: 1.1 }
        }
      >
        {items.map((item, i) => {
          const isActive = i === activeIndex;
          const distance = Math.abs(i - activeIndex);
          return (
            <div
              key={item.href}
              className="absolute left-0 top-0"
              style={{
                transform: `rotate(${(i - 1) * STEP}deg) translateY(-${R}px)`,
              }}
            >
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`pointer-events-auto block -translate-x-1/2 -translate-y-full pb-5 text-sm whitespace-nowrap transition-[color,opacity] duration-500 ${
                  isActive ? "font-medium text-ink" : "text-soft hover:text-ink"
                }`}
                style={{ opacity: isActive ? 1 : distance === 1 ? 0.9 : 0.55 }}
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
            </div>
          );
        })}
      </motion.nav>

      {/* in-page anchors for the active route, under the arc */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          className="absolute left-1/2 flex -translate-x-1/2 gap-7"
          style={{ top: 90 }}
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: 6 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {anchors.map((anchor) => (
            <a
              key={anchor.href}
              href={anchor.href}
              className="pointer-events-auto font-mono text-[11px] tracking-wide whitespace-nowrap text-faint transition-colors duration-200 hover:text-ink"
            >
              {anchor.label}
            </a>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* fixed ends of the arc: logo mark and theme switch */}
      <div
        className="pointer-events-auto absolute"
        style={{ left: "max(1.25rem, calc(50% - 560px))", top: 42 }}
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
        className="pointer-events-auto absolute"
        style={{ right: "max(1.25rem, calc(50% - 560px))", top: 42 }}
      >
        <ThemeToggle />
      </div>
    </div>
  );
}
