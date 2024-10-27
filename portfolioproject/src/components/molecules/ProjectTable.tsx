"use client";
import React, { useState } from "react";
import Button from "../atoms/Button";

import GenericModal from "./GenericModal";

import icons from "@/assets/DataArray/TechSectionArray";
import Image from "next/image";
import { EyeIcon, Github, Loader, Upload } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  imageUrl?: string;
  githubLink?: string;
  vercelLink?: string;
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
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Crea una descrizione accattivante e dettagliata per il progetto "${project.title}". elenca in paragrafi le sue funzionalità dopo che lo hai analizzato visitando il link su Vercel: ${project.vercelLink} e su GitHub: ${project.githubLink}.massimo 200 parole. Assicurati che il tono sia coinvolgente e stimolante, in modo da incuriosire i visitatori!`,
        }),
      });

      if (!res.ok) throw new Error("Errore nella richiesta");

      const data = await res.json();
      setGeneratedDescriptions((prev) => ({ ...prev, [index]: data.output }));
      setModalDescription(data.output); // Apri la modale con la descrizione
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
      <div className="min-w-full bg-white border border-gray-300 mx-auto text-center">
        <div>
          <div className="grid grid-cols-5 bg-gray-100  w-full">
            <th className="py-3 px-2 sm:px-4 border-b">Immagine</th>
            <th className="py-3 px-2 sm:px-4 border-b">Titolo</th>
            <th className="py-3 px-2 sm:px-4 border-b">Data</th>
            <th className="py-3 px-2 sm:px-4 border-b">Tecnologie</th>

            <th className="py-3 px-2 sm:px-4 border-b">Azione</th>
          </div>
        </div>
        <div>
          {projects.map((project, index) => (
            <div
              key={index}
              className="hover:bg-gray-200 grid grid-cols-5 justify-between items-center "
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
                    loading="lazy"
                    priority={false}
                  />
                </div>
              </div>
              <td className="py-3 px-2 sm:px-4 ">{project.title}</td>
              <td className="py-3 px-2 sm:px-4 ">{project.date || "TBD"}</td>
              <div className="py-3 px-2 sm:px-4 ">
                <div className="grid grid-cols-2 gap-2">
                  {project.technologies?.map((tech) => {
                    const techIcon = icons.find((icon) => icon.title === tech);
                    return (
                      techIcon && (
                        <div key={tech} className="flex items-center">
                          {techIcon.component}
                          <span className="ml-1">{tech}</span>
                        </div>
                      )
                    );
                  })}
                </div>
              </div>
              <td className="py-3 px-2 sm:px-4 ">
                <div className="flex flex-col space-y-2">
                  <Button
                    text="Vedi su Vercel"
                    color="var(--color-accent)"
                    hoverColor="var(--color-accent-dark)"
                    link={project.vercelLink}
                    icon={<Upload color={"red"} size={15} />}
                  />
                  <Button
                    text="Vedi su GitHub"
                    color="var(--color-green)"
                    hoverColor="var(--color-green-dark)"
                    link={project.githubLink}
                    icon={<Github color={"red"} size={15} />}
                  />
                  <Link href={`Projects/${project.id}`}>
                    <Button
                      text="Vedi pagina dettaglio"
                      color="var(--color-accent)"
                      hoverColor="var(--color-accent-dark)"
                      icon={<EyeIcon color={"red"} size={15} />}
                    />
                  </Link>
                  <Button
                    text={
                      isGenerating[index]
                        ? "Generando..."
                        : "Genera Descrizione"
                    }
                    color="var(--color-orange)"
                    hoverColor="var(--color-orange-dark)"
                    onClick={() => handleGenerateDescription(index, project)}
                    disabled={isGenerating[index]}
                    loading={isLoading}
                    icon={<Loader color={"red"} size={15} />}
                  />
                </div>
              </td>
            </div>
          ))}
        </div>
      </div>

      {/* Modale per l'immagine */}
      <GenericModal
        isOpen={!!modalImage}
        onClose={closeModal}
        title="Image Preview"
      >
        {modalImage && (
          <Image
            src={modalImage}
            alt="Project Image"
            width={500}
            height={300}
            className="object-contain cursor-pointer hover:animate-pulse rounded-3xl transition-shadow duration-300 ease-in-out hover:shadow-lg"
          />
        )}
      </GenericModal>

      {/* Modale per la descrizione */}
      <GenericModal
        isOpen={!!modalDescription}
        onClose={closeModal}
        title="Descrizione del Progetto"
      >
        {modalDescription && <p className="p-4">{modalDescription}</p>}
      </GenericModal>
    </>
  );
};

export default ProjectTable;
