"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SiGithub, SiLinkedin, SiInstagram, SiX } from "react-icons/si";
import Reveal from "./Reveal";
import PixelSnow from "./PixelSnow";
import { useLanguage } from "./LanguageProvider";
import { socials } from "@/lib/content";

const contactLinks = [
  { label: "GitHub", href: socials.github, Icon: SiGithub },
  { label: "LinkedIn", href: socials.linkedin, Icon: SiLinkedin },
  { label: "Instagram", href: socials.instagram, Icon: SiInstagram },
  { label: "X / Twitter", href: socials.x, Icon: SiX },
];

// Full-bleed closing section. PixelSnow settings tuned on reactbits.dev:
// color #10b981, speed 0.15, density 0.15, square, opacity 0.45, glow 0.75,
// brightness 1.35, no mouse interaction. Other props keep the demo defaults.
export default function ContactSection() {
  const { dict, lang } = useLanguage();
  const es = lang === "es";

  return <section id="contact" className="contact-section">
    <PixelSnow
      className="contact-snow"
      aria-hidden="true"
      color="#10b981"
      variant="square"
      speed={0.15}
      density={0.15}
      opacity={0.45}
      glow={0.75}
      brightness={1.35}
      mouseInteraction={false}
    />
    <div className="contact-inner">
      <Reveal>
        <p className="kicker contact-kicker"><span aria-hidden="true" />{es ? "Conversemos" : "Get in touch"}<span aria-hidden="true" /></p>
        <h2 className="contact-title">{dict.contact.title}</h2>
        <p className="contact-blurb">{dict.contact.blurb}</p>
        <div className="contact-direct">
          <span className="contact-email">{dict.profile.email}</span>
          <a href={socials.email} className="navButton pixel-button contact-hello">
            {es ? "Escríbeme" : "Say hello"}<IoIosArrowRoundForward className="arrow" size={22} aria-hidden="true" />
          </a>
        </div>
        <div className="contact-socials">
          {contactLinks.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer"><Icon aria-hidden="true" /><span>{label}</span><FiArrowUpRight className="social-arrow" aria-hidden="true" /></a>)}
        </div>
        <p className="contact-location">{dict.profile.location}</p>
      </Reveal>
    </div>
  </section>;
}
