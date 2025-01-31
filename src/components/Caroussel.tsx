import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const slides = [
  {
    id: 1,
    img: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    title: "Koodiarana",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur repellat dignissimos inventore deserunt molestias soluta quibusdam excepturi atque impedit aspernatur modi veniam aliquid ipsam sed, provident amet, nemo perferendis magnam!",
  },
  {
    id: 2,
    img: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    title: "Koodiarana 2",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur repellat dignissimos inventore deserunt molestias soluta quibusdam excepturi atque impedit aspernatur modi veniam aliquid ipsam sed, provident amet, nemo perferendis magnam!",
  },
  {
    id: 3,
    img: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    title: "Koodiarana 3",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur repellat dignissimos inventore deserunt molestias soluta quibusdam excepturi atque impedit aspernatur modi veniam aliquid ipsam sed, provident amet, nemo perferendis magnam!",
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel w-[400px] md:w-5/6 md:ml-[180px] mx-5 mt-10 mb-20 md:h-[400px]">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className={`carousel-item relative w-full flex flex-col md:flex-row ${
            index === currentSlide ? "block" : "hidden"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={slide.img}
            className="w-full md:h-auto h-[300px] md:w-[600px]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button onClick={prevSlide} className="btn btn-circle bg-primary">
              ❮
            </button>
            <button onClick={nextSlide} className="btn btn-circle bg-primary">
              ❯
            </button>
          </div>
          <motion.div
            className="bg-base-200 w-auto mt-[-100px] h-[500px] md:h-auto md:w-full"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="md:mt-30 mt-2 p-10">
              <div className="ml-10 md:ml-0">
                <AnimatedText text={slide.title} color="primary" size={3} />
              </div>
              <p className="md:mt-5 mt-0 md:p-10 p-5">{slide.text}</p>
            </div>
            <motion.div
              className="btn btn-primary mx-35 md:mx-20"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              More about this
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
