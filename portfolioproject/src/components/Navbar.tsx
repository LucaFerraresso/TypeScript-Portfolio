"use client";
import React from "react";
import Link from "next/link";

// Array delle voci di menu per una migliore gestione
const navItems = [
  { href: "/", labelKey: "Home" }, // Cambia label in labelKey
  { href: "/Projects", labelKey: "Projects" },
  { href: "/TechStack", labelKey: "Tech Stack" },
  { href: "/ErrorPage", labelKey: "Error Page" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-wrap w-full bg-gray-200 p-5 gap-4 border-b border-gray-800 fixed top-0 justify-around items-center z-50 md:flex-row">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <button className="text-sm font-semibold hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            {item.labelKey} {/* Usa la chiave per tradurre */}
          </button>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
