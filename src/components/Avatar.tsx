import { motion, useScroll, useTransform } from "framer-motion";
import jediJetpackImage from "../assets/images/jedi_jetpack.png";

export default function Avatar() {
  const { scrollYProgress } = useScroll();

  // Enhanced transforms with natural easing and extended range
  const y = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1.1, 0.8]);

  // Add sway effect for realistic parachute movement
  const sway = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, -30]);

  return (
    <motion.div
      className="fixed top-20 right-4 z-50 pointer-events-none"
      style={{
        y,
        x: useTransform(sway, (value) => `calc(-50% + ${value}px)`),
        scale,
      }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <img
        src={jediJetpackImage}
        className="w-42 sm:w-24 md:w-42  drop-shadow-2xl animate-float "
        alt="Jetpack character following scroll"
      />
    </motion.div>
  );
}
