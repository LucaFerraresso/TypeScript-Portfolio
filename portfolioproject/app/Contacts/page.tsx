"use client";
import { motion } from "framer-motion";
import React from "react";

const Contacts = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="container mx-auto py-20"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-3xl font-bold">Contacts</h1>
      <p className="mt-4">Phone: 000000000000</p>
      <p>Email: info@example.com</p>
    </motion.div>
  );
};

export default Contacts;
