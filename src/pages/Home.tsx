import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg.jpg";
import { Download, Square } from "lucide-react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import PhoneView from "../components/PhoneView";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="w-full bg-primary h-[100px]"></div>
      <div className="flex align-middle justify-center mt-10">
        <div className="avatar">
          <div className="hero bg-base-200 w-[900px] h-[600px] pt-[100px] mt-10">
            <div className="hero-content flex-col lg:flex-row">
              <motion.img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Image animée"
                className="max-w-[400px] max-h-[400px] object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }} // Départ invisible et plus petit
                transition={{ duration: 1.5, ease: "easeOut" }}
                whileInView={{ opacity: 1, scale: 1 }}
                // Animation fluide sur 1.5s
              />

              <div className="pl-5">
                <AnimatedText text="Hello I'm" color="white"></AnimatedText>
                <AnimatedText
                  text="Iantso Christian"
                  color="blue-400"
                ></AnimatedText>
                <AnimatedText
                  text="FullStack developper"
                  color="primary"
                ></AnimatedText>
                <div className="mt-10 ml-[50px]">
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

      <div>
        <div className="flex gap-x-10 mt-[300px] ml-[300px] relative">
          <Square className="text-primary fill-primary rotate-45 mt-2"></Square>
          <p className="text-3xl relative">
            <AnimatedText text="My projects" color="white"></AnimatedText>
          </p>
          <div className="absolute left-[50px] bottom-[-5px] w-60 h-[4px] bg-blue-500"></div>
        </div>
        <div className="mx-auto mb-40 hero bg-base-200 w-[1600px] h-[800px] pt-[100px] mt-5 flex pl-10">
          <PhoneView></PhoneView>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
