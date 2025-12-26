"use client";

import GradientText from "@/components/GradientText";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

const PixelParticleImage = ({
  src,
  alt,
  color,
}: {
  src: string;
  alt: string;
  color: string;
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const particleIdCounter = useRef(0);

  const generateUniqueId = () => {
    particleIdCounter.current += 1;
    return `particle-${Date.now()}-${particleIdCounter.current}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;
  };

  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(() => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 3; i++) {
        newParticles.push({
          id: generateUniqueId(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: (Math.random() - 0.5) * 2,
          vy: -Math.random() * 3 - 1,
          life: 1,
        });
      }
      setParticles((prev) => [...prev, ...newParticles]);
    }, 100);

    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    const animationFrame = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.15,
            life: p.life - 0.02,
          }))
          .filter((p) => p.life > 0 && p.y < 120)
      );
    }, 16);

    return () => clearInterval(animationFrame);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center max-h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={350}
        height={350}
        className="object-contain transition-transform duration-300 hover:scale-105"
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "350px",
          maxHeight: "350px",
        }}
      />

      {/* Particle container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 md:w-3 md:h-3"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.life,
              backgroundColor: color,
              boxShadow: `0 0 4px ${color}, 0 0 8px ${color}`,
              transform: "rotate(45deg)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const ExtraSection = () => {
  return (
    <div className="flex gap-16 flex-col pt-24 pb-24">
      {/* Title */}
      <div className="mx-auto max-w-[1600px] px-6 flex items-start w-full">
        <span className="p-4">
          <GradientText
            colors={["#cdcfd2", "#6a7271", "#cdcfd2", "#6a7271", "#cdcfd2"]}
            animationSpeed={6}
            showBorder={false}
            className="text-2xl md:text-5xl"
          >
            Beyond Code
          </GradientText>
        </span>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 grid grid-cols-1 md:grid-cols-3 gap-20 w-full">
        <div className="flex flex-col items-center text-center">
          <PixelParticleImage
            src="/WillsonsPixelNb.png"
            alt="Pets ASCII"
            color="#22c55e"
          />

          <h3 className="text-lg font-semibold text-gray-300 mt-4">Pets</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            I love animals and share my life with 7 Schnauzers, who are a big
            part of my daily routine and inspiration.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <PixelParticleImage
            src="/PixelMusic.png"
            alt="Music ASCII"
            color="#fbbf24"
          />

          <h3 className="text-lg font-semibold text-gray-300 mt-4">Music</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Music plays an important role in my life. I play piano and guitar
            and enjoy exploring creativity beyond the screen.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="pt-12">
            <PixelParticleImage
              src="/FlagsPixel.png"
              alt="Languages ASCII"
              color="#38bdf8"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-300 mt-6">
            Languages
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Fluent in Spanish and English, allowing me to communicate
            effectively in international and multicultural environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
