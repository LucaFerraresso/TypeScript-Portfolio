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

      <ProjectTable projects={projects} />
    </>
  );
};

export default Projects;
