import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiFileText, FiBriefcase, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const InlineResumeCarousel = ({ onClose }) => {
  const [currentResume, setCurrentResume] = useState(0);

  const resumes = [
    {
      id: 1,
      title: "Professional Resume",
      description: "Complete professional experience and achievements",
      color: "from-blue-500 to-indigo-600",
      darkColor: "from-blue-400 to-indigo-500",
      icon: FiFileText,
      file: "/resume1.pdf" // Replace with your actual resume file
    },
    {
      id: 2,
      title: "Technical Portfolio",
      description: "Technical skills and project portfolio",
      color: "from-purple-500 to-violet-600",
      darkColor: "from-purple-400 to-violet-500",
      icon: FiBriefcase,
      file: "/resume2.pdf" // Replace with your actual resume file
    }
  ];

  const nextResume = () => {
    setCurrentResume((prev) => (prev + 1) % resumes.length);
  };

  const prevResume = () => {
    setCurrentResume((prev) => (prev - 1 + resumes.length) % resumes.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.5, ease: "backOut" }}
      className="w-full max-w-xs mx-auto lg:mx-0"
    >
      {/* Close button */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-base font-semibold text-secondary-900 dark:text-white">
          Resumes
        </h3>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Resume carousel */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentResume}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-secondary-800 rounded-xl p-4 border border-white/20 dark:border-white/10 shadow-lg"
          >
            {/* Resume preview */}
            <div className="relative mb-4">
              <div className={`aspect-[3/4] rounded-lg bg-gradient-to-br ${resumes[currentResume].color} dark:bg-gradient-to-br dark:${resumes[currentResume].darkColor} p-0.5 shadow-md`}>
                <div className="w-full h-full bg-white dark:bg-secondary-900 rounded-md p-3 flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-700 dark:to-secondary-800 flex items-center justify-center mb-2">
                    {React.createElement(resumes[currentResume].icon, { 
                      className: "w-4 h-4 text-secondary-600 dark:text-secondary-300" 
                    })}
                  </div>
                  <div className="text-center w-full">
                    <h4 className="text-xs font-bold text-secondary-900 dark:text-white mb-2">
                      {resumes[currentResume].title}
                    </h4>
                    <div className="space-y-1">
                      {[...Array(4)].map((_, i) => (
                        <div 
                          key={i}
                          className={`h-1 rounded-full bg-secondary-200 dark:bg-secondary-700 ${
                            i % 3 === 0 ? 'w-full' : i % 3 === 1 ? 'w-3/4 mx-auto' : 'w-1/2 mx-auto'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume details */}
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-bold text-secondary-900 dark:text-white mb-1">
                  {resumes[currentResume].title}
                </h4>
                <p className="text-xs text-secondary-600 dark:text-secondary-400">
                  {resumes[currentResume].description}
                </p>
              </div>

              {/* Download button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r ${resumes[currentResume].color} dark:bg-gradient-to-r dark:${resumes[currentResume].darkColor} text-white py-2.5 rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all duration-300 text-sm`}
                onClick={() => {
                  window.open(resumes[currentResume].file, '_blank');
                }}
              >
                <FiDownload className="w-3.5 h-3.5" />
                <span>Download</span>
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation - Only show if more than 1 resume */}
        {resumes.length > 1 && (
          <div className="flex items-center justify-between mt-3">
            <button
              onClick={prevResume}
              className="p-1.5 rounded-lg bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-colors"
            >
              <FiChevronLeft className="w-3.5 h-3.5" />
            </button>
            
            <div className="flex space-x-1.5">
              {resumes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentResume(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentResume
                      ? `bg-gradient-to-r ${resumes[currentResume].color}`
                      : 'bg-secondary-300 dark:bg-secondary-600'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextResume}
              className="p-1.5 rounded-lg bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-colors"
            >
              <FiChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default InlineResumeCarousel;