"use client";

import Image from "next/image";
import { type Project } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import HoverVideoPreview from "./HoverVideoPreview";

export default function ProjectCard({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  const { lang } = useLanguage();
  const category = {
    client: lang === "es" ? "clientes" : "client",
    community: lang === "es" ? "comunidad" : "community",
    personal: "personal",
  }[project.group];
  return <HoverVideoPreview video={project.video} title={project.name} className="h-full">
    <article className={"project-folder" + (featured ? " project-folder-featured" : "")}>
      <div className="folder-tab"><span className="status-pixel" />{category} / {String(index).padStart(2,"0")}</div>
      <div className="folder-visual">
        {project.image ? <Image src={project.image} alt={project.name} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" />
          : project.video ? <video src={project.video + "#t=0.1"} muted playsInline controls={false} disablePictureInPicture disableRemotePlayback preload="metadata" className="project-cover-video" aria-label={lang === "es" ? "Vista de " + project.name : project.name + " preview"} />
          : <div className="project-media-placeholder"><span aria-hidden="true">[ {project.name} ]</span><p>{lang === "es" ? "Vista previa próximamente" : "Preview coming soon"}</p></div>}
      </div>
      <div className="folder-content">
        <p className="project-context">{project.context}</p>
        <h3>{project.href ? <a href={project.href} target="_blank" rel="noreferrer">{project.name} ↗</a> : project.name}</h3>
        <p>{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">{project.stack.map(tech => <span className="tech-chip" key={tech}>{tech}</span>)}</div>
      </div>
    </article>
  </HoverVideoPreview>;
}
