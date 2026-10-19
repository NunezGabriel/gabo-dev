"use client";

import Image from "next/image";
import { FiDatabase } from "react-icons/fi";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutSection() {
  const { dict } = useLanguage();
  const { profile, aboutPage } = dict;

  const facts = [
    { label: aboutPage.factLabels.location, value: profile.location },
    { label: aboutPage.factLabels.currently, value: profile.currently },
    { label: aboutPage.factLabels.community, value: profile.community },
    {
      label: aboutPage.factLabels.languages,
      value: dict.languages
        .map((language) => `${language.name} · ${language.level}`)
        .join("  /  "),
    },
  ];

  return (
    <section className="relative overflow-hidden">

      <div className="relative mx-auto w-full max-w-5xl px-6 pt-16 pb-20 md:pt-52 md:pb-28">
        <Reveal>
          <p className="kicker">~/profile</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal delay={80}>
            <figure className="profile-file">
              <div className="console-title"><span className="status-pixel" />gabriel / profile.png<span className="ml-auto">[ GNA ]</span></div>
              <div className="profile-portrait relative aspect-[4/5] w-full overflow-hidden bg-panel">
                <Image
                  src="/profilePcitureBgBNocuadro.png"
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
              <figcaption className="profile-caption font-mono text-[10px] tracking-wide text-soft">
                {profile.location} — {new Date().getFullYear()}
              </figcaption>
            </figure>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal delay={140}>
              <h1 className="display-fade text-4xl font-semibold tracking-tight md:text-5xl">
                {aboutPage.title}
              </h1>
            </Reveal>

            <div className="mt-8 flex flex-col gap-5">
              {profile.bio.map((paragraph, i) => (
                <Reveal key={i} delay={200 + i * 60}>
                  <p className="text-sm leading-relaxed text-soft md:text-base">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={320}>
              <aside className="community-record" aria-label={`${aboutPage.communityBadge.role} · ${aboutPage.communityBadge.chapter}`}>
                <div className="community-record-tab" aria-hidden="true"><FiDatabase />community.csv</div>
                <table>
                  <caption className="sr-only">{aboutPage.factLabels.community}</caption>
                  <thead>
                    <tr><th scope="col">{aboutPage.communityBadge.roleLabel}</th><th scope="col">{aboutPage.factLabels.community}</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="community-record-role">{aboutPage.communityBadge.role}</td>
                      <td>
                        <div className="community-record-group">
                          <span className="gdg-symbol" aria-hidden="true">
                            <Image src="/brand/gdg-mark.png" alt="" width={800} height={800} sizes="44px" />
                          </span>
                          <div><strong>{aboutPage.communityBadge.chapter}</strong><span>{aboutPage.communityBadge.organization}</span></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="community-record-note">{aboutPage.communityBadge.description}</p>
              </aside>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <dl className="profile-facts mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="profile-fact"
              >
                <dt className="font-mono text-xs tracking-wide text-faint">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-lg text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
