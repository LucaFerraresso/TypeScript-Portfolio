"use client";
import React from "react";

import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation/animation";
import projects from "@/assets/DataArray/ProjectSectionArray";
import ProjectCard from "../molecules/ProjectCard";

const ProjectSection: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mt-6 mb-6">I miei Progetti</h1>
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
    </>
  );
};

export default ProjectSection;
