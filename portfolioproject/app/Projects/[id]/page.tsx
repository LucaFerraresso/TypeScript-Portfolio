"use client";
import React from "react";
import { useParams } from "next/navigation";
import projects from "@/assets/DataArray/ProjectSectionArray";
import Link from "next/link";
import Image from "next/image";
import icons from "@/assets/DataArray/TechSectionArray";

const ProjectDetail: React.FC = () => {
  const params = useParams() as { id?: string };
  const projectId = params.id ? Number(params.id) : null;

  const project =
    projectId !== null ? projects.find((proj) => proj.id === projectId) : null;

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <Link
          href={`/Projects`}
          className="bg-red-500 text-white hover:underline p-2 rounded shadow"
        >
          Progetto inesistente, torna ai progetti
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-3xl mx-auto flex flex-col items-center">
      <Image
        src={project.imageUrl}
        alt={`${project.title} Project Image`}
        width={400}
        height={400}
        loading="lazy"
        priority={false}
        className="rounded-lg shadow-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{project.title}</h1>
      <p className="text-gray-700 mt-2">{project.description}</p>

      <div className="mt-4 mb-4 border border-gray-300 rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Tecnologie Utilizzate:</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies?.map((tech) => {
            const techIcon = icons.find((icon) => icon.title === tech);
            return (
              techIcon && (
                <div
                  key={tech}
                  className="flex items-center bg-gray-200 rounded px-2 py-1"
                >
                  {techIcon.component}
                  <span className="ml-1 font-medium">{tech}</span>
                </div>
              )
            );
          })}
        </div>
      </div>

      <p className="text-gray-500">Data: {project.date}</p>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Link Utili:</h2>
        <p>
          <a
            href={project.vercelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Vercel Link
          </a>
        </p>
        <p>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub Link
          </a>
        </p>
      </div>

      <div className="mt-4 flex space-x-4">
        <Link href="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link href="/Projects" className="text-blue-600 hover:underline">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
