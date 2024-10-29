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
        className="flex flex-col justify-center items-center text-center mx-auto p-4 sm:p-6 lg:p-8 xl:p-12"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold mt-4 mb-4">TechStack</h1>
        <SectionSeparator />

        <div className=" flex flex-col items-start justify-center flex-wrap gap-6 ">
          {icons.map((icon, index) => (
            <div
              key={`tech-${index}`}
              className="flex items-start gap-4 p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div>
                <h1 className="font-bold text-lg">
                  {icon.title}
                  {icon.component}
                </h1>
                <p className="text-gray-600">{icon.description}</p>
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
