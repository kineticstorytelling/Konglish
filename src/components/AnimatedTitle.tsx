'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AnimatedTitle() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < 4) {
        setStep(step + 1);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="relative h-24 flex justify-center items-center">
      <AnimatePresence mode="wait">
        {/* Step 0: Show Korean */}
        {step === 0 && (
          <motion.div 
            className="text-5xl font-bold "
            // absolute was removed
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Korean
          </motion.div>
        )}

        {/* Steps 1-3: Ko and transitions */}
        {(step >= 1 && step <= 3) && (
          <div className="text-5xl font-bold absolute flex">
            <motion.div
              initial={{ x: step === 1 ? 0 : -60 }}
              animate={{ x: -60 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{  zIndex: 1 }}
              // removed position relative from style
            >
              Ko
            </motion.div>
            {step === 1 && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                rean
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ marginLeft: "-50px" }}
              >
                English
              </motion.div>
            )}
            {step === 3 && (
              <motion.div style={{ marginLeft: "120px" }}>
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  E
                </motion.span>
                nglish
              </motion.div>
            )}
          </div>
        )}

        {/* Step 4: Final Konglish */}
        {step === 4 && (
          <motion.div 
            className="text-5xl font-bold absolute"
          >
            <motion.span
              style={{ position: 'relative', zIndex: 1 }}
            >
              Ko
            </motion.span>
            <motion.span
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              nglish
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
