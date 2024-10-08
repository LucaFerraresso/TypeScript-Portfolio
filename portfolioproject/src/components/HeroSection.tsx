import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { fadeInVariants } from "@/animation/animation";

const HeroSection: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/myFoto.jpg"
            alt="Luca Ferraresso"
            width={250}
            height={250}
            className="w-full"
          />
        </motion.div>
      </div>

      {/* Contenuto Testuale */}
      <div className="w-full">
        <motion.h2 variants={fadeInVariants} initial="hidden" animate="visible">
          Luca Ferraresso
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Web Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Mi piace sviluppare interfacce intuitive e adoro esplorare nuove
          tecnologie.
        </motion.p>

        {/* Icone per LinkedIn e GitHub con animazioni */}
        <div className="w-full">
          {" "}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a
              href="https://www.linkedin.com/in/tuo-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/tuo-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
