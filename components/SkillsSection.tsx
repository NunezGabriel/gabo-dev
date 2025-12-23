import LogoLoop from "@/components/LoopLogo";
import GradientText from "./GradientText";
import SpotlightCard from "./SpotlightCard";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiExpress,
  SiSpring,
  SiDocker,
  SiGit,
  SiPython,
  SiLinux,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

import { FaLaptopCode, FaServer, FaVial } from "react-icons/fa";

const techLogos = [
  {
    node: <SiReact color="#6a7271" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs color="#6a7271" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript color="#6a7271" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss color="#6a7271" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiPython color="#6a7271" />,
    title: "python",
    href: "https://python.com",
  },
  {
    node: <SiDjango color="#6a7271" />,
    title: "Django",
    href: "https://django.com",
  },
  {
    node: <SiExpress color="#6a7271" />,
    title: "Express.js",
    href: "https://expressjs.com",
  },
  {
    node: <SiSpring color="#6a7271" />,
    title: "Spring Boot",
    href: "https://springboot.com",
  },
  {
    node: <SiDocker color="#6a7271" />,
    title: "Docker",
    href: "https://docker.com",
  },
  {
    node: <SiGit color="#6a7271" />,
    title: "Git",
    href: "https://git.com",
  },
  {
    node: <SiLinux color="#6a7271" />,
    title: "Linux",
    href: "https://linux.com",
  },
  {
    node: <SiPostgresql color="#6a7271" />,
    title: "PostgreSQL",
  },
  {
    node: <SiMongodb color="#6a7271" />,
    title: "MongoDB",
  },
];

const SkillsSection = () => {
  return (
    <div>
      <div className="flex gap-20 flex-col pt-24 pb-12">
        <div className="mx-auto max-w-[1450px] px-6 flex items-start w-full">
          <span className="p-4">
            <GradientText
              colors={["#cdcfd2", "#6a7271", "#cdcfd2", "#6a7271", "#cdcfd2"]}
              animationSpeed={6}
              showBorder={false}
              className="text-2xl md:text-5xl"
            >
              Tech Stack
            </GradientText>
          </span>
        </div>

        <div
          style={{ height: "200px", position: "relative", overflow: "hidden" }}
        >
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#111111"
            ariaLabel="Technology partners"
          />
        </div>

        <div className="mx-auto max-w-[1450px] px-6 flex items-start w-full">
          <span className="p-4">
            <GradientText
              colors={["#cdcfd2", "#6a7271", "#cdcfd2", "#6a7271", "#cdcfd2"]}
              animationSpeed={6}
              showBorder={false}
              className="text-2xl md:text-5xl"
            >
              Services
            </GradientText>
          </span>
        </div>

        <div className="mx-auto max-w-[1450px] px-6 flex flex-wrap justify-between gap-8 w-full mb-30">
          <SpotlightCard
            className="max-w-[400px] py-10 px-6 rounded-3xl flex flex-col gap-4"
            spotlightColor="rgba(0, 230, 255, 0.25)"
          >
            <FaLaptopCode className="text-5xl text-gray-300" />

            <h3 className="text-xl font-semibold text-gray-300">
              Frontend Development
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed">
              Building modern, responsive and accessible user interfaces focused
              on performance, scalability and maintainability, applying design
              patterns and SOLID principles to ensure clean and reusable code.
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="max-w-[400px] py-10 px-6 rounded-3xl flex flex-col gap-4"
            spotlightColor="rgba(13, 0, 255, 0.25)"
          >
            <FaServer className="text-5xl text-gray-300" />

            <h3 className="text-xl font-semibold text-gray-300">
              Backend & RESTful APIs
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed">
              Design and development of secure and scalable RESTful APIs, , data
              validation and robust server-side architecture following best
              security practices.
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="max-w-[400px] py-10 px-6 rounded-3xl flex flex-col gap-4"
            spotlightColor="rgba(248, 0, 255, 0.25)"
          >
            <FaVial className="text-5xl text-gray-300" />

            <h3 className="text-xl font-semibold text-gray-300">
              Testing & UX Quality
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed">
              Application testing, usability validation and UX-focused
              improvements to ensure reliability, clarity and smooth user
              interaction.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

// colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
