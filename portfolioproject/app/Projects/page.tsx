"use client";

import { useEffect, useState } from "react";
import type { Metadata } from "next";
import projects from "@/assets/DataArray/ProjectSectionArray";
import Header from "@/src/components/atoms/Header";
import ProjectTable from "@/src/components/molecules/ProjectTable";
import Link from "next/link";
import { HomeIcon } from "lucide-react";
import ProjectSection from "@/src/components/sections/ProjectSection";

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

      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Projects
        </h1>

        {isMobile ? <ProjectSection /> : <ProjectTable projects={projects} />}

        <div className="flex flex-col mt-10 items-center">
          <h2 className="text-xl font-semibold mb-2">Link Utili</h2>
          <div className="flex items-center text-center gap-2">
            <HomeIcon color="black" size={20} />
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
