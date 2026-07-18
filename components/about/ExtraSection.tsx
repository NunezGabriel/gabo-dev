"use client";

import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";

const ExtraSection = () => {
  const { dict } = useLanguage();
  const { aboutPage } = dict;

  return (
    <Section
      id="beyond"
      kicker={aboutPage.beyondKicker}
      title={aboutPage.beyondTitle}
    >
      <div className="grid grid-cols-1 gap-x-12 md:grid-cols-3">
        {aboutPage.beyond.map((item, i) => (
          <Reveal key={item.index} delay={i * 80}>
            <div className="border-t hairline py-8">
              <span className="font-mono text-xs text-faint">{item.index}</span>
              <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default ExtraSection;
