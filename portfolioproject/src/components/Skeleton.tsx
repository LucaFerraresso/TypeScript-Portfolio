import React from "react";
import { motion } from "framer-motion";

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "100%",
  className = "",
}) => {
  return (
    <motion.div
      className={`bg-gray-300 rounded-lg ${className}`}
      style={{ width, height }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  );
};

export default Skeleton;
