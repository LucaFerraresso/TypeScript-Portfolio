"use client";
import { motion } from "framer-motion";
import React from "react";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import { fadeInVariants } from "@/animation/animation";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import Button from "@/src/components/atoms/Button";

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
        className="flex flex-col justify-center items-center text-center p-6 bg-gray-50"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contacts</h1>
          <p className="mt-2 text-lg">Phone: 000000000000</p>
          <p className="mt-2 text-lg">Email: info@example.com</p>
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

export default Contacts;
