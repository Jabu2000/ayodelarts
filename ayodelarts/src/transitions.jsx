import { motion } from "framer-motion";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import { useEffect } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const transitions = (OgComponent) => {
  useEffect(() => {
    // Initialize Lenis and GSAP on component mount
    const lenis = new Lenis();
    lenis.on("scroll", () => {
      gsap.update();
    });
    gsap.ticker.add((time) => {
      lenis.raf(time * 500);
    });
  }, []);
  
  return (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default transitions;
