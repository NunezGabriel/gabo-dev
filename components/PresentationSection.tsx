"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import GradientText from "./GradientText";
import ProfileCard from "../components/ProfileCard";

export default function PresentationSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="flex justify-center items-center">
          <ProfileCard
            name="Gabriel Nunez"
            title="Software Developer"
            handle="javicodes"
            status="Online"
            avatarUrl="avatar.jpg"
            iconUrl="/code-pattern.svg"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
          />
        </div>

        <div className="flex flex-col justify-center gap-8 ">
          <GradientText
            colors={["#cdcfd2", "#6a7271", "#cdcfd2", "#6a7271", "#cdcfd2"]}
            animationSpeed={5}
            showBorder={false}
            className="text-6xl leading-tight"
          >
            Gabriel Nunez Arenas
          </GradientText>
          <h2 className="text-gray-500 text-xl max-w-md leading-relaxed">
            Software Developer, crafting thoughtful solutions through code.
          </h2>

          <div className="mt-4">
            <Link
              href={"/"}
              className="py-2 px-6 rounded-3xl duration-200 ease-in-out hover:bg-[#343434] flex items-center gap-2 navButton max-w-fit "
            >
              <h1 className="text-gray-300 text-xl tracking-wide uppercase">
                More
              </h1>

              <IoIosArrowRoundForward className="arrow" size={30} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
