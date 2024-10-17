import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string | undefined;
  description?: string | undefined;
  imageUrl?: string | undefined;
  githubLink?: string | undefined;
  vercelLink?: string | undefined;
  technologies?: string[] | undefined;
  date?: string | undefined;
  backgroundColor?: string | undefined;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubLink,
  vercelLink,
  technologies,
  date,
  backgroundColor = "#f0f0f0",
}) => {
  return (
    <motion.div
      className="flex flex-col items-center rounded-lg border border-gray-300 p-4 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl mb-4"
      style={{ backgroundColor }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative w-full h-52 overflow-hidden rounded-md mb-4">
        <Link
          href={vercelLink || "/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={imageUrl || "/images/homepage/coming-soon.jpg"}
            alt={title || "Project Image"}
            layout="fill"
            objectFit="cover"
            loading="lazy"
            className="border border-gray-300 rounded-md transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </Link>
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
        {title}
      </h2>
      <p className="text-sm text-gray-600 mb-2 text-center italic">{date}</p>
      <p className="text-sm text-gray-600 mb-4 text-center">{description}</p>
      <div className="text-sm text-gray-600 mb-4 text-center">
        Used tech:{" "}
        <span className="font-semibold">{technologies?.join(", ")}</span>
      </div>

      <div className="flex space-x-4">
        <a
          href={vercelLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Vercel
        </a>
        <a
          href={githubLink || "#"}
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
