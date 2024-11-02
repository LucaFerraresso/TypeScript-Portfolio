"use client";
import React, { memo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { hoverEffectVariants, iconHoverVariants } from "@/animation/animation";
import Skeleton from "./Skeleton"; // Importa il componente Skeleton

interface TechIconProps {
  icon: React.ReactElement;
  title: string;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Simula un ritardo di caricamento individuale per l'icona
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Imposta un timeout di 2 secondi per ogni icona
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        // Mostra uno Skeleton rotondo al posto dell'icona durante il caricamento
        <Skeleton width="120px" height="89px" className="rounded-full mb-2" />
      ) : (
        <motion.div
          className={`font-bold flex flex-col items-center mb-4 border-2 rounded-lg border-black p-4 cursor-pointer  min-w-[100px] md:min-w-[120px] transition-transform duration-500 ease-in-out hover:shadow-lg`}
          initial="initial"
          whileHover="hover"
          variants={hoverEffectVariants}
          style={{ willChange: "transform, background-color" }}
          title={title}
          aria-label={title}
        >
          <motion.div
            className="text-4xl mb-2 border-black"
            variants={iconHoverVariants}
          >
            {icon}
          </motion.div>

          {title}
        </motion.div>
      )}
    </>
  );
};

export default memo(TechIcon);
