"use client";

import { useId, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import LogoMark from "@/components/LogoMark";
import { useLanguage } from "@/components/LanguageProvider";

export default function CareerNetwork() {
  const { dict, lang } = useLanguage();
  const es = lang === "es";
  const [selected, setSelected] = useState(0);
  const reducedMotion = useReducedMotion();
  const detailId = useId();
  const jobs = dict.experience;
  const job = jobs[selected];
  const positions = jobs.map((_, index) => {
    const angle = (-90 + index * 360 / jobs.length) * Math.PI / 180;
    return { x: 500 + Math.cos(angle) * 360, y: 240 + Math.sin(angle) * 150 };
  });

  return <div className="career-network">
    <div className="network-caption"><p>{es ? "Selecciona un trabajo para ver sus detalles debajo del mapa." : "Select a job to see its details below the map."}</p><span>{String(jobs.length).padStart(2,"0")} {es ? "experiencias" : "experiences"}</span></div>
    <div className="career-map">
      <svg className="career-map-wires" viewBox="0 0 1000 480" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <ellipse cx="500" cy="240" rx="260" ry="145" className="network-orbit" />
        <ellipse cx="500" cy="240" rx="330" ry="200" className="network-orbit network-orbit-outer" />
        {positions.map((point, i) => {
          const d = "M500 240 Q" + (500 + (point.x - 500) * .65) + " 240 " + point.x + " " + point.y;
          return <g key={jobs[i].company}><path d={d} className="network-edge" />{selected === i && <motion.path d={d} className="network-edge-active" initial={{pathLength: reducedMotion ? 1 : 0}} animate={{pathLength:1}} transition={{duration: reducedMotion ? 0 : .55, ease:"easeInOut"}} />}</g>;
        })}
      </svg>
      <div className="career-map-hub" aria-hidden="true"><LogoMark size={34} /><span>{es ? "Mi trayectoria" : "My career"}</span></div>
      <div className="career-map-nodes" role="group" aria-label={es ? "Explorar trabajos" : "Explore work experience"}>
        {jobs.map((entry, i) => <button type="button" key={entry.company} className="career-map-node" data-active={selected === i} aria-pressed={selected === i} aria-controls={detailId} onClick={()=>setSelected(i)} style={{"--node-x":positions[i].x / 10 + "%", "--node-y":positions[i].y / 4.8 + "%"} as CSSProperties}>
          <span className="map-node-period">{entry.period}<span className="map-node-port" aria-hidden="true" /></span>
          <strong>{entry.company}</strong><span className="map-node-role">{entry.role}</span>
          {i === 0 && <span className="map-node-recent">{es ? "Más reciente" : "Most recent"}<FiArrowUpRight aria-hidden="true" /></span>}
        </button>)}
      </div>
    </div>
    <div id={detailId} className="network-detail" aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.article key={job.company} initial={{opacity:0,y:reducedMotion ? 0 : 10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:reducedMotion ? 0 : -6}} transition={{duration:reducedMotion ? 0 : .18}}>
          <div className="network-job-overview"><p className="network-job-period">{job.period}</p><h3>{job.company}</h3><p className="network-job-role">{job.role}</p><p className="network-job-location"><FiMapPin aria-hidden="true" />{job.location}</p><p className="network-job-summary">{job.summary}</p><div className="network-job-stack">{job.stack.map(tech=><span key={tech} className="tech-chip">{tech}</span>)}</div></div>
          <div className="network-contributions"><h4>{es ? "En qué trabajé" : "What I worked on"}</h4><ul>{job.highlights.map(item=><li key={item}>{item}</li>)}</ul></div>
        </motion.article>
      </AnimatePresence>
    </div>
  </div>;
}
