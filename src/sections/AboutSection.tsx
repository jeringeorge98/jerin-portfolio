import { useMediaQuery } from "react-responsive";
import Typewriter from "typewriter-effect";
import ScrollDown from "../components/ScrollDown";
import DownloadButton from "../components/DownloadButton";
// import Avatar from "../components/Avatar";
// import Hero from "../components/Hero";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
export default function AboutSection() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <section id="about" className="flex flex-col items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center justify-center w-[90%]">
        <div className="flex mt-16 sm:mt-0 md:mt-24 lg:mt-20 justify-center sm:order-2 2xl:mr-5">
          {/* <ProfileEffect /> */}
        </div>
        <div className="flex-1 p-4 mt-16">
          <div className="space-y-3 sm:space-y-4 sm:mr-9 md:-mr-36 lg:-mr-28 xl:-mr-36">
            <motion.div
              className="flex font-medium font-serif -mx-5 sm:-mx-14 md:-mx-0 -mt-14 sm:-mt-5 lg:mt-0 -mb-3 md:mb-0
                  text-lg sm:text-2xl md:text-3xl justify-center sm:justify-start text-gray-200 items-center"
              initial={{
                opacity: 0,
                x: isMobile ? 0 : -200,
                y: isMobile ? 100 : 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="sm:ml-7 md:ml-0">Hi, I'm</p>
              <p className="text-shadow font-bold text-white">
                &nbsp;Jerin&nbsp;
              </p>
              <p>based in Europe;</p>
            </motion.div>
            <motion.div
              className="flex flex-row justify-center sm:justify-start -mx-16 sm:-mx-20 md:-mx-0 sm:-ml-7 md:-ml-0
                  text-2xl sm:text-3xl md:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.5rem] text-yellow-500 text-shadow-neon star-wars-font"
              initial={{
                opacity: 0,
                x: isMobile ? 0 : -200,
                y: isMobile ? 100 : 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{ delay: 0.25, duration: 1 }}
              viewport={{ once: true }}
            >
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "software engineer",
                    "Problem Solver",
                  ],
                  delay: 50,
                  deleteSpeed: 30,
                  loop: true,
                  autoStart: true,
                }}
              />
            </motion.div>
            <motion.p
              className="-mx-7 md:mx-0 md:w-[70%] lg:w-[75%] 2xl:w-[70%] md:py-3 lg:py-4
                  text-center text-sm sm:text-base sm:text-left font-thin text-gray-200"
              initial={{
                opacity: 0,
                x: isMobile ? 0 : -200,
                y: isMobile ? 100 : 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
            >
              Dedicated Software Engineer with 4+ years of experience and a
              Master’s degree in Software Engineering. Highly adaptable across
              multiple technology stacks, with hands-on expertise in designing
              and building scalable, end-to-end applications. Experienced in the
              full software development lifecycle, from requirements gathering
              and development to deployment and monitoring, with strong
              involvement across the entire CI/CD pipeline. Proven team player,
              skilled at collaborating with cross-functional teams to drive
              innovation and deliver high-quality software
            </motion.p>
            <div
              className="flex flex-col sm:flex-row items-center gap-10 sm:gap-[19rem] md:gap-[4.5rem] lg:gap-12
                pt-4 md:pt-0 sm:-mx-3 lg:-mx-0"
            >
              <DownloadButton />
              <motion.div
                className="-mx-24 sm:-mx-72 md:-mx-12 lg:mx-0 justify-start"
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: isMobile ? 0 : 0.5, duration: 1.5 }}
                viewport={{ once: true }}
              >
                <SocialIcons />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center pt-8 pb-20">
        {/* <NumbersCounter /> */}
      </div>
      <ScrollDown />
    </section>
  );
}
