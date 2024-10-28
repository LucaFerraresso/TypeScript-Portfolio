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
        className="flex flex-col text-center items-center bg-gray-50 min-h-screen pt-12 md:pt-24 lg:pt-28"
      >
        {isMobile ? <ProjectSection /> : <ProjectTable projects={projects} />}

        <h2 className="text-3xl font-bold mt-6 mb-6">Link Utili</h2>
        <div className="flex items-center text-center gap-2 mb-24">
          <HomeIcon color="black" size={20} />
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
