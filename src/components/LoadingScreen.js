import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Show content after initial delay
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Simulate loading progress
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => {
            setLoadingComplete(true);
            setTimeout(onLoadingComplete, 800);
          }, 1000);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 120);

    return () => {
      clearTimeout(contentTimer);
      clearInterval(progressTimer);
    };
  }, [onLoadingComplete]);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${Math.min(progress, 100)}%`,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {!loadingComplete && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
                  "radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
                  "radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 70%)",
                  "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-full h-full"
            />
          </div>

          {/* Main Content */}
          <div className="relative text-center">
            {/* Lottie Animation */}
            <AnimatePresence>
              {showContent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [-5, 5, -5]
                  }}
                  transition={{
                    duration: 1,
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="mb-16"
                >
                  <div className="w-64 h-64 mx-auto">
                    <DotLottieReact
                      src="https://lottie.host/560f732b-0a8d-4287-97f7-c3609c119fb0/0KBdmUHYiA.lottie"
                      loop
                      autoplay
                      className="w-full h-full"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="w-80 mx-auto"
            >
              <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-4">
                <motion.div
                  variants={progressVariants}
                  initial="hidden"
                  animate="visible"
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full relative"
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    animate={{
                      x: [-100, 400]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  />
                </motion.div>
              </div>
              
              {/* Progress Percentage */}
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-center text-sm text-slate-500 dark:text-slate-400 font-medium"
              >
                {Math.round(progress)}%
              </motion.div>
            </motion.div>

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-20, -80, -20],
                  x: [0, Math.random() * 60 - 30, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${70 + Math.random() * 20}%`
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;