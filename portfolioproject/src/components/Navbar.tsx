"use client"; // Assicurati che questo sia "use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Usa usePathname
import { motion } from "framer-motion";
import navItems from "@/assets/DataArray/NavbarArray";

const Navbar: React.FC = () => {
  const activePath = usePathname(); // Ottieni il percorso attivo
  console.log("Active Path:", activePath); // Verifica il percorso attivo

  return (
    <nav className="flex flex-wrap w-full bg-gray-200 p-5 gap-4 border-b border-gray-800 fixed top-0 justify-around items-center z-50 md:flex-row">
      {navItems.map((item) => {
        const isActive = activePath === item.href;

        return (
          <Link key={item.href} href={item.href} passHref>
            <motion.button
              className={`text-sm font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {item.labelKey}
            </motion.button>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
