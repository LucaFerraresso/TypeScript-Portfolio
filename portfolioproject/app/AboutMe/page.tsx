"use client";
import { motion } from "framer-motion";
import React from "react";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import { fadeInVariants } from "@/animation/animation";
import WordTextEffect from "@/src/components/library/WordTextEffect";
import Image from "next/image";

const AboutMe: React.FC = () => {
  const metadata: Metadata = {
    title: "AboutMe",
    description: "AboutMe",
    icons: {
      icon: "/svg/logoAbout.svg",
    },
  };
  const imageUrl = "/images/personal/Luca-Ferraresso.jpg";

  return (
    <>
      <Header metadata={metadata} />
      <motion.div
        className="flex flex-col text-center items-center bg-gray-50 min-h-screen pt-12 md:pt-24 lg:pt-28" // Padding top per tenere conto dell'altezza della navbar
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
          About Me
        </h1>
        <Image
          src={imageUrl}
          alt="Luca Ferraresso"
          width={150}
          height={150}
          className="cursor-pointer hover:animate-pulse rounded-full transition-shadow duration-300 ease-in-out hover:shadow-lg mb-6"
        />
        <WordTextEffect text="I am a passionate developer with a strong focus on front-end development. I have experience in creating responsive and user-friendly web applications using modern technologies such as React, TypeScript, and Redux. I am constantly learning and staying up-to-date with the latest industry trends and best practices. I am also a team player and enjoy collaborating with others to achieve common goals." />
      </motion.div>
    </>
  );
};

export default AboutMe;
