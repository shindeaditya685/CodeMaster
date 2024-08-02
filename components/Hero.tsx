"use client";

import Link from "next/link";
import React from "react";
import AnimatedTextWord from "./AnimatedTextWord";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="flex items-center justify-center w-full h-full bg-gradient-to-r from-blue-700 to-purple-800 text-white px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        <AnimatedTextWord
          text="Solve. Code. Learn."
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        />
        <p className="text-lg md:text-xl mb-6">
          Join our community and take your coding skills to the next level.
        </p>
        <Button asChild>
          <Link
            href="/create-blog"
            className="hover:bg-gray-700 hover:text-white text-lg font-semibold py-2 px-6 border border-white rounded-lg transition duration-500 ease-in-out"
          >
            Begin Your Coding Journey &rarr;
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
