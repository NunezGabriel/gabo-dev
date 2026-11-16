"use client";

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { useLanguage } from "@/components/LanguageProvider";
import { socials } from "@/lib/content";

export default function GitHubActivity() {
  const { dict } = useLanguage();
  const labels = dict.aboutPage.github;
  const [imageState, setImageState] = useState<"live" | "backup" | "unavailable">("live");

  return (
    <article id="github" className="github-activity">
      <header className="github-activity-header">
        <div className="github-activity-heading">
          <SiGithub aria-hidden="true" />
          <div><h3>GitHub</h3><p>{labels.subtitle}</p></div>
        </div>
        <a href={socials.github} target="_blank" rel="noopener noreferrer" className="github-profile-link">
          <span>@NunezGabriel</span><FiArrowUpRight aria-hidden="true" />
        </a>
      </header>
      <figure>
        <div className="github-chart-viewport" role="region" aria-label={labels.alt} tabIndex={0}>
          {imageState === "unavailable" ? (
            <a className="github-chart-unavailable" href={socials.github} target="_blank" rel="noopener noreferrer">
              <SiGithub aria-hidden="true" /><span>{labels.unavailable}</span><FiArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            // Keep the SVG stylesheet; raster optimization removes its theme colors.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageState === "live" ? "/api/github-contributions" : "/github/contributions.svg"}
              alt={labels.alt}
              width={1280}
              height={850}
              loading="lazy"
              className="github-contribution-chart"
              onError={() => setImageState(state => state === "live" ? "backup" : "unavailable")}
            />
          )}
        </div>
        <figcaption className="github-chart-caption">
          <span>{labels.caption}<span className="github-scroll-hint">{labels.scrollHint}</span></span>
          <span className="github-chart-legend" aria-hidden="true"><span>{labels.less}</span>{[0, 1, 2, 3, 4].map(level => <i key={level} data-level={level} />)}<span>{labels.more}</span></span>
        </figcaption>
      </figure>
    </article>
  );
}
