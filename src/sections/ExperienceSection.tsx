import React from "react";
import ExperienceTimeline from "../components/ExperienceTimeline";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
const ExperienceSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <>
      <section id="experience">
        <motion.hr
          className="my-24"
          initial={{ width: "0%", marginLeft: "50%" }}
          whileInView={{ width: "100%", marginLeft: "0%" }}
          transition={{ duration: isMobile ? 2 : 1.5 }}
          viewport={{ once: true }}
        />
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <p className="sm:text-lg my-2 font-bold font-serif text-yellow-500">
            Episode III
          </p>
          <p className="text-yellow-500 star-wars-font text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Experience
          </p>
          <p className="mt-4 mb-6 md:mb-10 text-yellow-500 text-sm sm:text-base">
            Professional Experience
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: isLaptop ? 100 : 0,
            x: isLaptop ? 0 : isMobile ? 100 : 200,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          transition={{ delay: isMobile ? 0.25 : 0.4, duration: 1.5 }}
          viewport={{ once: true }}
        >
          <ExperienceTimeline />
        </motion.div>
      </section>
    </>
  );
};

export default ExperienceSection;
