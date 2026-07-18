"use client";

import { useLanguage } from "./LanguageProvider";

// Shows the language you switch TO — mirrors the theme toggle, which shows
// the moon while in light mode.
export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  const target = lang === "en" ? "ES" : "EN";

  return (
    <button
      onClick={toggle}
      aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line font-mono text-[10px] tracking-widest text-soft transition-colors duration-200 hover:text-ink"
    >
      {target}
    </button>
  );
}
