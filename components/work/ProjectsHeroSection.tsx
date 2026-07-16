import Reveal from "@/components/Reveal";

export default function ProjectsHeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="glow" />

      <div className="relative mx-auto w-full max-w-5xl px-6 pt-16 pb-10 md:pt-28 md:pb-16">
        <Reveal>
          <p className="kicker">Work — Index</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display-fade mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            Projects & client work.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-soft md:text-lg">
            A selection of what I’ve built and contributed to — from personal
            products and community tools to production systems shipped for
            clients.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
