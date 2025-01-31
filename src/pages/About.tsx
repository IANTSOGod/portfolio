// import { Electricbg } from "../components/ElectricBg";
import { Square } from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import Header from "../components/Header";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Caroussel from "../components/Caroussel";

export default function About() {
  return (
    <div>
      {/* <Electricbg></Electricbg> */}
      <Header></Header>
      <div className="flex md:flex-row flex-col justify-center mt-30 h-screen">
        <motion.img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt="Image animée"
          className="max-w-[400px] max-h-[400px] object-cover rounded-lg shadow-lg z-0"
          initial={{ opacity: 0, scale: 0.8 }} // Départ invisible et plus petit
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileInView={{ opacity: 1, scale: 1 }}
          // Animation fluide sur 1.5s
        />
        <div className="w-[600px] bg-base-200 h-[400px]">
          <div className="flex gap-x-10 text-2xl mx-auto mt-20 ml-10 mb-2">
            <p className="text-primary">Nom :</p>
            <p>
              <AnimatedText
                text="RAZAFINDRAZAKA"
                color="white"
                size={1}
              ></AnimatedText>
            </p>
          </div>
          <div className="flex gap-x-10 text-2xl ml-10 mb-2">
            <p className="text-primary">Prénoms:</p>
            <p>
              <AnimatedText
                text="Iantso Christian"
                color="white"
                size={1}
              ></AnimatedText>
            </p>
          </div>
          <div className="flex gap-x-10 text-2xl ml-10 mb-2">
            <p className="text-primary">Date de Naissance:</p>
            <p>
              <AnimatedText
                text="04/01/2005"
                color="white"
                size={1}
              ></AnimatedText>
            </p>
          </div>
          <div className="flex gap-x-10 text-2xl ml-10 mb-2">
            <p className="text-primary">Adresse:</p>
            <p>
              <AnimatedText
                text="Antananarivo,Madagascar"
                color="white"
                size={1}
              ></AnimatedText>
            </p>
          </div>
          <div className="flex gap-x-10 text-2xl ml-10 mb-2">
            <p className="text-primary">Job:</p>
            <p>
              <AnimatedText
                text="Student"
                color="white"
                size={1}
              ></AnimatedText>
            </p>
          </div>
          <div className="flex gap-x-10 text-2xl ml-10 mb-2">
            <p className="text-primary">Field:</p>
            <p>
              <AnimatedText text="I.T" color="white" size={1}></AnimatedText>
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-x-10 mt-[-400px] md:ml-[300px] ml-5 relative">
          <Square className="text-primary fill-primary rotate-45 mt-2"></Square>
          <div className="text-3xl relative">
            <AnimatedText
              text="My scolarity"
              color="white"
              size={3}
            ></AnimatedText>
          </div>
          <div className="absolute left-[50px] bottom-[-5px] w-60 h-[4px] bg-blue-500"></div>
        </div>
      </div>
      <div className="bg-base-200 w-5/6 h-[400px] mx-auto mt-10 mb-10"></div>

      <div>
        <div className="flex gap-x-10 mt-[100px] md:ml-[300px] ml-5 relative">
          <Square className="text-primary fill-primary rotate-45 mt-2"></Square>
          <div className="text-3xl relative">
            <AnimatedText
              text="My Skills"
              color="white"
              size={3}
            ></AnimatedText>
          </div>
          <div className="absolute left-[50px] bottom-[-5px] w-60 h-[4px] bg-blue-500"></div>
        </div>
      </div>
      <div className="bg-base-200 w-5/6 h-[400px] mx-auto mt-10 mb-10"></div>

      <div>
        <div className="flex gap-x-10 mt-[100px] md:ml-[300px] ml-5 relative">
          <Square className="text-primary fill-primary rotate-45 mt-2"></Square>
          <div className="text-3xl relative">
            <AnimatedText
              text="My Hobbies"
              color="white"
              size={3}
            ></AnimatedText>
          </div>
          <div className="absolute left-[50px] bottom-[-5px] w-60 h-[4px] bg-blue-500"></div>
        </div>
      </div>
      <div className="bg-base-200 w-5/6 h-[400px] mx-auto mt-10 mb-10"></div>

      <div className="mt-[200px] md:mt-0">
        <div className="flex gap-x-10 md:mt-[300px] mt-0 md:ml-[300px] ml-5 relative">
          <Square className="text-primary fill-primary rotate-45 mt-2"></Square>
          <div className="text-3xl relative">
            <AnimatedText
              text="My projects"
              color="white"
              size={3}
            ></AnimatedText>
          </div>
          <div className="absolute left-[50px] bottom-[-5px] w-60 h-[4px] bg-blue-500"></div>
        </div>
        <Caroussel></Caroussel>
      </div>
      <div>
        <div className="flex gap-x-10 mt-[100px] md:ml-[300px] ml-5 relative">
          <Square className="text-primary fill-primary rotate-45 mt-2"></Square>
          <div className="text-3xl relative">
            <AnimatedText
              text="Challenges"
              color="white"
              size={3}
            ></AnimatedText>
          </div>
          <div className="absolute left-[50px] bottom-[-5px] w-60 h-[4px] bg-blue-500"></div>
        </div>
      </div>
      <div className="bg-base-200 w-5/6 h-[400px] mx-auto mt-10 mb-50"></div>

      <Footer></Footer>
    </div>
  );
}
