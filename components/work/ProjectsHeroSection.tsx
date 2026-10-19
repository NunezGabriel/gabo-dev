"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectsHeroSection() {
  const { dict, lang } = useLanguage();
  return <section className="mx-auto w-full max-w-5xl px-6 pt-16 pb-10 md:pt-52 md:pb-14">
    <Reveal><p className="kicker">{lang === "es" ? "Proyectos" : "Projects"}</p><h1 className="mt-5 max-w-3xl text-5xl md:text-7xl">{lang === "es" ? "Mi archivo de proyectos." : "My project archive."}</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">{dict.workPage.intro}</p></Reveal>
    <p className="archive-count"><span>{String(dict.projects.length).padStart(2,"0")}</span>{lang === "es" ? "proyectos · clientes, ideas y comunidad" : "projects · clients, ideas & community"}</p>
  </section>;
}
