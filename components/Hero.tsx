"use client";

import Link from "next/link";
import React from "react";
import AnimatedTextWord from "./AnimatedTextWord";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-r from-blue-700 to-purple-800 text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <AnimatedTextWord
          text="Solve. Code. Learn."
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        />
        <p className="text-lg md:text-xl mb-6">
          Join our community and take your coding skills to the next level.
        </p>
        <Button asChild>
          <Link
            href={"/create-blog"}
            className="hover:bg-gray-700 hover:text-white text-lg font-semibold py-2 px-6 border border-white rounded-lg transition duration-500 ease-in-out"
          >
            Begin Your Coding Journey &rarr;
          </Link>
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-full z-0"
      >
        <div className="absolute inset-0 bg-[url('/assets/hero-background.png')] bg-cover bg-center filter blur-sm"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
