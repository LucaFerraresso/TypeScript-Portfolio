import React from "react";
import { motion } from "framer-motion";

interface TechIconProps {
  icon: React.ReactElement;
  title: string;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, title }) => {
  return (
    <motion.div
      className="flex flex-col items-center mb-4 border-2 border-blue-500 p-4 rounded-lg min-w-[120px] transition-shadow duration-300 ease-in-out hover:shadow-lg hover:bg-blue-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      title={title}
      aria-label={title} // Migliora l'accessibilità
    >
      <div className="text-4xl mb-2 text-blue-600">{icon}</div>
      <p className="text-sm text-center text-gray-800 font-medium">{title}</p>
    </motion.div>
  );
};

export default TechIcon;
