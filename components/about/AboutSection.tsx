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
            I'm a software engineer with a genuine interest in building
            thoughtful and practical solutions. I enjoy understanding how things
            work, improving processes, and creating products that make sense
            both technically and for the people who use them. I'm motivated by
            modern technologies, continuous learning, and solving problems that
            require analysis, clarity, and attention to detail.
          </p>
          <div className=" ">
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              I strongly value teamwork and clear communication. I consider
              myself a sociable and reliable person, open to different
              perspectives, which allows me to collaborate effectively in
              diverse environments. I believe the best results come from
              combining solid technical judgment with strong interpersonal
              skills, mutual respect, and a mindset focused on continuous
              improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
