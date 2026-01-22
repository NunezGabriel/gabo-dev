"use client";

import GradientText from "@/components/GradientText";

export default function ProjectsHeroSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16 md:py-32">
      <div className="flex flex-col gap-6">
        <GradientText
          colors={["#cdcfd2", "#6a7271", "#cdcfd2", "#6a7271", "#cdcfd2"]}
          animationSpeed={5}
          showBorder={false}
          className="text-4xl md:text-6xl leading-tight"
        >
          My Work
        </GradientText>

        <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
          Explore the projects I've built and contributed to. Each one
          represents a unique challenge and creative solution in software
          development.
        </p>
      </div>
    </section>
  );
}
