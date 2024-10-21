"use client";
import { motion } from "framer-motion";
import React from "react";
import type { Metadata } from "next";

import Header from "@/src/components/Header";

const Projects: React.FC = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  // Definisci i metadata specifici per la pagina
  const metadata: Metadata = {
    title: "Projects",
    description: "Projects",
    icons: {
      icon: "/svg/logoProject.svg",
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
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-4">Projects</p>
        <p>Anteprima...</p>
      </motion.div>
    </>
  );
};

export default Projects;
