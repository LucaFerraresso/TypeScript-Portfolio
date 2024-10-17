export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut", staggerChildren: 0.3 },
  },
};

export const slideInVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const hoverEffectVariants = {
  initial: { scale: 1, y: 0, rotateY: 0, borderColor: "#1D4ED8" },
  hover: {
    scale: 1.2,
    y: -5,
    rotateY: 20,
    borderColor: "#000000",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export const iconHoverVariants = {
  initial: { color: "#1D4ED8" },
  hover: {
    color: "#000000",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const textHoverVariants = {
  initial: { fontWeight: 500, color: "#4B5563" },
  hover: {
    fontWeight: 700,
    color: "#000000",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};
