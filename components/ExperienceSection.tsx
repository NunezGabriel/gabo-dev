"use client";

import Link from "next/link";
import Section from "./Section";
import CareerExplorer from "./CareerExplorer";
import { useLanguage } from "./LanguageProvider";

export default function ExperienceSection() {
  const { dict, lang } = useLanguage();
  return <Section id="experience" kicker="~/experience" title={lang === "es" ? "El camino hasta aquí." : "The path so far."}>
    <CareerExplorer />
    <Link href="/about#career" className="console-link mt-8 inline-flex">{dict.experienceSection.fullPath} <span aria-hidden="true">↗</span></Link>
  </Section>;
}
