import Image from "next/image";
import Reveal from "@/components/Reveal";
import { profile, languages } from "@/lib/content";

const facts = [
  { label: "Location", value: profile.location },
  { label: "Currently", value: profile.currently },
  { label: "Community", value: profile.community },
  {
    label: "Languages",
    value: languages.map((l) => `${l.name} · ${l.level}`).join("  /  "),
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="glow" />

      <div className="relative mx-auto w-full max-w-5xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <Reveal>
          <p className="kicker">01 — About</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal delay={80}>
            <figure>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border hairline bg-panel">
                <Image
                  src="/profilePcitureBgBNocuadro.png"
                  alt="Gabriel Nuñez Arenas"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] tracking-wide text-faint">
                Arequipa, Perú — {new Date().getFullYear()}
              </figcaption>
            </figure>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal delay={140}>
              <h1 className="display-fade text-4xl font-semibold tracking-tight md:text-5xl">
                About me.
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
          </div>
        </div>

        <Reveal>
          <dl className="mt-16 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-6 border-t hairline py-4"
              >
                <dt className="font-mono text-xs tracking-wide text-faint">
                  {fact.label}
                </dt>
                <dd className="text-right text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
