import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowRight, FaInstagram, FaWhatsapp } from "react-icons/fa6";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

const Navbar = () => {
  const location = useLocation();
  const animationRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const menuRef = useRef(null);
  const backdropRef = useRef(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    gsap.to(menuRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: () => setSelectedItem(null),
    });
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    if (selectedItem) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.inOut" }
      );
    }

    document.body.style.overflowY = selectedItem ? "hidden" : "auto";
  }, [selectedItem]);

  // const topBarRef = useRef(null);
  // const bottomBarRef = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(
  //     topBarRef.current,
  //     { y: -100, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 1,
  //       delay: 4.5,
  //       ease: "power3.out",
  //     }
  //   );

  //   gsap.fromTo(
  //     bottomBarRef.current,
  //     { y: 100, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 1,
  //       delay: 4.5,
  //       ease: "power3.out",
  //     }
  //   );
  // }, []);

  useEffect(() => {
    const activeLink = document.querySelector(".nav-link.active");
    const animation = animationRef.current;

    if (activeLink && animation) {
      const linkRect = activeLink.getBoundingClientRect();
      const parentRect = activeLink.parentElement.getBoundingClientRect();

      const newLeft = linkRect.left - parentRect.left;
      const newWidth = linkRect.width;

      animation.style.transform = `translateX(${newLeft}px)`;
      animation.style.width = `${newWidth}px`;
    }
  }, [location.pathname]);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  const AutoImageSlider = ({ images, className = "" }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (!images || images.length <= 1) return;

      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3000); // 3 seconds

      return () => clearInterval(interval);
    }, [images]);

    if (!images || images.length === 0) return null;

    return (
      <img
        src={images[current]}
        className={`rounded-md object-cover w-full h-full transition-opacity duration-700 ease-in-out ${className}`}
        alt={`Slide ${current + 1}`}
      />
    );
  };

  return (
    <div className="flex flex-col">
      {/* Top Bar */}
      <div className="fixed navbg z-[1001] py-4 px-10 bg-[#b1b1b100] backdrop-blur-[5px] w-full flex items-center ">
        <div className="w-full flex items-center ">
          <Link to="/" className="cursor-pointer ">
            <img src="/AyodeleLogo.png" />
          </Link>

          <div className="w-full flex justify-end mix-blend-difference">
            <div className="md:flex hidden justify-center gap-4 text-white text-[10px]">
              <h3 className="w-[25%]">
                Art is not just what I see — it’s what I feel and help others feel too.
              </h3>
              <h3 className="w-[25%]">
                Every face tells a story. My pencil is just the voice.
              </h3>
            </div>
            <Link className="">
              <button
                onClick={openModal}
                className="bg-[#ffffff] text-black  2xl:text-[18px] text-[12px] px-8 py-4 rounded-full freeman-regular hover:scale-[1.1] transition duration-300"
              >
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </div>

      {selectedItem && (
        <>
          <div
            alt=""
            className="fixed top-0 left-0 w-full h-screen  object-cover"
          />

          <div
            ref={menuRef}
            className="fixed top-0 bg-[#b1b1b100] backdrop-blur-[20px] z-[100000] w-full h-screen flex flex-col items-center justify-center gap-8 "
          >
            <div className="absolute 2xl:right-[75px] top-[12px] cursor-pointer">
              <IoIosCloseCircle
                className="text-[60px] text-white hover:scale-[1.1] transition duration-300 mix-blend-difference"
                onClick={closeModal}
              />
            </div>
            <div className="flex flex-col gap-6 px-10">
              <h1 className="text-white font-bold text-[20px] xl:text-[40px] 2xl:text-[50px] gasoek-one-regular">
                Hi! Welcome To My Coner Of The Net.
              </h1>
              <div className="w-full flex flex-col xl:flex-row xl:flex-wrap gap-6 freeman-regular">
                <div className="w-full xl:w-[30%] flex flex-col justify-between border border-[#ffffff44] p-6 md:p-10 rounded-md text-white bg-[#8a8a8a17] backdrop-blur-[6px] hover:bg-[#f8f8f8] transition duration-300">
                  <h2 className="text-[20px] xl:text-[24px] 2xl:text-4xl mb-4 font-semibold mix-blend-difference transition duration-300">
                    Watch Me Work Live.
                  </h2>
                  <Link
                    to="/contact"
                    className="w-fit p-4 border-2 border-white text-white hover:bg-[#3ee8ff] transition duration-300 mix-blend-difference rounded-full cursor-pointer"
                  >
                    <FaArrowRight className="text-[14px] 2xl:text-[18px]" />
                  </Link>
                </div>

                <div className="w-full xl:w-[30%] rounded-md overflow-hidden group relative">
                  <Link
                    to="/portfolio"
                    className="block border w-fit border-[#ffffff44] rounded-md text-white bg-[#8a8a8a17] backdrop-blur-[6px]"
                  >
                    <AutoImageSlider
                      images={[
                        "/navimg1.png",
                        "/navimg2.png",
                        "/navimg3.png",
                        "/navimg4.png",
                      ]}
                    />
                  </Link>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#00000093] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h1 className="text-white font-semibold 2xl:text-[40px] text-[35px]">
                      Gallery
                    </h1>
                  </div>
                </div>

                <div className="w-full xl:w-[30%] flex flex-col justify-between border border-[#ffffff44] p-6 md:p-10 rounded-md text-white bg-[#8a8a8a17] backdrop-blur-[6px]">
                  <h2 className="text-[20px] xl:text-[24px] 2xl:text-4xl mb-4 font-semibold">
                    Contact Me
                  </h2>

                  <div className="flex flex-col gap-2 2xl:gap-4">
                    <a
                      href="mailto:ayodelrarts@gmail.com"
                      target="_blank"
                      className="flex items-center gap-2 text-[14px] 2xl:text-2xl w-fit bg-[#7a7a7a] hover:bg-[#46beee] rounded-md px-4 py-2"
                    >
                      <MdOutlineMailOutline className="text-white transition duration-300 hover:scale-110" />
                      <span>ayodelrarts@gmail.com</span>
                    </a>

                    <a
                      href="https://whatsapp.me/0602101851"
                      target="_blank"
                      className="flex items-center gap-2 text-[14px] 2xl:text-2xl w-fit bg-[#7a7a7a] hover:bg-[#2cac27] rounded-md px-4 py-2"
                    >
                      <FaWhatsapp className="text-white transition duration-300 hover:scale-110" />
                      <span>+234 687 646 9875</span>
                    </a>

                    <a
                      href="https://www.instagram.com/ayodelrarts_"
                      target="_blank"
                      className="flex items-center gap-2 text-[14px] 2xl:text-2xl w-fit bg-[#7a7a7a] hover:bg-[#d32c2c] rounded-md px-4 py-2"
                    >
                      <FaInstagram className="text-white transition duration-300 hover:scale-110" />
                      <span>ayodelrarts_</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="fixed z-[1000] bottom-8 w-full flex flex-col justify-center items-center">
        <nav className="relative flex justify-center items-center 2xl:text-[20px] text-[16px] font-semibold gap-[15px] bg-[#ffffff4f] backdrop-blur-3xl rounded-full py-[15px] px-[5px] freeman-regular">
          <div
            ref={animationRef}
            className="absolute top-[10%] h-[80%] bg-white rounded-full transition-all duration-500 ease-in-out z-0"
            style={{
              left: 0,
              width: 0,
              transform: "translateX(0px)",
            }}
          ></div>

          {links.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link relative z-10 text-black px-4 ${
                  isActive ? "active" : ""
                } `
              }
              style={{
                animationDelay: `${4 + index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
