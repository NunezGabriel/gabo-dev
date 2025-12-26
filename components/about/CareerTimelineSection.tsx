"use client";

import Image from "next/image";
import GradientText from "@/components/GradientText";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  institution: string;
  description: string;
  logo: string;
  type: "education" | "certification" | "work";
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2027 - ...",
    title: "Software Engineering Degree",
    institution: "Peruvian University of Applied Sciences (UPC)",
    description: "Coming Soon",
    logo: "/upc.png",
    type: "education",
  },
  {
    id: 2,
    year: "2024 - Present",
    title: "Software design and development Degree",
    institution: "Tecsup Technological Institute",
    description: "technical bachelor in software development - Current",
    logo: "/tecsup.png",
    type: "education",
  },
  {
    id: 3,
    year: "2023 - 2023",
    title: "Full Stack Web Programming Bootcamp",
    institution: "{ Codeable }",
    description: "Full stack web developer - Graduate",
    logo: "/codeable.png",
    type: "education",
  },
  {
    id: 4,
    year: "2021-2023",
    title: "Computer Science Degree",
    institution: "San Pablo Catholic University (UCSP)",
    description: "Bachelor's degree in computer science - not completed.",
    logo: "/sanpabloLogo.png",
    type: "education",
  },
];

const CareerTimeline = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24">
      <div className="mb-16 text-center">
        <GradientText
          colors={["#cdcfd2", "#6a7271", "#cdcfd2", "#6a7271", "#cdcfd2"]}
          animationSpeed={5}
          showBorder={false}
          className="text-4xl md:text-6xl"
        >
          Career Path
        </GradientText>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          My professional journey and educational background
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-[31px] md:left-[39px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-300 via-gray-300 to-gray-300" />

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div key={item.id} className="relative flex gap-6 md:gap-8">
              <div className="relative flex-shrink-0 z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 shadow-lg border-gray-400 hover:border-gray-500 transition-all duration-300 overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.institution}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="flex-1 pb-8">
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-lg">
                  <span className="inline-block px-3 py-1 text-xs font-mono bg-gray-800 text-gray-300 rounded-full mb-3">
                    {item.year}
                  </span>

                  <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-400 font-medium mb-3">
                    {item.institution}
                  </p>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs rounded-full ${
                        item.type === "education"
                          ? "bg-blue-500/10 text-blue-400"
                          : item.type === "certification"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-purple-500/10 text-purple-400"
                      }`}
                    >
                      {item.type === "education"
                        ? "Education"
                        : item.type === "certification"
                        ? "Certification"
                        : "Work Experience"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
