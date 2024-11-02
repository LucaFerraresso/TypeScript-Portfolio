"use client";
import { motion } from "framer-motion";
import React from "react";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import { fadeInVariants } from "@/animation/animation";
import SectionSeparator from "@/src/components/atoms/SectionSeparator";
import icons from "@/assets/DataArray/TechSectionArray";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

const TechStack: React.FC = () => {
  // Definisci i metadata specifici per la pagina
  const metadata: Metadata = {
    title: "TechStack",
    description: "TechStack",
    icons: {
      icon: "/svg/logoTech.svg",
    },
  };

  return (
    <>
      <Header metadata={metadata} />
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className=" bg-gray-50 relative"
      >
        <h1 className="text-4xl font-bold text-center text-gray-800">
          TechStack
        </h1>
        <SectionSeparator />

        <div className="flex flex-wrap   items-center justify-center gap-6 p-6 ">
          {icons.map((icon, index) => (
            <div
              key={`tech-${index}`}
              className="flex items-start gap-4 p-4 border border-black rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out w-full max-w-md"
            >
              <div className="flex-shrink-0">{icon.component}</div>
              <div>
                <h2 className="font-bold text-xl text-gray-800">
                  {icon.title}
                </h2>
                <p
                  className="p-2 text-gray-600 mt-2 border-t h-[200px] overflow-auto scrollbar-hidden"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {icon.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <SectionSeparator />
        <div className="flex flex-col justify-center items-center p-2">
          <h2 className="text-3xl font-bold mt-6 mb-6">Link Utili</h2>
          <div className="flex items-center text-center gap-2 mb-6 p-6">
            <HomeIcon color="black" size={24} />
            <Link
              href="/"
              className="text-black hover:underline  hover:font-bold hover:text-blue-600"
            >
              Home
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TechStack;
