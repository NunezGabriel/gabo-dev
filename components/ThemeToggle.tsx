"use client";

import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // storage unavailable — theme still toggles for the session
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-soft transition-colors duration-200 hover:text-ink"
    >
      <IoMoonOutline size={16} className="dark:hidden" />
      <IoSunnyOutline size={16} className="hidden dark:block" />
    </button>
  );
}
