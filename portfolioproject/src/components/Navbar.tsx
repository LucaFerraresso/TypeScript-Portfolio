"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navItems from "@/assets/DataArray/NavbarArray";
import Button from "./Button";

const Navbar: React.FC = () => {
  const activePath = usePathname();
  console.log("Active Path:", activePath);

  return (
    <nav className="flex flex-wrap  w-full  p-2 gap-4 border-b bg-inherit  border-gray-800 fixed top-0 justify-around items-center z-40 md:flex-row">
      {navItems.map((item) => {
        const isActive = activePath === item.href;

        return (
          <div
            key={item.href}
            className={`relative ${isActive ? "underline" : ""}`}
          >
            <Link href={item.href} passHref>
              <Button text={item.labelKey} />
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;
