"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import Button from "@/src/components/atoms/Button";
import { HomeIcon } from "lucide-react";

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
      <div className="flex flex-col justify-center items-center text-center p-20">
        <motion.h1
          className="text-8xl font-extrabold text-red-600 mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Oops!
        </motion.h1>
        <motion.h2
          className="text-4xl font-bold text-red-600 mb-4 "
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Something Went Wrong
        </motion.h2>
        <motion.p
          className="text-lg text-red-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          The page you are looking for might be missing or there was an error on
          our side.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link href={"/"}>
            <Button
              text="Home"
              icon={<HomeIcon color="black" size={34} />}
              color="var(--color-orange)"
              hoverColor="var(--color-hover-orange)"
            />
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default ErrorPage;
