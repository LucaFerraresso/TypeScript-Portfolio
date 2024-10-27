"use client";
import React, { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import SectionSeparator from "@/src/components/atoms/SectionSeparator";
import HeroSection from "@/src/components/sections/HeroSection";
import AnimatedCard from "@/src/components/library/AnimatedCard";
import TechSection from "@/src/components/sections/TechSection";

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
      <Header metadata={metadata} />
      <div className=" p-40 -mt-40 -mb-40 ">
        <Suspense fallback={<div>Loading...</div>}>
          <SectionSeparator />
          <HeroSection />

          <SectionSeparator />
          <TechSection />
          <SectionSeparator />

          <AnimatedCard />
          <SectionSeparator />
        </Suspense>
      </div>
    </>
  );
}
