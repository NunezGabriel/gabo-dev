"use client";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectIndex() {
  const { dict, lang } = useLanguage();
  const client = dict.projects.filter(p => p.group === "client");
  const personal = dict.projects.filter(p => p.group === "personal");
  return <>
    <Section id="client-work" kicker="~/projects/client" title={lang === "es" ? "Con clientes y equipos." : "With clients & teams."} className="pt-8 md:pt-12">
      <div className="project-collection">{client.map((project, i) => <Reveal key={project.name} delay={i % 2 * 60}><ProjectCard project={project} index={i + 1} /></Reveal>)}</div>
    </Section>
    <Section id="personal" kicker="~/projects/personal" title={lang === "es" ? "Ideas que tomaron forma." : "Ideas that took shape."} className="pt-0 md:pt-0">
      <div className="project-collection">{personal.map((project, i) => <Reveal key={project.name} delay={i % 2 * 60}><ProjectCard project={project} index={client.length + i + 1} /></Reveal>)}</div>
    </Section>
  </>;
}
