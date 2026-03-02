import React, { useState, useEffect, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

const galleryItems = [
  {
    id: 1,
    title: "JOB'S GRIP",
    image: "./img1.png",
    selectedImages: [
      "../smallimg/img1small1.png",
      "../smallimg/img1small2.png",
      "../smallimg/img1small3.png",
      "../smallimg/img1small4.png",
    ],
    heading: "A story of Patience, Perseverance and timeless Passion🥀",
    description:
      "A deeply symbolic graphite and charcoal pencil drawing on 30 x 40 Strathmore paper, revisited and reimagined with renewed purpose. Originally created in early 2020, this piece has now been carefully embellished with charcoal pencils and a newly shaded background—adding weight, contrast, and emotional depth to its narrative. Inspired by the enduring story of Job, it reflects perseverance, faith, and the strength to hold on even in the face of suffering. Every layer tells a chapter of struggle and grace, making JOB'S GRIP not just a drawing, but a visual testimony. Blessings ❤️🙏🏾",
  },
  {
    id: 2,
    title: "INTERNAL MONOLOGUE II",
    image: "./img2.png",
    selectedImages: [
      "../smallimg/img2small1.png",
      "../smallimg/img2small2.png",
      "../smallimg/img2small3.png",
      "../smallimg/img2small4.png",
      "../smallimg/img2small5.png",
    ],
    heading: "Charcoal & Graphite pencils on Alabaster paper ✍🏾",
    description:
      "Serenity of the Mind through meditation and mindful breathing. A reflective charcoal and graphite pencil drawing on alabaster paper, capturing the silent, intricate dialogue that takes place within. Through rich textures and layered shading, the piece explores the tension between thought and emotion—what is shown on the surface versus what is felt deep within. The delicate balance of light and shadow mirrors the complexity of the inner world, inviting viewers to pause and listen to their own inner voice. INTERNAL MONOLOGUE II is not just a portrait, but a meditative space—a visual echo of the thoughts we rarely speak aloud.",
  },
  {
    id: 3,
    title: "THROUGH ABIGAIL’S EYES II",
    image: "./img3.png",
    selectedImages: [
      "../smallimg/img3small1.png",
      "../smallimg/img3small2.png",
      "../smallimg/img3small3.png",
      "../smallimg/img3small4.png",
      "../smallimg/img3small5.png",
    ],
    heading: "",
    description:
      "A deeply moving pencil drawing on paper that captures the quiet strength of a soul restored. Once broken, but never to be broken again, Abigail's gaze reflects a profound resilience—rooted in peace and a clear, undistorted sense of identity. The artist’s delicate use of graphite brings out the vulnerability and power in her expression, allowing the viewer to witness both the pain of the past and the strength that has risen from it. A portrait of healing, stillness, and inner power, THROUGH ABIGAIL’S EYES II speaks softly, yet leaves a lasting impact. 🧘🏾‍♀️",
  },
  {
    id: 4,
    title: "A commission drawing",
    image: "./img4.png",
    selectedImages: ["../smallimg/img4small1.png"],
    heading: "",
    description: "A heartfelt pencil piece that radiates personal connection and artistic pride. Crafted with care and intention, every stroke reflects the artist’s deep love for the process and the subject. The details are rich, the textures alive, and the presence undeniable—it's a piece that tells a story beyond the surface. From the soulful expression to the strength it carries, this drawing holds a special place. I love everything about this piece. ❤️✍️🦁",
  },
  {
    id: 5,
    title: "STORY THE EYES TELL",
    image: "./img5.png",
    selectedImages: [
      "../smallimg/img5small1.png",
      "../smallimg/img5small2.png",
      "../smallimg/img5small3.png",
      "../smallimg/img5small4.png",
      "../smallimg/img5small5.png",
      "../smallimg/img5small6.png",
    ],
    heading: "Charcoal & Graphite pencils on Alabaster paper Size: 25' X 30'",
    description:
      "Calm your mind & look into my eyes. If you look closely enough you would realize that it's all in my eyes; the pain, sacrifices, faith and the STORY. We tell stories with our eyes better than we do with words because the eyes don't lie they truly are windows to our souls.",
  },
  {
    id: 6,
    title: "Becoming Davido",
    image: "./img6.png",
    selectedImages: ["../smallimg/img6small1.png"],
    description:
      "This is a hand-drawn pencil sketch of Davido, capturing the Afrobeat superstar with remarkable detail and realism. The artwork highlights his expressive features, from his confident gaze to his iconic smile, using only graphite tones. The shading and texture bring depth and personality to the portrait, showcasing the artist’s skill and passion for both drawing and the music icon himself. A tribute to talent, both musical and visual.",
  },
  {
    id: 7,
    title: "INTERNAL MONOLOGUE I",
    image: "./img12.png",
    // smallImage: "/img1small1.png",
    heading: "close-up 🔎",
    description:
      "A contemplative pencil drawing on alabaster paper, created in 2019. This piece marks the beginning of an introspective series, capturing the quiet tension of unspoken thoughts and inner conflict. With subtle shading and soft detail, the artwork draws viewers into a private world—where emotion, memory, and identity converge in silence. The smooth surface of the alabaster paper enhances the depth and softness of the graphite, allowing the subject’s expression to speak volumes. A INTERNAL MONOLOGUE I is a visual reflection of the thoughts we wrestle with, and the calm we search for within.",
  },
  {
    id: 8,
    title: "Becoming Asa",
    image: "./img8.png",
    selectedImages: ["../smallimg/img8small1.png"],
    description:
      "A bold and experimental piece that blends traditional technique with unconventional materials. Embellished with charcoal and black shoe polish, this sketch pushes the boundaries of texture and tone to tell a story of transformation. Asa—meaning hawk in Yoruba—symbolizes vision, strength, and clarity, all of which are powerfully conveyed through the dark, moody layers and intentional contrasts. Grit meets grace in this work, as each stroke echoes the process of becoming: raw, imperfect, and fiercely authentic. Becoming Asa is more than an artwork—it’s a declaration. 👢",
  },
  {
    id: 9,
    title: "Commission drawing",
    image: "./img9.png",
    selectedImages: [
      "../smallimg/img9small1.png",
      "../smallimg/img9small2.png",
      "../smallimg/img9small3.png",
      "../smallimg/img9small4.png",
      "../smallimg/img9small5.png",
    ],
    description:
      "We all have a limited time on this Earth and the most important thing is the memories and impact we make. It touches my heart anytime I get commissions from people wanting to immortalize their lost loved one through art, this goes to show that some people may never die living in the memories of people that love them.",
  },
  {
    id: 10,
    title: "TOPE",
    image: "./img10.png",
    selectedImages: ["../smallimg/img10small1.png"],
    description:
      "A striking graphite and charcoal pencil drawing on 25 x 36 inch Pelican paper, blending softness and strength in a deeply emotive portrait. With a refined balance of shadow and light, the artwork captures the quiet grace and inner depth of its subject. Every stroke is intentional—layered with subtle textures and rich tones that reveal character, presence, and story. TOPE is more than a name; it's a visual homage to identity, dignity, and the beauty found in stillness. A timeless piece that speaks in silence.",
  },
  {
    id: 11,
    title: "VICTOR",
    image: "./img11.png",
    selectedImages: ["../smallimg/img11small1.png"],
    description:
      " A masterful pencil drawing created over 130+ hours using charcoal and graphite on 25 x 36 inch Pelican paper. This powerful portrait is a testament to resilience, discipline, and triumph—both in subject and in execution. Every detail, from the intensity in the eyes to the texture of the skin, is rendered with painstaking precision, capturing the essence of strength and quiet determination. The rich contrast of charcoal blended with the fine control of graphite brings depth and life to the piece, making VICTOR not just a name, but a story of endurance and excellence, immortalized in every stroke.",
  },
  {
    id: 13,
    title: "ARA",
    image: "./img13.png",
    selectedImages: [
      "../smallimg/img13small1.png",
      "../smallimg/img13small2.png",
      "../smallimg/img13small3.png",
    ],
    description:
      "a vibrant charcoal and graphite pencil sketch on paper, measuring 53 x 53 cm. The piece radiates energy and cultural pride, with bold textures and intricate detailing that bring the subject to life. Titled ARA—meaning wonder or thunder in Yoruba—the artwork celebrates identity, power, and new beginnings. Created with precision and passion, it captures a sense of joy and reverence, perfectly echoing the message: Happy New Year, family. A beautiful fusion of tradition and artistry, this piece is both a blessing and a statement.",
  },
  {
    id: 14,
    title: "The Man I Have Become",
    image: "./img14.png",
    selectedImages: [
      "../smallimg/img14small1.png",
      "../smallimg/img14small2.png",
      "../smallimg/img14small3.png",
      "../smallimg/img14small4.png",
      "../smallimg/img14small5.png",
    ],
    description:
      " A powerful charcoal pencil drawing on paper, measuring 62 x 91 cm. This introspective piece explores identity, growth, and resilience through bold, textured strokes and deep contrasts. The use of charcoal brings a raw, unfiltered emotion to the portrait, revealing both strength and vulnerability in equal measure. Every shadow and highlight speaks to the journey—of trials faced, lessons learned, and the quiet confidence of self-realization. More than a portrait, this work is a visual narrative of transformation—a reflection on becoming.",
  },
  {
    id: 15,
    title: "Through Abigail's Eyes",
    image: "./img15.png",
    selectedImages: [
      "../smallimg/img15small1.png",
      "../smallimg/img15small2.png",
      "../smallimg/img15small3.png",
      "../smallimg/img15small4.png",
      "../smallimg/img15small5.png",
      "../smallimg/img15small6.png",
    ],
    description:
"A compelling pencil drawing created with charcoal and graphite on Strathmore paper. This expressive piece invites viewers into a deeply personal moment, captured through the intense and thoughtful gaze of Abigail. The rich textures of charcoal blend seamlessly with the fine precision of graphite, creating depth, emotion, and nuance. The choice of Strathmore paper enhances the detail and tonal contrast, making every stroke resonate with feeling. A powerful study in emotion and realism, this artwork speaks volumes—without saying a word.",
},
  {
    id: 16,
    title: "Becoming RIHANNA",
    image: "./img16.png",
    selectedImages: [
      "../smallimg/img16small1.png",
      "../smallimg/img16small2.png",
      "../smallimg/img16small3.png",
    ],
    description:
      "This is a hand-drawn pencil sketch of Rihanna, beautifully capturing the elegance and strength of the global music and fashion icon. The portrait showcases her striking features—her piercing eyes, defined cheekbones, and signature confidence—with intricate shading and fine detail. The monochrome tones bring out the raw emotion and grace of the subject, making this piece a powerful tribute to both Rihanna’s influence and the artist’s craftsmanship.",
  },
  {
    id: 17,
    title: "GOODBYES",
    image: "./img17.png",
    selectedImages: [
      "../smallimg/img17small1.png",
      "../smallimg/img17small2.png",
    ],
    description:
      "A poignant pencil sketch that captures the raw, bittersweet emotion of parting ways. Created with delicate precision, the artwork reflects the quiet weight of farewell—where words often fall short, but the moment lingers. Through soft shading and intentional strokes, the piece evokes both the sorrow of letting go and the warmth of memories that remain. More than just an image, it’s a reflection on the beauty and pain of goodbyes—an emotional process etched in graphite, where every line tells a story of what was, and what still lives on in memory.",
  },
];

const AutoImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <img
      src={images[current]}
      className="rounded-xl transition-opacity duration-700 ease-in-out"
      alt={`Slide ${current + 1}`}
    />
  );
};

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const menuRef = useRef(null);
  const backdropRef = useRef(null);

  const openModal = (item) => setSelectedItem(item);

  const closeModal = () => {
    if (menuRef.current && backdropRef.current) {
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
    } else {
      setSelectedItem(null);
    }
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

  return (
    <section className="sticky-cards">
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="sticky text-white font-bold text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[150px] gasoek-one-regular">
          Gallery
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openModal(item)}
            className="card cursor-pointer overflow-hidden"
          >
            <div className="card-img">
              <img src={item.image} alt={item.title} className="object-cover" />
            </div>
            <div className="card-content">
              <p className="text-[16px] cursor-pointer freeman-regular">
                Click to view
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <>
          <img
            ref={backdropRef}
            src={selectedItem.image}
            alt="Backdrop"
            className="fixed top-0 left-0 w-full h-full z-[100000] object-cover"
          />

          <div
            ref={menuRef}
            className="fixed top-0 left-0 w-full h-full bg-[#00000077] backdrop-blur-md z-[1000001] flex flex-col opacity-0"
          >
            <div className="absolute right-[80px] top-[100px] flex justify-end pb-6 cursor-pointer">
              <IoIosCloseCircle
                className="text-[40px] text-white hover:scale-[1.2] transition duration-300"
                onClick={closeModal}
              />
            </div>

            <h1 className="text-white font-bold text-[20px] xl:text-[50px] 2xl:text-[80px] text-center mt-[80px] gasoek-one-regular">
              {selectedItem.title}
            </h1>

            <div className="flex flex-col lg:flex-row items-center justify-center pt-[40px] lg:px-[150px] px-[50px] gap-12">
              <div className="text-white freeman-regular text-[14px] 2xl:text-[24px] font-semibold xl:w-[60%] gap-5">
                <p className="">{selectedItem.heading}</p>
                <p className="">{selectedItem.description}</p>
              </div>

              <div className="rounded-xl w-[80%] xl:w-[30%] lg:w-[40%] md:w-[40%] mt-[40px] xl:mt-[0]">
                <AutoImageSlider
                  images={
                    selectedItem.selectedImages?.length
                      ? selectedItem.selectedImages
                      : [selectedItem.image]
                  }
                />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Gallery;
