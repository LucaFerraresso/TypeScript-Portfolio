"use client";
import React from "react";
import { useParams } from "next/navigation";
import projects from "@/assets/DataArray/ProjectSectionArray"; // Importa il tuo array di progetti
import Link from "next/link";
import Image from "next/image";

const ProjectDetail: React.FC = () => {
  const params = useParams() as { id?: string }; // Casting dei parametri per includere id
  const projectId = params.id ? Number(params.id) : null; // Converti l'ID in numero se esiste
  console.log(projectId);

  // Trova il progetto corrispondente all'ID
  const project =
    projectId !== null ? projects.find((proj) => proj.id === projectId) : null;

  if (!project) {
    return <div>Progetto non trovato!</div>; // Gestisci il caso in cui il progetto non esista
  }

  return (
    <div className="p-4">
      <Image
        src={project.imageUrl}
        alt={`${project.title} Project Image`}
        className="cursor-pointer hover:animate-pulse rounded-3xl transition-shadow duration-300 ease-in-out hover:shadow-lg"
        width={400}
        height={400}
        loading="lazy"
        priority={false} // Cambia a true se l'immagine è importante
      />

      <Link href="/Projects">Torna alla pagina progetti</Link>
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.date}</p>
      <p>
        <a href={project.vercelLink} target="_blank" rel="noopener noreferrer">
          Vercel Link
        </a>
      </p>
      <p>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Link
        </a>
      </p>

      <p>ID: {project.id}</p>
    </div>
  );
};

export default ProjectDetail;
