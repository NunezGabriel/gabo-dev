import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/lib/content";

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border hairline px-3 py-1 font-mono text-[11px] text-soft">
    {children}
  </span>
);

export default function FeaturedWorkSection() {
  const [featured, ...rest] = projects.slice(0, 3);

  return (
    <Section
      id="selected-work"
      kicker="02 — Selected work"
      title="Things I’ve built recently."
    >
      <Reveal>
        <article className="overflow-hidden rounded-3xl border hairline bg-panel/60">
          {featured.video && (
            <div className="aspect-video w-full overflow-hidden">
              <video
                className="h-full w-full object-cover"
                src={featured.video}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          )}
          <div className="flex flex-col gap-4 p-8 md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                {featured.name}
              </h3>
              <span className="font-mono text-xs text-faint">
                {featured.context}
              </span>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-soft md:text-base">
              {featured.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {featured.stack.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>
          </div>
        </article>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.name} delay={i * 80}>
            <article className="flex h-full flex-col gap-4 rounded-3xl border hairline p-8 transition-colors duration-300 hover:bg-panel/60">
              <span className="font-mono text-xs text-faint">
                {project.context}
              </span>
              <h3 className="text-xl font-medium tracking-tight">
                {project.name}
              </h3>
              <p className="text-sm leading-relaxed text-soft">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.stack.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-12 flex justify-center">
          <Link
            href="/work"
            className="navButton flex items-center gap-1 rounded-full border hairline px-6 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-panel"
          >
            View all projects
            <IoIosArrowRoundForward className="arrow" size={22} />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
