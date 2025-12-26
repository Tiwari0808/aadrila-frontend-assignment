import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="w-full px-15 py-6 h-[85px] absolute top-0 left-0 z-10 bg-white/2 backdrop-blur-[3px] border-b border-white/10">
      <div className="relative flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          layoutId="aadrila-logo"
          transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}>
          <img src="/Group 46.png" className="w-[52px] h-[50px]" />
          <img src="/Group 45.png" className="w-[122] h-[35.36px]" />
        </motion.div>

        <div className="w-[600px]" />

        <motion.div
          className="absolute font-manrope font-medium text-[16px] left-1/2 -translate-x-1/2 flex gap-8 text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}>
          <span className="text-[#3E6EB4]">Home</span>
          <span>Industries</span>
          <span>Products</span>
          <span>Blog</span>
          <span>Contact Us</span>
          <span>About Us</span>
        </motion.div>

        {/* Button */}
        <motion.button
          className="bg-blue-600 text-white px-6 py-2 rounded-full"
          initial={{ opacity: 0, x: 60, y: -40 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: "easeOut" }}>
          Get a Demo
        </motion.button>
      </div>
    </nav>
  );
}
