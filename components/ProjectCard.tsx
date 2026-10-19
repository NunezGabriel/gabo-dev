"use client";

import Image from "next/image";
import { type Project } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import HoverVideoPreview from "./HoverVideoPreview";

export default function ProjectCard({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  const { lang } = useLanguage();
  const category = project.group === "client" ? (lang === "es" ? "clientes" : "client") : "personal";
  return <HoverVideoPreview video={project.video} title={project.name} className="h-full">
    <article className={"project-folder" + (featured ? " project-folder-featured" : "")}>
      <div className="folder-tab"><span className="status-pixel" />{category} / {String(index).padStart(2,"0")}</div>
      <div className="folder-visual">
        {project.image ? <Image src={project.image} alt={project.name} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" />
          : project.video ? <video src={project.video + "#t=0.1"} muted playsInline preload="metadata" className="project-cover-video" aria-label={lang === "es" ? "Vista de " + project.name : project.name + " preview"} />
          : <div className="project-media-placeholder"><span aria-hidden="true">[ {project.name} ]</span><p>{lang === "es" ? "Vista previa próximamente" : "Preview coming soon"}</p></div>}
        {project.video && <span className="media-hint"><span aria-hidden="true">▶</span> {lang === "es" ? "Pasa el cursor para ver la app" : "Hover to see the app"}</span>}
      </div>
      <div className="folder-content">
        <p className="project-context">{project.context}</p>
        <h3>{project.href ? <a href={project.href} target="_blank" rel="noreferrer">{project.name} ↗</a> : project.name}</h3>
        <p>{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">{project.stack.map(tech => <span className="tech-chip" key={tech}>{tech}</span>)}</div>
        {project.video && <details className="project-demo" onToggle={event => { if (!event.currentTarget.open) event.currentTarget.querySelector("video")?.pause(); }}>
          <summary>{lang === "es" ? "Abrir demo en video" : "Open video demo"}</summary>
          <video src={project.video} controls playsInline preload="none" aria-label={lang === "es" ? "Demostración de " + project.name : project.name + " demonstration"} />
        </details>}
      </div>
    </article>
  </HoverVideoPreview>;
}
