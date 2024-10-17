"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation/animation";
import projects from "@/assets/DataArray/ProjectSectionArray";

const ProjectSection: React.FC = () => {
  return (
    <>
      <hr></hr>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto text-center mt-4 mb-4"
      >
        <h1 className="text-2xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 mb-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              project={project}
              animationDelay={index * 0.3}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectSection;
