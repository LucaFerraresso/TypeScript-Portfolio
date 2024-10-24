import React, { useState } from "react";
import Button from "./Button"; // Assicurati di importare il tuo componente Button
import Skeleton from "./Skeleton"; // Assicurati di importare il tuo componente Skeleton

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
  const [modalImage, setModalImage] = useState<string | null>(null); // Stato per la modale dell'immagine
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateDescription = async (index: number, project: Project) => {
    setIsGenerating((prev) => ({ ...prev, [index]: true }));
    setIsLoading(true);
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `Crea una descrizione accattivante e dettagliata di 30 parole per il progetto "${
            project.title
          }". Spiega brevemente le sue funzionalità e invita i lettori a esplorarlo su Vercel: ${
            project.vercelLink
          } e su GitHub: ${
            project.githubLink
          }. Tecnologie utilizzate: ${project.technologies?.join(
            ", "
          )}. Assicurati che il tono sia coinvolgente e stimolante, in modo da incuriosire i visitatori!`,
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

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 border-b">Immagine</th>
            <th className="py-3 px-4 border-b">Titolo</th>
            <th className="py-3 px-4 border-b">Data</th>
            <th className="py-3 px-4 border-b">Tecnologie</th>
            <th className="py-3 px-4 border-b">Descrizione</th>
            <th className="py-3 px-4 border-b">Azione</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td
                className="py-3 px-4 border-b cursor-pointer"
                onClick={() =>
                  handleImageClick(
                    project.imageUrl || "/images/homepage/coming-soon.jpg"
                  )
                }
              >
                <img
                  src={project.imageUrl || "/images/homepage/coming-soon.jpg"}
                  alt={project.title}
                  className="h-16 w-16 object-cover rounded"
                />
              </td>
              <td className="py-3 px-4 border-b">{project.title}</td>
              <td className="py-3 px-4 border-b">{project.date || "TBD"}</td>
              <td className="py-3 px-4 border-b">
                {project.technologies?.join(", ") || "N/A"}
              </td>
              <td className="py-3 px-4 border-b">
                {isGenerating[index] ? (
                  <Skeleton width="100%" height="16px" />
                ) : (
                  generatedDescriptions[index] ||
                  "Nessuna descrizione generata."
                )}
              </td>
              <td className="py-3 px-4 border-b">
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2">
                    <Button
                      text="Vedi su Vercel"
                      color="bg-blue-600"
                      hoverColor="hover:bg-blue-700"
                      link={project.vercelLink}
                    />
                    <Button
                      text="Vedi su GitHub"
                      color="bg-green-600"
                      hoverColor="hover:bg-green-700"
                      link={project.githubLink}
                    />
                  </div>
                  <Button
                    text={
                      isGenerating[index]
                        ? "Generando..."
                        : "Genera Descrizione"
                    }
                    color={isGenerating[index] ? "bg-gray-400" : "bg-green-600"}
                    hoverColor="hover:bg-green-700"
                    onClick={() => handleGenerateDescription(index, project)}
                    disabled={isGenerating[index]}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-80">
          <div className="bg-white p-4 rounded-lg z-50">
            <Button
              onClick={closeModal}
              text="chiudi"
              loading={isLoading}
              disabled={isLoading}
            />

            <img
              src={modalImage}
              alt="Progetto"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTable;
