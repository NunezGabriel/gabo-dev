"use client";

import { useId, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { useLanguage } from "./LanguageProvider";

export default function CareerExplorer({ full = false }: { full?: boolean }) {
  const { dict, lang } = useLanguage();
  const [{ selected, direction }, setSelection] = useState({ selected: 0, direction: 1 });
  const reduceMotion = useReducedMotion();
  const group = useId();
  const jobs = full ? dict.experience : dict.experience.slice(0, 3);
  const job = jobs[selected];
  const spring = reduceMotion ? { duration: 0 } : { type: "spring" as const, stiffness: 260, damping: 28, mass: .8 };

  return <LayoutGroup id={group}><div className="career-explorer">
    <div className="career-stations" role="group" aria-label={lang === "es" ? "Seleccionar experiencia" : "Select experience"}>
      {jobs.map((entry, i) => <button key={entry.company} className={selected === i ? "selected" : ""} aria-pressed={selected === i} onClick={() => { if (selected !== i) setSelection({ selected: i, direction: i > selected ? 1 : -1 }); }}>
        <span className="station-dot" aria-hidden="true">{selected === i && <motion.span className="station-active" layoutId="career-position" transition={spring} />}</span>
        <span className="station-year">{entry.period}</span><span className="station-company">{entry.company}</span>
      </button>)}
    </div>
    <motion.article layout className="career-record" transition={spring}>
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div key={selected} custom={direction} aria-live="polite" aria-atomic="true"
          variants={{ enter: (d: number) => ({ opacity: 0, y: reduceMotion ? 0 : d * 18 }), visible: { opacity: 1, y: 0 }, leave: (d: number) => ({ opacity: 0, y: reduceMotion ? 0 : -d * 10 }) }}
          initial="enter" animate="visible" exit="leave" transition={{ duration: reduceMotion ? 0 : .2, ease: "easeOut" }}>
          <div className="record-stamp" aria-hidden="true">{String(selected + 1).padStart(2, "0")}<span>EXP</span></div>
          <p className="kicker">{job.location}</p>
          <h3>{job.company}</h3>
          <p className="career-role">{job.role}</p>
          <p className="career-summary">{job.summary}</p>
          {full && <ul className="career-highlights">{job.highlights.map(item => <li key={item}>{item}</li>)}</ul>}
          <div className="mt-6 flex flex-wrap gap-2">{job.stack.map(tech => <span className="tech-chip" key={tech}>{tech}</span>)}</div>
        </motion.div>
      </AnimatePresence>
    </motion.article>
  </div></LayoutGroup>;
}
