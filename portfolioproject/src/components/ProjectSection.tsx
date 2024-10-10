import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation/animation";

const projects = [
  {
    title: "MONGODB c.r.u.d operations App",
    description: "mongodb implementation",
    imageUrl: "/images/homepage/mongodb-app-preview.png",
    vercelLink: "https://yourproject1.vercel.app",
    githubLink: "https://github.com/tuo-username/project1",
  },
  {
    title: "ToDo App",
    description: "todoapp (javascript only)",
    imageUrl: "/images/homepage/todoapp-preview1.png",
    vercelLink: "https://yourproject2.vercel.app",
    githubLink: "https://github.com/tuo-username/project2",
  },
  {
    title: "Ice-cream menu App",
    description: "ice scream menu (javascript only)",
    imageUrl: "/images/homepage/ice-cream-menu-preview1.png",
    vercelLink: "https://yourproject3.vercel.app",
    githubLink: "https://github.com/tuo-username/project3",
  },
  {
    title: "SicilyPulse App",
    description: "SicilyPulse App",
    imageUrl: "/images/homepage/sicily-pulse-app.png",
    vercelLink: "https://yourproject1.vercel.app",
    githubLink: "https://github.com/tuo-username/project1",
  },
  {
    title: "myPortfolio in React",
    description: "developed on vue.js using React library",
    imageUrl: "/images/homepage/portfolio-preview.png",
    vercelLink: "https://yourproject1.vercel.app",
    githubLink: "https://github.com/tuo-username/project1",
  },
  {
    title: "Coming soon",
    description: "prossimamente",
    imageUrl: "/images/homepage/coming-soon.jpg",
    vercelLink: "https://yourproject1.vercel.app",
    githubLink: "https://github.com/tuo-username/project1",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto text-center"
    >
      <h1 className="text-2xl font-bold mb-6">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectSection;
