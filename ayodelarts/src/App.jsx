import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Portfolio from "./page/Portfolio";
import Contact from "./page/Contact";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar"

function App() {
  const location = useLocation();

  return (
    <div>
      <>
        <AnimatePresence mode="wait">
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </AnimatePresence>
      </>
    </div>
  );
}

export default App;
