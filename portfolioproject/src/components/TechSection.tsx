import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaSass,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const TechSection = () => {
  return (
    <div className="tech-section py-20">
      <h1 className="text-3xl font-bold text-center mb-10">
        Technologies I Use
      </h1>
      <div className="flex flex-wrap justify-center gap-10 text-6xl">
        <FaHtml5 title="HTML5" />
        <FaCss3Alt title="CSS3" />
        <FaJsSquare title="JavaScript" />
        <SiTypescript title="TypeScript" />
        <FaNodeJs title="Node.js" />
        <SiNextdotjs title="Next.js" />
        <SiMongodb title="MongoDB" />
        <SiTailwindcss title="Tailwind CSS" />
        <FaSass title="Sass" />
      </div>
    </div>
  );
};

export default TechSection;
