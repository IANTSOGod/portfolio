import { Square } from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import Header from "../components/Header";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Caroussel from "../components/Caroussel";
import List from "../components/List";
import Back from "../assets/back.webp";
import { Electricbg } from "../components/ElectricBg";

export default function About() {
  const skillslides = [
    {
      id: 1,
      img: Back,
      title: "Backend Developer",
      text: "I developed my backend with JS frameworks like ExpressJS and NestJS, which I write in TypeScript. I also have some experience with CodeIgniter and Java/J2EE. I work with MySQL and MongoDB for databases.",
    },
    {
      id: 2,
      img: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      title: "Frontend Developer",
      text: "I know frontend basics like HTML/CSS/JS and Tailwind, but I prefer to use ReactJS and NextJS for my projects.",
    },
    {
      id: 3,
      img: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      title: "Mobile Developer",
      text: "I have some experience with React Native and Flutter for mobile development.",
    },
  ];
  return (
    <div className="overflow-x-hidden">
      <Electricbg></Electricbg>
      <Header />
      <div className="relative flex md:flex-row flex-col justify-center md:mt-30 mt-10 min-h-screen px-5">
        <motion.img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt="Animated Image"
          className="max-w-[400px] md:max-w-full md:mt-0 max-h-[400px] object-cover rounded-lg shadow-lg z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileInView={{ opacity: 1, scale: 1 }}
        />
        <div className="md:w-[600px] w-full bg-base-200 h-[400px] relative z-20 p-5">
          {[
            { label: "Nom", value: "RAZAFINDRAZAKA" },
            { label: "Prénoms", value: "Iantso Christian" },
            { label: "Date de Naissance", value: "04/01/2005" },
            { label: "Adresse", value: "Antananarivo, Madagascar" },
            { label: "Job", value: "Student" },
            { label: "Field", value: "I.T" },
          ].map((item, index) => (
            <div
              key={index}
              className={
                index > 3
                  ? `flex flex-row gap-x-10 text-2xl mb-2`
                  : `flex flex-col md:flex-row gap-x-10 text-2xl mb-2`
              }
            >
              <p className="text-primary">{item.label}:</p>
              <AnimatedText text={item.value} color="base-300" size={1} />
            </div>
          ))}
        </div>
      </div>
      <div className="md:mt-[-400px]">
        <Section title="My Scolarship" />
        <div className="bg-base-200 w-5/6 h-auto mx-auto mt-10 mb-10">
          <List />
        </div>

        <Section title="My Skills" />
        <Caroussel slides={skillslides} />

        <Section title="My Hobbies" />
        <div className="bg-base-200 w-5/6 h-[400px] mx-auto mt-10 mb-10"></div>

        <Section title="My Projects" />
        <div className="bg-base-200 w-5/6 h-[400px] mx-auto mt-10 mb-10"></div>
      </div>
      <Footer />
    </div>
  );
}

function Section({ title }: { title: string }) {
  return (
    <div>
      <div className="flex gap-x-10 mt-[100px] md:ml-[300px] ml-5 relative">
        <Square className="text-primary fill-primary rotate-45 mt-2" />
        <div className="text-3xl relative">
          <AnimatedText text={title} color="white" size={3} />
        </div>
        <div className="absolute left-[50px] bottom-[-5px] w-60 h-[4px] bg-blue-500"></div>
      </div>
    </div>
  );
}
