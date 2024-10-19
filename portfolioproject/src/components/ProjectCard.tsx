"use client";
import React, { memo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInVariants } from "@/animation/animation";

interface ProjectCardProps {
  project: {
    title: string;
    description?: string;
    imageUrl?: string;
    githubLink?: string;
    vercelLink?: string;
    technologies?: string[];
    date?: string;
  };
  animationDelay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  animationDelay,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    title,
    description,
    imageUrl = "/images/homepage/coming-soon.jpg",
    githubLink = "#",
    vercelLink = "#",
    technologies = [],
    date = "TBD",
  } = project;

  return (
    <motion.div
      className="flex flex-col rounded-lg border border-black bg-gray-100 shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl mb-4 max-w-sm w-full"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: animationDelay, duration: 1.5, ease: "easeInOut" }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={vercelLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full h-48 overflow-hidden"
      >
        <Image
          src={imageUrl}
          alt={title || "Project Image"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
          priority
        />
      </Link>

      <div className="p-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">
          {title || "Coming Soon!"}
        </h2>
        <div className="bg-blue-100 text-blue-800 rounded p-2 mb-2">
          <p className="text-sm italic">Durata progetto: {date}</p>
        </div>

        <p
          className={`text-sm text-gray-700 font-semibold mb-2 ${
            isExpanded ? "" : "line-clamp-2"
          }`}
        >
          {description || "Details will be available soon."}
        </p>

        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="text-blue-600 hover:underline text-sm"
          >
            ...altro
          </button>
        )}

        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="text-blue-600 hover:underline text-sm"
          >
            ...meno
          </button>
        )}

        <h3 className="text-lg font-semibold text-black">Tecnologie:</h3>
        <div className="text-sm text-gray-600 mb-4">
          <span className="font-semibold">
            {technologies.length > 0
              ? technologies.join(", ")
              : "Coming soon..."}
          </span>
        </div>
      </div>

      <div className="flex justify-center space-x-4 p-4">
        <ActionButton
          url={vercelLink}
          label="View on Vercel"
          bgColor="bg-blue-600"
          hoverColor="hover:bg-blue-700"
        />
        <ActionButton
          url={githubLink}
          label="View on GitHub"
          bgColor="bg-green-600"
          hoverColor="hover:bg-green-700"
        />
      </div>
    </motion.div>
  );
};

// Componente per i pulsanti di azione
const ActionButton: React.FC<{
  url: string;
  label: string;
  bgColor: string;
  hoverColor: string;
}> = ({ url, label, bgColor, hoverColor }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`px-4 py-2 ${bgColor} text-white rounded-md shadow-md transition-all duration-300 ease-in-out ${hoverColor} hover:shadow-lg`}
  >
    {label}
  </a>
);

export default memo(ProjectCard);
