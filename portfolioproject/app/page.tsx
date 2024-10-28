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
        className="p-4  md:p-20 lg:p-32 xl:p-48 -mt-4 -mb-4 md:-mt-20 md:-mb-20 lg:-mt-32 lg:-mb-32 xl:-mt-48 xl:-mb-48 bg-gray-50 min-h-screen"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <Header metadata={metadata} />

        <Suspense fallback={<div>Loading...</div>}>
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
