import projects from "@/assets/DataArray/ProjectSectionArray";
import AnimatedBackground from "./core/AnimatedBackground";
import Link from "next/link";
import Image from "next/image";

const AnimatedCard = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 rounded-lg border border-lg border-zinc-800">
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
          </div>
        ))}
      </AnimatedBackground>
    </div>
  );
};
export default AnimatedCard;
