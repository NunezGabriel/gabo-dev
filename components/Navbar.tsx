import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="border-b-[1px] border-gray-500 w-full px-10 py-7 rounded-b-3xl flex items-center justify-between">
      <h1 className="text-2xl name">Gabo Dev {"</>"}</h1>
      <h1 className="text-2xl nameHidden">Gabo Dev {":<:"}</h1>

      <section className="flex items-center gap-4">
        <Link
          href={"/"}
          className="py-2 px-6 rounded-3xl duration-200 ease-in-out hover:bg-[#343434] flex items-center gap-2 navButton"
        >
          <h1>Work</h1>
          <IoIosArrowRoundForward className="arrow" size={30} />
        </Link>
        <Link
          href={"/"}
          className="py-2 px-6 rounded-3xl duration-200 ease-in-out hover:bg-[#343434] flex items-center gap-2 navButton"
        >
          <h1>About</h1>
          <IoIosArrowRoundForward className="arrow" size={30} />
        </Link>
      </section>
    </div>
  );
};

export default Navbar;
