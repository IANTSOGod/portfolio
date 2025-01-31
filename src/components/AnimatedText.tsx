import { motion } from "framer-motion";

interface AnimatedTextInterface {
  text: string;
  color: string;
}

export default function AnimatedText({ text, color }: AnimatedTextInterface) {
  return (
    <div className={`flex gap-x-10 font-[PoppinsBlack]`}>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }, // Délai entre chaque lettre
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className={`text-3xl font-bold text-${color}`}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
