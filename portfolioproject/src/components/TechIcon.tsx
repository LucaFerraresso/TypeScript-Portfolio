"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  hoverEffectVariants,
  iconHoverVariants,
  textHoverVariants,
} from "@/animation/animation";

interface TechIconProps {
  icon: React.ReactElement;
  title: string;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, title }) => {
  return (
    <>
      <motion.div
        className="flex flex-col items-center mb-4 border-2 border-blue-600 p-4 cursor-pointer rounded-lg min-w-[100px] md:min-w-[120px] transition-transform duration-500 ease-in-out hover:shadow-lg"
        initial="initial"
        whileHover="hover"
        variants={hoverEffectVariants}
        style={{ willChange: "transform, background-color, border-color" }}
        title={title}
        aria-label={title}
      >
        <motion.div className="text-4xl mb-2" variants={iconHoverVariants}>
          {icon}
        </motion.div>
        <motion.p
          className="text-sm text-center text-gray-800 font-medium"
          variants={textHoverVariants}
        >
          {title}
        </motion.p>
      </motion.div>
    </>
  );
};

export default memo(TechIcon);
