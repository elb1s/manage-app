import React from "react";
import illustration from "../assets/images/illustration-intro.svg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="md:flex-row md:flex mt-12 flex  z-0 flex-col-reverse justify-between  ">
      <motion.div
        initial={{ x: -100, opacity: 0.1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="font-vietnam  mt-20 md:w-1/2  "
      >
        <div className="">
          <h1 className="font-extrabold text-5xl md:text-6xl text-center md:text-left ">
            Bring everyone together to build better products.
          </h1>
        </div>
        <div className="w-96 text-center pt-8  text-md md:text-justify  md:text-lg  ">
          <p className="text-gray-400">
            Manage takes it simple for sotware teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
        </div>
        <motion.button
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
          className="mt-10 bg-orange-600 py-3 px-8 mx-auto md:mx-0 flex text-white rounded-full"
        >
          Get Started
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ scale: 0.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={illustration} alt="hero" />
      </motion.div>
    </div>
  );
};

export default Hero;
