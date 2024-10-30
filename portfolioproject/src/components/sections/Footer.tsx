"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import footerItems from "@/assets/DataArray/FooterArray";
import Button from "../atoms/Button";

const Footer: React.FC = () => {
  const activePath = usePathname();

  return (
    <footer className="w-full p-4 bg-white border-t border-gray-300 fixed bottom-0 flex justify-around items-center z-40">
      {footerItems.map((item) => {
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
      <p className="text-xs text-gray-600">
        © 2024 MyPortfolio. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
