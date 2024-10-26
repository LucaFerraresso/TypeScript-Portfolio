"use client";
import { motion } from "framer-motion";
import React from "react";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import { fadeInVariants } from "@/animation/animation";
import WordTextEffect from "@/src/components/library/WordTextEffect";
import AnimatedCard from "@/src/components/library/AnimatedCard";

const AboutMe: React.FC = () => {
  // Definisci i metadata specifici per la pagina
  const metadata: Metadata = {
    title: "AboutMe",
    description: "AboutMe",
    icons: {
      icon: "/svg/logoAbout.svg",
    },
  };

  return (
    <>
      <Header metadata={metadata} />
      <motion.div
        className="flex flex-col justify-center items-center"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl font-bold">About me</h1>
        <WordTextEffect text="I am a passionate developer with a strong focus on front-end development. I have experience in creating responsive and user-friendly web applications using modern technologies such as React, TypeScript, and Redux. I am constantly learning and staying up-to-date with the latest industry trends and best practices. I am also a team player and enjoy collaborating with others to achieve common goals." />
      </motion.div>
      <AnimatedCard />
    </>
  );
};

export default AboutMe;
