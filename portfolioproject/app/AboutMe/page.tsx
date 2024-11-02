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
import Button from "@/src/components/atoms/Button";

const AboutMe: React.FC = () => {
  const metadata: Metadata = {
    title: "AboutMe",
    description: "AboutMe",
    icons: {
      icon: "/svg/logoAbout.svg",
    },
  };
  const imageUrl = "/images/personal/Luca-Ferraresso.jpg";
  const longText = Buffer.from(
    "Luca Ferraresso è un aspirante sviluppatore web con una solida formazione in sviluppo front-end, recentemente completata con un bootcamp intensivo. Luca padroneggia HTML, CSS, JavaScript, React e ha una conoscenza base di linguaggi back-end come Node.js e Python. Il suo percorso formativo gli ha permesso di sviluppare capacità di problem-solving, teamwork e di lavorare in modo indipendente su progetti web complessi. Luca è attualmente alla ricerca di un'opportunità come sviluppatore web per mettere in pratica le sue competenze e crescere professionalmente in un contesto stimolante."
  ).toString("utf-8");

  return (
    <>
      <Header metadata={metadata} />

      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center items-center text-center p-8 -mt-8 md:p-12 md:-mt-12 lg:p-16 lg:-mt-16  bg-gray-50"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
          About Me
        </h1>
        <div className="flex flex-col  justify-center items-center text-center gap-6">
          <Image
            src={imageUrl}
            alt="Luca Ferraresso"
            width={90}
            height={90}
            className="cursor-pointer hover:animate-pulse rounded-3xl transition-shadow duration-300 ease-in-out hover:shadow-lg mb-6"
            style={{ width: "auto", height: "auto" }}
            priority={false}
          />
          <WordTextEffect text={longText.toString()} />
        </div>
        <hr className="w-full border-t border-gray-300 mt-8" />

        <div className="flex flex-col justify-center items-center p-2">
          <h2 className="text-3xl font-bold mt-6 mb-6">Link Utili</h2>
          <div className="flex items-center text-center gap-2 mb-6 p-6">
            <Link href={"/"}>
              <Button text="Home" icon={<HomeIcon color="black" size={34} />} />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
