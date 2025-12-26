import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroCards from "../components/HeroCards";
import Msg from "../components/Msg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { x: -680, opacity: 1 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2 },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/bg.png')] relative overflow-hidden">
      <motion.div className="relative z-10">
        <Navbar />

        <motion.div
          className="min-h-screen h-auto md:h-screen flex flex-col-reverse md:flex-row items-center md:items-center px-6 md:px-12 pt-2 md:pt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          {/* Left content  */}
          <div className="max-w-2xl text-center md:text-left z-20">
            <motion.h1
              variants={itemVariants}
              className="font-raleway font-bold text-4xl md:text-[48px] md:leading-[68.25px] mb-6 max-w-[536px]">
              <span className="bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              <span className="text-[#1F2937]">Document Automation</span>
              <br className="hidden md:block" />
              <span className="text-[#1F2937]"> & Fraud Detection</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-manrope font-medium text-lg md:text-[20px] md:leading-[31.2px] text-[#1E1C26] mb-8 max-w-[536px]">
              Enhance security, accuracy, and efficiency with our cutting-edge
              AI solutions for seamless document processing and fraud
              prevention.
            </motion.p>

            {/* Buttons Container */}
            <motion.div
              variants={itemVariants}
              inherit={false}
              className="flex flex-col md:flex-row items-center max-w-[536px] gap-4 md:gap-[10px]">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.3, ease: "easeIn" }}
                className="w-full md:w-[250px] h-[52px] px-6 md:px-[80px] py-[16px] rounded-[160px] bg-[#3E6EB4] text-white font-raleway font-medium text-[16px] leading-[20px] flex items-center justify-center hover:brightness-110 transition">
                Get a Demo
              </motion.button>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.3, ease: "easeIn" }}
                className="w-full md:w-[250px] h-[52px] rounded-[160px] bg-[#3E6EB4] text-white font-raleway font-medium text-[16px] leading-[20px] flex items-center justify-center hover:brightness-110 transition">
                Explore Solutions
              </motion.button>
            </motion.div>
          </div>

          {/* Right side graphic */}
          <motion.div
            className="relative md:absolute mt-16 md:mt-0 right-auto md:right-[40px] top-auto md:top-1/2 md:-translate-y-1/2 flex justify-center items-center"
            style={{
              width: "100%",
              maxWidth: "635px",
              height: "400px", 
              mdHeight: "547px",
            }}>
            <div className="scale-75 md:scale-100 w-full h-full flex justify-center items-center">
              <HeroCards />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <div><Msg/></div>
    </div>
  );
}
