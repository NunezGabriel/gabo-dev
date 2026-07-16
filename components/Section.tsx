import Reveal from "./Reveal";

interface SectionProps {
  kicker: string;
  title?: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
}

// Centered editorial section: quiet mono kicker, optional title, content.
export default function Section({
  kicker,
  title,
  id,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-5xl px-6 py-20 md:py-28 ${className ?? ""}`}
    >
      <Reveal>
        <p className="kicker">{kicker}</p>
        {title && (
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
        )}
      </Reveal>
      <div className="mt-10 md:mt-14">{children}</div>
    </section>
  );
}
