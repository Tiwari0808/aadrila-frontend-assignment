import { motion } from "framer-motion";

export default function IntroLogo({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#FDF8F2] z-50"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0.95,
        transition: { duration: 1, ease: "easeInOut" },
      }}>
      <motion.div
        className="relative flex items-center gap-2 md:gap-4"
        layoutId="aadrila-logo"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
        <motion.img
          src="/Group 46.png"
          className="w-[60px] h-[57px] md:w-[102px] md:h-[97.48px] object-contain"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
        />

        <div className="relative w-[140px] h-[40px] md:w-[238.23px] md:h-[68px] overflow-hidden">
          <motion.img
            src="/Group 45.png"
            className="w-full h-full object-contain origin-left"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            onAnimationComplete={() => setTimeout(onComplete, 1000)}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
