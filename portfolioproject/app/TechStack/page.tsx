"use client";
import { motion } from "framer-motion";
import React from "react";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import { fadeInVariants } from "@/animation/animation";
import SectionSeparator from "@/src/components/atoms/SectionSeparator";
import InfiniteTechSection from "@/src/components/sections/InfiniteTechSection";

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
        className="flex flex-col justify-center items-center text-center m-auto"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold mt-4 mb-4">TechStack</h1>
        <SectionSeparator />
        <InfiniteTechSection />
        <SectionSeparator />
      </motion.div>
    </>
  );
};

export default TechStack;
