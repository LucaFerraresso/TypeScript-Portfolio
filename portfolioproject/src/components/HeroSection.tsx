import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { fadeInVariants } from "@/animation/animation";

const HeroSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex  flex-col md:flex-row md:justify-around "
        >
          <Image
            src="/images/myFoto.jpg"
            alt="Luca Ferraresso"
            height={250}
            width={250}
            className="rounded-3xl mt-4 mb-4"
          />
        </motion.div>
      </div>

      {/* Contenuto Testuale */}
      <div className="w-full flex flex-col justify-center items-center p-8">
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
          Hi, I'm Luca Ferraresso. I am a passionete front-end developer based
          near Venice, (ITA). My expertise is focused on React and JavaScript,
          with the goal always being to create responsive and engaging web
          experiences. I love tacking complex challenges to transform them into
          intuitive and user-friendly solutions
        </motion.p>

        {/* Icone per LinkedIn e GitHub con animazioni */}
        <div>
          {" "}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full flex flex-row"
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
