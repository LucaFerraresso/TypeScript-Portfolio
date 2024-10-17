"use client";
import React, { memo } from "react";
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
  const {
    title,
    description,
    imageUrl = "/images/homepage/coming-soon.jpg",
    githubLink = "#",
    vercelLink = "#",
    technologies = [],
    date = "TBD", // Default value for date
  } = project;

  return (
    <>
      <motion.div
        className="flex flex-col items-center rounded-lg border border-gray-300 bg-white shadow-lg p-4 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl mb-4 max-w-sm w-full"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: animationDelay, duration: 1.5, ease: "easeInOut" }}
        whileTap={{ scale: 0.98 }}
      >
        <h2 className="text-xl font-semibold text-blue-600 text-center mb-2">
          {title || "Coming Soon!"}
        </h2>
        <p className="text-sm text-gray-600 italic mb-1 text-center">
          Durata progetto: {date}
        </p>
        <p className="text-sm text-gray-600 mb-4 text-center line-clamp-2">
          {description || "Details will be available soon."}
        </p>
        <h1 className="text-lg font-semibold text-black">Anteprima:</h1>
        <div className="relative w-full h-40 overflow-hidden rounded-md mb-4">
          <Link href={vercelLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={imageUrl}
              alt={title || "Project Image"}
              layout="fill"
              objectFit="cover"
              loading="lazy"
              className="transition-transform duration-700 ease-in-out transform hover:scale-105"
            />
          </Link>
        </div>

        <div className="text-sm text-gray-600 mb-4 text-center">
          Used tech:{" "}
          <span className="font-semibold">
            {technologies.length > 0
              ? technologies.join(", ")
              : "Coming soon..."}
          </span>
        </div>

        <div className="flex space-x-4">
          <ActionButton
            url={vercelLink}
            label="View on Vercel"
            bgColor="bg-blue-600"
            hoverColor="hover:bg-blue-700"
          />
          <ActionButton
            url={githubLink}
            label="View on GitHub Repository"
            bgColor="bg-green-600" // Changed color for visibility
            hoverColor="hover:bg-green-700"
          />
        </div>
      </motion.div>
    </>
  );
};

// Componente per i pulsanti di azione (Vercel e GitHub)
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
    className={`px-4 py-2 ${bgColor} max-w-[100px] flex md:max-w-[150px] text-center  justify-center  items-center md:items-center text-white rounded-md ${hoverColor} transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50`}
  >
    {label}
  </a>
);

export default memo(ProjectCard);
