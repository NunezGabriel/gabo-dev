"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiInstagram, SiX } from "react-icons/si";
import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";
import { socials } from "@/lib/content";

const contactLinks = [
  { label: "GitHub", href: socials.github, Icon: SiGithub },
  { label: "LinkedIn", href: socials.linkedin, Icon: SiLinkedin },
  { label: "Instagram", href: socials.instagram, Icon: SiInstagram },
  { label: "X / Twitter", href: socials.x, Icon: SiX },
];

export default function ContactSection() {
  const { dict, lang } = useLanguage();
  const es = lang === "es";
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mailbox, domain] = dict.profile.email.split("@");

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const copyEmail = async () => {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(dict.profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    timer.current = setTimeout(() => setCopyState("idle"), 3000);
  };

  return <section id="contact" className="contact-section">
    <Reveal>
      <div className="contact-panel">
        <div className="contact-main">
          <div className="contact-message">
            <p className="kicker"><span aria-hidden="true" />{es ? "Conversemos" : "Get in touch"}</p>
            <h2>{dict.contact.title}</h2>
            <p className="contact-blurb">{dict.contact.blurb}</p>
          </div>
          <div className="contact-direct">
            <div className="contact-channel"><span>EMAIL</span><button type="button" onClick={copyEmail} className="copy-email" aria-label={es ? "Copiar correo electrónico" : "Copy email address"}>{copyState === "copied" ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}<span aria-live="polite">{copyState === "copied" ? (es ? "Copiado" : "Copied") : copyState === "error" ? (es ? "No se pudo copiar" : "Could not copy") : (es ? "Copiar" : "Copy")}</span></button></div>
            <a href={socials.email} className="contact-address">
              <span className="contact-action">{es ? "Escríbeme" : "Say hello"}</span>
              <span className="contact-dial" aria-hidden="true"><svg viewBox="0 0 80 80">{Array.from({length:12},(_,i)=><path key={i} d="M40 3V8" transform={"rotate(" + i * 30 + " 40 40)"} />)}</svg><FiArrowUpRight /></span>
              <span className="contact-email">{mailbox}<wbr />@{domain}</span>
            </a>
          </div>
        </div>
        <div className="contact-bottom"><span className="contact-location">{dict.profile.location}</span><div className="contact-socials">{contactLinks.map(({label,href,Icon})=><a key={label} href={href} target="_blank" rel="noreferrer"><Icon aria-hidden="true" /><span>{label}</span><FiArrowUpRight className="social-arrow" aria-hidden="true" /></a>)}</div></div>
      </div>
    </Reveal>
  </section>;
}
