// app/projects/[id]/page.tsx
"use client";
import React from "react";
import { useParams } from "next/navigation";
import projects from "@/assets/DataArray/ProjectSectionArray"; // Importa il tuo array di progetti
import Link from "next/link";
import Image from "next/image";

type Params = {
  id: number; // Definisci il tipo per l'ID
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<Params | any>(); // Ottieni l'ID del progetto dai parametri della rotta
  console.log(id);

  // Trova il progetto corrispondente all'ID
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <div>Progetto non trovato!</div>; // Gestisci il caso in cui il progetto non esista
  }

  return (
    <>
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
        <p>{project.vercelLink}</p>
        <p>{project.githubLink}</p>

        <p>ID: {project.id}</p>
      </div>
    </>
  );
};

export default ProjectDetail;
