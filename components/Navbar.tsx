"use client";

import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 border-b-[1px] border-gray-500 w-full px-10 py-7 rounded-b-3xl flex items-center justify-between bg-[#1e1e1e]/30 backdrop-blur-md transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="logo-wrapper">
          <span className="logo-sizer">GabrielNA:&lt;</span>
          <span className="logo-text primary text-gray-300">GabrielNA❖</span>
          <span className="logo-text secondary text-[#64ffc5]">
            GaboDev&lt;/&gt;
          </span>
        </div>

        {/* Desktop Menu */}
        <section className="hidden md:flex items-center gap-4">
          <Link
            href={"/"}
            className="py-2 px-6 rounded-3xl duration-200 ease-in-out hover:bg-[#343434] flex items-center gap-2 navButton "
          >
            <h1 className="text-gray-300">Work</h1>
            <IoIosArrowRoundForward className="arrow" size={30} />
          </Link>
          <Link
            href={"/"}
            className="py-2 px-6 rounded-3xl duration-200 ease-in-out hover:bg-[#343434] flex items-center gap-2 navButton"
          >
            <h1 className="text-gray-300">About</h1>
            <IoIosArrowRoundForward className="arrow" size={30} />
          </Link>
        </section>

        {/* Hamburger Button */}
        <button onClick={toggleMenu} className="md:hidden text-white z-50">
          {isOpen ? <IoClose size={32} /> : <HiMenuAlt3 size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1a1a1a] border-l border-gray-500 transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 pt-24 px-6">
          <Link
            href={"/"}
            onClick={toggleMenu}
            className="py-3 px-6 rounded-3xl duration-200 ease-in-out hover:bg-[#343434] flex items-center gap-2"
          >
            <h1>Work</h1>
            <IoIosArrowRoundForward className="arrow" size={30} />
          </Link>
          <Link
            href={"/"}
            onClick={toggleMenu}
            className="py-3 px-6 rounded-3xl duration-200 ease-in-out hover:bg-[#343434] flex items-center gap-2"
          >
            <h1>About</h1>
            <IoIosArrowRoundForward className="arrow" size={30} />
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
