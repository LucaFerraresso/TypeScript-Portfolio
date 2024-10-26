"use client";
import React, { useState } from "react";
import Button from "../atoms/Button";
import Skeleton from "../atoms/Skeleton";
import GenericModal from "./GenericModal";
import WordTextEffect from "../library/WordTextEffect";
import icons from "@/assets/DataArray/TechSectionArray";
import Image from "next/image";
import { Github, Loader, Upload } from "lucide-react";

interface Project {
  title: string;
  imageUrl?: string;
  githubLink?: string;
  vercelLink?: string;
  technologies?: string[];
  date?: string;
  description?: string;
}

interface ProjectTableProps {
  projects: Project[];
}

const ProjectTable: React.FC<ProjectTableProps> = ({ projects }) => {
  const [isGenerating, setIsGenerating] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [generatedDescriptions, setGeneratedDescriptions] = useState<{
    [key: number]: string;
  }>({});
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateDescription = async (index: number, project: Project) => {
    setIsGenerating((prev) => ({ ...prev, [index]: true }));
    setIsLoading(true);
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: ` Crea una descrizione accattivante e dettagliata di 30 parole per il progetto "${
            project.title
          }". Spiega brevemente le sue funzionalità e invita i lettori a esplorarlo su Vercel: ${
            project.vercelLink
          } e su GitHub: ${
            project.githubLink
          }. Tecnologie utilizzate: ${project.technologies?.join(
            ", "
          )}. Assicurati che il tono sia coinvolgente e stimolante, in modo da incuriosire i visitatori!,`,
        }),
      });

      if (!res.ok) throw new Error("Errore nella richiesta");

      const data = await res.json();
      setGeneratedDescriptions((prev) => ({ ...prev, [index]: data.output }));
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
  };
  //devo mettere una query che se lo schermo e' modile, devo mostrare tutto in colonna

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 mx-auto text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-2 sm:px-4 border-b">Immagine</th>
              <th className="py-3 px-2 sm:px-4 border-b">Titolo</th>
              <th className="py-3 px-2 sm:px-4 border-b">Data</th>
              <th className="py-3 px-2 sm:px-4 border-b">Tecnologie</th>
              <th className="py-3 px-2 sm:px-4 border-b max-w-[300px]">
                Descrizione
              </th>
              <th className="py-3 px-2 sm:px-4 border-b">Azione</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td
                  className="py-3 px-2 sm:px-4 border-b cursor-pointer"
                  onClick={() =>
                    handleImageClick(
                      project.imageUrl || "/images/homepage/coming-soon.jpg"
                    )
                  }
                >
                  <div className="flex justify-center">
                    <Image
                      src={
                        project.imageUrl || "/images/homepage/coming-soon.jpg"
                      }
                      alt={project.title}
                      height={250}
                      width={250}
                      className="rounded-3xl transition-shadow duration-300 ease-in-out hover:shadow-lg"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,...your_placeholder_data..."
                      priority={false}
                    />
                  </div>
                </td>
                <td className="py-3 px-2 sm:px-4 border-b">{project.title}</td>
                <td className="py-3 px-2 sm:px-4 border-b">
                  {project.date || "TBD"}
                </td>
                <td className="py-3 px-2 sm:px-4 border-b">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech) => {
                      const techIcon = icons.find(
                        (icon) => icon.title === tech
                      );
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
                </td>
                <td className="py-3 px-2 sm:px-4 border-b max-w-[300px]">
                  {isGenerating[index] ? (
                    <Skeleton width="100%" height="16px" />
                  ) : (
                    <WordTextEffect
                      text={
                        generatedDescriptions[index] ||
                        "Nessuna descrizione generata."
                      }
                    />
                  )}
                </td>
                <td className="py-3 px-2 sm:px-4 border-b">
                  <div className="flex flex-col space-y-2">
                    <div className="flex space-x-2">
                      <Button
                        text="Vedi su Vercel"
                        color="var(--color-accent)"
                        hoverColor="var(--color-accent-dark)"
                        link={project.vercelLink}
                        icon={<Upload color={"red"} size={45} />}
                      />
                      <Button
                        text="Vedi su GitHub"
                        color="var(--color-green)"
                        hoverColor="var(--color-green-dark)"
                        link={project.githubLink}
                        icon={<Github color={"red"} size={45} />}
                      />
                    </div>
                    <Button
                      text={
                        isGenerating[index]
                          ? "Generando..."
                          : "Genera Descrizione"
                      }
                      color={
                        isGenerating[index]
                          ? "var(--color-orange)"
                          : "var(--color-orange)"
                      }
                      hoverColor="var(--color-orange-dark)"
                      onClick={() => handleGenerateDescription(index, project)}
                      disabled={isGenerating[index]}
                      loading={isLoading}
                      icon={<Loader color={"red"} size={45} />}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <GenericModal
          isOpen={!!modalImage}
          onClose={closeModal}
          title="Image Preview"
        >
          {modalImage && (
            <Image
              src={modalImage}
              alt="Project Image"
              width={600}
              height={600}
              loading="lazy"
              priority={false}
            />
          )}
        </GenericModal>
      </div>
    </>
  );
};

export default ProjectTable;
