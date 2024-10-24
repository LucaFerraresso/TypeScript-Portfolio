"use client";
import React, { Suspense, lazy } from "react";
import type { Metadata } from "next";
import Header from "@/src/components/Header";
import SectionSeparator from "@/src/components/SectionSeparator";
import PromptForm from "@/src/components/PromptForm";

const HeroSection = lazy(() => import("@/src/components/HeroSection"));
const TechSection = lazy(() => import("@/src/components/TechSection"));
const ProjectSection = lazy(() => import("@/src/components/ProjectSection"));

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
          <PromptForm />
          <SectionSeparator />
          <HeroSection />
          <SectionSeparator />
          <TechSection />
          <SectionSeparator />
          <ProjectSection />
          <SectionSeparator />
        </Suspense>
      </div>
    </>
  );
}
