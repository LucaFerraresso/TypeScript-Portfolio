"use client";
import { motion } from "framer-motion";
import React from "react";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import { fadeInVariants } from "@/animation/animation";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

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
        className="flex flex-col justify-center items-center text-center pb-32 pt-32 p-6 sm:pb-28 sm:pt-28 sm:p-6 md:pb-24 mb:pt-24 md:p-6 lg:pb-20 lg:pt-20 lg:p-6 xl:pb-16 xl:pt-16 xl:p-6 2xl:pb-12 2xl:pt-12 2xl:p-6 bg-gray-50"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contacts</h1>
          <p className="mt-2 text-lg">Phone: 000000000000</p>
          <p className="mt-2 text-lg">Email: info@example.com</p>
        </div>

        <div className="flex items-center text-center gap-2 mb-6">
          <HomeIcon color="black" size={24} />
          <Link
            href="/"
            className="text-black hover:underline  hover:font-bold hover:text-blue-600"
          >
            Home
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Contacts;
