"use client";
import React, { useState, useEffect, memo } from "react";
import WordTextEffect from "../library/WordTextEffect";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Skeleton from "../atoms/Skeleton";
const HeroSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true); // Stato di caricamento
  const [isMobile, setIsMobile] = useState(false);
  const longText = Buffer.from(
    "Luca Ferraresso è un aspirante sviluppatore web con una solida formazione in sviluppo front-end, recentemente completata con un bootcamp intensivo. Luca padroneggia HTML, CSS, JavaScript, React e ha una conoscenza base di linguaggi back-end come Node.js e Python. Il suo percorso formativo gli ha permesso di sviluppare capacità di problem-solving, teamwork e di lavorare in modo indipendente su progetti web complessi. Luca è attualmente alla ricerca di un'opportunità come sviluppatore web per mettere in pratica le sue competenze e crescere professionalmente in un contesto stimolante."
  ).toString("utf-8");

  //facciamo un set interval si due secondi
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 672); // Imposta la larghezza a 768px come soglia per mobile
    };

    // Aggiungi l'event listener
    window.addEventListener("resize", handleResize);

    // Verifica la larghezza iniziale
    handleResize();

    // Rimuovi l'event listener al dismount del componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center ">
        <div className="flex flex-col items-center w-full max-w-2xl text-center ">
          {/* Testo e icone */}
          {/* se non e' mobile mostro lo scheleton, se e' mobile non lo mostro,aiutami */}
          {!isMobile ? (
            <>
              <div className="flex flex-col justify-center min-h-[398px] ">
                {isLoading ? (
                  <>
                    <div className="flex flex-col gap-6 text-base text-black mt-6  mb-6 ">
                      <Skeleton width="672px" height="24px" className="mb-4" />

                      <Skeleton width="672px" height="192px" className="mb-4" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col gap-6 text-base text-black mt-6  mb-6  ">
                      <WordTextEffect
                        text={"Luca Ferraresso , Junior Web Developer"}
                      />

                      <WordTextEffect text={longText.toString()} />
                    </div>
                  </>
                )}

                {/* Icone Social */}
                <div className="flex justify-center items-center space-x-6 mt-4  rounded-lg p-2">
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
                      <GithubIcon color="black" size={34} />
                      <a
                        href="https://github.com/LucaFerraresso"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:underline  hover:font-bold hover:text-blue-600"
                      >
                        GitHub
                      </a>
                      <LinkedinIcon color="blue" size={34} />
                      <a
                        href="https://www.linkedin.com/in/luca-ferraresso/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:underline  hover:font-bold hover:text-blue-600"
                      >
                        Linkedin
                      </a>
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center min-h-[398px] ">
                <>
                  <div className="flex flex-col gap-6 text-base text-black mt-6  mb-6  ">
                    <WordTextEffect
                      text={"Luca Ferraresso , Junior Web Developer"}
                    />

                    <WordTextEffect text={longText.toString()} />
                  </div>
                </>

                {/* Icone Social */}
                <div className="flex justify-center items-center space-x-6 mt-4  rounded-lg p-2">
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
                      <GithubIcon color="black" size={34} />
                      <a
                        href="https://github.com/LucaFerraresso"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:underline  hover:font-bold hover:text-blue-600"
                      >
                        GitHub
                      </a>
                      <LinkedinIcon color="blue" size={34} />
                      <a
                        href="https://www.linkedin.com/in/luca-ferraresso/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:underline  hover:font-bold hover:text-blue-600"
                      >
                        Linkedin
                      </a>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(HeroSection);
