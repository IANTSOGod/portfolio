import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg.jpg";
import { Download, Square } from "lucide-react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import PhoneView from "../components/PhoneView";
import Header from "../components/Header";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }}>
      <Header></Header>
      <div className="flex align-middle justify-center md:mt-10 mt-3">
        <div className="avatar">
          <div className="hero md:bg-base-200 bg-none md:w-[900px] w-[400px] h-[600px] md:pt-[100px] md:mt-10 mt-2">
            <div className="hero-content flex-col lg:flex-row">
              <motion.img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Image animée"
                className="max-w-[400px] max-h-[400px] object-cover rounded-lg shadow-lg z-0"
                initial={{ opacity: 0, scale: 0.8 }} // Départ invisible et plus petit
                transition={{ duration: 1.5, ease: "easeOut" }}
                whileInView={{ opacity: 1, scale: 1 }}
                // Animation fluide sur 1.5s
              />

              <div className="pl-5 flex flex-col md:bg-none bg-base-200 mt-[-100px] md:mt-0 w-[370px] md:w-auto z-50 pt-5">
                <AnimatedText text="Hello I'm" color="white"></AnimatedText>
                <AnimatedText
                  text="Iantso Christian"
                  color="blue-400"
                ></AnimatedText>
                <AnimatedText
                  text="FullStack developper"
                  color="primary"
                ></AnimatedText>
                <div className="mt-10 ml-[10px] md:ml-[50px] mb-10">
                  <div
                    className="btn btn-primary mr-10"
                    onClick={() => {
                      navigate("/portfolio/about");
                    }}
                  >
                    More about me
                  </div>
                  <div className="btn btn-outline">
                    <Download></Download> Get my cv
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[200px] md:mt-0">
        <div className="flex gap-x-10 md:mt-[300px] mt-0 md:ml-[300px] ml-5 relative">
          <Square className="text-primary fill-primary rotate-45 mt-2"></Square>
          <p className="text-3xl relative">
            <AnimatedText text="My projects" color="white"></AnimatedText>
          </p>
          <div className="absolute left-[50px] bottom-[-5px] w-60 h-[4px] bg-blue-500"></div>
        </div>
        <div className="mx-auto mb-40 hero bg-base-200 md:w-[1600px] md:h-[800px] w-[400px] h-[400px] pt-[100px] mt-5 flex pl-10">
          <PhoneView></PhoneView>
          <div className="ml-10 mt-[-100px] md:mt-0">
            <AnimatedText text="Delivery" color="white"></AnimatedText>
            <p className="pl-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nam
              quo pariatur consequatur ex expedita modi voluptas quam atque
              harum delectus, fuga consequuntur, voluptatum accusantium esse
              repudiandae rem illo cupiditate!
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
