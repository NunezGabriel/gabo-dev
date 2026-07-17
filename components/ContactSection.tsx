import Reveal from "./Reveal";
import { socials, profile } from "@/lib/content";

const contactLinks = [
  { label: "GitHub", href: socials.github },
  { label: "LinkedIn", href: socials.linkedin },
  { label: "Twitter", href: socials.x },
  { label: "Instagram", href: socials.instagram },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden border-t hairline">
      <div className="glow" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-28 text-center md:py-36">
        <Reveal>
          <p className="kicker">04 — Contact</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="display-fade mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Let’s build something together.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-md text-base leading-relaxed text-soft">
            Open to new projects and collaborations — if you’d like to talk
            about work or just say hello, my inbox is open.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <a
            href={socials.email}
            className="mt-10 inline-block rounded-full bg-ink px-7 py-3 text-sm font-medium text-canvas transition-opacity duration-200 hover:opacity-85"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs tracking-wide text-soft transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
