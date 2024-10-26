import React, { memo, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInVariants } from "@/animation/animation";
import Skeleton from "./Skeleton";
import icons from "@/assets/DataArray/TechSectionArray";
import Button from "./Button";
import WordTextEffect from "./WordTextEffect";

interface Project {
  title: string;
  imageUrl?: string;
  githubLink?: string;
  vercelLink?: string;
  technologies?: string[];
  date?: string;
  description?: string;
}

interface ProjectCardProps {
  project: Project;
  animationDelay: number;
  isFirst: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  animationDelay,
  isFirst,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [generatedDescription, setGeneratedDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

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
      if (isFirst) {
        try {
          const res = await fetch("/api/gemini", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              prompt: `Genera una descrizione dettagliata di 30 parole per il progetto ${title}.`,
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
      } else {
        setIsLoading(false);
      }
    };

    fetchGeneratedDescription();
  }, [title, vercelLink, githubLink, technologies, isFirst]);

  const handleGenerateDescription = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Crea una descrizione accattivante di 30 parole per "${title}".`,
        }),
      });

      if (!res.ok) throw new Error("Errore nella richiesta");
      const data = await res.json();
      setGeneratedDescription(data.output);
    } catch (error) {
      console.error("Error fetching description:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div
      className="flex flex-col rounded-lg border border-gray-300 bg-white shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl mb-4 max-w-sm w-full h-full"
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
            className="cursor-pointer hover:animate-pulse rounded-3xl transition-shadow duration-300 ease-in-out hover:shadow-lg"
            width={400}
            height={400}
            loading="lazy"
            priority={false} // Cambia a true se l'immagine è importante
          />
        )}
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {isLoading ? <Skeleton width="70%" height="24px" /> : title}
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
          ) : isFirst ? (
            generatedDescription || "descrizione"
          ) : (
            "Details will be available soon."
          )}
        </div>

        {!isFirst && !generatedDescription && (
          <Button
            text="Genera Descrizione"
            color="var(--color-orange)"
            hoverColor="var(--color-orange-dark)"
            disabled={isGenerating}
            loading={isGenerating}
            onClick={handleGenerateDescription}
          />
        )}

        {generatedDescription && (
          <div className="mt-2 text-gray-600 max-w-[300px]">
            <WordTextEffect text={generatedDescription} />
          </div>
        )}

        <h3 className="text-lg font-semibold text-gray-800 mt-4">
          Tecnologie:
        </h3>
        <div className="flex flex-wrap mt-2 items-center justify-center">
          {isLoading ? (
            <Skeleton width="60%" height="16px" />
          ) : technologies.length > 0 ? (
            technologies
              .slice(0, isExpanded ? technologies.length : 4)
              .map((tech, index) => {
                const icon = icons.find(
                  (icon) => icon.title.toLowerCase() === tech.toLowerCase()
                );
                return (
                  <div
                    key={index}
                    className="flex items-center border-2 text-white rounded-full px-3 py-1 text-sm mr-2 mb-2 transition-transform transform hover:scale-105"
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

        {technologies.length > 4 && (
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="text-blue-600 hover:underline text-sm mt-2"
          >
            {isExpanded ? "...close" : "...view more"}
          </button>
        )}
      </div>
      <div className="flex justify-center space-x-4 p-4 w-full">
        <Link href="/Projects" passHref>
          <Button
            text="Vedi altro"
            color="var(--color-blue-light)"
            hoverColor="var(--color-blue-dark)"
          />
        </Link>
      </div>

      <div className="flex justify-center space-x-4 p-4">
        {isLoading ? (
          <>
            <Skeleton width="80px" height="32px" className="rounded-md" />
            <Skeleton width="80px" height="32px" className="rounded-md" />
          </>
        ) : (
          <>
            <Button
              link={vercelLink}
              text="View on Vercel"
              color="var(--color-accent)"
              hoverColor="var(--color-accent-dark)"
            />
            <Button
              link={githubLink}
              text="View on GitHub"
              color="var(--color-green)"
              hoverColor="var(--color-green-dark)"
            />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default memo(ProjectCard);
