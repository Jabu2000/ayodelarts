import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis"; // Assuming you have installed Lenis library
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import ScrollToTop from '../components/ScrollToTop'
import transition from "../transition";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  useEffect(() => {
    // Initialize Lenis and GSAP on component mount
    const lenis = new Lenis();
    lenis.on("scroll", () => {
      gsap.update();
    });
    gsap.ticker.add((time) => {
      lenis.raf(time * 50);
    });
    gsap.ticker.lagSmoothing(0);

    const cards = gsap.utils.toArray(".card");
    const rotation = [-12, 10, -5, 5, -5, -2, -6, 8, -4, -7];

    cards.forEach((card, index) => {
      gsap.set(card, {
        y: window.innerHeight,
        rotate: rotation[index],
      });
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: ".sticky-cards",
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalCards = cards.length;
        const progressPerCard = 1 / totalCards;

        cards.forEach((card, index) => {
          const cardStart = index * progressPerCard;
          let cardProgress = (progress - cardStart) / progressPerCard;
          cardProgress = Math.min(Math.max(cardProgress, 0), 1);

          let yPos = window.innerHeight * (1 - cardProgress);
          let xPos = 0;

          if (cardProgress === 1 && index < totalCards - 1) {
            const remainingProgress =
              (progress - (cardStart + progressPerCard)) /
              (1 - (cardStart + progressPerCard));

            if (remainingProgress > 0) {
              const distanceMultiplier = 1 - index * 0.15;
              xPos =
                -window.innerWidth *
                0.3 *
                distanceMultiplier *
                remainingProgress;
              yPos =
                -window.innerHeight *
                0.3 *
                distanceMultiplier *
                remainingProgress;
            }
          }

          gsap.to(card, {
            x: xPos,
            y: yPos,
            duration: 0,  
            ease: "none",
          });
        });
      },
    });

    // Cleanup on unmount
    return () => {
      scrollTrigger.kill();
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Gallery />
      <Footer />
    </div>
  );
};

export default transition(Portfolio);
