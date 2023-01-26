import React, { useEffect } from "react";
import anisha from "../assets/images/avatar-anisha.png";
import ali from "../assets/images/avatar-ali.png";
import richard from "../assets/images/avatar-richard.png";
import shanai from "../assets/images/avatar-shanai.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
const Testimonails = () => {
  const { ref, inView } = useInView();
  const testiAnim = useAnimation();
  useEffect(() => {
    if (inView) {
      testiAnim.start({
        scale: 1,
        transition: {
          duration: 0.7,
          delay: 0.1,
        },
      });
    }
    if (!inView) {
      testiAnim.start({
        scale: 0.2,
      });
    }
    console.log(inView);
  }, [inView]);
  const persons = [
    {
      name: "Anisha Li",
      quote:
        "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
      img: anisha,
    },

    {
      name: "Ali Bravo",
      quote:
        "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
      img: ali,
    },
    {
      name: "Richard Watts",
      quote:
        "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
      img: richard,
    },
    {
      name: "Shanai Gough",
      quote:
        "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
      img: shanai,
    },
  ];
  return (
    <div id="testimonials" className="px-5 md:px-10">
      <motion.div ref={ref} animate={testiAnim} className="mt-24 mb-20 ">
        <div>
          <motion.h1
            ref={ref}
            animate={testiAnim}
            className="text-center text-4xl font-bold mb-20 "
          >
            What they've said
          </motion.h1>
        </div>
        <div className="flex  flex-col md:flex md:flex-row gap-3 ">
          {persons.map((person, index) => (
            <div>
              <div
                className="bg-yellow-200 rounded-md p-4 hover:scale-105 duration-300 cursor-pointer"
                key={index}
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-16 flex mx-auto"
                />
                <div className="text-center mt-6  min-w-min">
                  <h1 className="font-bold text-indigo-800"> {person.name}</h1>
                  <p className="text-gray-800 text-center">"{person.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonails;
