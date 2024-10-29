"use client";
import React, { useState, useEffect, memo } from "react";
import WordTextEffect from "../library/WordTextEffect";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Skeleton from "../atoms/Skeleton";
import SectionSeparator from "../atoms/SectionSeparator";
const HeroSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true); // Stato di caricamento

  //facciamo un set interval si due secondi
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center ">
        <div className="flex flex-col items-center w-full max-w-2xl text-center ">
          {/* Testo e icone */}
          <div className="flex flex-col justify-center min-h-[398px] ">
            {isLoading ? (
              <>
                <Skeleton width="672px" height="24px" className="mb-2" />
                <Skeleton width="672px" height="192px" className="mb-4" />
              </>
            ) : (
              <>
                <div className="flex flex-col gap-6 text-base text-gray-600 mt-6  mb-6 ">
                  <WordTextEffect
                    text={"Luca Ferraresso , Junior Web Developer"}
                  />

                  <WordTextEffect
                    text={
                      "Luca Ferraresso è un aspirante sviluppatore web con una solida formazione in sviluppo front-end, recentemente completata con un bootcamp intensivo. Luca padroneggia HTML, CSS, JavaScript, React e ha una conoscenza base di linguaggi back-end come Node.js e Python. Il suo percorso formativo gli ha permesso di sviluppare capacità di problem-solving, teamwork e di lavorare in modo indipendente su progetti web complessi. Luca è attualmente alla ricerca di un'opportunità come sviluppatore web per mettere in pratica le sue competenze e crescere professionalmente in un contesto stimolante."
                    }
                  />
                </div>
              </>
            )}

            {/* Icone Social */}
            <div className="flex justify-center items-center space-x-6 mt-4 border rounded-lg p-2">
              {isLoading ? (
                <>
                  <Skeleton
                    width="40px"
                    height="40px"
                    className="rounded-full"
                  />
                  <Skeleton
                    width="40px"
                    height="40px"
                    className="rounded-full"
                  />
                </>
              ) : (
                <>
                  <GithubIcon color="black" size={24} />
                  <a
                    href="https://github.com/LucaFerraresso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:underline"
                  >
                    GitHub
                  </a>
                  <LinkedinIcon color="blue" size={24} />
                  <a
                    href="https://www.linkedin.com/in/luca-ferraresso/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:underline"
                  >
                    Linkedin
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(HeroSection);
