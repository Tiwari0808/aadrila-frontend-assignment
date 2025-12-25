import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="w-full px-12 py-6 absolute top-0 left-0 z-10 bg-transparent">

      <div className="relative flex items-center justify-between">

        {/* LOGO — do not touch */}
        <motion.div 
          className="flex items-center gap-2"
          layoutId="aadrila-logo"
          transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <img src="/Group 46.png" className="w-[52px] h-[50px]" />
          <img src="/Group 45.png" className="w-[122] h-[35.36px]" />
        </motion.div>

        {/* Invisible spacer to lock layout width */}
        <div className="w-[600px]" />

        {/* Animated menu — absolute so it does NOT shift logo */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          <span>Home</span>
          <span>Industries</span>
          <span>Products</span>
          <span>Blog</span>
          <span>Contact Us</span>
          <span>About Us</span>
        </motion.div>

        {/* Button */}
        <motion.button
          className="bg-blue-600 text-white px-6 py-2 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Get a Demo
        </motion.button>

      </div>
    </nav>
  );
}

// import { motion } from "framer-motion";

// export default function Navbar() {
//     return (
//         <nav className="w-full flex justify-between items-center px-12 py-6 absolute top-0 left-0 z-10">

//             <motion.div 
//                 className="flex items-center gap-2" 
//                 layoutId="aadrila-logo"
//                 // MUST MATCH IntroLogo's transition exactly
//                 transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
//             >
//                 <img src="/Group 46.png" className="w-8" />
//                 <img src="/Group 45.png" className="w-28" />
//             </motion.div>

//             <div className="flex gap-8 text-gray-700">
//                 <span>Home</span>
//                 <span>Industries</span>
//                 <span>Products</span>
//                 <span>Blog</span>
//                 <span>Contact Us</span>
//                 <span>About Us</span>
//             </div>

//             <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
//                 Get a Demo
//             </button>
//         </nav>
//     );
// }


