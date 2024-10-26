"use client";
import React, { Suspense, lazy } from "react";
import type { Metadata } from "next";

const HeroSection = lazy(() => import("@/src/components/sections/HeroSection"));
const PromptForm = lazy(() => import("@/src/components/molecules/PromptForm"));
const InfiniteTechSection = lazy(
  () => import("@/src/components/sections/InfiniteTechSection")
);
const AnimatedCard = lazy(
  () => import("@/src/components/library/AnimatedCard")
);
const SectionSeparator = lazy(
  () => import("@/src/components/atoms/SectionSeparator")
);
const Header = lazy(() => import("@/src/components/atoms/Header"));

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
      <div className="p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <SectionSeparator />
          <PromptForm />
          <SectionSeparator />
          <HeroSection />
          <SectionSeparator />
          <InfiniteTechSection />
          <SectionSeparator />
          <AnimatedCard />
          <SectionSeparator />
        </Suspense>
      </div>
    </>
  );
}
