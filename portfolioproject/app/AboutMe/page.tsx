"use client";
import { motion } from "framer-motion";
import React from "react";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import { fadeInVariants } from "@/animation/animation";
import WordTextEffect from "@/src/components/library/WordTextEffect";
import Image from "next/image";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

const AboutMe: React.FC = () => {
  const metadata: Metadata = {
    title: "AboutMe",
    description: "AboutMe",
    icons: {
      icon: "/svg/logoAbout.svg",
    },
  };
  const imageUrl = "/images/personal/Luca-Ferraresso.jpg";
  const descriptionLines = Buffer.from(
    "I am a passionate developer with a strong focus on front-end development. I have experience in creating responsive and user-friendly web applications using modern technologies such as React, TypeScript, and Redux. I am constantly learning and staying up-to-date with the latest industry trends and best practices. I am also a team player and enjoy collaborating with others to achieve common goals."
  ).toString("utf-8");

  return (
    <>
      <Header metadata={metadata} />

      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center items-center text-center  p-6 bg-gray-50"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
          About Me
        </h1>
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-center items-center text-center gap-6">
          <Image
            src={imageUrl}
            alt="Luca Ferraresso"
            width={90}
            height={90}
            className="cursor-pointer hover:animate-pulse rounded-3xl transition-shadow duration-300 ease-in-out hover:shadow-lg mb-6"
            style={{ width: "auto", height: "auto" }}
          />
          <WordTextEffect text={descriptionLines.toString()} />
        </div>

        <div className="flex flex-col justify-center items-center p-2">
          <h2 className="text-3xl font-bold mt-6 mb-6">Link Utili</h2>
          <div className="flex items-center text-center gap-2 mb-6 p-6">
            <HomeIcon color="black" size={24} />
            <Link
              href="/"
              className="text-black hover:underline  hover:font-bold hover:text-blue-600"
            >
              Home
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
