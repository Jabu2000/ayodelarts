import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[10000] p-4 rounded-full bg-black hover:bg-[#ffffff] text-white hover:text-black shadow-lg transition-opacity duration-500  hover:scale-110 cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
