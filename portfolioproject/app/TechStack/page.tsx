"use client";
import { motion } from "framer-motion";
import React from "react";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import { fadeInVariants } from "@/animation/animation";
import SectionSeparator from "@/src/components/atoms/SectionSeparator";
import TechSection from "@/src/components/sections/TechSection";

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
        className="flex flex-col justify-center items-center p-40"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl font-bold">TechStack</h1>
        <SectionSeparator />
        <TechSection />
        <SectionSeparator />
      </motion.div>
    </>
  );
};

export default TechStack;
