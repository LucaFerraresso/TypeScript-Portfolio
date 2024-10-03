import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#1E1E1E] px-4 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <button className="text-white text-lg font-semibold">
            Luca Ferraresso
          </button>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/Login">
            <button className="text-white">Login</button>
          </Link>
          <Link href="/Projects">
            <button className="text-white">Projects</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
