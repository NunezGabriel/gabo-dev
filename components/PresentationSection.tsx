"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";
import { socials } from "@/lib/content";

export default function PresentationSection() {
  const { dict } = useLanguage();
  const { profile, hero } = dict;

  return (
    <section className="relative overflow-hidden">

      <div className="relative mx-auto w-full max-w-5xl px-6 pt-14 pb-16 md:pt-52 md:pb-24">
        <div>
          <Reveal>
            <Image
              src="/profilePcitureBgBNocuadro.png"
              alt={profile.name}
              width={72}
              height={72}
              priority
              className="hero-portrait h-[72px] w-[72px] object-cover grayscale"
            />
          </Reveal>

          <Reveal delay={80}>
            <p className="kicker mt-8">{profile.role}</p>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="mt-5 text-5xl font-medium leading-[1.06] tracking-[-0.055em] text-balance md:text-6xl lg:text-[4.5rem]">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-soft md:text-lg">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/work"
                className="navButton flex items-center gap-1 pixel-button bg-ink px-6 py-2.5 text-sm font-medium text-canvas transition-opacity duration-200 hover:opacity-85"
              >
                {hero.viewWork}
                <IoIosArrowRoundForward className="arrow" size={22} />
              </Link>
              <a
                href={socials.email}
                className="pixel-button-secondary px-6 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-panel"
              >
                {hero.getInTouch}
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <p className="mt-12 font-mono text-xs tracking-wide text-soft">
              {hero.currentlyLabel} — {profile.currently} · {profile.community}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
