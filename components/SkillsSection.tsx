import LogoLoop from "@/components/LoopLogo";
import GradientText from "./GradientText";
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
} from "react-icons/si";

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
];

const SkillsSection = () => {
  return (
    <div>
      <div className="flex gap-20 flex-col py-24">
        <div className="mx-auto max-w-[1200px] px-6 flex items-start w-full">
          <span className="p-4 bg-[#111111] rounded-3xl w-fit">
            <GradientText
              colors={["#cdcfd2", "#6a7271", "#cdcfd2", "#6a7271", "#cdcfd2"]}
              animationSpeed={3}
              showBorder={false}
              className="text-xl"
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
      </div>
    </div>
  );
};

export default SkillsSection;

// colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
