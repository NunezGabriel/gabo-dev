"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function PresentationSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div
          className="relative w-full h-[420px] md:h-[520px] rounded-xl overflow-hidden
                shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
        >
          <Image
            src="/avatar.jpg"
            alt="Avatar"
            fill
            className="object-cover"
            priority
          />

          <div
            className="absolute bottom-0 left-0 w-full h-20
             bg-gradient-to-t from-black/90 via-black/70 to-transparent
             backdrop-blur-[2px]"
          />

          {/* Caption */}
          <div className="absolute bottom-4 left-6 z-10">
            <p className="text-xs text-gray-300 tracking-wide uppercase">
              Plaza de Armas - Arequipa
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-gray-200 text-6xl leading-tight">
            Gabriel Nunez Arenas
          </h1>

          <h2 className="text-gray-500 text-xl max-w-md leading-relaxed">
            Software Developer, crafting thoughtful solutions through code.
          </h2>

          <div className="mt-4">
            <Link
              href={"/"}
              className="py-2 px-6 rounded-3xl duration-200 ease-in-out hover:bg-[#343434] flex items-center gap-2 navButton max-w-fit "
            >
              <h1 className="text-gray-300 text-sm tracking-wide uppercase">
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
