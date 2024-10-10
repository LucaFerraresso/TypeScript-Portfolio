import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubLink: string;
  vercelLink: string;
  backgroundColor?: string; // Colore di sfondo opzionale
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubLink,
  vercelLink,
  backgroundColor = "#f0f0f0", // Colore di default
}) => {
  return (
    <motion.div
      className="flex flex-col items-center rounded-lg shadow-md p-4 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg mb-4"
      style={{ backgroundColor }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative w-full h-52 overflow-hidden rounded-md mb-4">
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          alt={title}
          loading="lazy"
          className="transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
        {title}
      </h2>
      <p className="text-sm text-gray-600 mb-4 text-center">{description}</p>
      <div className="flex space-x-4">
        <a
          href={vercelLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Vercel
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
