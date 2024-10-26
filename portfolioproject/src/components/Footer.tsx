"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import footerItems from "@/assets/DataArray/FooterArray";
import Button from "./Button";

const Footer: React.FC = () => {
  const activePath = usePathname();

  return (
    <footer className="flex flex-wrap w-full bg-white p-4 gap-4 border-t border-gray-300 fixed bottom-0 justify-around items-center z-40 md:flex-row md:text-start">
      {footerItems.map((item) => {
        const isActive = activePath === item.href;

        return (
          <div
            key={item.href}
            className={`relative ${isActive ? "underline" : ""}`}
          >
            <Link href={item.href}>
              <Button text={item.label} />
            </Link>
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
