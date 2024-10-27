"use client";
import React from "react";
import type { Metadata } from "next";
import projects from "@/assets/DataArray/ProjectSectionArray";
import Header from "@/src/components/atoms/Header";

import ProjectTable from "@/src/components/molecules/ProjectTable";

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
      <div className="p-6 ">
        <h1 className="text-2xl font-bold mb-4 p-6">Projects</h1>
        <ProjectTable projects={projects} />
      </div>
    </>
  );
};

export default Projects;
