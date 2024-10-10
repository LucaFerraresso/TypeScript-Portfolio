import React from "react";
import { motion } from "framer-motion";

interface TechIconProps {
  icon: React.ReactElement;
  title: string;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, title }) => {
  return (
    <motion.div
      className="flex flex-col items-center mb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      title={title}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-sm">{title}</p>
    </motion.div>
  );
};

export default TechIcon;
