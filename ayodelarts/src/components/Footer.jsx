import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="outro w-full">
      {/* Top Footer */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center px-6 md:px-10 lg:px-[50px] pt-10 bg-[#cccccc] text-black gap-6 z-50">
        <a className="w-full lg:w-auto gasoek-one-regular text-[24px] md:text-[28px] 2xl:text-[30px] cursor-pointer">
          Ayodele Arts
        </a>

        <nav className="flex flex-wrap gap-4 lg:gap-6 text-sm sm:text-base md:text-lg 2xl:text-[20px] font-bold uppercase freeman-regular z-50">
          <a href="https://wa.me/0774974357" target="_blank">
            <FaWhatsapp className="text-black hover:text-white text-3xl transition duration-300 hover:scale-110" />
          </a>
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
          >
            <FaInstagram className="text-black hover:text-white text-3xl transition duration-300 hover:scale-110" />
          </a>
        </nav>
      </div>

      {/* Scrolling Text Section */}
      <div className="relative w-full overflow-x-hidden pb-[60px]">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[220px] 2xl:text-[260px] uppercase font-bold text-black gasoek-one-regular">
            Making art come to life&nbsp;&nbsp;&nbsp;
          </span>
          <span className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[220px] 2xl:text-[260px] uppercase font-bold text-black gasoek-one-regular">
            Making art come to life
          </span>
        </div>
      </div>

      {/* Bottom Footer */}

      <h1 className="text-black pl-5 text-sm sm:text-base md:text-lg uppercase font-bold freeman-regular">
        created by the system
      </h1>
    </div>
  );
};

export default Footer;
