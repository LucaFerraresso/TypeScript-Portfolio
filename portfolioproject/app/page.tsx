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
    <>
      <motion.div
        className="p-6 md:p-12 lg:p-32 xl:p-48 bg-gray-50 min-h-screen pt-12 md:pt-24 lg:pt-28"
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
    </>
  );
}
