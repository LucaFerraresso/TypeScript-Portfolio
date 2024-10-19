"use client"; // Assicurati che questo sia "use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // Importa usePathname
import footerItems from "@/assets/DataArray/FooterArray";

// Array delle voci del footer per una migliore gestione

const Footer: React.FC = () => {
  const activePath = usePathname(); // Ottieni il percorso attivo

  return (
    <footer className="flex flex-wrap w-full bg-gray-200 p-5 gap-4 border-t border-gray-800 fixed bottom-0 justify-around items-center z-50 md:flex-row md:text-start">
      {footerItems.map((item) => {
        const isActive = activePath === item.href; // Verifica se il link è attivo

        return (
          <Link key={item.href} href={item.href}>
            <button
              className={`text-sm font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
              }`}
            >
              {item.label}
            </button>
          </Link>
        );
      })}
    </footer>
  );
};

export default Footer;
