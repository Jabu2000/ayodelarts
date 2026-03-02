import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { items, itemPositions } from "./index";
import Contact from "../page/Contact";

const Header = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    // GSAP parallax effect
    const handleMouseMove = (e) => {
      const galleryItems = galleryRef.current.querySelectorAll(".item");
      galleryItems.forEach((item, index) => {
        const animationFactor = items[index].parallaxSpeed;
        const deltaX = (e.clientX - window.innerWidth / 2) * animationFactor;
        const deltaY = (e.clientY - window.innerHeight / 2) * animationFactor;

        gsap.to(item, { x: deltaX, y: deltaY, duration: 0.95 });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden z-[-3]">
      {/* <div className="w-full h-full bg-cover object-cover flex lg:hidden">
        <img src="./img5.png" />
      </div> */}

      <div
        className="w-full h-full header flex flex-col justify-center items-center font-black text-white mix-blend-difference gasoek-one-regular
          2xl:text-[90px] xl:text-[50px] text-[40px] 
          2xl:leading-[90px] xl:leading-[50px] leading-[40px]
          "
      >
        <h1 className="pr-[15%]">Making Art</h1>
        <h2 className="pl-[15%]">Come To Life</h2>
      </div>

      {/* <Contact /> */}

      <div className="gallery " ref={galleryRef}>
        {items.map((itemData, index) => {
          const isExternal = itemData.link?.startsWith("http");

          const imageElement = (
            <img
              src={itemData.img}
              alt={`item ${index}`}
              style={{
                width: itemData.size.width,
                height: itemData.size.height,
              }}
              className="w-full h-full object-cover"
            />
          );

          const style = {
            position: "absolute",
            top: itemPositions[index]?.top || "0px",
            left: itemPositions[index]?.left || "0px",
          };

          return isExternal ? (
            <a
              href={itemData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="item"
              style={style}
              key={index}
            >
              {imageElement}
            </a>
          ) : (
            <Link
              to={itemData.link}
              className="item  cursor-pointer"
              style={style}
              key={index}
            >
              {imageElement}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
