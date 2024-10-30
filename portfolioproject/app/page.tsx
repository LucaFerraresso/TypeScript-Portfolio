import React, { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import SectionSeparator from "@/src/components/atoms/SectionSeparator";
import HeroSection from "@/src/components/sections/HeroSection";
import InfiniteTechSection from "@/src/components/sections/InfiniteTechSection";
import LinkSection from "@/src/components/sections/LinkSection";

const metadata: Metadata = {
  title: "MyPortfolio",
  description: "Welcome to my portfolio",
  icons: {
    icon: "/svg/logo.svg",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col pt-20 pb-20 px-4 sm:px-6 md:px-8">
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
    </div>
  );
}
