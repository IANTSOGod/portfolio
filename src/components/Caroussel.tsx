import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

interface SlideCarroussel {
  id: number;
  img: string;
  title: string;
  text: string;
}

export default function Carousel({ slides }: { slides: SlideCarroussel[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    console.log(currentSlide);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    console.log(currentSlide);
  };

  return (
    <div className="relative w-[360px md:w-5/6 max-w-[1800px] mx-auto mt-10 mb-20 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-item flex flex-col md:flex-row items-center justify-center transition-opacity duration-700 ${
            index === currentSlide ? "block" : "hidden"
          }`}
        >
          {/* Image */}
          <img
            src={slide.img}
            className="w-[340px] h-[340px] md:w-[400px] md:h-[400px] object-cover rounded-lg shadow-lg"
            alt={slide.title}
          />

          {/* Contenu texte */}
          <div className="bg-base-200 w-full md:w-[calc(100%-400px)] h-auto md:h-[400px] p-5 md:p-10 rounded-lg shadow-lg">
            <AnimatedText text={slide.title} color="primary" size={3} />
            <p className="mt-3">{slide.text}</p>
            <motion.button
              className="btn btn-primary mt-5"
              whileHover={{ scale: 1.1 }}
            >
              More about this
            </motion.button>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute btn btn-circle bg-primary left-5 top-1/2 -translate-y-1/2 z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute btn btn-circle bg-primary  right-5 top-1/2 -translate-y-1/2 z-10"
      >
        ❯
      </button>
    </div>
  );
}
