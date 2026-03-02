const items = [
  {
    img: "./img10.png",
    link: "https://instagram.com",
    parallaxSpeed: 0.065,
    size: { width: "350px", height: "250px" },
    className: "hidden xl:flex", // ✅ Hidden on md and up
  },
  {
    img: "./img5.png",
    link: "https://instagram.com",
    parallaxSpeed: 0.15,
    size: { width: "270px", height: "370px" }, // Image 2 size
    className: "xl:hidden flex", // ✅ Hidden on md and up
  },
  {
    img: "./img8.png",
    link: "https://instagram.com",
    parallaxSpeed: 0.18,
    size: { width: "350px", height: "260px" }, // Image 3 size
  },
  {
    img: "./img14.png",
    link: "https://instagram.com",
    parallaxSpeed: 0.11,
    size: { width: "270px", height: "270px" }, // Image 4 size
  },
  {
    img: "./img15.png",
    link: "https://instagram.com",
    parallaxSpeed: 0.07,
    size: { width: "180px", height: "180px" }, // Image 5 size
  },
  {
    img: "./img11.png",
    link: "https://instagram.com",
    parallaxSpeed: 0.085,
    size: { width: "280px", height: "280px" }, // Image 6 size
  },
  {
    img: "./img4.png",
    link: "https://instagram.com",
    parallaxSpeed: 0.06,
    size: { width: "420px", height: "330px" }, // Image 7 size
  },
  {
    img: "./img1.png",
    link: "https://instagram.com",
    parallaxSpeed: 0.04,
    size: { width: "170px", height: "220px" }, // Image 8 size
  },
  {
    img: "./img13.png",
    link: "https://instagram.com",
    parallaxSpeed: 0.1,
    size: { width: "345px", height: "245px" }, // Image 9 size
  },
  {
    img: "./img12.png",
    link: "https://instagram.com",
    parallaxSpeed: 0.065,
    size: { width: "270px", height: "220px" }, // Image 10 size
  },
  {
    img: "./img2.png",
    link: "https://instagram.com",
    parallaxSpeed: 0.075,
    size: { width: "270px", height: "360px" }, // Image 10 size
  },
  {
    img: "./img6.png",
    link: "https://instagram.com",
    parallaxSpeed: 0.035,
    size: { width: "100px", height: "120px" }, // Image 10 size
  },
];

const itemPositions = [
  { top: "-20%", left: "-15%" },
  { top: "25%", left: "-5%" },
  { top: "-28%", left: "15%" },
  { top: "85%", left: "45%" },
  { top: "85%", left: "-4%" },
  { top: "-15%", left: "45%" },
  { top: "-10%", left: "80%" },
  { top: "-17%", left: "68%" },
  { top: "90%", left: "80%" },
  { top: "45%", left: "85%" },
  { top: "75%", left: "18%" },
  { top: "80%", left: "68%" },
];

export { items, itemPositions };
