import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
    hidden: { opacity: 0, scale: 0.2 },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const aboutDesc = [
    {
      idx: "01",
      title: "Track company-wide progress",
      desc: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      idx: "02",
      title: "Advanced built-in reports",
      desc: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      idx: "03",
      title: "Everything you need in one place",
      desc: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];

  return (
    <div
      className="mt-24 font-vietnam md:flex gap-44 px-5 md:px-10"
      id="aboutus"
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
        className="md:w-1/2"
      >
        <h1 className="text-4xl font-extrabold md:text-left text-center">
          What's different about Manage?
        </h1>
        <p className="w-96 text-md mt-8 text-gray-400 tracking-wider text-center md:text-justify">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        {aboutDesc.map((des, index) => (
          <div>
            <div
              className="flex items-center  md:mt-0 mt-14 md:gap-5 pb-3"
              key={index}
            >
              <span className="bg-orange-600 md:px-5 px-4  py-1 text-white rounded-full">
                {des.idx}
              </span>
              <p className="font-bold bg-orange-200 md:bg-transparent rounded-full w-full py-1 md:px-0 px-4">
                {des.title}
              </p>
            </div>
            <div className="md:px-[78px] mb-10 text-gray-500">
              <p>{des.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
