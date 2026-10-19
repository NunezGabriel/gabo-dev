"use client";

import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa6";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import {
  SiSpringboot, SiDjango, SiExpress, SiRubyonrails, SiNodedotjs, SiNestjs, SiGraphql,
  SiReact, SiNextdotjs, SiAngular, SiTailwindcss, SiBootstrap, SiSass,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiDocker, SiLinux, SiGit, SiGithub,
  SiAmazonwebservices, SiVercel, SiNetlify, SiHeroku, SiDigitalocean, SiRender,
  SiPython, SiPandas, SiJupyter, SiAnaconda, SiJavascript, SiTypescript, SiRuby,
  SiGnubash, SiHtml5, SiCss3, SiPostman, SiInsomnia, SiUbuntu, SiDebian, SiUnity,
} from "react-icons/si";
import Section from "./Section";
import TechnicalDiagram from "./TechnicalDiagram";
import { useLanguage } from "./LanguageProvider";

type Tool = { name: string; Icon: IconType };
const backend: Tool[] = [
  { name: "Django", Icon: SiDjango }, { name: "Express", Icon: SiExpress },
  { name: "Ruby on Rails", Icon: SiRubyonrails }, { name: "Node.js", Icon: SiNodedotjs },
  { name: "NestJS", Icon: SiNestjs }, { name: "GraphQL", Icon: SiGraphql },
];
const frontend: Tool[] = [
  { name: "React", Icon: SiReact }, { name: "Next.js", Icon: SiNextdotjs }, { name: "Angular", Icon: SiAngular },
];
const styling: Tool[] = [
  { name: "Tailwind CSS", Icon: SiTailwindcss }, { name: "Bootstrap", Icon: SiBootstrap }, { name: "Sass", Icon: SiSass },
];
const databases: Tool[] = [
  { name: "PostgreSQL", Icon: SiPostgresql }, { name: "MySQL", Icon: SiMysql },
  { name: "MongoDB", Icon: SiMongodb }, { name: "Redis", Icon: SiRedis },
];
const development: Tool[] = [
  { name: "Docker", Icon: SiDocker }, { name: "Linux", Icon: SiLinux },
  { name: "Git", Icon: SiGit }, { name: "GitHub", Icon: SiGithub },
];
const cloud: Tool[] = [
  { name: "AWS", Icon: SiAmazonwebservices }, { name: "Vercel", Icon: SiVercel },
  { name: "Netlify", Icon: SiNetlify }, { name: "Heroku", Icon: SiHeroku },
  { name: "DigitalOcean", Icon: SiDigitalocean }, { name: "Render", Icon: SiRender },
];
const languages: Tool[] = [
  { name: "Java", Icon: FaJava }, { name: "Python", Icon: SiPython },
  { name: "JavaScript", Icon: SiJavascript }, { name: "TypeScript", Icon: SiTypescript },
  { name: "Ruby", Icon: SiRuby }, { name: "C#", Icon: TbBrandCSharp },
  { name: "Bash", Icon: SiGnubash }, { name: "SQL", Icon: TbSql },
  { name: "HTML", Icon: SiHtml5 }, { name: "CSS", Icon: SiCss3 },
];
const extras: Tool[] = [
  { name: "Ubuntu", Icon: SiUbuntu }, { name: "Debian", Icon: SiDebian },
  { name: "VS Code", Icon: VscVscode }, { name: "Postman", Icon: SiPostman },
  { name: "Insomnia", Icon: SiInsomnia }, { name: "Unity", Icon: SiUnity },
];
const learning: Tool[] = [
  { name: "Python", Icon: SiPython }, { name: "pandas", Icon: SiPandas },
  { name: "Jupyter", Icon: SiJupyter }, { name: "Conda", Icon: SiAnaconda },
];

function ToolList({ items, prominent = false }: { items: Tool[]; prominent?: boolean }) {
  return <ul className={"stack-tools" + (prominent ? " stack-tools-prominent" : "")}>
    {items.map(({ name, Icon }) => <li key={name}><Icon aria-hidden="true" /><span>{name}</span></li>)}
  </ul>;
}

export default function SkillsSection() {
  const { dict, lang } = useLanguage();
  const es = lang === "es";
  const [back, front, architecture, data, delivery, next] = dict.services.items;

  return <Section id="what-i-do" kicker={dict.services.kicker} title={dict.services.title} className="stack-section">
    <p className="stack-intro">{dict.services.intro}</p>
    <div className="stack-grid">
      <article className="stack-area stack-backend">
        <div className="stack-heading"><h3>{back.title}</h3><span className="stack-focus">{es ? "Mi especialidad" : "My focus"}</span></div>
        <p className="stack-description">{back.description}</p>
        <div className="primary-technology"><SiSpringboot aria-hidden="true" /><div><strong>Spring Boot</strong><span>Java · {es ? "stack principal" : "primary stack"}</span></div><span className="technology-marker" aria-hidden="true" /></div>
        <ToolList items={backend} />
      </article>
      <article className="stack-area stack-frontend">
        <div className="stack-heading"><h3>{front.title}</h3></div>
        <p className="stack-description">{front.description}</p>
        <ToolList items={frontend} prominent />
        <ToolList items={styling} />
      </article>
      <article className="stack-architecture">
        <div className="architecture-illustration"><TechnicalDiagram variant={0} /></div>
        <div className="architecture-content">
          <h3>{architecture.title}</h3>
          <p className="stack-description">{architecture.description}</p>
          <dl className="architecture-groups">
            <div><dt>{es ? "Arquitecturas" : "Architectures"}</dt><dd>{es ? "Hexagonal · Por capas · Microservicios" : "Hexagonal · Layered · Microservices"}</dd></div>
            <div><dt>{es ? "Patrones de diseño" : "Design patterns"}</dt><dd>Repository · Unit of Work</dd></div>
          </dl>
        </div>
      </article>
      <div className="stack-data-column">
        <article className="stack-area">
          <div className="stack-heading"><h3>{data.title}</h3></div>
          <p className="stack-description">{data.description}</p>
          <ToolList items={databases} />
        </article>
        <article className="stack-area stack-language-area">
          <div className="stack-heading"><h3>{es ? "Lenguajes" : "Languages"}</h3></div>
          <ToolList items={languages} />
        </article>
      </div>
      <article className="stack-area">
        <div className="stack-heading"><h3>{delivery.title}</h3></div>
        <p className="stack-description">{delivery.description}</p>
        <ToolList items={development} />
        <h4 className="stack-subheading">Cloud</h4>
        <ToolList items={cloud} />
        <details className="stack-extras"><summary>{es ? "Más herramientas" : "More tools"}<span aria-hidden="true">+</span></summary><ToolList items={extras} /></details>
      </article>
    </div>
    <aside className="stack-learning">
      <div><p className="learning-label"><span className="status-pixel" />{es ? "En aprendizaje" : "Currently learning"}</p><h3>{next.title}</h3><p>{next.description}</p></div>
      <ToolList items={learning} />
    </aside>
  </Section>;
}
