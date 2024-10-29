"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import footerItems from "@/assets/DataArray/FooterArray";
import Button from "../atoms/Button";

const Footer: React.FC = () => {
  const activePath = usePathname();

  return (
    <footer className="flex flex-wrap w-full bg-white p-4 gap-4 border-t border-gray-300 fixed bottom-0 justify-around items-center z-39 md:flex-row md:text-start">
      {footerItems.map((item) => {
        const isActive = activePath === item.href;

        return (
          <div
            key={item.href}
            className={`relative flex items-center ${
              isActive ? "underline" : ""
            }`}
          >
            <Link href={item.href} className="flex items-center">
              {/* Mostra l'icona accanto al testo */}

              <Button text={item.label} icon={item.icon} />
            </Link>
          </div>
        );
      })}
      <p>© 2024 MyPortfolio. All rights reserved</p>
    </footer>
  );
};

export default Footer;
