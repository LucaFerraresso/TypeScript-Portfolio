import React from "react";
import { motion } from "framer-motion";
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

const icons = [
  { component: <FaHtml5 color="green" />, title: "HTML5" },
  { component: <FaCss3Alt color="red" />, title: "CSS3" },
  { component: <FaJsSquare color="yellow" />, title: "JavaScript" },
  { component: <SiTypescript color="blue" />, title: "TypeScript" },
  { component: <FaNodeJs color="green" />, title: "Node.js" },
  { component: <SiNextdotjs color="black" />, title: "Next.js" },
  { component: <SiMongodb color="orange" />, title: "MongoDB" },
  { component: <SiTailwindcss color="blue" />, title: "Tailwind CSS" },
  { component: <FaSass color="red" />, title: "Sass" },
];

const TechSection: React.FC = () => {
  return (
    <div className="w-full flex-col justify-center items-center text-center p-6">
      <h1>Technologies I Use</h1>
      <div>
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            title={icon.title}
          >
            <div>{icon.component}</div>
            <p>{icon.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechSection;
