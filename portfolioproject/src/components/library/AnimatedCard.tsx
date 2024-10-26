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
            <div className="flex select-none flex-col space-y-1 p-4 items-center justify-between">
              <div className="text-base font-medium text-zinc-800 dark:text-zinc-50">
                <div className="flex flex-row justify-center items-center gap-4">
                  {item.title}
                  {item.icon}
                </div>
              </div>

              <Image
                src={item.imageUrl}
                alt={`${item.title} Project Image`}
                width={200}
                height={200}
                loading="lazy"
                priority={false}
              />

              <div className="text-base text-zinc-500">
                <div className=" dark:text-zinc-300">
                  Project period: {item.date}
                </div>
              </div>
              <div className="text-sm text-zinc-500">
                <div className=" dark:text-zinc-300">
                  TechStack: {item.technologies.join(", ")}
                </div>
              </div>

              <Link href="/Projects" className="text-sm text-blue-500  ">
                <div className="dark:text-blue-300">View More</div>
              </Link>

              <Link
                href={item.vercelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-500  "
              >
                <div className="dark:text-green-300">View Live on Vercel</div>
              </Link>
              <Link
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500  "
              >
                <div className="dark:text-blue-300">View on GitHub</div>
              </Link>
            </div>
          </div>
        ))}
      </AnimatedBackground>
    </div>
  );
};
export default AnimatedCard;
