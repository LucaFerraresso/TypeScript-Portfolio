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
    date,
  } = project;

  return (
    <motion.div
      className="flex flex-col items-center rounded-lg border border-black  p-4 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl mb-4"
      style={{ backgroundColor: "#f2f2f2" }}
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: animationDelay, duration: 1.5, ease: "easeInOut" }}
      whileTap={{ scale: 0.98 }}
    >
      <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
        {title}
      </h2>
      <div className="relative w-full h-52 overflow-hidden rounded-md mb-4 ">
        <Link href={vercelLink} target="_blank" rel="noopener noreferrer">
          <Image
            src={imageUrl}
            alt={title || "Project Image"}
            layout="fill"
            objectFit="cover"
            loading="lazy"
            className="border border-black rounded-md transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </Link>
      </div>

      <p className="text-sm text-gray-600 mb-2 text-center italic ">
        Durata progetto: {date}
      </p>
      <p className="text-sm text-gray-600 mb-4 text-center ">
        Description: {description}
      </p>

      <div className="text-sm text-gray-600 mb-4 text-center ">
        Used tech:{" "}
        <span className="font-semibold">{technologies.join(", ")}</span>
      </div>

      <div className="flex space-x-4">
        <ActionButton
          url={vercelLink}
          label="Vercel"
          bgColor="bg-blue-600"
          hoverColor="hover:bg-blue-700"
        />
        <ActionButton
          url={githubLink}
          label="GitHub"
          bgColor="bg-gray-800"
          hoverColor="hover:bg-gray-900"
        />
      </div>
    </motion.div>
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
    className={`px-5 py-2 ${bgColor} text-white rounded-md ${hoverColor} transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50`}
  >
    {label}
  </a>
);

export default memo(ProjectCard);
