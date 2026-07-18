"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectsHeroSection() {
  const { dict } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <div className="glow" />

      <div className="relative mx-auto w-full max-w-5xl px-6 pt-16 pb-10 md:pt-56 md:pb-16">
        <Reveal>
          <p className="kicker">{dict.workPage.kicker}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display-fade mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            {dict.workPage.title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-soft md:text-lg">
            {dict.workPage.intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
