import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { projects, type Project } from "@/lib/content";

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border hairline px-3 py-1 font-mono text-[11px] text-soft">
    {children}
  </span>
);

const ProjectRow = ({ project, index }: { project: Project; index: number }) => (
  <Reveal>
    <article className="grid grid-cols-1 gap-3 border-t hairline py-10 md:grid-cols-[72px_1fr_230px] md:gap-8">
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
  </Reveal>
);

export default function ProjectIndex() {
  const personal = projects.filter((p) => p.kind !== "Client");
  const client = projects.filter((p) => p.kind === "Client");

  return (
    <>
      <Section kicker="01 — Personal & community" className="pt-10 md:pt-14">
        <div>
          {personal.map((project, i) => (
            <ProjectRow key={project.name} project={project} index={i + 1} />
          ))}
        </div>
      </Section>

      <Section kicker="02 — Client & team work" className="pt-0 md:pt-0">
        <div>
          {client.map((project, i) => (
            <ProjectRow
              key={project.name}
              project={project}
              index={personal.length + i + 1}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
