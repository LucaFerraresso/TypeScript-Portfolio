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
    title: "CRUD MONGODB OPERATIONS",
    description: "mongodb implementation",
    imageUrl: "/images/homepage/mongodb-app-preview.png",
    vercelLink: "https://yourproject1.vercel.app",
    githubLink: "https://github.com/tuo-username/project1",
  },
  {
    title: "TODO APP (JAVASCRIPT ONLY)",
    description: "todoapp (javascript only)",
    imageUrl: "/images/homepage/todoapp-preview1.png",
    vercelLink: "https://yourproject2.vercel.app",
    githubLink: "https://github.com/tuo-username/project2",
  },
  {
    title: "ICECREAM-APP (JAVASCRIPT ONLY)",
    description: "ice scream menu (javascript only)",
    imageUrl: "/images/homepage/ice-cream-menu-preview1.png",
    vercelLink: "https://yourproject3.vercel.app",
    githubLink: "https://github.com/tuo-username/project3",
  },
  {
    title: "FINAL PROJECT 1",
    description: "SicilyPulse App",
    imageUrl: "/images/homepage/sicily-pulse-app.png",
    vercelLink: "https://yourproject1.vercel.app",
    githubLink: "https://github.com/tuo-username/project1",
  },
  {
    title: "Coming soon",
    description: "coming soon",
    imageUrl: "/images/homepage/coming-soon.jpg",
    vercelLink: "https://yourproject1.vercel.app",
    githubLink: "https://github.com/tuo-username/project1",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="w-full flex flex-col md:flex-row border border-red-700 p-5"
          >
            <div key={index}>
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
