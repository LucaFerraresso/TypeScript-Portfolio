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

  // Stati per i filtri
  const [searchText, setSearchText] = useState(""); // Testo di ricerca per titolo
  const [technologyFilter, setTechnologyFilter] = useState<string>(""); // Filtro per tecnologia
  const [dateFilter, setDateFilter] = useState<string>("");

  const filteredProjects = projects.filter((project) => {
    // Filtra per titolo
    const matchesTitle = project.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    // Filtra per tecnologia (se il filtro è impostato)
    const matchesTechnology =
      technologyFilter === "" ||
      project.technologies
        .map((tech) => tech.toLowerCase())
        .includes(technologyFilter.toLowerCase());
    //la data la esprimo come stringa, non posso mappare la data
    const matchesDate = dateFilter === "" || project.date.includes(dateFilter);

    return matchesTitle && matchesTechnology && matchesDate;
  });

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
        {/* Filtro di ricerca */}
        <form className="mb-6 flex flex-col gap-4 w-full max-w-xl">
          <h1>Cerca:</h1>
          <input
            id="searchText"
            type="text"
            name="searchText"
            placeholder="Cerca per titolo..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />
          <label>Tecnologie implementate:</label>
          <select
            name="technologyFilter"
            id={technologyFilter}
            value={technologyFilter}
            onChange={(e) => setTechnologyFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Tutte le tecnologie</option>
            <option value="React">Libreria React</option>
            <option value="Next.js">Frawork Nextjs</option>
            <option value="MongoDB">Database MongoDB</option>
            <option value="Firebase">Database Firebase</option>
            <option value="Gemini API">Gemini API</option>
          </select>
          <label>Data:</label>
          <select
            name="dateFilter"
            id={dateFilter}
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">2024</option>
            <option value="/01">gennaio</option>
            <option value="/02">febbraio</option>
            <option value="/03">marzo</option>
            <option value="/04">aprile</option>
            <option value="/05">maggio</option>
            <option value="/06">giugno</option>
            <option value="/07">luglio</option>
            <option value="/08">agosto</option>
            <option value="/09">settembre</option>
            <option value="/10">ottobre</option>
            <option value="/11">novembre</option>
            <option value="/12">dicembre</option>
          </select>
        </form>

        {isMobile ? (
          <ProjectSection projects={filteredProjects} />
        ) : (
          <ProjectTable projects={filteredProjects} />
        )}
        {filteredProjects.length === 0 && (
          <p className="text-gray-500 bg-red-500">Nessun progetto trovato.</p>
        )}
        <h2 className="text-3xl font-bold mt-6 mb-6">Link Utili</h2>
        <div className="flex items-center text-center gap-2 mb-6">
          <HomeIcon color="black" size={24} />
          <Link
            href="/"
            className="text-blue-600 hover:underline hover:font-bold"
          >
            Home
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
