import React, { memo, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInVariants } from "@/animation/animation";
import Skeleton from "./Skeleton";
import icons from "@/assets/DataArray/TechSectionArray";

interface Project {
  title: string;
  imageUrl?: string;
  githubLink?: string;
  vercelLink?: string;
  technologies?: string[];
  date?: string;
}

interface ProjectCardProps {
  project: Project;
  animationDelay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  animationDelay,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [generatedDescription, setGeneratedDescription] = useState<string>("");

  const {
    title,
    imageUrl = "/images/homepage/coming-soon.jpg",
    githubLink = "#",
    vercelLink = "#",
    technologies = [],
    date = "TBD",
  } = project;

  useEffect(() => {
    const fetchGeneratedDescription = async () => {
      try {
        const res = await fetch("/api/gemini", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: `Genera una descrizione dettagliata e comprensibile di 30 parole per il progetto ${title}, disponibile al link: ${vercelLink} e repository GitHub: ${githubLink}. Tecnologie utilizzate: ${technologies.join(
              ", "
            )}.`,
          }),
        });

        if (!res.ok) throw new Error("Errore nella richiesta");

        const data = await res.json();
        setGeneratedDescription(data.output);
      } catch (error) {
        console.error("Error fetching description:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGeneratedDescription();
  }, [title, vercelLink, githubLink, technologies]);

  return (
    <motion.div
      className="flex flex-col rounded-lg border border-gray-300 bg-white shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl mb-4 max-w-sm w-full"
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
        {isLoading ? (
          <Skeleton width="100%" height="100%" />
        ) : (
          <Image
            src={imageUrl}
            alt={`${title} Project Image`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
            priority
            onLoadingComplete={() => setIsLoading(false)}
          />
        )}
      </Link>

      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {isLoading ? (
            <Skeleton width="70%" height="24px" />
          ) : (
            title || "Coming Soon!"
          )}
        </h2>
        <div className="bg-blue-100 text-blue-800 rounded p-2 mb-2">
          <span className="text-sm italic">
            Durata progetto:{" "}
            {isLoading ? <Skeleton width="50%" height="16px" /> : date}
          </span>
        </div>

        <div
          className={`text-sm text-gray-700 font-semibold mb-2 ${
            isLoading ? "" : isExpanded ? "" : "line-clamp-2"
          }`}
        >
          {isLoading ? (
            <Skeleton width="100%" height="16px" />
          ) : (
            generatedDescription || "Details will be available soon."
          )}
        </div>

        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="text-blue-600 hover:underline text-sm"
          style={{ display: isLoading ? "none" : "inline" }}
        >
          {isExpanded ? "...close" : "...view more"}
        </button>

        <h3 className="text-lg font-semibold text-gray-800 mt-4">
          Tecnologie:
        </h3>
        <div className="flex flex-wrap mt-2">
          {isLoading ? (
            <Skeleton width="60%" height="16px" />
          ) : technologies.length > 0 ? (
            technologies.map((tech, index) => {
              const icon = icons.find(
                (icon) => icon.title.toLowerCase() === tech.toLowerCase()
              );

              return (
                <div
                  key={index}
                  className={`flex items-center border-2 text-white rounded-full px-3 py-1 text-sm mr-2 mb-2 transition-transform transform hover:scale-105`}
                >
                  {icon ? icon.component : null}
                  <span className="ml-1 text-black">{tech}</span>
                </div>
              );
            })
          ) : (
            "Coming soon..."
          )}
        </div>
      </div>

      <div className="flex justify-center space-x-4 p-4">
        {isLoading ? (
          <>
            <Skeleton width="80px" height="32px" className="rounded-md" />
            <Skeleton width="80px" height="32px" className="rounded-md" />
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </motion.div>
  );
};

interface ActionButtonProps {
  url: string;
  label: string;
  bgColor: string;
  hoverColor: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  url,
  label,
  bgColor,
  hoverColor,
}) => (
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
