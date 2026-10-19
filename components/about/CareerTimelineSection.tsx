"use client";

import Section from "@/components/Section";
import CareerNetwork from "./CareerNetwork";
import LearningNetwork from "./LearningNetwork";
import { useLanguage } from "@/components/LanguageProvider";

export default function CareerTimeline() {
  const { dict, lang } = useLanguage();
  return <>
    <Section id="career" kicker={lang === "es" ? "Experiencia" : "Experience"} title={dict.aboutPage.careerTitle}>
      <CareerNetwork />
    </Section>
    <Section id="education" kicker={lang === "es" ? "Formación" : "Education"} title={dict.aboutPage.eduTitle}>
      <LearningNetwork />
    </Section>
  </>;
}
