"use client";
import links from "@/assets/DataArray/LinkSectionArray";
import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton from "../atoms/Skeleton";

const LinkSection = () => {
  const [isLoading, setIsLoading] = useState(true); // Stato di caricamento
  //facciamo un set interval si due secondi
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Link Utili</h2>
        <div className="flex flex-wrap gap-6 justify-center items-center text-center">
          {links.map((link, index) => (
            <div key={index} className="flex flex-row items-center ">
              {isLoading ? (
                <Skeleton width="220px" height="45px" className="mb-4" />
              ) : (
                <ul className="space-y-4 ">
                  <li className="p-2 flex items-center gap-6  w-[220px] h-[45px]">
                    {link.icon}
                    <Link
                      href={link.href}
                      className="text-black font-bold hover:underline hover:font-bold hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LinkSection;
