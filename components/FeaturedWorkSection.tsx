"use client";

import Link from "next/link";
import Section from "./Section";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "./LanguageProvider";

export default function FeaturedWorkSection() {
  const { dict, lang } = useLanguage();
  const [featured, ...rest] = dict.projects.slice(0, 3);
  return <Section id="selected-work" kicker={lang === "es" ? "Proyectos seleccionados" : "Selected projects"} title={lang === "es" ? "Algunos de mis proyectos." : "A few things I’ve made."}>
    <Reveal><ProjectCard project={featured} index={1} featured /></Reveal>
    <div className="project-collection mt-10">{rest.map((project,i) => <Reveal key={project.name}><ProjectCard project={project} index={i+2}/></Reveal>)}</div>
    <Link href="/work" className="console-link mt-10 inline-flex">{dict.featured.viewAll}<span aria-hidden="true">↗</span></Link>
  </Section>;
}
