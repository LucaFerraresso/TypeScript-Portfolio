"use client";
import { motion } from "framer-motion";
import React from "react";
import type { Metadata } from "next";
import ProjectCard from "@/src/components/ProjectCard";
import projects from "@/assets/DataArray/ProjectSectionArray";
import Header from "@/src/components/Header";
import { fadeInVariants } from "@/animation/animation";
import ProjectTable from "@/src/components/ProjectTable";

const Projects: React.FC = () => {
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
      <motion.div className="flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl font-bold text-center mt-8">I miei Progetti</h1>
        <p className="mt-2 text-lg text-center text-gray-600">
          Esplora i miei progetti recenti
        </p>
        <ProjectTable projects={projects} />
      </motion.div>
    </>
  );
};

export default Projects;
