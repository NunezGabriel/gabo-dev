"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import WatchDial from "./WatchDial";
import ThemeToggle from "./ThemeToggle";
import { socials } from "@/lib/content";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current || currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close the mobile menu on navigation and lock scroll while open
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b hairline bg-canvas/75 backdrop-blur-xl transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Gabriel Nuñez — home"
          >
            <WatchDial />
            <span className="logo-wrapper hidden sm:block">
              <span className="logo-sizer">Gabriel Nuñez</span>
              <span className="logo-text primary text-ink">Gabriel Nuñez</span>
              <span className="logo-text secondary text-soft">
                gabo.dev — AQP
              </span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    active ? "text-ink" : "text-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`mt-0.5 block h-px bg-ink transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="text-ink"
            >
              {isOpen ? <IoClose size={26} /> : <HiMenuAlt3 size={26} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-canvas px-8 pt-32 pb-12 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-8">
          <Link href="/" className="text-4xl font-semibold tracking-tight">
            Home
          </Link>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-4xl font-semibold tracking-tight"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2">
          <p className="kicker">Elsewhere</p>
          <div className="flex gap-6 text-sm text-soft">
            <a href={socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={socials.email}>Email</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
