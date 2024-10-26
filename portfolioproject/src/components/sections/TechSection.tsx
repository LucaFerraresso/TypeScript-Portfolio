"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import icons from "@/assets/DataArray/TechSectionArray";

import { fadeInVariants } from "@/animation/animation";
import TechIcon from "../atoms/TechIcon";

const TechSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
        <div className="text-center overflow-hidden mt-4 mb-4">
          <h1 className="text-2xl font-bold mb-6">Tech Stack</h1>

          <motion.div
            className="flex flex-nowrap items-center"
            initial={{ x: 0 }}
            animate={{ x: isHovered ? 0 : "-100%" }}
            transition={{
              repeat: Infinity,
              duration: isHovered ? 40 : 20, // Rallenta se in hover
            }}
            style={{ minWidth: "200%" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Prima lista di icone */}
            <div
              className={`flex items-center justify-around min-w-full flex-shrink-0 flex-wrap gap-4  `}
            >
              {icons.map((icon, index) => (
                <TechIcon
                  key={`original-${index}`}
                  icon={icon.component}
                  title={icon.title}
                />
              ))}
            </div>
            {/* Duplicato della lista di icone */}
            <div className="flex items-center justify-around min-w-full flex-shrink-0 flex-wrap gap-4">
              {icons.map((icon, index) => (
                <TechIcon
                  key={`duplicate-${index}`}
                  icon={icon.component}
                  title={icon.title}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default TechSection;
