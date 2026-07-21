"use client";

import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import HoverVideoPreview from "@/components/HoverVideoPreview";
import { useLanguage } from "@/components/LanguageProvider";
import { type Project } from "@/lib/content";

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border hairline px-3 py-1 font-mono text-[11px] text-soft">
    {children}
  </span>
);

const ProjectRow = ({ project, index }: { project: Project; index: number }) => (
  <Reveal>
    <HoverVideoPreview video={project.video}>
      <article className="grid grid-cols-1 gap-3 border-t hairline py-10 transition-colors duration-300 hover:bg-panel/40 md:grid-cols-[72px_1fr_230px] md:gap-8">
        <span className="font-mono text-xs leading-7 text-faint">
          {String(index).padStart(2, "0")}
        </span>

        <div>
          <h3 className="text-xl font-medium tracking-tight md:text-2xl">
            {project.name}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-soft">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>
        </div>

        <span className="font-mono text-xs leading-7 text-faint md:text-right">
          {project.context}
        </span>
      </article>
    </HoverVideoPreview>
  </Reveal>
);

export default function ProjectIndex() {
  const { dict } = useLanguage();
  const client = dict.projects.filter((p) => p.group === "client");
  const personal = dict.projects.filter((p) => p.group === "personal");

  return (
    <>
      <Section
        id="client-work"
        kicker={dict.workPage.clientKicker}
        className="pt-10 md:pt-14"
      >
        <div>
          {client.map((project, i) => (
            <ProjectRow key={project.name} project={project} index={i + 1} />
          ))}
        </div>
      </Section>

      <Section
        id="personal"
        kicker={dict.workPage.personalKicker}
        className="pt-0 md:pt-0"
      >
        <div>
          {personal.map((project, i) => (
            <ProjectRow
              key={project.name}
              project={project}
              index={client.length + i + 1}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
