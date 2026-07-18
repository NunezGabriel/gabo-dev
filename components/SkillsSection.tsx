"use client";

import LogoLoop from "@/components/LoopLogo";
import Section from "./Section";
import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiLaravel,
  SiExpress,
  SiNestjs,
  SiNodedotjs,
  SiSpring,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiLinux,
  SiGit,
  SiShopify,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiNestjs />, title: "NestJS", href: "https://nestjs.com" },
  { node: <SiSpring />, title: "Spring Boot", href: "https://spring.io" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiLinux />, title: "Linux", href: "https://www.kernel.org" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiShopify />, title: "Shopify", href: "https://www.shopify.com" },
];

const SkillsSection = () => {
  const { dict } = useLanguage();

  return (
    <div>
      {/* Tech strip — full bleed, between hairlines */}
      <Reveal>
        <div className="border-y hairline py-12">
          <p className="kicker mb-10 text-center">{dict.strip.kicker}</p>
          <div style={{ color: "var(--soft)" }}>
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={34}
              gap={56}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              ariaLabel="Technologies"
            />
          </div>
        </div>
      </Reveal>

      <Section
        id="what-i-do"
        kicker={dict.services.kicker}
        title={dict.services.title}
      >
        <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {dict.services.items.map((service, i) => (
            <Reveal key={service.index} delay={(i % 2) * 80}>
              <div className="border-t hairline py-8">
                <span className="font-mono text-xs text-faint">
                  {service.index}
                </span>
                <h3 className="mt-3 text-lg font-medium">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default SkillsSection;
