"use client";
import { motion } from "framer-motion";
import React from "react";
import type { Metadata } from "next";

import Header from "@/src/components/Header";

const TechStack: React.FC = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

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
        className="flex flex-col justify-center items-center"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl font-bold">TechStack</h1>
      </motion.div>
    </>
  );
};

export default TechStack;
