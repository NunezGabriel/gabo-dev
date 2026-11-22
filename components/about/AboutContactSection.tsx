"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import Section from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";
import { socials } from "@/lib/content";
import GitHubActivity from "./GitHubActivity";

const profiles = [
  { name: "LinkedIn", href: socials.linkedin, Icon: SiLinkedin },
  { name: "Instagram", href: socials.instagram, Icon: SiInstagram },
  { name: "X", href: socials.x, Icon: SiX },
];

export default function AboutContactSection() {
  const { dict } = useLanguage();

  return (
    <Section id="contact" kicker={dict.aboutPage.contactKicker} title={dict.aboutPage.contactTitle}>
      <div className="about-connect">
        <GitHubActivity />
        <ul className="about-social-links">
          {profiles.map(({ name, href, Icon }) => (
            <li key={name}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="about-social-icon" aria-hidden="true" />
                <span>{name}</span>
                <FiArrowUpRight className="about-social-arrow" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
