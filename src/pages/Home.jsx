import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5, // Wait for logo to start moving
        },
    },
};

const itemVariants = {
    hidden: { x: -30, opacity: 1 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1.8, ease: "easeIn" },
    },
};

export default function Home() {
    return (
        <motion.div className="min-h-screen bg-[url('/bg.png')] relative overflow-hidden"
        initial={{opacity: 0.1}}
        animate={{opacity: 1}}
        transition={{duration: 2.4, ease: 'easeInOut'}}>
            
            <Navbar />

            {/* Hero Section - This is what fades in now */}
            <motion.div
                className="h-screen flex items-center px-12 pt-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Left content */}
                <div className="max-w-2xl">
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
                    >
                        AI-Powered <br />
                        <span className="text-gray-800">Document Automation</span> <br />
                        & Fraud Detection
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-gray-600 mb-8 max-w-lg"
                    >
                        Enhance security, accuracy, and efficiency with our cutting-edge AI
                        solutions.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex gap-4">
                        <button className="bg-[#E8F0FE] text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition">
                            Get a Demo
                        </button>
                        <button className="border border-gray-300 px-8 py-3 rounded-full font-medium text-gray-700 hover:border-gray-800 transition">
                            Explore Solutions
                        </button>
                    </motion.div>
                </div>

                {/* Right side (Hero graphics) */}
                <motion.div
                    variants={itemVariants}
                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3"
                >
                    {/* <img src="/hero-graphic.png" alt="Hero" /> */}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}



