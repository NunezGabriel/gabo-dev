"use client";

import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import StarBorder from "@/components/StarBorder";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  company?: string;
  image: string;
  contribution: string;
  companyHelp: string;
  stack: string[];
  stackColors?: { [key: string]: string };
}

const TechColors = {
  django: "#1ed760",
  springboot: "#fde047",
  nextjs: "#d1d5cf",
  postgresql: "#396c94",
  react: "#61dafb",
  typescript: "#3178c6",
  python: "#3776ab",
  javascript: "#f7df1e",
  tailwind: "#06b6d4",
  figma: "#f24e1e",
  node: "#339933",
  express: "#000000",
  mongodb: "#13aa52",
};

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  company,
  image,
  contribution,
  companyHelp,
  stack,
  stackColors,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="bg-[#0a0a0a] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800">
          {/* Header */}
          <div className="relative h-64 md:h-80 lg:h-96">
            <Image src={image} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]"></div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors backdrop-blur-sm z-10"
            >
              <IoClose size={24} className="text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Left Side - Title & Company */}
              <div className="md:col-span-1 flex flex-col">
                <h2 className="text-3xl md:text-4xl font-medium text-gray-100 mb-2">
                  {title}
                </h2>
                {company && <p className="text-gray-500 text-lg">{company}</p>}
              </div>

              {/* Right Side - Info */}
              <div className="md:col-span-2 flex flex-col gap-10">
                {/* Contribution */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-gray-300 text-sm uppercase tracking-widest">
                    Mi Aporte
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {contribution}
                  </p>
                </div>

                {/* Company Help */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-gray-300 text-sm uppercase tracking-widest">
                    Ayuda a la Empresa
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{companyHelp}</p>
                </div>

                {/* Stack */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-gray-300 text-sm uppercase tracking-widest">
                    Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {stack.map((tech) => (
                      <StarBorder
                        key={tech}
                        as="span"
                        className="px-4 py-2 rounded-full text-sm"
                        style={{
                          color:
                            stackColors?.[tech] ||
                            TechColors[tech as keyof typeof TechColors] ||
                            "#cdcfd2",
                        }}
                        color={
                          stackColors?.[tech] ||
                          TechColors[tech as keyof typeof TechColors] ||
                          "#cdcfd2"
                        }
                        speed="2s"
                        thickness={2}
                      >
                        {tech}
                      </StarBorder>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
