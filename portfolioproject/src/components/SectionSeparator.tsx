"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInVariantsSeparator } from "@/animation/animation";

const SectionSeparator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative my-8">
      {/* Linea superiore animata */}
      <motion.div
        className={`h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mb-2 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        variants={fadeInVariantsSeparator}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      />

      {/* Linea inferiore animata */}
      <motion.div
        className={`h-0.5 bg-black opacity-20 mt-2 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        variants={fadeInVariantsSeparator}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default SectionSeparator;
