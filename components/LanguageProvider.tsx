"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { content, type Dictionary, type Lang } from "@/lib/content";

interface LanguageContextValue {
  lang: Lang;
  dict: Dictionary;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  dict: content.en,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  // restore the stored preference after mount (SSR always renders English)
  useEffect(() => {
    try {
      if (localStorage.getItem("lang") === "es") setLang("es");
    } catch {
      // storage unavailable — keep the default
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => {
    setLang((prev) => {
      const next: Lang = prev === "en" ? "es" : "en";
      try {
        localStorage.setItem("lang", next);
      } catch {
        // storage unavailable — the switch still applies for the session
      }
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, dict: content[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
