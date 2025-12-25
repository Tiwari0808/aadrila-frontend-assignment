import { motion } from "framer-motion";

export default function IntroLogo({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#FDF8F2] z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }} // Smooth exit for background
    >
      <motion.div 
        className="flex items-center gap-4" 
        layoutId="aadrila-logo"
        // THIS CONTROLS THE SPEED OF THE LOGO MOVING TO THE CORNER
        transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }} 
      >
        
        <motion.img
          src="/Group 46.png"
          className="w-25.5 h-[97.48px] object-contain"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'backOut' }}
        />

        <div className="relative w-[238.23px] h-[68.73px] overflow-hidden">
          <motion.img
            src="/Group 45.png"
            className="w-full h-full object-contain origin-left"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            onAnimationComplete={() => setTimeout(onComplete, 1000)} // Pause before moving
          />
        </div>

      </motion.div>
    </motion.div>
  );
}


