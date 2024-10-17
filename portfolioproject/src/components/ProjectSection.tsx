import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation/animation";
import projects from "@/assets/DataArray/ProjectSectionArray";

const ProjectSection: React.FC = () => {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto text-center mt-4 mb-4"
    >
      <h1 className="text-2xl font-bold mb-6">My Projects</h1>

      <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 mb-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: index * 0.3,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              githubLink={project.githubLink}
              vercelLink={project.vercelLink}
              backgroundColor="#e0e7ff"
              technologies={project.technologies}
              date={project.date}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectSection;
