"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <motion.h1
        className="text-8xl font-extrabold text-red-600 mb-6"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Oops!
      </motion.h1>
      <motion.h2
        className="text-4xl font-bold text-red-600 mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Something Went Wrong
      </motion.h2>
      <motion.p
        className="text-lg text-red-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        The page you are looking for might be missing or there was an error on
        our side.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Link href="/">
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out border border-black focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
            Go Back Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
