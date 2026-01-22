"use client";

import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

interface ProjectCardProps {
  id: string;
  title: string;
  company?: string;
  image: string;
  description?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export default function ProjectCard({
  id,
  title,
  company,
  image,
  description,
  size = "medium",
  onClick,
}: ProjectCardProps) {
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 md:col-span-2 row-span-1 md:row-span-1",
    large: "col-span-1 md:col-span-2 md:row-span-2",
  };

  const imageHeights = {
    small: "h-48 md:h-64",
    medium: "h-64 md:h-80",
    large: "h-96 md:h-[600px]",
  };

  return (
    <div
      className={`${sizeClasses[size]} group cursor-pointer`}
      onClick={onClick}
    >
      <div className="bg-[#0a0a0a] rounded-3xl overflow-hidden h-full flex flex-col hover:bg-[#1a1a1a] transition-colors duration-300">
        {/* Image Container */}
        <div className={`${imageHeights[size]} relative overflow-hidden`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/20"></div>
        </div>

        {/* Info Container - Aligned to right */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-2 text-right">
            <h3 className="text-xl md:text-2xl font-medium text-gray-100 group-hover:text-white transition-colors">
              {title}
            </h3>
            {company && (
              <p className="text-sm md:text-base text-gray-500 group-hover:text-gray-400 transition-colors">
                {company}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-200 transition-colors mt-4 justify-end">
            <span className="text-xs md:text-sm uppercase tracking-wide">
              View Project
            </span>
            <IoIosArrowRoundForward
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
