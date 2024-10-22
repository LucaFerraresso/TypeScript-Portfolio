"use client";
import React, { useState, useEffect, memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { fadeInVariants } from "@/animation/animation";
import Skeleton from "./Skeleton";
import SocialIcon from "./SocialIcon";

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
        "genera una descrizione professionale di un ragazzo che ha appena finito un bootcamp intensivo frontend e backend, con tutte le tecnologie annesse. utilizza 80 parole e cerca di essere preciso e ordinato. pero' fai molta attenzione al modo in cui ti esprimi. voglio una descrizione pacata e umile. il ragazzo si chiama Luca Ferraresso.";

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
      <motion.section
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto p-8"
        aria-labelledby="hero-heading"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Sezione Immagine */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center items-center"
          >
            {isLoading ? (
              <Skeleton width="250px" height="250px" />
            ) : (
              <Image
                src={imageUrl}
                alt="Luca Ferraresso"
                height={250}
                width={250}
                className="cursor-pointer hover:animate-pulse rounded-3xl transition-shadow duration-300 ease-in-out hover:shadow-lg"
                loading="lazy"
              />
            )}
          </motion.div>

          {/* Contenuto Testuale */}
          <div className="flex flex-col justify-center items-center text-center md:text-left">
            {isLoading ? (
              <Skeleton width="100%" height="20px" className="mb-2" />
            ) : (
              <h2
                id="hero-heading"
                className="text-3xl font-bold text-gray-800 mb-2"
              >
                Luca Ferraresso
              </h2>
            )}
            {isLoading ? (
              <Skeleton width="100%" height="30px" className="mb-4" />
            ) : (
              <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
                Web Developer
              </h1>
            )}
            {isLoading ? (
              <Skeleton width="100%" height="60px" className="mb-6" />
            ) : (
              <p className="text-base text-gray-600 mb-6">
                {/* Descrizione dinamica */}
                {description}
              </p>
            )}

            {/* Icone per LinkedIn e GitHub */}
            {!isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex space-x-4"
              >
                <SocialIcon
                  href="https://www.linkedin.com/in/luca-ferraresso/"
                  label="LinkedIn"
                  icon={<FaLinkedin size={30} className="text-blue-600" />}
                />
                <SocialIcon
                  href="https://github.com/LucaFerraresso/"
                  label="GitHub"
                  icon={<FaGithub size={30} className="text-gray-800" />}
                />
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default memo(HeroSection);
