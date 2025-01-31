import { useNavigate } from "react-router-dom";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import Header from "../components/Header";
// import { Electricbg } from "../components/ElectricBg";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <Electricbg></Electricbg> */}
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
                <AnimatedText
                  text="Hello I'm"
                  color="white"
                  size={3}
                ></AnimatedText>
                <AnimatedText
                  text="Iantso Christian"
                  color="blue-400"
                  size={3}
                ></AnimatedText>
                <AnimatedText
                  text="FullStack developper"
                  color="primary"
                  size={3}
                ></AnimatedText>
                <div className="mt-10 ml-[10px] md:ml-[50px] mb-10">
                  <motion.div
                    className="btn btn-primary mr-10"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                      navigate("/portfolio/about");
                    }}
                  >
                    More about me
                  </motion.div>
                  <motion.div
                    className="btn btn-outline"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Download></Download> Get my cv
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
