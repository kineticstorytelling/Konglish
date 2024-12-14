'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AnimatedTitle() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < 3) {
        setStep(step + 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="relative h-24 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="korean"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold absolute"
          >
            Korean
          </motion.div>
        )}
        
        {step === 1 && (
          <motion.div
            key="ko"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold absolute"
          >
            Ko
          </motion.div>
        )}

        {step === 2 && (
          <>
            <motion.div
              key="ko-static"
              initial={{ x: -20 }}
              animate={{ x: -20 }}
              className="text-5xl font-bold absolute"
            >
              Ko
            </motion.div>
            <motion.div
              key="english"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 20 }}
              exit={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold absolute"
            >
              nglish
            </motion.div>
          </>
        )}

        {step === 3 && (
          <motion.div
            key="konglish"
            initial={{ scale: 1 }}
            animate={{ 
              scale: [1, 1.1, 1],
              transition: { duration: 0.8, times: [0, 0.5, 1] }
            }}
            className="text-5xl font-bold absolute"
          >
            Konglish
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
