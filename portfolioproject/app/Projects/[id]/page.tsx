"use client";
import { useParams } from "next/navigation";
import projects from "@/assets/DataArray/ProjectSectionArray";
import Link from "next/link";
import Image from "next/image";
import icons from "@/assets/DataArray/TechSectionArray";
import { GithubIcon, HomeIcon, TerminalIcon, TriangleIcon } from "lucide-react";
import { fadeInVariants } from "@/animation/animation";
import { motion } from "framer-motion";
import Button from "@/src/components/atoms/Button";

const ProjectDetail: React.FC = () => {
  const params = useParams() as { id?: string };
  const projectId = params.id ? Number(params.id) : null;

  const project =
    projectId !== null ? projects.find((proj) => proj.id === projectId) : null;

  if (!project) {
    return (
      <>
        <div className="flex flex-col justify-center items-center text-center p-20">
          <motion.h1
            className="text-8xl font-extrabold text-red-600 mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Oops!
          </motion.h1>
          <motion.h2
            className="text-4xl font-bold text-red-600 mb-4 "
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Something Went Wrong
          </motion.h2>
          <motion.p
            className="text-lg text-red-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            The project you are looking for might be missing or there was an
            error on our side.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link href={"/Projects"}>
              <Button
                text="Projects"
                icon={<TerminalIcon color="black" size={34} />}
                color="var(--color-orange)"
                hoverColor="var(--color-hover-orange)"
              />
            </Link>
            <Link href={"/"}>
              <Button
                text="Home"
                icon={<HomeIcon color="black" size={34} />}
                color="var(--color-orange)"
                hoverColor="var(--color-hover-orange)"
              />
            </Link>
          </motion.div>
        </div>
      </>
    );
  }
  //voglio suffidivere la descrizione con un buffer, aiutami
  const descriptionLines = Buffer.from(project.description).toString("utf-8");

  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-center text-center  bg-gray-50 sm:p-6 sm:-mt-6 md:p-12 md:-mt-12"
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
      <hr className="w-full border-t border-gray-300" />
      <div className=" mt-6 mb-6 flex flex-col  gap-4">
        <div>
          <h2 className="text-3xl font-semibold">Link Utili</h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-center   text-center p-2 gap-4">
          <Button
            link={project.vercelLink}
            text="Vercel"
            color={"var(--color-emerald)"} // Uniformato al bottone "GitHub" nei primi bottoni
            hoverColor={"var(--color-hover-emerald)"} // Intensifica l’effetto hover come nei primi bottoni
            icon={<TriangleIcon color={"white"} size={34} />}
          />

          <Button
            text="GitHub"
            icon={<GithubIcon color="white" size={34} />}
            link={project.githubLink}
            color={"var(--color-hover)"} // Uniformato al bottone "GitHub" nei primi bottoni
            hoverColor={"var(--color-foreground)"}
          />
          <Link href={"/Projects"}>
            <Button
              text="Progetti"
              icon={<TerminalIcon color="black" size={34} />}
            />
          </Link>
          <Link href={"/"}>
            <Button text="Home" icon={<HomeIcon color="black" size={34} />} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
