"use client";
import React from "react";
import ProjectCard from "../molecules/ProjectCard";

interface Project {
  title: string;
  imageUrl?: string;
  githubLink?: string | undefined;
  vercelLink?: string | undefined;
  technologies?: string[];
  date?: string;
  description?: string;
  id?: number;
}

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
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
