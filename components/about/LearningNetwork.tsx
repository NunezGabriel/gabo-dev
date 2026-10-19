"use client";

import { FiBookOpen, FiAward, FiMessageCircle, FiGitBranch } from "react-icons/fi";
import { useLanguage } from "@/components/LanguageProvider";

export default function LearningNetwork() {
  const { dict, lang } = useLanguage();
  const es = lang === "es";

  return <div className="learning-network">
    <div className="learning-network-root"><FiGitBranch aria-hidden="true" /><span>{es ? "Formación continua" : "Always learning"}</span><span className="status-pixel" /></div>
    <svg className="learning-network-wires" viewBox="0 0 1000 80" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path className="learning-edge-studies" d="M500 0V18Q500 35 480 35H187Q167 35 167 55V80" />
      <path className="learning-edge-courses" d="M500 0V80" />
      <path className="learning-edge-languages" d="M500 0V18Q500 35 520 35H813Q833 35 833 55V80" />
    </svg>
    <div className="learning-branches">
      <section className="learning-branch" data-branch="studies" aria-label={es ? "Estudios" : "Education"}>
        <h3 className="learning-branch-title"><FiBookOpen aria-hidden="true" /><span>{es ? "Estudios" : "Education"}</span></h3>
        <ol className="learning-leaves">
          {dict.education.map(entry=><li className="learning-leaf" key={entry.institution}><span className="learning-leaf-port" aria-hidden="true" /><p className="learning-node-meta">{entry.period}</p><h4>{entry.institution}</h4><p className="learning-node-description">{entry.program}</p><p className="learning-node-location">{entry.location}</p></li>)}
        </ol>
      </section>
      <section className="learning-branch" data-branch="courses" aria-label={dict.aboutPage.certificationsTitle}>
        <h3 className="learning-branch-title"><FiAward aria-hidden="true" /><span>{dict.aboutPage.certificationsTitle}</span></h3>
        <ul className="learning-leaves">
          {dict.certifications.map(cert=><li className="learning-leaf" key={cert.name}><span className="learning-leaf-port" aria-hidden="true" /><p className="learning-node-meta">{cert.issuer}</p><h4>{cert.name}</h4></li>)}
        </ul>
      </section>
      <section className="learning-branch" data-branch="languages" aria-label={dict.aboutPage.languagesTitle}>
        <h3 className="learning-branch-title"><FiMessageCircle aria-hidden="true" /><span>{dict.aboutPage.languagesTitle}</span></h3>
        <ul className="learning-leaves">
          {dict.languages.map(language=><li className="learning-leaf learning-language" key={language.name}><span className="learning-leaf-port" aria-hidden="true" /><h4>{language.name}</h4><p className="learning-node-description">{language.level}</p></li>)}
        </ul>
      </section>
    </div>
  </div>;
}
