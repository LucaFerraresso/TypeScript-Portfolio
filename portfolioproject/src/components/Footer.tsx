"use client";
import Link from "next/link";
import React from "react";

// Array delle voci del footer per una migliore gestione
const footerItems = [
  { href: "/", label: "© 2024 MyPortfolio. All rights reserved" },
  { href: "/Contacts", label: "Contacts" },
  { href: "/AboutMe", label: "About Me" },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap w-full bg-gray-200 p-5 gap-4 border-t border-gray-800 fixed bottom-0 justify-around items-center z-50 md:flex-row md:text-start">
      {footerItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <button className="text-sm font-semibold hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            {item.label}
          </button>
        </Link>
      ))}
    </footer>
  );
};

export default Footer;
