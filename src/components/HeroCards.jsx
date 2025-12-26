import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const states = [
  ["License.png", "Doc.png", "invoice.png"],
  ["invoice.png", "License.png", "Doc.png"],
  ["Doc.png", "invoice.png", "License.png"],
];

export default function HeroCards() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setStep((s) => (s + 1) % states.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  const stack = states[step];

  return (
    <div className="relative w-full h-full">
      {stack.map((img, i) => {
        let xVal = 0;
        let yVal = 0;
        let scaleVal = 1;
        let zIndexVal = 1;
        let blurVal = "0px";

        // Slot layout
        if (i === 0) {
          // LEFT (small + blurred)
          xVal = -220;
          yVal = 40;
          scaleVal = 0.6;
          zIndexVal = 5;
          blurVal = "12px";
        } else if (i === 1) {
          // CENTER (main)
          xVal = 0;
          yVal = 0;
          scaleVal = 1;
          zIndexVal = 10;
          blurVal = "0px";
        } else {
          // RIGHT (small + blurred)
          xVal = 220;
          yVal = 40;
          scaleVal = 0.6;
          zIndexVal = 5;
          blurVal = "12px";
        }

        return (
          <motion.div
            key={img}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              translateX: "-50%",
              translateY: "-50%",
              zIndex: zIndexVal,
            }}
            animate={{
              x: xVal,
              y: yVal,
              scale: scaleVal,
              filter: `blur(${blurVal})`,
            }}
            transition={{
              duration: 1.2,
              ease: [0.4, 0, 0.2, 1],
            }}>
            <div className="relative w-[380px] overflow-hidden rounded-xl">
              {/* Card image */}
              <img
                src={`/${img}`}
                className="w-full object-contain"
                alt="Hero Card"
              />

              {/* Scan effect */}
              {i === 1 && (
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-[295px] h-[120px]"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, #CD6028, transparent)",
                    opacity: 0.7,
                  }}
                  initial={{ top: "-120px" }}
                  animate={{ top: ["-120px", "400px", "-120px"] }}
                  transition={{
                    duration: 3,
                    delay: 1,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                  }}
                />
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
