import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

const items = [
  {
    index: "01",
    title: "Pets",
    description:
      "I share my life with 7 Schnauzers — a big part of my daily routine and inspiration.",
  },
  {
    index: "02",
    title: "Music",
    description:
      "I play piano and guitar, exploring creativity beyond the screen.",
  },
  {
    index: "03",
    title: "Community",
    description:
      "As a GDG Arequipa organizer I help run events that grow the local tech scene.",
  },
];

const ExtraSection = () => {
  return (
    <Section kicker="04 — Beyond the code" title="Off the clock.">
      <div className="grid grid-cols-1 gap-x-12 md:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.index} delay={i * 80}>
            <div className="border-t hairline py-8">
              <span className="font-mono text-xs text-faint">{item.index}</span>
              <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default ExtraSection;
