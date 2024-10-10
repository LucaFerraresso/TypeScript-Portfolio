import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaSass } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import TechIcon from "./TechIcon";
import { fadeInVariants } from "@/animation/animation";

const icons = [
  { component: <FaHtml5 color="green" />, title: "HTML5" },
  { component: <FaCss3Alt color="red" />, title: "CSS3" },
  { component: <FaJsSquare color="yellow" />, title: "JavaScript" },
  { component: <SiTypescript color="blue" />, title: "TypeScript" },
  { component: <SiNextdotjs color="black" />, title: "Next.js" },
  { component: <SiMongodb color="orange" />, title: "MongoDB" },
  { component: <SiFirebase color="red" />, title: "FireBase" },
  { component: <SiTailwindcss color="blue" />, title: "Tailwind CSS" },
  { component: <FaSass color="red" />, title: "Sass" },
];

const TechSection: React.FC = () => {
  return (
    <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
      <div className="text-center overflow-hidden">
        <h1 className="text-2xl font-bold mb-6">Technologies I Use</h1>

        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ display: "flex", minWidth: "200%" }} // Assicura che la larghezza sia sufficiente a contenere entrambe le liste
        >
          {/* Prima lista di icone */}
          <div className="flex items-center justify-around min-w-full">
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
