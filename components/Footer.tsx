"use client";

export default function Footer() {
  return (
    <footer className="w-full  bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-gray-300 text-lg md:text-xl">
            Let&apos;s build something together.
          </p>

          <a
            href="mailto:gabriel.nunez.arenas@gmail.com"
            className="text-gray-400 hover:text-gray-200 transition"
          >
            gabriel.nunez.arenas@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-1">
          <a href="" className="text-gray-400 hover:text-gray-200 transition">
            1- Reading
          </a>
          <a
            href="https://x.com/gabrielnunez_23"
            className="text-gray-400 hover:text-gray-200 transition"
          >
            2- Twitter
          </a>
          <a
            href="https://www.instagram.com/gabri3l_nun3z/"
            className="text-gray-400 hover:text-gray-200 transition"
          >
            3- Instagram
          </a>
        </div>

        <div className="text-gray-500 text-xs md:text-sm flex flex-col md:items-end gap-1">
          <span>Portfolio v1.0.0</span>
          <span>Last updated — January 2025</span>
        </div>
      </div>
    </footer>
  );
}
