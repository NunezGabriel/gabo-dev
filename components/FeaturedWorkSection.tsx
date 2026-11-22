"use client";

import Link from "next/link";
import Section from "./Section";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import PixelCard from "./PixelCard";

// Site accent ramp, light → base, so the pixels match the teal of the data field.
const PIXEL_COLORS = ["#79ccae", "#39a496", "#1f817f"];
import { useLanguage } from "./LanguageProvider";

export default function FeaturedWorkSection() {
  const { dict, lang } = useLanguage();
  const [featured, ...rest] = dict.projects.filter(project => project.featured).slice(0, 3);
  return <Section id="selected-work" kicker={lang === "es" ? "Proyectos seleccionados" : "Selected projects"} title={lang === "es" ? "Algunos de mis proyectos." : "A few things I’ve made."}>
    <Reveal><ProjectCard project={featured} index={1} featured /></Reveal>
    <div className={rest.length === 1 ? "mt-10" : "project-collection mt-10"}>{rest.map((project,i) => <Reveal key={project.name}><ProjectCard project={project} index={i+2} featured={rest.length === 1}/></Reveal>)}</div>
    <Reveal>
      {/* The link is the focus target; tabIndex -1 avoids a second tab stop on the card. */}
      <PixelCard className="view-all-pixel mt-10" radius={0} intro={false} colors={PIXEL_COLORS} glowColor="#1f817f" tabIndex={-1}>
        <Link href="/work" className="view-all-link">{dict.featured.viewAll}<span aria-hidden="true">↗</span></Link>
      </PixelCard>
    </Reveal>
  </Section>;
}
