"use client";

import Image from "next/image";

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

// <section className="w-full max-w-6xl mx-auto px-6 py-24">
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
//     <div
//       className="relative w-full h-[420px] md:h-[520px] rounded-xl overflow-hidden
//             shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
//     >
//       <Image
//         src="/avatar.jpg"
//         alt="Avatar"
//         fill
//         className="object-cover"
//         priority
//       />

//       <div
//         className="absolute bottom-0 left-0 w-full h-20
//          bg-gradient-to-t from-black/90 via-black/70 to-transparent
//          backdrop-blur-[2px]"
//       />

//       {/* Caption */}
//       <div className="absolute bottom-4 left-6 z-10">
//         <p className="text-xs text-gray-300 tracking-wide uppercase">
//           Plaza de Armas - Arequipa
//         </p>
//       </div>
//     </div>

//     <div className="flex flex-col justify-center gap-8 ">
//       <GradientText
//         colors={["#cdcfd2", "#6a7271", "#cdcfd2", "#6a7271", "#cdcfd2"]}
//         animationSpeed={5}
//         showBorder={false}
//         className="text-6xl leading-tight"
//       >
//         Gabriel Nunez Arenas
//       </GradientText>
//       <h2 className="text-gray-500 text-xl max-w-md leading-relaxed">
//         Software Developer, crafting thoughtful solutions through code.
//       </h2>

//       <div className="mt-4">
//         <Link
//           href={"/"}
//           className="py-2 px-6 rounded-3xl duration-200 ease-in-out hover:bg-[#343434] flex items-center gap-2 navButton max-w-fit "
//         >
//           <h1 className="text-gray-300 text-xl tracking-wide uppercase">
//             More
//           </h1>

//           <IoIosArrowRoundForward className="arrow" size={30} />
//         </Link>
//       </div>
//     </div>
//   </div>
// </section>
