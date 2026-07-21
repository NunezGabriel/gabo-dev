"use client";

import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Section from "./Section";
import Reveal from "./Reveal";
import HoverVideoPreview from "./HoverVideoPreview";
import { useLanguage } from "./LanguageProvider";

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border hairline px-3 py-1 font-mono text-[11px] text-soft">
    {children}
  </span>
);

// White variant for text sitting on top of the video scrim.
const OverlayChip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border border-white/25 px-3 py-1 font-mono text-[11px] text-white/85">
    {children}
  </span>
);

export default function FeaturedWorkSection() {
  const { dict } = useLanguage();
  const [featured, ...rest] = dict.projects.slice(0, 3);

  return (
    <Section
      id="selected-work"
      kicker={dict.featured.kicker}
      title={dict.featured.title}
    >
      {/* full-bleed video card: content overlays an inner scrim that
          deepens on hover for full legibility */}
      <Reveal>
        <article className="group relative aspect-[4/5] w-full overflow-hidden border hairline sm:aspect-video">
          {featured.video && (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={featured.video}
              autoPlay
              loop
              muted
              playsInline
            />
          )}

          {/* base scrim — subtle, keeps the video visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/5" />
          {/* hover scrim — darkens everything for reading */}
          <div className="absolute inset-0 bg-black/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 md:gap-4 md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
                {featured.name}
              </h3>
              <span className="font-mono text-xs text-white/60">
                {featured.context}
              </span>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
              {featured.description}
            </p>
            <div className="mt-1 flex flex-wrap gap-2">
              {featured.stack.map((tech) => (
                <OverlayChip key={tech}>{tech}</OverlayChip>
              ))}
            </div>
          </div>
        </article>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.name} delay={i * 80} className="h-full">
            <HoverVideoPreview video={project.video} className="h-full">
              <article className="flex h-full flex-col gap-4 border hairline p-8 transition-colors duration-300 hover:bg-panel/60">
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
            </HoverVideoPreview>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-12 flex justify-center">
          <Link
            href="/work"
            className="navButton flex items-center gap-1 rounded-full border hairline px-6 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-panel"
          >
            {dict.featured.viewAll}
            <IoIosArrowRoundForward className="arrow" size={22} />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
