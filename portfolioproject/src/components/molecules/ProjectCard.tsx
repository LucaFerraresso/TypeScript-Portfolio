import React, { memo, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInVariants } from "@/animation/animation";
import Skeleton from "../atoms/Skeleton";
import Button from "../atoms/Button";
import WordTextEffect from "../library/WordTextEffect";
import { GithubIcon, InfoIcon, LogIn, TriangleIcon } from "lucide-react";

interface Project {
  title: string;
  imageUrl?: string;
  githubLink?: string;
  vercelLink?: string;
  technologies?: string[];
  date?: string;
  description?: string;
  icon?: React.ReactNode;
  id?: number;
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
  const [generatedDescription, setGeneratedDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [vercelLink, setVercelLink] = useState("");

  const {
    title,
    imageUrl = "/images/homepage/coming-soon.jpg",
    githubLink = "#",
    date = "TBD",
    icon = <LogIn size={20} color="red" />,
  } = project;

  useEffect(() => {
    const fetchGeneratedDescription = async () => {
      if (isFirst) {
        try {
          const prompt = `Genera una descrizione dettagliata di 30 parole per il progetto ${title}.`;
          const promptBuffer = Buffer.from(prompt, "utf-8");

          const res = await fetch("/api/gemini", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              prompt: promptBuffer.toString("utf-8"),
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
  }, [title, isFirst]);

  const handleGenerateDescription = async () => {
    setIsGenerating(true);
    try {
      const prompt = `Genera una descrizione dettagliata di 30 parole per il progetto ${title}.`;
      const promptBuffer = Buffer.from(prompt, "utf-8");
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: promptBuffer.toString("utf-8"),
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

  const handleImageClick = () => {
    if (!showConfirm) {
      // Mostra il messaggio di conferma se non già mostrato
      setShowConfirm(true);
      if (project.vercelLink) {
        setVercelLink(project.vercelLink);
      }
    }
  };

  const handleConfirmYes = () => {
    window.open(vercelLink, "_blank");
    setShowConfirm(false); // Chiude il messaggio di conferma
  };

  const handleConfirmNo = () => {
    setShowConfirm(false); // Chiude il messaggio di conferma
  };

  return (
    <motion.div
      className="relative flex flex-col rounded-lg border border-gray-300 bg-white shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg mb-4 w-full h-auto"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: animationDelay, duration: 1.5, ease: "easeInOut" }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="relative w-full h-48 overflow-hidden cursor-pointer"
        onClick={handleImageClick}
      >
        {isLoading ? (
          <Skeleton width="100%" height="100%" />
        ) : (
          <Image
            src={imageUrl}
            alt={`${title} Project Image`}
            width={600}
            height={300}
            className="object-cover"
            priority
            style={{ width: "auto", height: "auto" }}
          />
        )}
        {showConfirm && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-700 bg-opacity-75 text-white">
            <p>Vuoi essere rimandato al {vercelLink}?</p>

            <div className="flex justify-center gap-4 items-center text-center">
              <button
                onClick={handleConfirmYes}
                className="bg-blue-500 px-2 py-1 rounded border border-black"
              >
                Sì
              </button>
              <button
                onClick={handleConfirmNo}
                className="bg-red-500 px-2 py-1 rounded border border-black"
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {isLoading ? <Skeleton width="70%" height="24px" /> : title}
        </h2>
        {icon}
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <div className="bg-blue-100 text-blue-800 rounded p-1 mb-2">
          <span className="text-xs italic">
            Durata progetto:{" "}
            {isLoading ? <Skeleton width="50%" height="16px" /> : date}
          </span>
        </div>

        <div
          className={`text-sm text-gray-700 mb-2 overflow-auto h-[80px] ${
            isLoading ? "" : "line-clamp-2"
          }`}
        >
          {isLoading ? (
            <Skeleton width="100%" height="16px" />
          ) : isGenerating ? (
            "Loading..."
          ) : generatedDescription ? (
            <div className="mt-2 text-gray-600">
              <WordTextEffect text={generatedDescription} />
            </div>
          ) : (
            "Details will be available soon."
          )}
        </div>

        {!isFirst && !generatedDescription && (
          <Button
            text="Info"
            color="var(--color-orange)"
            hoverColor="var(--color-orange-dark)"
            disabled={isGenerating}
            loading={isGenerating}
            onClick={handleGenerateDescription}
            icon={<InfoIcon color={"black"} size={25} />}
          />
        )}
      </div>

      <div className="flex flex-col items-center p-4 space-y-2">
        {isLoading ? (
          <>
            <Skeleton width="80px" height="32px" className="rounded-md" />
            <Skeleton width="80px" height="32px" className="rounded-md" />
          </>
        ) : (
          <>
            <Button
              link={vercelLink}
              text="Vercel"
              color="var(--color-accent)"
              hoverColor="var(--color-accent-dark)"
              icon={<TriangleIcon color={"black"} size={25} />}
            />
            <Button
              link={githubLink}
              text="GitHub"
              color="var(--color-green)"
              hoverColor="var(--color-green-dark)"
              icon={<GithubIcon color={"black"} size={25} />}
            />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default memo(ProjectCard);
