"use client";

import { IoPawOutline, IoMusicalNotesOutline, IoPeopleOutline } from "react-icons/io5";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";

const icons = [IoPawOutline, IoMusicalNotesOutline, IoPeopleOutline];

const ExtraSection = () => {
  const { dict } = useLanguage();
  const { aboutPage } = dict;

  return (
    <Section
      id="beyond"
      kicker="~/offline"
      title={aboutPage.beyondTitle}
    >
      <div className="off-clock grid grid-cols-1 gap-10 md:grid-cols-3">
        {aboutPage.beyond.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.index} delay={i * 80}>
              <div className="off-clock-item">
                <div className="hobby-symbol"><Icon aria-hidden="true" /></div>
                <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default ExtraSection;
