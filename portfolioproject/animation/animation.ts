export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut", staggerChildren: 0.3 },
  },
};

export const slideInVariants = {
  hidden: { x: "-150%", opacity: 0 },
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

    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export const iconHoverVariants = {
  initial: { rotate: 0 },
  hover: {
    rotate: 360, // Rotazione completa
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const fadeInVariantsSeparator = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const waveVariants = {
  hidden: { d: "M0,5 Q15,2 30,5 T100,5" },
  visible: {
    d: "M0,5 Q15,4 30,5 T100,5", // Aggiusta la curva per un'animazione più morbida
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

// Aggiungi una nuova animazione per la linea nera
export const fadeInOutVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.2,
    transition: { duration: 1, repeat: Infinity, repeatType: "mirror" },
  },
};

// Nuove animazioni per l'inversione delle linee
export const invertVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

export const fadeInVariantsSeparator2 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const fadeInVariants2 = {
  fadeIn: { opacity: 1, transition: { duration: 3 } },
  fadeOut: { opacity: 0, transition: { duration: 3 } },
  invert: { opacity: 1, transition: { duration: 3 } }, // Mantenere solo l'opacità
  pause: { opacity: 1, transition: { duration: 0 } },
};
