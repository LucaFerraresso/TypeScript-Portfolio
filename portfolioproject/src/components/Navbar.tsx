import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-200 p-5 gap-2 border border-b-gray-800 fixed top-0 left-0 flex flex-col z-50 md:flex-row md:justify-around md:gap-8">
      <Link href="/">
        <button className="text-sm hover:text-gray-600 hover-underline-animation">
          Luca Ferraresso
        </button>
      </Link>
      <Link href="/Projects">
        <button className="text-sm hover:text-gray-600 hover-underline-animation">
          Projects
        </button>
      </Link>
      <Link href="/TechStack">
        <button className="text-sm hover:text-gray-600 hover-underline-animation">
          TechStack
        </button>
      </Link>
      <Link href="/ErrorPage">
        <button className="text-sm hover:text-gray-600 hover-underline-animation">
          ErrorPage
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
