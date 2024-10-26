"use client";
import React from "react";

import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation/animation";
import projects from "@/assets/DataArray/ProjectSectionArray";
import ProjectCard from "../molecules/ProjectCard";

const ProjectSection: React.FC = () => {
  return (
    <>
      <section className="my-8">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto text-center"
        >
          <h1 className="text-3xl font-bold mb-6">I miei Progetti</h1>
          <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                project={project}
                animationDelay={index * 0.3}
                isFirst={false}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ProjectSection;
