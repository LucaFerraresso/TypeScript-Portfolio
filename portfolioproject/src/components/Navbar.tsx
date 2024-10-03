import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <nav className="w-full bg-gray-200 p-8 fixed bottom-0 left-0 flex flex-col">
      <Link href="/">
        <button className="text-sm hover:text-gray-600 hover-underline-animation">
          Luca Ferraresso
        </button>
      </Link>

      <Link href="/Login">
        <button className="text-sm hover:text-gray-600 hover-underline-animation">
          Login
        </button>
      </Link>
      <Link href="/Projects">
        <button className="text-sm hover:text-gray-600 hover-underline-animation">
          Projects
        </button>
      </Link>
    </nav>
  );
};

export default Footer;
