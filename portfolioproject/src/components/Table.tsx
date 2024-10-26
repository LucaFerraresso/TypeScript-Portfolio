"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import projects from "@/assets/DataArray/ProjectSectionArray";
import Image from "next/image";

type Heading = {
  id: string;
  text: string;
  level: number;
  link: string;
};

const Table = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const updateHeadings = () => {
      const elements = Array.from(document.querySelectorAll("[data-heading]"));
      const newHeadings = elements
        .map((elem) => {
          const level = parseInt(elem.getAttribute("data-heading") || "2", 10);
          if (level === 1) return null;

          return {
            id: `${elem.id}-${level}`,
            link: elem.id,
            text: elem.textContent ?? "",
            level,
          };
        })
        .filter((heading): heading is Heading => heading !== null);
      setHeadings(newHeadings);
    };

    updateHeadings();
    const observer = new MutationObserver(updateHeadings);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [pathname]);

  if (headings.length === 0) return null;

  return (
    <>
      <div className="fixed t-0">
        <p className="mb-2 text-sm/6 font-[450] text-black dark:text-white">
          On this page
        </p>
        <ul
          className="list-none space-y-2 text-sm/6 text-zinc-700 dark:text-zinc-400"
          role="list"
          key={pathname}
        >
          {headings.map((heading) => (
            <li
              key={`${heading.id}-${heading.level}-${pathname}`}
              className={cn(
                "transition-all duration-200",
                heading.level === 2 && "pl-0",
                heading.level === 3 && "pl-2",
                heading.level === 4 && "pl-4"
              )}
            >
              <a
                href={`#${heading.link}`}
                className={cn("hover:text-zinc-950 dark:hover:text-white")}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Renderizzazione della tabella dei progetti */}
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full bg-white border border-gray-300 mx-auto text-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b">Immagine</th>
                <th className="py-3 px-4 border-b">Titolo</th>
                <th className="py-3 px-4 border-b">Data</th>
                <th className="py-3 px-4 border-b">Tecnologie</th>
                <th className="py-3 px-4 border-b">Descrizione</th>
                <th className="py-3 px-4 border-b">Azione</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">
                    <Image
                      src={
                        project.imageUrl || "/images/homepage/coming-soon.jpg"
                      }
                      alt={project.title}
                      height={250}
                      width={250}
                      className="cursor-pointer hover:animate-pulse rounded-3xl transition-shadow duration-300 ease-in-out hover:shadow-lg"
                      loading="lazy"
                    />
                  </td>
                  <td className="py-3 px-4 border-b">{project.title}</td>
                  <td className="py-3 px-4 border-b">
                    {project.date || "TBD"}
                  </td>
                  <td className="py-3 px-4 border-b">
                    {project.technologies.join(", ")}
                  </td>
                  <td className="py-3 px-4 border-b">{project.description}</td>
                  <td className="py-3 px-4 border-b">
                    <a
                      href={project.vercelLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      Vedi su Vercel
                    </a>
                    <br />
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      Vedi su GitHub
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
