import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import {
  experience,
  education,
  certifications,
  languages,
} from "@/lib/content";

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border hairline px-3 py-1 font-mono text-[11px] text-soft">
    {children}
  </span>
);

const CareerTimeline = () => {
  return (
    <>
      <Section id="career" kicker="02 — Career path" title="Experience.">
        <div>
          {experience.map((job) => (
            <Reveal key={job.company}>
              <article className="grid grid-cols-1 gap-3 border-t hairline py-10 md:grid-cols-[200px_1fr] md:gap-8">
                <div className="font-mono text-xs leading-6 text-faint">
                  <p>{job.period}</p>
                  <p className="mt-1">{job.location}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium md:text-xl">
                    {job.company}
                    <span className="text-soft"> — {job.role}</span>
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-soft">
                    {job.summary}
                  </p>

                  <ul className="mt-5 flex max-w-2xl flex-col gap-2.5">
                    {job.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-soft"
                      >
                        <span className="text-faint">—</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <Chip key={tech}>{tech}</Chip>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="education" kicker="03 — Education" title="Where I learned.">
        <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
          <div>
            {education.map((entry) => (
              <Reveal key={entry.institution}>
                <div className="border-t hairline py-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-base font-medium">
                      {entry.institution}
                    </h3>
                    <span className="font-mono text-xs text-faint">
                      {entry.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-soft">
                    {entry.program}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-faint">
                    {entry.location}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal>
              <div className="border-t hairline py-6">
                <h3 className="text-base font-medium">Certifications</h3>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {certifications.map((cert) => (
                    <li
                      key={cert.name}
                      className="flex gap-3 text-sm leading-relaxed text-soft"
                    >
                      <span className="text-faint">—</span>
                      <span>
                        {cert.name}
                        <span className="text-faint"> · {cert.issuer}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="border-t hairline py-6">
                <h3 className="text-base font-medium">Languages</h3>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {languages.map((language) => (
                    <li
                      key={language.name}
                      className="flex items-baseline justify-between gap-4 text-sm text-soft"
                    >
                      <span>{language.name}</span>
                      <span className="font-mono text-[11px] text-faint">
                        {language.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
};

export default CareerTimeline;
