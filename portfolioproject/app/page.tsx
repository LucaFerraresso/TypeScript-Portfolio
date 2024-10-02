"use client";
import { motion } from "framer-motion";
import HeroSection from "@/src/components/HeroSection";
import TechSection from "@/src/components/TechSection";
import ProjectSection from "@/src/components/ProjectSection";

export default function Home() {
  // Definiamo l'animazione fade-in
  const fadeInVariants = {
    hidden: { opacity: 0 }, // Lo stato iniziale (invisibile)
    visible: {
      opacity: 1, // Lo stato visibile
      transition: { duration: 1.5, ease: "easeInOut" }, // Durata e easing
    },
  };

  return (
    <>
      <div className="mt-[400px] flex flex-col justify-center items-center border-2 h-[400px] w-[400px]">
        {/* Hero Section */}
        <motion.div
          className="border-2 p-4 flex justify-center items-center text-center "
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroSection />
        </motion.div>

        {/* Tech Section */}
        <motion.div
          className="border-2 p-4 flex justify-center items-center text-center"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          <TechSection />
        </motion.div>

        {/* Project Section */}
        <motion.div
          className="border-2  p-4 flex justify-center items-center text-center"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          <ProjectSection />
        </motion.div>
      </div>
    </>
  );
}
