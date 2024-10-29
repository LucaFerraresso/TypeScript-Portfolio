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

  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-center text-center pb-32 pt-32 p-6 sm:pb-28 sm:pt-28 sm:p-6 md:pb-24 mb:pt-24 md:p-6 lg:pb-20 lg:pt-20 lg:p-6 xl:pb-16 xl:pt-16 xl:p-6 2xl:pb-12 2xl:pt-12 2xl:p-6 bg-gray-50"
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
          {project.description}
        </p>
        <p className="text-gray-500 text-sm md:text-base">
          Data: {project.date}
        </p>

        <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Tecnologie Utilizzate:</h2>
          <div className="flex flex-wrap gap-2 items-center justify-center">
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

        <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4">
          <h2 className="text-xl font-semibold">Link Utili:</h2>
          <div className="flex items-center gap-2">
            <TriangleIcon color="black" size={20} />
            <a
              href={project.vercelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Vercel Link
            </a>
          </div>
          <div className="flex items-center gap-2">
            <GithubIcon color="black" size={20} />
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Link
            </a>
          </div>
          <div className="flex items-center gap-2">
            <HomeIcon color="black" size={20} />
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <TerminalIcon color="black" size={20} />
            <Link href="/Projects" className="text-blue-600 hover:underline">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
