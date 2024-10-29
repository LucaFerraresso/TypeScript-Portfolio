import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-50">
      <div className="w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient" />
    </div>
  );
};

export default AnimatedBackground;
