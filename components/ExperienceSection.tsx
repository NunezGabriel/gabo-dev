"use client";

import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Section from "./Section";
import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";

export default function ExperienceSection() {
  const { dict } = useLanguage();

  return (
    <Section
      id="experience"
      kicker={dict.experienceSection.kicker}
      title={dict.experienceSection.title}
    >
      <div>
        {dict.experience.slice(0, 3).map((job, i) => (
          <Reveal key={job.company} delay={i * 60}>
            <div className="grid grid-cols-1 gap-2 border-t hairline py-8 md:grid-cols-[200px_1fr] md:gap-8">
              <span className="font-mono text-xs leading-6 text-faint">
                {job.period}
              </span>
              <div>
                <h3 className="text-lg font-medium">
                  {job.company}
                  <span className="text-soft"> — {job.role}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-soft">
                  {job.summary}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="border-t hairline pt-8">
          <Link
            href="/about"
            className="navButton inline-flex items-center gap-1 text-sm text-soft transition-colors duration-200 hover:text-ink"
          >
            {dict.experienceSection.fullPath}
            <IoIosArrowRoundForward className="arrow" size={22} />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
