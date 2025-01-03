"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import { HomeIcon } from "lucide-react";
import { fadeInVariants } from "@/animation/animation";
import Button from "@/src/components/atoms/Button";

const ErrorPage: React.FC = () => {
  // Definisci i metadata specifici per la pagina
  const metadata: Metadata = {
    title: "ErrorPage",
    description: "ErrorPage",
    icons: {
      icon: "/svg/logoErrors.svg",
    },
  };
  return (
    <>
      <Header metadata={metadata} />
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center items-center text-center p-4 bg-gray-50"
      >
        <h1 className="text-8xl font-extrabold text-red-600 mb-6">Oops!</h1>
        <h2 className="text-4xl font-bold text-red-600 mb-4 ">
          Something Went Wrong
        </h2>
        <p className="text-lg text-red-600 mb-8">
          The page you are looking for might be missing or there was an error on
          our side.
        </p>
        <hr className="w-full border-t border-gray-300" />
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

export default ErrorPage;
