import React, { memo, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
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
          const prompt = `Genera una descrizione dettagliata di massimo 30 parole per l'app ${title}.`;
          const res = await fetch("/api/gemini", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt }),
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
      const prompt = `Genera una descrizione dettagliata di massimo 30 parole per l'app ${title}.`;
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
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
      setShowConfirm(true);
      if (project.vercelLink) {
        setVercelLink(project.vercelLink);
      }
    }
  };

  const handleConfirmYes = () => {
    window.open(vercelLink, "_blank");
    setShowConfirm(false);
  };

  const handleConfirmNo = () => {
    setShowConfirm(false);
  };

  return (
    <motion.div
      className="relative flex flex-col rounded-lg border border-gray-300 bg-white shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl mb-6 w-full h-auto"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: animationDelay, duration: 1.5, ease: "easeInOut" }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="relative w-full h-48 overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
        onClick={handleImageClick}
      >
        {isLoading ? (
          <Skeleton width="100%" height="100%" />
        ) : (
          <Image
            src={imageUrl}
            alt={`${title} Project Image`}
            className="object-cover"
            width={500}
            height={500}
            priority
            placeholder="blur"
            blurDataURL="/images/homepage/coming-soon.jpg"
            style={{ width: "100%", height: "100%" }}
          />
        )}
        {showConfirm && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-80 text-white p-4">
            <p className="text-center">
              Vuoi essere rimandato al {vercelLink}?
            </p>
            <div className="flex justify-center gap-4 items-center text-center mt-2">
              <button
                onClick={handleConfirmYes}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-md transition duration-200"
              >
                Sì
              </button>
              <button
                onClick={handleConfirmNo}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow-md transition duration-200"
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center p-4 border-b border-gray-300 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {isLoading ? <Skeleton width="70%" height="24px" /> : title}
        </h2>
        {icon}
      </div>

      <div className="flex flex-col justify-center items-center text-center p-4">
        <div className="bg-blue-100 text-blue-800 rounded p-2 mb-2">
          <span className="text-xs italic">
            Durata progetto:{" "}
            {isLoading ? <Skeleton width="50%" height="16px" /> : date}
          </span>
        </div>

        <div
          className={`text-sm text-gray-700 mb-2 p-2 overflow-auto h-[120px] ${
            isLoading ? "" : " line-clamp-2"
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
            "Click info button for more information"
          )}
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center p-4 gap-4 bg-gray-50">
        {isLoading ? (
          <>
            <Skeleton width="80px" height="32px" className="rounded-md" />
            <Skeleton width="80px" height="32px" className="rounded-md" />
            <Skeleton width="80px" height="32px" className="rounded-md" />
          </>
        ) : (
          <>
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
            <Link href={`Projects/${project.id}`}>
              <Button
                text="page/id"
                color="var(--color-purple)"
                hoverColor="var(--color-dark)"
                icon={<InfoIcon color={"black"} size={25} />}
              />
            </Link>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default memo(ProjectCard);
