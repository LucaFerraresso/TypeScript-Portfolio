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
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center items-center text-center pb-32 pt-32 p-6 sm:pb-28 sm:pt-28 sm:p-6 md:pb-24 mb:pt-24 md:p-6 lg:pb-20 lg:pt-20 lg:p-6 xl:pb-16 xl:pt-16 xl:p-6 2xl:pb-12 2xl:pt-12 2xl:p-6 bg-gray-50"
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
          style={{ width: "auto", height: "auto" }}
        />
        <WordTextEffect text="I am a passionate developer with a strong focus on front-end development. I have experience in creating responsive and user-friendly web applications using modern technologies such as React, TypeScript, and Redux. I am constantly learning and staying up-to-date with the latest industry trends and best practices. I am also a team player and enjoy collaborating with others to achieve common goals." />
      </motion.div>
    </>
  );
};

export default AboutMe;
