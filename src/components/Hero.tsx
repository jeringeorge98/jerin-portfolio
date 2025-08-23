
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import LightSaber from "../assets/images/light_saber.png";

export default function Hero() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1440px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1441px)" });
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative"
    >
      <motion.img
        src={LightSaber}
        alt="Lightsaber"
        className="absolute -z-10 w-[80%] sm:w-[55%] md:w-[45%] lg:w-[40%] 2xl:w-[35%]
        top-20 sm:top-24 md:top-28 lg:top-12 xl:top-5 2xl:top-7 
        right-40 sm:right-14 md:right-[5.5rem] lg:right-44 xl:right-[10.5rem] 2xl:right-[23rem]"
        initial={{
          opacity: 0,
          scale: 0,
          y: isMobile ? 100 : isDesktop ? 250 : 200,
          x: isMobile || isTablet ? 100 : isLaptop ? 150 : 300,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
          x: 0,
        }}
        transition={{
          delay: 0.5,
          duration: isLaptop ? 2.5 : 2,
        }}
        viewport={{ once: true }}
      ></motion.img>
      {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="star-wars-text">
          Hi! Welcome to my portfolio, I am Jerin a Software developer and a
          Master's graduate.I specialize in building sofwtare applications with
          a focus on user experience and performance. I am passionate about
          creating innovative solutions that make a difference. Help me walk the
          path along with you .
        </h1>
      </div> */}
    </section>
  );
}
