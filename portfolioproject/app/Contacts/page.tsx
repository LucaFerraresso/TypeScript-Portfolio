"use client";
import { motion } from "framer-motion";
import React from "react";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import { fadeInVariants } from "@/animation/animation";

const Contacts: React.FC = () => {
  // Definisci i metadata specifici per la pagina
  const metadata: Metadata = {
    title: "Contacts",
    description: "Contacts",
    icons: {
      icon: "/svg/logoContacts.svg",
    },
  };

  return (
    <>
      <Header metadata={metadata} />
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col text-center items-center bg-gray-50 min-h-screen pt-12 md:pt-24 lg:pt-28" // Padding top per tenere conto dell'altezza della navbar
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contacts</h1>
        <p className="mt-2 text-lg">Phone: 000000000000</p>
        <p className="mt-2 text-lg">Email: info@example.com</p>
      </motion.div>
    </>
  );
};

export default Contacts;
