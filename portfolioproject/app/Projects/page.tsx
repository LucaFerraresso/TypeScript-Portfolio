"use client";
import React from "react";
import type { Metadata } from "next";
import projects from "@/assets/DataArray/ProjectSectionArray";
import Header from "@/src/components/atoms/Header";
import ProjectTable from "@/src/components/molecules/ProjectTable";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

const Projects: React.FC = () => {
  const metadata: Metadata = {
    title: "Projects",
    description: "Projects",
    icons: {
      icon: "/svg/logoProject.svg",
    },
  };

  return (
    <>
      <Header metadata={metadata} />
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Projects
        </h1>
        <ProjectTable projects={projects} />
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Link Utili</h2>
          <div className="flex items-center gap-2">
            <HomeIcon color="black" size={20} />
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
