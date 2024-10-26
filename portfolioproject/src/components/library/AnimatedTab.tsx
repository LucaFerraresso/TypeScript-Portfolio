import Link from "next/link";
import AnimatedBackground from "./core/AnimatedBackground";
import projects from "@/assets/DataArray/ProjectSectionArray";
import Image from "next/image";

export function AnimatedTabs() {
  return (
    <div className="relative ">
      <div className="flex w-full space-x-2 rounded-xl border border-zinc-950/10 bg-white p-2 justify-around">
        <AnimatedBackground
          defaultValue={projects[0].title}
          className="rounded-lg bg-zinc-100"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
        >
          {projects.map((tab) => (
            <>
              <button
                key={tab.title}
                data-id={tab.date}
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950"
              >
                {tab.icon}
              </button>
              <Image
                src={tab.imageUrl} // URL dell'immagine
                alt={tab.title} // Testo alternativo
                width={500} // Larghezza desiderata
                height={300} // Altezza desiderata
                className="object-contain" // Classe per gestire l'aspetto dell'immagine
              />
              <div className="h-9 w-px bg-zinc-200" />
              <Link
                href={tab.githubLink}
                className="inline-flex h-9 w-9 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950"
              >
                a
              </Link>
              <Link
                href={tab.vercelLink}
                className="inline-flex h-9 w-9 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950"
              >
                b
              </Link>
            </>
          ))}
        </AnimatedBackground>
      </div>
    </div>
  );
}
