import projects from "@/assets/DataArray/ProjectSectionArray";
import AnimatedBackground from "./core/AnimatedBackground";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import WordTextEffect from "./WordTextEffect";
import { Loader } from "lucide-react";
import Button from "../atoms/Button";
import { title } from "process";
import { useEffect } from "react";

const AnimatedCard = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [generatedDescription, setGeneratedDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateDescription = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Crea una descrizione accattivante di 30 parole per "${title}".`,
        }),
      });

      if (!res.ok) throw new Error("Errore nella richiesta");
      const data = await res.json();
      setGeneratedDescription(data.output);
    } catch (error) {
      console.error("Error fetching description:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 rounded-lg border border-lg border-zinc-800">
      <AnimatedBackground
        className=" bg-zinc-100 dark:bg-zinc-800 rounded-lg"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.6,
        }}
        enableHover
      >
        {projects.map((item, index) => (
          <div key={index} data-id={`card-${index}`}>
            <div className="flex select-none flex-col space-y-1 p-4 items-start">
              <div className="flex p-2 text-base font-bold text-zinc-800 dark:text-zinc-400">
                <div className="flex flex-row justify-center items-center gap-4">
                  <h1>{item.title}</h1>
                  {item.icon}
                </div>
              </div>

              <Image
                src={item.imageUrl} // URL dell'immagine
                alt={item.title} // Testo alternativo
                width={300} // Larghezza desiderata
                height={200} // Altezza desiderata
                className="object-contain" // Classe per gestire l'aspetto dell'immagine
                priority={false}
              />
              <div className="flex flex-col text-base font-bold text-zinc-400">
                {" "}
                <p>ID: {item.id}</p>
                <p>Project period: {item.date}</p>
                <p>TechStack: {item.technologies.join(", ")}</p>
              </div>

              <Link
                href={`/Projects/${item.id}`}
                className=" text-blue-500  hover:underline"
              >
                <p className="dark:text-blue-300">View detail</p>
              </Link>
              <Link
                href="/Projects"
                className=" text-blue-500 hover:underline  "
              >
                <p className="dark:text-blue-300">Projects Page</p>
              </Link>

              <Link
                href={item.vercelLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-green-500  hover:underline"
              >
                <p className="dark:text-green-300">View Live on Vercel</p>
              </Link>
              <Link
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-blue-500 hover:underline "
              >
                <p className="dark:text-blue-300">View on GitHub</p>
              </Link>
            </div>
            <Button
              text="Genera Descrizione"
              color="var(--color-orange)"
              hoverColor="var(--color-orange-dark)"
              disabled={isGenerating}
              loading={isGenerating}
              onClick={handleGenerateDescription}
              icon={<Loader color={"red"} size={15} />}
            />

            {generatedDescription && (
              <div className="mt-2 text-gray-600 max-w-[300px]">
                <WordTextEffect text={generatedDescription} />
              </div>
            )}
          </div>
        ))}
      </AnimatedBackground>
    </div>
  );
};
export default AnimatedCard;
