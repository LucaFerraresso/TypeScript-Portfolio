import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { fadeInVariants } from "@/animation/animation";

const HeroSection: React.FC = () => {
  return (
    <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
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
        <div className="w-full flex flex-col justify-center items-center p-8 ">
          <h2>Luca Ferraresso</h2>
          <h1>Web Developer</h1>
          <p>
            Hi, I am Luca Ferraresso. I am a passionete front-end developer
            based near Venice. My expertise is focused on React and JavaScript,
            with the goal always being to create responsive and engaging web
            experiences. I love tacking complex challenges to transform them
            into intuitive and user-friendly solutions
          </p>

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
                <FaLinkedin color="blue" />
              </a>
              <a
                href="https://github.com/tuo-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub color="black" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
