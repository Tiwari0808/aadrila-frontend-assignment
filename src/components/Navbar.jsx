import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", active: true },
    { name: "Industries" },
    { name: "Products" },
    { name: "Blog" },
    { name: "Contact Us" },
    { name: "About Us" },
  ];

  return (
    <nav className="w-full px-6 md:px-15 py-6 h-[85px] absolute top-0 left-0 z-50 bg-white/2 backdrop-blur-[3px] border-b border-white/10">
      <div className="relative flex items-center justify-between h-full">
        <motion.div
          className="flex items-center gap-2"
          layoutId="aadrila-logo"
          transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}>
          <img
            src="/Group 46.png"
            className="w-[40px] h-[38px] md:w-[52px] md:h-[50px]"
          />
          <img
            src="/Group 45.png"
            className="w-[100px] md:w-[122px] h-auto object-contain"
          />
        </motion.div>

        <motion.div
          className="hidden lg:flex absolute font-manrope font-medium text-[16px] left-1/2 -translate-x-1/2 gap-8 text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}>
          {menuItems.map((item) => (
            <span
              key={item.name}
              className={
                item.active
                  ? "text-[#3E6EB4] cursor-pointer"
                  : "cursor-pointer hover:text-[#3E6EB4] transition-colors"
              }>
              {item.name}
            </span>
          ))}
        </motion.div>

        <motion.button
          className="hidden lg:block bg-[#3E6EB4] text-white px-8 py-2.5 rounded-full font-manrope font-medium"
          initial={{ opacity: 0, x: 60, y: -40 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: "easeOut" }}>
          Get a Demo
        </motion.button>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 p-2 z-50">
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current block origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-current block"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current block origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu  */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 lg:hidden">
            {menuItems.map((item, idx) => (
              <motion.span
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`text-2xl font-manrope font-semibold ${
                  item.active ? "text-[#3E6EB4]" : "text-gray-800"
                }`}
                onClick={() => setIsOpen(false)}>
                {item.name}
              </motion.span>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 bg-[#3E6EB4] text-white px-10 py-4 rounded-full font-manrope font-bold text-lg"
              onClick={() => setIsOpen(false)}>
              Get a Demo
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
