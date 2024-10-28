"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SectionSeparator: React.FC = () => {
  const [animationState, setAnimationState] = useState("fadeIn");

  useEffect(() => {
    const animationCycle = () => {
      setAnimationState("fadeIn");
      setTimeout(() => setAnimationState("pause"), 3000); // 3 secondi di pausa dopo fade in
      setTimeout(() => setAnimationState("invert"), 6000); // Inversione dopo la pausa
      setTimeout(() => setAnimationState("fadeOut"), 9000); // Fade out dopo inversione
      setTimeout(animationCycle, 13000); // Ripeti il ciclo dopo 1 secondo
    };
    animationCycle(); // Avvia il ciclo
    return () => clearTimeout(13000);
  }, []);

  return (
    <div className="relative my-6">
      {/* Linea superiore animata */}
      <motion.div
        className={`h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mb-2 ${
          animationState === "invert" ? "animate-invert" : ""
        }`}
        initial={{ opacity: 0 }}
        animate={{
          opacity:
            animationState === "fadeIn"
              ? 1
              : animationState === "fadeOut"
              ? 0
              : 1,
          y: animationState === "invert" ? 10 : 0, // Scende quando si inverte
          transition: {
            duration:
              animationState === "fadeIn" || animationState === "fadeOut"
                ? 3
                : 3,
          },
        }}
      />

      {/* Linea inferiore animata */}
      <motion.div
        className={`h-0.5 bg-black opacity-20 mt-2 ${
          animationState === "invert" ? "animate-invert" : ""
        }`}
        initial={{ opacity: 0 }}
        animate={{
          opacity:
            animationState === "fadeIn"
              ? 1
              : animationState === "fadeOut"
              ? 0
              : 1,
          y: animationState === "invert" ? -10 : 0, // Sale quando si inverte
          transition: {
            duration:
              animationState === "fadeIn" || animationState === "fadeOut"
                ? 3
                : 3,
          },
        }}
      />

      {/* Linea ondulata */}
      <motion.svg
        className={`absolute top-0 left-0 right-0 h-1 ${
          animationState === "invert" ? "visible" : "hidden"
        }`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: animationState === "invert" ? 1 : 0,
          transition: { duration: 3 },
        }}
      >
        <path
          d="M0,10 Q20,-20 40,10 T100,10"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2" // Aumentato per renderlo più visibile
        />
      </motion.svg>
    </div>
  );
};

export default SectionSeparator;
