import WatchDial from "./WatchDial";
import { profile, socials } from "@/lib/content";

const footerLinks = [
  { index: "01", label: "GitHub", href: socials.github },
  { index: "02", label: "LinkedIn", href: socials.linkedin },
  { index: "03", label: "Twitter", href: socials.x },
  { index: "04", label: "Instagram", href: socials.instagram },
];

export default function Footer() {
  return (
    <footer className="w-full border-t hairline">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-10 px-6 py-12 md:flex-row md:items-center">
        <div className="flex flex-col gap-1.5">
          <p className="text-base text-ink md:text-lg">
            Let’s build something together.
          </p>
          <a
            href={socials.email}
            className="text-sm text-soft transition-colors duration-200 hover:text-ink"
          >
            {profile.email}
          </a>
        </div>

        <div className="flex flex-col gap-1.5">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-soft transition-colors duration-200 hover:text-ink"
            >
              <span className="mr-2 font-mono text-[11px] text-faint">
                {link.index}
              </span>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-1.5 font-mono text-[11px] tracking-wide text-faint md:items-end">
          <div className="mb-1 md:mb-2">
            <WatchDial size={30} />
          </div>
          <span>Portfolio v2.0.0</span>
          <span>Last updated — July 2026</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
