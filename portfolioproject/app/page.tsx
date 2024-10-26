"use client";
import React, { Suspense, lazy } from "react";
import type { Metadata } from "next";
import Header from "@/src/components/atoms/Header";
import SectionSeparator from "@/src/components/atoms/SectionSeparator";
import PromptForm from "@/src/components/molecules/PromptForm";
import { AnimatedTabs } from "@/src/components/library/AnimatedTab";
import AnimatedCard from "@/src/components/library/AnimatedCard";

const HeroSection = lazy(() => import("@/src/components/sections/HeroSection"));
const TechSection = lazy(() => import("@/src/components/sections/TechSection"));
const ProjectSection = lazy(
  () => import("@/src/components/sections/ProjectSection")
);

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
          <TechSection />
          <SectionSeparator />
          <ProjectSection />
          <SectionSeparator />
          <AnimatedTabs />
          <SectionSeparator />
          <AnimatedCard />
          <SectionSeparator />
        </Suspense>
      </div>
    </>
  );
}
