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
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col p-14 sm:p-14 md:p-14 lg:p-14"
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
