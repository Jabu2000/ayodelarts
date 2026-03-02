import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Portfolio from "./page/Portfolio";
import Contact from "./page/Contact";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Lenis from "lenis";
import ScrollToTop from "./components/ScrollTop";

function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
    });

    // expose lenis globally
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
