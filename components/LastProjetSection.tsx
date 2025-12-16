"use client";

import Image from "next/image";
import GradientText from "./GradientText";
import StarBorder from "./StarBorder";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const TexchColors = {
  django: "#1ed760",
  springboot: "#fde047",
  nextjs: "#d1d5cf",
  postgresql: "#396c94",
};

export default function LatestProjectSection() {
  return (
    <div>
      <div className="mx-auto max-w-[1200px] px-6 flex items-start w-full">
        <span className="p-4 bg-[#111111] rounded-3xl w-fit">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={6}
            showBorder={false}
            className="text-xl md:text-2xl"
          >
            Last Project I Worked On
          </GradientText>
        </span>
      </div>

      <section className="w-full flex justify-center px-6 pt-24 pb-12">
        <div className="w-full max-w-[1400px] bg-[#0a0a0a] rounded-3xl p-8 md:p-12">
          <div className="relative w-full h-[260px] md:h-[540px] rounded-2xl overflow-hidden mb-8">
            <Image
              src="/tuxy.gif"
              alt="MetalOps preview"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl text-gray-200">MetalOps</h3>

              <p className="text-gray-400 max-w-2xl leading-relaxed">
                MetalOps is an application designed for the management and
                handling of work orders, focused on improving operational
                efficiency, traceability, and workflow organization within
                technical and industrial environments.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <StarBorder
                  as="span"
                  className={`px-4 py-1 rounded-full text-sm text-[${TexchColors.django}]`}
                  color={TexchColors.django}
                  speed="2s"
                  thickness={3}
                >
                  Django
                </StarBorder>

                <StarBorder
                  as="span"
                  className={`px-4 py-1 rounded-full text-sm text-[${TexchColors.springboot}]`}
                  color={TexchColors.springboot}
                  speed="2s"
                  thickness={2}
                >
                  Spring Boot
                </StarBorder>

                <StarBorder
                  as="span"
                  className={`px-4 py-1 rounded-full text-sm text-[${TexchColors.nextjs}]`}
                  color={TexchColors.nextjs}
                  speed="2s"
                  thickness={2}
                >
                  Next.js
                </StarBorder>

                <StarBorder
                  as="span"
                  className={`px-4 py-1 rounded-full text-sm text-[${TexchColors.postgresql}]`}
                  color={TexchColors.postgresql}
                  speed="2s"
                  thickness={2}
                >
                  PostgreSQL
                </StarBorder>
              </div>
            </div>

            <div className="flex justify-end mt-2">
              <Link
                href={"/"}
                className="py-2 px-6 rounded-3xl duration-200 ease-in-out hover:bg-[#343434] flex items-center gap-2 navButton max-w-fit"
              >
                <span className="text-gray-300 text-md md:text-lg tracking-wide uppercase">
                  View Project Details
                </span>
                <IoIosArrowRoundForward className="arrow" size={30} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex flex-col items-center gap-6 max-w-[1200px] mx-auto px-6 pb-24 mt-12">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={8}
          showBorder={false}
          className="max-w-xl leading-relaxed text-center text-4xl"
        >
          If you’d like to explore more of my work and see other projects I’ve
          built, you can find them all here.
        </GradientText>

        <Link
          href="/projects"
          className="py-2 px-6 rounded-3xl duration-200 ease-in-out hover:bg-[#343434]
               flex items-center gap-2 navButton border border-gray-600 max-w-fit"
        >
          <span className="text-gray-300 text-sm md:text-base tracking-wide uppercase">
            View All Projects
          </span>
          <IoIosArrowRoundForward className="arrow" size={28} />
        </Link>
      </div>
    </div>
  );
}
