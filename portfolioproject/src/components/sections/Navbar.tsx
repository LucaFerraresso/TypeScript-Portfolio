"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navItems from "@/assets/DataArray/NavbarArray";
import Button from "../atoms/Button";

const Navbar: React.FC = () => {
  const activePath = usePathname();

  return (
    <nav className="w-full p-4 bg-white border-b border-gray-300 fixed top-0 flex justify-around items-center z-50">
      {navItems.map((item) => {
        const isActive = activePath === item.href;

        return (
          <div
            key={item.href}
            className={`relative ${isActive ? "underline" : ""}`}
          >
            <Link href={item.href} className="flex items-center">
              <Button text={item.label} icon={item.icon} />
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;
