"use client";

import HeroSection from "@/src/components/HeroSection";
import TechSection from "@/src/components/TechSection";
import ProjectSection from "@/src/components/ProjectSection";

export default function Home() {
  return (
    <div className="border-2 border-red-700 p-4">
      {/* Hero Section */}
      <div className="border-2 border-red-700">
        <HeroSection />
      </div>

      {/* Tech Section */}
      <div className="border-2 border-red-700">
        <TechSection />
      </div>

      {/* Project Section */}
      <div className="border-2 border-red-700">
        <ProjectSection />
      </div>
    </div>
  );
}
