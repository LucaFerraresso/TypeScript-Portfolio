"use client";
import React, { useState } from "react";
import Button from "../atoms/Button";
import GenericModal from "./GenericModal";
import Image from "next/image";
import { BookOpenIcon, GithubIcon, InfoIcon, TriangleIcon } from "lucide-react";
import Link from "next/link";

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
      // Creare un prompt come stringa
      const prompt = `Crea una descrizione accattivante e dettagliata per il progetto "${project.title}". 
        elenca e suddividi in paragrafi le sue funzionalità dopo che lo hai visitando al link di Vercel: ${project.vercelLink} 
        e su GitHub: ${project.githubLink}. importante parlare dello scopo e delle tecnologie. massimo 200 parole. nessun carattere speciale.
        Assicurati che il tono sia coinvolgente e stimolante, in modo da incuriosire i visitatori!`;

      // Creare un buffer dal prompt
      const promptBuffer = Buffer.from(prompt, "utf-8");

      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: promptBuffer.toString("utf-8") }),
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
        {projects.map((project, index) => (
          <>
            <div className="grid grid-cols-5 bg-gray-100  w-full">
              <th className="py-3 px-2 sm:px-4 border-b">Immagine</th>
              <th className="py-3 px-2 sm:px-4 border-b">Titolo</th>
              <th className="py-3 px-2 sm:px-4 border-b">Data</th>

              <th className="py-3 px-2 sm:px-4 border-b">Web Link</th>

              <th className="py-3 px-2 sm:px-4 border-b">Azione</th>
            </div>
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
              <td className="flex flex-col justify-around items-center text-center gap-4">
                <Button
                  text="Vercel"
                  color="var(--color-accent)"
                  hoverColor="var(--color-accent-dark)"
                  link={project.vercelLink}
                  icon={<TriangleIcon color={"black"} size={25} />}
                />
                <Button
                  text="GitHub"
                  color="var(--color-green)"
                  hoverColor="var(--color-green-dark)"
                  link={project.githubLink}
                  icon={<GithubIcon color={"black"} size={25} />}
                />
              </td>
              <td className="flex flex-col justify-around items-center text-center gap-4 ">
                <Link href={`Projects/${project.id}`}>
                  <Button
                    text="page/id"
                    color="var(--color-orange)"
                    hoverColor="var(--color-orange-dark)"
                    icon={<InfoIcon color={"black"} size={25} />}
                  />
                </Link>
                <Button
                  text={isGenerating[index] ? " Loading... " : "info"}
                  color="var(--color-orange)"
                  hoverColor="var(--color-orange-dark)"
                  onClick={() => handleGenerateDescription(index, project)}
                  disabled={isGenerating[index]}
                  loading={isLoading}
                  icon={<BookOpenIcon color={"black"} size={25} />}
                />
              </td>
            </div>
          </>
        ))}
      </div>

      {/* Modale per l'immagine */}
      <GenericModal
        isOpen={!!modalImage}
        onClose={closeModal}
        title="Image Preview"
      >
        {modalImage && (
          <>
            <Image
              src={modalImage}
              alt="Project Image"
              width={500}
              height={300}
              className="object-contain"
            />
          </>
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
