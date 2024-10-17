import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation/animation";

const projects = [
  {
    title: "MONGODB c.r.u.d operations App",
    description: "mongodb implementation",
    imageUrl: "/images/homepage/mongodb-app-preview.png",
    vercelLink: "https://mongodb-crud-operations.vercel.app/",
    githubLink:
      "https://github.com/LucaFerraresso/REACT-Portfolio/tree/main/my-next-mongodb-app",
    technologies: ["Javascript", "VScode", "GitHub"],
    date: "1-1-2024",
  },
  {
    title: "ToDo App",
    description: "todoapp (javascript only)",
    imageUrl: "/images/homepage/todoapp-preview1.png",
    vercelLink: "https://todoapp-bice-two.vercel.app/",
    githubLink:
      "https://github.com/LucaFerraresso/Edgemony/tree/main/CODE-WEEK-ACTIVITY-SUPER",
    technologies: ["Javascript", "VScode", "GitHub"],
    date: "1-1-2024",
  },
  {
    title: "Ice-cream menu App",
    description: "ice scream menu (javascript only)",
    imageUrl: "/images/homepage/ice-cream-menu-preview1.png",
    vercelLink: "https://icescream-menu-app.vercel.app/",
    githubLink:
      "https://github.com/LucaFerraresso/Edgemony/tree/main/HTML%20CSS%20JAVA-SCRIPT/Javascript%20Project",
    technologies: ["Javascript", "VScode", "GitHub"],
    date: "1-1-2024",
  },
  {
    title: "SicilyPulse App",
    description: "SicilyPulse App",
    imageUrl: "/images/homepage/sicily-pulse-app.png",
    vercelLink: "https://edgemony-final-project.vercel.app/",
    githubLink: "https://github.com/LucaFerraresso/Edgemony-FinalProject",
    technologies: ["Javascript", "VScode", "GitHub"],
    date: "1-1-2024",
  },
  {
    title: "myPortfolio in React",
    description: "developed on vue.js using React library",
    imageUrl: "/images/homepage/portfolio-preview.png",
    vercelLink: "https://react-portfolio-coral-five.vercel.app/homepage",
    githubLink: "https://github.com/LucaFerraresso/Edgemony-FinalProject",
    technologies: ["Javascript", "VScode", "GitHub"],
    date: "1-1-2024",
  },
  {
    title: "Coming soon",
    description: "prossimamente",
    imageUrl: "/images/homepage/coming-soon.jpg",
    vercelLink: "https://yourproject1.vercel.app",
    githubLink: "https://github.com/tuo-username/project1",
    technologies: ["Javascript", "VScode", "GitHub"],
    date: "1-1-2024",
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

      <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
