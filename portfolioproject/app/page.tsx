"use client";
import React, { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import SectionSeparator from "@/src/components/atoms/SectionSeparator";
import HeroSection from "@/src/components/sections/HeroSection";
import InfiniteTechSection from "@/src/components/sections/InfiniteTechSection";
import LinkSection from "@/src/components/sections/LinkSection";
import { fadeInVariants } from "@/animation/animation";
import { motion } from "framer-motion";

const metadata: Metadata = {
  title: "MyPortfolio",
  description: "Welcome to my portfolio",
  icons: {
    icon: "/svg/logo.svg",
  },
};

export default function Home() {
  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center pb-32 pt-32 p-6 sm:pb-28 sm:pt-28 sm:p-6 md:pb-24 mb:pt-24 md:p-6 lg:pb-20 lg:pt-20 lg:p-6 xl:pb-16 xl:pt-16 xl:p-6 2xl:pb-12 2xl:pt-12 2xl:p-6 bg-gray-50"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
    >
      <Header metadata={metadata} />

      <Suspense fallback={<div className="text-center mt-4">Loading...</div>}>
        <SectionSeparator />
        <HeroSection />
        <SectionSeparator />
        <InfiniteTechSection />
        <SectionSeparator />
        <LinkSection />
        <SectionSeparator />
      </Suspense>
    </motion.div>
  );
}
