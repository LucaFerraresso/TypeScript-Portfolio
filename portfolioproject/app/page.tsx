"use client";
import React, { Suspense, lazy } from "react";

const HeroSection = lazy(() => import("@/src/components/HeroSection"));
const TechSection = lazy(() => import("@/src/components/TechSection"));
const ProjectSection = lazy(() => import("@/src/components/ProjectSection"));

export default function Home() {
  return (
    <>
      <div className="p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
          <TechSection />
          <ProjectSection />
        </Suspense>
      </div>
    </>
  );
}
