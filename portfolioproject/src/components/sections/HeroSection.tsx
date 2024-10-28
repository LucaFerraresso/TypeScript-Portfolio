"use client";
import React, { useState, useEffect, memo } from "react";

import WordTextEffect from "../library/WordTextEffect";
import { Github, Linkedin } from "lucide-react";

const HeroSection: React.FC = () => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchDescription = async () => {
      const prompt =
        "Scrivi una descrizione concisa per un ragazzo di nome Luca Ferraresso, che ha recentemente completato un bootcamp intensivo in sviluppo front-end, con basi di back-end. Utilizza 80 parole per delineare le sue competenze tecniche, le tecnologie utilizzate e il suo obiettivo di trovare una posizione come sviluppatore web. La descrizione deve essere chiara e professionale, senza toni emotivi o esagerati.";

      try {
        // Creare un buffer dal prompt
        const promptBuffer = Buffer.from(prompt, "utf-8");

        const res = await fetch("/api/gemini", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: promptBuffer.toString("utf-8") }),
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
      <div className="relative grid grid-cols-1 items-center -mt-20 -mb-20 p-20">
        <>
          <div className="grid grid-cols-1 p-4 justify-center items-center gap-8">
            {" "}
            <WordTextEffect text="Luca Ferraresso, Junior Web developer" />
          </div>
        </>

        {/* Contenuto Testuale */}
        <div className="flex flex-col justify-center items-center text-center md:text-left">
          <p className="text-base text-gray-600 mb-6">
            {/* Descrizione dinamica */}
            <WordTextEffect text={description} />
            {/* Icone Social */}
            <div className="flex justify-center items-center space-x-4 mt-4">
              <Github
                size={20}
                href="https://github.com/LucaFerraresso"
                color="black"
              />

              <Linkedin
                size={20}
                href="https://www.linkedin.com/in/luca-ferraresso/"
                color="blue"
              />
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default memo(HeroSection);
