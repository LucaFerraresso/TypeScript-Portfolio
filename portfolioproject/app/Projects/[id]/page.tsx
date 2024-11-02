"use client";
import { useParams } from "next/navigation";
import projects from "@/assets/DataArray/ProjectSectionArray";
import Link from "next/link";
import Image from "next/image";
import icons from "@/assets/DataArray/TechSectionArray";
import { GithubIcon, HomeIcon, TerminalIcon, TriangleIcon } from "lucide-react";
import { fadeInVariants } from "@/animation/animation";
import { motion } from "framer-motion";

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
  //voglio suffidivere la descrizione con un buffer, aiutami
  const descriptionLines = Buffer.from(project.description).toString("utf-8");

  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-center text-center p-4 bg-gray-50"
    >
      <div className="p-4 flex flex-col items-center text-center justify-center gap-6">
        <Image
          src={project.imageUrl}
          alt={`${project.title} Project Image`}
          width={400}
          height={400}
          loading="lazy"
          priority={false}
          className="rounded-lg shadow-lg mb-4 max-w-full h-auto"
          style={{ width: "auto", height: "auto" }}
        />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          {project.title}
        </h1>
        <p className="text-gray-700 text-base md:text-lg">
          {descriptionLines.toString()}
        </p>
        <p className="text-gray-500 text-sm md:text-base">
          Data: {project.date}
        </p>

        <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Tecnologie Utilizzate:</h2>
          {project.technologies?.length > 1 ? (
            <div className="flex flex-wrap gap-2 items-center justify-center">
              {project.technologies.map((tech) => {
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
          ) : (
            <p className="text-red-500">Nessuna tecnologia specificata.</p>
          )}
        </div>
      </div>
      <div className=" mt-6 mb-6 flex flex-col  gap-4">
        <div>
          <h2 className="text-3xl font-semibold">Link Utili</h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center  text-center p-2 gap-4">
          <div className="flex items-center gap-4 ">
            <TriangleIcon color="black" size={24} />
            <a
              href={project.vercelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline  hover:font-bold hover:text-blue-600"
            >
              Vercel Link
            </a>
          </div>
          <div className="flex items-center gap-4">
            <GithubIcon color="black" size={24} />
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline  hover:font-bold hover:text-blue-600"
            >
              GitHub Link
            </a>
          </div>

          <div className="flex items-center gap-4">
            <TerminalIcon color="black" size={24} />
            <Link
              href="/Projects"
              className="text-black hover:underline  hover:font-bold hover:text-blue-600"
            >
              Projects
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <HomeIcon color="black" size={24} />
            <Link
              href="/"
              className="text-black hover:underline  hover:font-bold hover:text-blue-600"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
