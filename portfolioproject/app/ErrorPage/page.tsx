"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import Button from "@/src/components/atoms/Button";
import { HomeIcon } from "lucide-react";
import { fadeInVariants } from "@/animation/animation";

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
        className="flex flex-col justify-center items-center text-center pb-32 pt-32 p-6 sm:pb-28 sm:pt-28 sm:p-6 md:pb-24 mb:pt-24 md:p-6 lg:pb-20 lg:pt-20 lg:p-6 xl:pb-16 xl:pt-16 xl:p-6 2xl:pb-12 2xl:pt-12 2xl:p-6 bg-gray-50"
      >
        <h1 className="text-8xl font-extrabold text-red-600 mb-6">Oops!</h1>
        <h2 className="text-4xl font-bold text-red-600 mb-4 ">
          Something Went Wrong
        </h2>
        <p className="text-lg text-red-600 mb-8">
          The page you are looking for might be missing or there was an error on
          our side.
        </p>
        <div>
          <Link href="/">
            <Button
              text=""
              color="var(--color-orange)"
              hoverColor="var(--color-hover-orange)"
              disabled={false}
              loading={false}
              icon={<HomeIcon color={"black"} size={24} />}
            />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default ErrorPage;
