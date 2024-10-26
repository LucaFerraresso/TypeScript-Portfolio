"use client";
import React, { useState, useEffect, memo } from "react";
import Image from "next/image";
import Skeleton from "../atoms/Skeleton";
import SocialIcon from "../atoms/SocialIcon";
import WordTextEffect from "../library/WordTextEffect";
import { Github, Linkedin } from "lucide-react";

const imageUrl = "/images/personal/Luca-Ferraresso.jpg";

const HeroSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [description, setDescription] = useState("");

  // Simula un ritardo di 3 secondi nel caricamento
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Imposta il timeout a 3 secondi
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchDescription = async () => {
      const prompt =
        "Scrivi una descrizione concisa per un ragazzo di nome Luca Ferraresso, che ha recentemente completato un bootcamp intensivo in sviluppo front-end, con basi di back-end. Utilizza 80 parole per delineare le sue competenze tecniche, le tecnologie utilizzate e il suo obiettivo di trovare una posizione come sviluppatore web. La descrizione deve essere chiara e professionale, senza toni emotivi o esagerati.";
      try {
        const res = await fetch("/api/gemini", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        });

        if (!res.ok) {
          throw new Error("Errore nella richiesta");
        }

        const data = await res.json();

        setDescription(data.output);

        console.log(data.output);
      } catch (error) {
        console.error("Error:", error);
        setDescription("There was an error with the API.");
      }
    };
    fetchDescription();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center -mt-40 -mb-40 p-40">
        {isLoading ? (
          <>
            <Skeleton width="250px" height="250px" />
          </>
        ) : (
          <Image
            src={imageUrl}
            alt="Luca Ferraresso"
            height={250}
            width={250}
            className="cursor-pointer hover:animate-pulse rounded-3xl transition-shadow duration-300 ease-in-out hover:shadow-lg"
            loading="lazy"
            priority={false} // Cambia a true se l'immagine è importante
          />
        )}

        {/* Contenuto Testuale */}
        <div className="flex flex-col justify-center items-center text-center md:text-left">
          {isLoading ? (
            <>
              <Skeleton width="100%" height="30px" className="mb-4" />
              <Skeleton width="100%" height="30px" className="mb-4" />
              <Skeleton width="100%" height="60px" className="mb-6" />

              <Skeleton width="30%" height="30px" className="mb-6" />
              <Skeleton width="30%" height="30px" className="mb-6" />
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {/* Descrizione dinamica */}
                <WordTextEffect text="Luca Ferraresso" />
              </h2>
              <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
                {/* Descrizione dinamica */}
                <WordTextEffect text=" Web Developer" />
              </h1>
              <p className="text-base text-gray-600 mb-6">
                {/* Descrizione dinamica */}
                <WordTextEffect text={description} />
              </p>
              <div className="flex flex-row justify-center items-center p-4">
                <SocialIcon
                  href="https://www.linkedin.com/in/luca-ferraresso/"
                  label="LinkedIn"
                  icon={<Linkedin size={30} color="blue" />}
                />
                <SocialIcon
                  href="https://github.com/LucaFerraresso/"
                  label="GitHub"
                  icon={<Github size={30} color="gray" />}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(HeroSection);
