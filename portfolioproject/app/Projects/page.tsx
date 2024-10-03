"use client";
import { motion } from "framer-motion";
import React from "react";

const Projects = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="container mx-auto py-20"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-3xl font-bold">Projects</h1>
    </motion.div>
  );
};

export default Projects;
