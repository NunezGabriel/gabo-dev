import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Reveal from "./Reveal";
import { profile } from "@/lib/content";

export default function PresentationSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="glow" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-20 pb-24 text-center md:pt-60 md:pb-32">
        <Reveal>
          <Image
            src="/profilePcitureBgBNocuadro.png"
            alt="Gabriel Nuñez"
            width={72}
            height={72}
            priority
            className="mx-auto h-[72px] w-[72px] rounded-full border hairline object-cover"
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="kicker mt-8">
            {profile.role} · {profile.location}
          </p>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="display-fade mt-5 text-5xl font-semibold tracking-tight text-balance md:text-7xl">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-soft md:text-lg">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/work"
              className="navButton flex items-center gap-1 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-canvas transition-opacity duration-200 hover:opacity-85"
            >
              View work
              <IoIosArrowRoundForward className="arrow" size={22} />
            </Link>
            <a
              href="mailto:gabriel.nunez.arenas@gmail.com"
              className="rounded-full border hairline px-6 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-panel"
            >
              Get in touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={380}>
          <p className="mt-12 font-mono text-xs tracking-wide text-faint">
            Currently — {profile.currently} · {profile.community}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
