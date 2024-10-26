import projects from "@/assets/DataArray/ProjectSectionArray";
import AnimatedBackground from "./core/AnimatedBackground";
import Link from "next/link";
import Image from "next/image";

const AnimatedCard = () => {
  return (
    <div className="grid grid-cols-1 p-10 sm:grid-cols-2 md:grid-cols-3">
      <AnimatedBackground
        className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.6,
        }}
        enableHover
      >
        {projects.map((item, index) => (
          <div key={index} data-id={`card-${index}`}>
            <div className="flex select-none flex-col space-y-1 p-4">
              <h3 className="text-base font-medium text-zinc-800 dark:text-zinc-50">
                {item.title}
              </h3>
              <Image
                src={item.imageUrl}
                alt={`${item.title} Project Image`}
                width={400}
                height={400}
                loading="lazy"
                priority={false} // Cambia a true se l'immagine è importante
              />

              <Link
                href={item.vercelLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-sm text-red-500 dark:text-zinc-400">
                  View Live on Vercel
                </p>
              </Link>
              <Link
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-sm text-blue-500 dark:text-zinc-400">
                  View on GitHub
                </p>
              </Link>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Project period: {item.date}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                TechStack: {item.technologies.join(", ")}
              </p>
              <Link href="/Projects">
                <p className="text-sm text-blue-500 dark:text-zinc-400">
                  View More
                </p>
              </Link>
            </div>
          </div>
        ))}
      </AnimatedBackground>
    </div>
  );
};
export default AnimatedCard;
