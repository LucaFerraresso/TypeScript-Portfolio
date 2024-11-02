"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import navItems from "@/assets/DataArray/NavbarArray";
import Button from "../atoms/Button";

const Navbar: React.FC = () => {
  const activePath = usePathname();

  return (
    <div className="w-full p-4 bg-blue-100 border-b-black border-gray-300 mt-auto flex flex-col items-center border">
      <div className="flex flex-wrap justify-center sm:flex-row gap-4 items-center sm:gap-16 mb-2">
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
      </div>
    </div>
  );
};

export default Navbar;
