import { useEffect } from "react";
import gsap from "gsap";


const Loader = () => {
  useEffect(() => {
    function startLoader() {
      let counterElement = document.querySelector(".counter");
      let currentValue = 0;

      function updateCounter() {
        if (currentValue === 100) {
          return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
          currentValue = 100;
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
      }

      updateCounter();
    }

    startLoader();

    // GSAP animations
    gsap.to(".counter", 0.25, {
      delay: 3.5,
      opacity: 0,
    });

    gsap.to(".bar", 1.5, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });

    // Cleanup animations if necessary (e.g., when component unmounts)
    return () => {
      // Optional cleanup logic here if required (like resetting animations or removing event listeners)
    };
  }, []);

  return (
    <div>
      <h1 className="counter">0</h1>
      <div className="overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Loader;
