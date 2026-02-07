"use client";

import Image from "next/image";
import GradientText from "@/components/GradientText";

export default function AboutSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div
          className="relative w-full h-[420px] md:h-[520px] rounded-xl overflow-hidden
            shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
        >
          <Image
            src="/profilePcitureBgBNocuadro.png"
            alt="Avatar"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div
            className="absolute bottom-0 left-0 w-full h-20
         bg-gradient-to-t from-black/90 via-black/70 to-transparent
         backdrop-blur-[2px]"
          />

          {/* Caption */}
          <div className="absolute bottom-4 left-6 z-10">
            <p className="text-xs text-gray-300 tracking-wide uppercase">
              Photo Studio - Arequipa
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <GradientText
            colors={["#cdcfd2", "#6a7271", "#cdcfd2", "#6a7271", "#cdcfd2"]}
            animationSpeed={5}
            showBorder={false}
            className="text-6xl leading-tight w-full"
          >
            About Me
          </GradientText>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Software Engineer passionate about building and shipping web systems
            into production, with experience in web development and cloud-based
            deployments.
          </p>
          <div className=" ">
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              I work mainly with JavaScript and Python ecosystems, developing
              web applications and managing their delivery using Docker, CI/CD
              pipelines, and cloud platforms such as VPS and PaaS environments.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base mt-4">
              I'm a self-taught professional with strong ownership and
              accountability, comfortable taking responsibility from development
              to deployment. Currently strengthening my skills in cloud
              infrastructure and DevOps practices while continuing to deliver
              reliable web solutions as part of collaborative, high-performing
              teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
