import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 p-5 gap-2 border border-t-gray-800 fixed bottom-0 left-0 flex flex-col z-50 md:flex-row md:justify-around md:gap-8 ">
      <Link href="/">
        <button className="text-sm hover:text-gray-600 hover-underline-animation">
          &copy; 2024 MyPortfolio. All rights reserved
        </button>
      </Link>
      <Link href="/Contacts">
        <button className="text-sm hover:text-gray-600 hover-underline-animation">
          Contacts
        </button>
      </Link>
      <Link href="/AboutMe">
        <button className="text-sm hover:text-gray-600 hover-underline-animation">
          AboutMe
        </button>
      </Link>
    </footer>
  );
};

export default Footer;
