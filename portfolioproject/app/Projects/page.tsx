"use client";

import { useEffect, useState } from "react";
import type { Metadata } from "next";
import projects from "@/assets/DataArray/ProjectSectionArray";
import Header from "@/src/components/atoms/Header";
import ProjectTable from "@/src/components/molecules/ProjectTable";
import Link from "next/link";
import { HomeIcon } from "lucide-react";
import ProjectSection from "@/src/components/sections/ProjectSection";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation/animation";

const Projects: React.FC = () => {
  const metadata: Metadata = {
    title: "Projects",
    description: "Projects",
    icons: {
      icon: "/svg/logoProject.svg",
    },
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Imposta la larghezza a 768px come soglia per mobile
    };

    // Aggiungi l'event listener
    window.addEventListener("resize", handleResize);

    // Verifica la larghezza iniziale
    handleResize();

    // Rimuovi l'event listener al dismount del componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header metadata={metadata} />

      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center items-center text-center pb-32 pt-32 p-6 sm:pb-28 sm:pt-14 sm:p-6 md:pb-24 mb:pt-24 md:p-6 lg:pb-20 lg:pt-20 lg:p-6 xl:pb-16 xl:pt-16 xl:p-6 2xl:pb-12 2xl:pt-12 2xl:p-6 bg-gray-50"
      >
        {isMobile ? <ProjectSection /> : <ProjectTable projects={projects} />}
        <h2 className="text-3xl font-bold mt-6 mb-6">Link Utili</h2>
        <div className="flex items-center text-center gap-2 mb-6">
          <HomeIcon color="black" size={24} />
          <Link
            href="/"
            className="text-blue-600 hover:underline  hover:font-bold"
          >
            Home
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
