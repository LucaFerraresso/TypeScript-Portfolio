import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation/animation";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  vercelLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    title: "Progetto 1",
    description: "mongodb implementation",
    imageUrl: "/images/homepage/mongodb-app-preview.png",
    vercelLink: "https://yourproject1.vercel.app",
    githubLink: "https://github.com/tuo-username/project1",
  },
  {
    title: "Progetto 2",
    description: "todoapp (javascript only)",
    imageUrl: "/images/homepage/todoapp-preview1.png",
    vercelLink: "https://yourproject2.vercel.app",
    githubLink: "https://github.com/tuo-username/project2",
  },
  {
    title: "Progetto 3",
    description: "ice scream menu (javascript only)",
    imageUrl: "/images/homepage/ice-cream-menu-preview1.png",
    vercelLink: "https://yourproject3.vercel.app",
    githubLink: "https://github.com/tuo-username/project3",
  },
  {
    title: "Progetto 4",
    description: "SicilyPulse App",
    imageUrl: "/images/homepage/sicily-pulse-app.png",
    vercelLink: "https://yourproject1.vercel.app",
    githubLink: "https://github.com/tuo-username/project1",
  },
  {
    title: "Progetto 5",
    description: "coming soon",
    imageUrl: "/images/homepage/coming-soon.jpg",
    vercelLink: "https://yourproject1.vercel.app",
    githubLink: "https://github.com/tuo-username/project1",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <div className="w-full">
      <h1>My Projects</h1>
      <div className="w-full">
        {projects.map((project, index) => (
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <div key={index} className="w-full">
              <Image
                src={project.imageUrl}
                width={250}
                height={250}
                alt={project.title}
                className="w-full"
              />

              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div>
                <a
                  href={project.vercelLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
