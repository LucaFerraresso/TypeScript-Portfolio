import React from "react";
import { motion } from "framer-motion";
import icons from "@/assets/DataArray/TechSectionArray";
import TechIcon from "./TechIcon";
import { fadeInVariants } from "@/animation/animation";

const TechSection: React.FC = () => {
  return (
    <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
      <div className="text-center overflow-hidden mt-4 mb-4">
        <h1 className="text-2xl font-bold mb-6">Technologies I Use</h1>

        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ display: "flex", minWidth: "200%" }} // Assicura che la larghezza sia sufficiente a contenere entrambe le liste
        >
          {/* Prima lista di icone */}
          <div className="flex items-center justify-around min-w-full ">
            {icons.map((icon, index) => (
              <TechIcon
                key={`original-${index}`}
                icon={icon.component}
                title={icon.title}
              />
            ))}
          </div>
          {/* Duplicato della lista di icone */}
          <div className="flex items-center justify-around min-w-full">
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
  );
};

export default TechSection;
