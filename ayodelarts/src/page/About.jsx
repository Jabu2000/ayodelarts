import { useEffect } from "react";
import Footer from "../components/Footer";
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTop from "../components/ScrollToTop";
import transition from "../transition";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", () => {
      gsap.update();
    });
    gsap.ticker.add((time) => {
      lenis.raf(time * 500);
    });
  }, []);

  return (
    <div>
      <ScrollToTop />
      <div className="w-full xl:flex justify-center mt-[60px] pt-[50px] md:mb-[160px] mb-[80px]">
        <div className="w-full md:ml-[200px] ml-[100px]">
          <h1 className="2xl:ml-[12.3vw] xl:ml-[10vw] 2xl:text-[50px] sm:text-[40px] text-[20px] text-white gasoek-one-regular uppercase ">
            hi, i am
          </h1>
          <div className="flex">
            <img
              src="./imgAbout.png"
              alt="About Us"
              className="max-w-[60%] h-auto imga ]"
            />
            <div className=" flex gap-4 rotate-90 transform -translate-y-20 absolute 2xl:top-[66%] xl:top-[70%] sm:top-[60%] top-[47%] 2xl:left-[28%] xl:left-[29%] lg:left-[66%] md:left-[68%] sm:left-[57%] left-[69%]">
              <h1 className="2xl:text-[50px] sm:text-[40px] text-[20px] text-white gasoek-one-regular uppercase">
                ayodele
              </h1>
              <h1 className="2xl:text-[50px] sm:text-[40px] text-[20px] text-white gasoek-one-regular uppercase">
                arts
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full text-white mr-[200px] xl:m-0 p-[50px] freeman-regular md:text-[20px] text-[14px]">
          <p className="w-full mb-[20px]">
            Ayodele Arts is a talented visual artist from Nigeria, known for his
            incredibly detailed and realistic pencil sketches. With a deep
            passion for capturing human expressions and the essence of life
            through art, Ayodele brings emotion, precision, and depth into every
            piece he creates. His work focuses primarily on realistic portraits,
            turning ordinary moments into timeless black-and-white masterpieces.
          </p>

          <p className="w-full mb-[20px]">
            Driven by a love for storytelling through visual form, Ayodele’s art
            not only showcases technical skill but also reflects culture,
            identity, and the beauty of everyday people. Whether it's a
            commissioned portrait or a conceptual piece, his drawings
            demonstrate patience, observation, and a profound connection to his
            subjects.
          </p>

          <p className="w-full mb-[20px]">
            Ayodele Arts continues to grow his artistic journey by sharing his
            work across digital platforms and connecting with art lovers
            worldwide. Through every pencil stroke, he invites viewers to slow
            down, look closer, and appreciate the intricate details that often
            go unnoticed.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default transition(About);
