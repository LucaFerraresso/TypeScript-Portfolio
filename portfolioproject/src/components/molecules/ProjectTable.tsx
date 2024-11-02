"use client";
import React, { useState } from "react";
import Button from "../atoms/Button";
import GenericModal from "./GenericModal";
import Image from "next/image";
import { BookOpenIcon, GithubIcon, InfoIcon, TriangleIcon } from "lucide-react";
import Link from "next/link";
import { fadeInVariants } from "@/animation/animation";
import { motion } from "framer-motion";

interface Project {
  title: string;
  imageUrl?: string;
  githubLink?: string | undefined;
  vercelLink?: string | undefined;
  technologies?: string[];
  date?: string;
  description?: string;
  id?: number;
}

interface ProjectTableProps {
  projects: Project[];
}

const ProjectTable: React.FC<ProjectTableProps> = ({ projects }) => {
  const [isGenerating, setIsGenerating] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [, setGeneratedDescriptions] = useState<{
    [key: number]: string;
  }>({});
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalDescription, setModalDescription] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateDescription = async (index: number, project: Project) => {
    setIsGenerating((prev) => ({ ...prev, [index]: true }));
    setIsLoading(true);

    try {
      const descriptionLines = Buffer.from(
        `Genera una descrizione dettagliata di massimo 150 parole per l'app ${project.title}.`
      ).toString("utf-8");

      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: descriptionLines.toString() }),
      });

      if (!res.ok) throw new Error("Errore nella richiesta");

      const data = await res.json();
      setGeneratedDescriptions((prev) => ({
        ...prev,
        [index]: data.output,
      }));
      setModalDescription(data.output);
    } catch (error) {
      console.error("Error fetching description:", error);
    } finally {
      setIsGenerating((prev) => ({ ...prev, [index]: false }));
      setIsLoading(false);
    }
  };

  const handleImageClick = (imageUrl: string) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalDescription(null);
  };

  return (
    <>
      <div className="min-w-full bg-inherit  mx-auto text-center ">
        {projects.map((project, index) => (
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            key={index}
            className=" mb-8 border-2 border-black hover:shadow-lg"
          >
            <div className="grid grid-cols-5 bg-blue-500 text-white text-2xl  w-full ">
              <div className="py-3 px-2 sm:px-4 border-b">Preview</div>
              <div className="py-3 px-2 sm:px-4 border-b">Progetto</div>
              <div className="py-3 px-2 sm:px-4 border-b">Data</div>

              <div className="py-3 px-2 sm:px-4 border-b">Web Link</div>

              <div className="py-3 px-2 sm:px-4 border-b">Azione</div>
            </div>
            <div
              key={index}
              className="bg-blue-100 text-black hover:bg-gray-300 grid grid-cols-5 justify-between items-center "
            >
              <div
                className="py-3 px-2 sm:px-4  cursor-pointer"
                onClick={() =>
                  handleImageClick(
                    project.imageUrl || "/images/homepage/coming-soon.jpg"
                  )
                }
              >
                <div className="relative flex justify-center">
                  <Image
                    src={project.imageUrl || "/images/homepage/coming-soon.jpg"}
                    alt={project.title}
                    width={200}
                    height={200}
                    priority
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
              <div className="py-3 px-2 sm:px-4 ">{project.title}</div>
              <div className="py-3 px-2 sm:px-4 ">{project.date || "TBD"}</div>
              <div className="flex flex-col justify-center items-center text-center gap-4 p-4">
                <Button
                  link={project.vercelLink}
                  text="Vercel"
                  color={"var(--color-emerald)"}
                  hoverColor={"var(--color-hover-emerald)"}
                  icon={<TriangleIcon color={"white"} size={34} />}
                />

                <Button
                  text="GitHub"
                  icon={<GithubIcon color="white" size={34} />}
                  link={project.githubLink}
                  color={"var(--color-hover)"}
                  hoverColor={"var(--color-foreground)"}
                />
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-4 p-4 ">
                <Link href={`Projects/${project.id}`}>
                  <Button
                    text="Detail"
                    color={"var(--color-orange)"}
                    hoverColor={"var(--color-hover-orange)"}
                    icon={<InfoIcon color={"white"} size={34} />}
                  />
                </Link>
                <Button
                  text={isGenerating[index] ? " loading... " : "info"}
                  color={"var(--color-sunset)"}
                  hoverColor={"var(--color-sunset-dark)"}
                  onClick={() => handleGenerateDescription(index, project)}
                  disabled={isGenerating[index]}
                  loading={isLoading}
                  icon={<BookOpenIcon color={"white"} size={34} />}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modale per l'immagine */}
      <GenericModal
        isOpen={!!modalImage}
        onClose={closeModal}
        title="Image Preview"
      >
        {!modalImage ? (
          <p>Loading...</p>
        ) : (
          <Image
            src={modalImage}
            alt="Project Image"
            width={500}
            height={300}
            className="object-contain"
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </GenericModal>

      {/* Modale per la descrizione */}
      <GenericModal
        isOpen={!!modalDescription}
        onClose={closeModal}
        title="Descrizione del Progetto"
      >
        {modalDescription && (
          <div className="h-[300px] w-full overflow-auto ">
            <p className="p-4">{modalDescription}</p>
          </div>
        )}
      </GenericModal>
    </>
  );
};

export default ProjectTable;
