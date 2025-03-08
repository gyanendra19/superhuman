"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
    role="region"
    className="bg-black text-white flex overflow-hidden justify-center h-screen max-w-full">
      <div className="bg-superhuman-gradient absolute md:-top-30 md:-left-140 w-[1200px] h-[1000px] md:h-[1230px] md:w-[1845px] opacity-80 "></div>
      <div>
        <div className="text-center text-sm md:text-md mt-20 mb-10 relative w-fit mx-auto p-2 rounded-md px-4 border-[0.3px] border-white bg-black/20 ai-gradient">
          <div className="w-full bg-[#141414] h-[20px] absolute inset-0 -z-10"></div>
          <p>🎉 Introducing the next evolution of Superhuman AI</p>
        </div>
        <motion.div
          initial={{ y: "10%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-white text-3xl w-[90%] md:w-[70%] mx-auto text-center md:leading-22 md:font-bold md:text-7xl font-custom"
        >
          Save 4 hours per person every single week
        </motion.div>
        <motion.div
          initial={{ y: "10%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center text-xl md:text-2xl w-[90%] md:w-[50%] mx-auto py-10"
        >
          Superhuman is the most productive email app ever made. Collaborate
          faster and get more done with AI-powered email.
        </motion.div>
        <div className="mx-auto w-fit h-full text-center">
          <motion.div
            initial={{ y: "10%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}
            className="button-gradient cursor-pointer font-semibold px-6 text-2xl py-3 rounded-lg"
          >
            Get Started
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
