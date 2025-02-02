import { useEffect, useState } from "react";
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
  const [filteredSlide, setFilteredSlide] = useState<SlideCarroussel[]>();
  const nextSlide = () => {
    if (currentSlide == slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide == 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setFilteredSlide(slides.filter((_, index) => index === currentSlide));
  }, [slides, setCurrentSlide, currentSlide]);

  return (
    <div className="relative w-[360px md:w-5/6 max-w-[1800px] mx-auto mt-10 mb-20 overflow-hidden">
      {filteredSlide ? (
        <div
          key={filteredSlide[0].id}
          className={`carousel-item flex flex-col md:flex-row items-center justify-center transition-opacity duration-700`}
        >
          <motion.img
            src={filteredSlide[0].img}
            className="w-[340px] h-[340px] md:w-[400px] md:h-[400px] object-cover rounded-lg shadow-lg"
            alt={filteredSlide[0].title}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileInView={{ opacity: 1, scale: 1 }}
          />

          <div className="bg-base-200 w-[340px] md:w-[calc(100%-400px)] h-auto md:h-[400px] p-5 md:p-10 rounded-lg shadow-lg">
            <AnimatedText
              text={filteredSlide[0].title}
              color="primary"
              size={3}
            />
            <p className="mt-3">{filteredSlide[0].text}</p>
            <motion.button
              className="btn btn-primary mt-5"
              whileHover={{ scale: 1.1 }}
            >
              More about this
            </motion.button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <motion.button
        onClick={prevSlide}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        className="absolute w-10 h-10 rounded-full bg-primary left-5 top-1/2 -translate-y-1/2 z-10"
      >
        ❮
      </motion.button>
      <motion.button
        onClick={nextSlide}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        className="absolute w-10 h-10 bg-primary rounded-full right-5 top-1/2 -translate-y-1/2 z-10"
      >
        ❯
      </motion.button>
    </div>
  );
}
