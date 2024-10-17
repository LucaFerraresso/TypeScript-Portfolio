"use client";

import HeroSection from "@/src/components/HeroSection";
import TechSection from "@/src/components/TechSection";
import ProjectSection from "@/src/components/ProjectSection";

export default function Home() {
  return (
    <div className="p-4">
      {/* Hero Section */}
      <HeroSection />

      {/* Tech Section */}
      <TechSection />

      {/* Project Section */}
      <ProjectSection />
    </div>
  );
}
