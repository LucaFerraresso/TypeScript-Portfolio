"use client";
import React, { memo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  hoverEffectVariants,
  iconHoverVariants,
  textHoverVariants,
} from "@/animation/animation";
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
      <motion.div
        className={` flex flex-col items-center mb-4 border-2 p-4 cursor-pointer rounded-lg min-w-[100px] md:min-w-[120px] transition-transform duration-500 ease-in-out hover:shadow-lg`}
        initial="initial"
        whileHover="hover"
        variants={hoverEffectVariants}
        style={{ willChange: "transform, background-color, border-color" }}
        title={title}
        aria-label={title}
      >
        {isLoading ? (
          // Mostra uno Skeleton rotondo al posto dell'icona durante il caricamento
          <Skeleton width="48px" height="48px" className="rounded-full mb-2" />
        ) : (
          <motion.div className="text-4xl mb-2" variants={iconHoverVariants}>
            {icon}
          </motion.div>
        )}
        <motion.p
          className="text-sm text-center text-gray-800 font-medium"
          variants={textHoverVariants}
        >
          {title}
        </motion.p>
      </motion.div>
    </>
  );
};

export default memo(TechIcon);
