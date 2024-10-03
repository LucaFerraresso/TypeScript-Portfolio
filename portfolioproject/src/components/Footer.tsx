import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1E1E1E] px-4 py-4 fixed bottom-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <button className="text-white">
            &copy; 2024 My Website. All rights reserved
          </button>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/Contacts">
            <button className="text-white">Contacts</button>
          </Link>
          <Link href="/AboutMe">
            <button className="text-white">AboutMe</button>
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
