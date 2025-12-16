"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function AboutSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden">
          <Image
            src="/avatar.jpg"
            alt="Avatar"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl text-gray-200">About Me</h2>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            I'm a software developer with a genuine interest in building
            thoughtful and practical solutions. I enjoy understanding how things
            work, improving processes, and creating products that make sense
            both technically and for the people who use them. I’m motivated by
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
