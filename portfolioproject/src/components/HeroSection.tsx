"use client";
import React, { useState, useEffect, memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { fadeInVariants } from "@/animation/animation";
import SectionSeparator from "./SectionSeparator";
import Skeleton from "./Skeleton";
// Componente per le icone social
const SocialIcon: React.FC<{
  href: string;
  label: string;
  icon: React.ReactNode;
}> = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="cursor-pointer mx-2 transition-transform duration-300 ease-in-out transform hover:scale-110"
  >
    {icon}
  </a>
);

const imageUrl = "/images/myFoto.jpg";

const HeroSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simula un ritardo di 3 secondi nel caricamento
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Imposta il timeout a 3 secondi
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SectionSeparator />
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
                Hi, I am Luca Ferraresso. I am a passionate front-end developer
                based near Venice. My expertise is focused on React and
                JavaScript, aiming to create responsive and engaging web
                experiences. I love tackling complex challenges to transform
                them into intuitive and user-friendly solutions.
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
