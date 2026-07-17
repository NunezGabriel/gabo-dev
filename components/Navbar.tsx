"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import ArcNav from "./ArcNav";
import LogoMark from "./LogoMark";
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
      {/* Desktop — rotating arc dial */}
      <ArcNav visible={isVisible} pathname={pathname} />

      {/* Mobile — flat bar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b hairline bg-canvas/80 backdrop-blur-xl transition-transform duration-300 md:hidden ${
          isVisible || isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex h-16 items-center justify-between px-5">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Gabriel Nuñez — home"
          >
            <LogoMark size={30} />
            <span className="text-[0.95rem] font-medium text-ink">
              Gabriel Nuñez
            </span>
          </Link>

          <div className="flex items-center gap-3">
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
