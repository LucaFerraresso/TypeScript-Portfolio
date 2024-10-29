"use client";
import { motion } from "framer-motion";
import React from "react";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import { fadeInVariants } from "@/animation/animation";
import SectionSeparator from "@/src/components/atoms/SectionSeparator";
import icons from "@/assets/DataArray/TechSectionArray";

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
        className="p-12 md:p-12 lg:p-12 xl:p-24 bg-gray-50 relative"
      >
        <h1 className="text-4xl font-bold mt-4 text-center text-gray-800">
          TechStack
        </h1>
        <SectionSeparator />

        <div className="flex flex-col items-center justify-center flex-wrap gap-6 mt-8">
          {icons.map((icon, index) => (
            <div
              key={`tech-${index}`}
              className="flex items-start gap-4 p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out w-full max-w-md"
            >
              <div className="flex-shrink-0">{icon.component}</div>
              <div>
                <h2 className="font-bold text-xl text-gray-800">
                  {icon.title}
                </h2>
                <p className="text-gray-600 mt-1">{icon.description}</p>
              </div>
            </div>
          ))}
        </div>

        <SectionSeparator />
      </motion.div>
    </>
  );
};

export default TechStack;
