import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

export default function LoadingScreen({ onLoadingComplete }) {
  const [currentText, setCurrentText] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const texts = [
    "Talavishiraaj Groups",
    "Where innovation meets technology"
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);

    const completeTimeout = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        onLoadingComplete();
      }, 1000);
    }, 4000);

    return () => {
      clearInterval(textInterval);
      clearTimeout(completeTimeout);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-primary via-secondary to-primary flex flex-col items-center justify-center"
        >
          {/* Logo with rotation animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="bg-white rounded-full p-6 shadow-2xl">
              <motion.img
                src={logo}
                alt="Talavishiraaj Logo"
                className="h-24 w-24 object-contain"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Text animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold text-white mb-4"
              >
                {texts[currentText]}
              </motion.h1>
            </AnimatePresence>
          </motion.div>

          {/* Loading dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex space-x-2 mt-8"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-white rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="absolute bottom-8 left-8 right-8 h-1 bg-white/20 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "easeInOut" }}
              className="h-full bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 