"use client";
import { motion } from "framer-motion";
import React from "react";
import type { Metadata } from "next";
import projects from "@/assets/DataArray/ProjectSectionArray";
import Header from "@/src/components/atoms/Header";
import { fadeInVariants } from "@/animation/animation";
import ProjectTable from "@/src/components/molecules/ProjectTable";

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
      <motion.div
        className="flex flex-col justify-center items-center px-4"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold text-center mt-8">I miei Progetti</h1>
        <div className="grid grid-cols-1  gap-8 mt-8">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
          >
            <ProjectTable projects={projects} />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
