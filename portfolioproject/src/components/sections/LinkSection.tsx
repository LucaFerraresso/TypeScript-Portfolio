"use client";
import links from "@/assets/DataArray/LinkSectionArray";
import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton from "../atoms/Skeleton";
import Button from "../atoms/Button";

const LinkSection = () => {
  const [isLoading, setIsLoading] = useState(true); // Stato di caricamento
  //facciamo un set interval si due secondi
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
                <>
                  <Link
                    href={link.href}
                    className="flex items-center hover:font-bold hover:text-blue-500"
                  >
                    <Button text={link.label} icon={link.icon} />
                  </Link>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LinkSection;
