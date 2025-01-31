import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function Caroussel() {
  return (
    <div className="carousel w-[400px] md:w-auto md:mr-10 mx-5 md:mx-0 md:ml-10 mt-10 mb-20 md:h-[400px]">
      <div
        id="slide1"
        className="carousel-item relative w-full flex flex-col md:flex-row"
      >
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          className="w-full md:h-auto h-[300px] md:w-[600px] "
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle bg-primary">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-primary">
            ❯
          </a>
        </div>
        <motion.div
          className="bg-base-200 w-auto mt-[-100px] h-[500px] md:h-auto md:w-full"
          initial={{ x: "100vw", opacity: 0 }} // Départ hors de l'écran à droite
          animate={{ x: 0, opacity: 1 }} // Arrive à sa position normale
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="md:mt-30 mt-2 p-10">
            <div className="ml-10 md:ml-0">
              <AnimatedText text="Koodiarana" color="primary"></AnimatedText>
            </div>
            <p className="md:mt-5 mt-0 md:p-10 p-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur repellat dignissimos inventore deserunt molestias
              soluta quibusdam excepturi atque impedit aspernatur modi veniam
              aliquid ipsam sed, provident amet, nemo perferendis magnam!
            </p>
          </div>
          <motion.div
            className="btn btn-primary mx-35 md:mx-20"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            More about this
          </motion.div>
        </motion.div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full flex flex-col md:flex-row"
      >
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          className="w-full md:h-auto h-[300px] md:w-[600px] "
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle bg-primary">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-primary">
            ❯
          </a>
        </div>
        <motion.div
          className="bg-base-200 w-auto mt-[-100px] h-[500px] md:h-auto md:w-full"
          initial={{ x: "100vw", opacity: 0 }} // Départ hors de l'écran à droite
          animate={{ x: 0, opacity: 1 }} // Arrive à sa position normale
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="md:mt-30 mt-2 p-10">
            <div className="ml-10 md:ml-0">
              <AnimatedText text="Koodiarana" color="primary"></AnimatedText>
            </div>
            <p className="md:mt-5 mt-0 md:p-10 p-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur repellat dignissimos inventore deserunt molestias
              soluta quibusdam excepturi atque impedit aspernatur modi veniam
              aliquid ipsam sed, provident amet, nemo perferendis magnam!
            </p>
          </div>
          <motion.div
            className="btn btn-primary mx-35 md:mx-20"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            More about this
          </motion.div>
        </motion.div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full flex flex-col md:flex-row"
      >
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          className="w-full md:h-auto h-[300px] md:w-[600px] "
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle bg-primary">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-primary">
            ❯
          </a>
        </div>
        <motion.div
          className="bg-base-200 w-auto mt-[-100px] h-[500px] md:h-auto md:w-full"
          initial={{ x: "100vw", opacity: 0 }} // Départ hors de l'écran à droite
          animate={{ x: 0, opacity: 1 }} // Arrive à sa position normale
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="md:mt-30 mt-2 p-10">
            <div className="ml-10 md:ml-0">
              <AnimatedText text="Koodiarana" color="primary"></AnimatedText>
            </div>
            <p className="md:mt-5 mt-0 md:p-10 p-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur repellat dignissimos inventore deserunt molestias
              soluta quibusdam excepturi atque impedit aspernatur modi veniam
              aliquid ipsam sed, provident amet, nemo perferendis magnam!
            </p>
          </div>
          <motion.div
            className="btn btn-primary mx-35 md:mx-20"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            More about this
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
