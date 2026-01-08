import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiFileText, FiUser, FiBriefcase, FiCode } from 'react-icons/fi';

const ResumeCarousel = ({ isVisible, onClose }) => {
  const [currentResume, setCurrentResume] = useState(0);
  const [showTreeRoots, setShowTreeRoots] = useState(false);

  const resumes = [
    {
      id: 1,
      title: "Finance Professional",
      description: "Comprehensive financial analysis and management portfolio",
      color: "from-blue-500 to-indigo-600",
      darkColor: "from-blue-400 to-indigo-500",
      icon: FiBriefcase,
      file: "/resume-finance.pdf"
    },
    {
      id: 2,
      title: "Business Analyst",
      description: "Strategic business intelligence and analytics expertise",
      color: "from-green-500 to-emerald-600",
      darkColor: "from-green-400 to-emerald-500",
      icon: FiUser,
      file: "/resume-business.pdf"
    },
    {
      id: 3,
      title: "Project Manager",
      description: "Leadership and project coordination achievements",
      color: "from-purple-500 to-violet-600",
      darkColor: "from-purple-400 to-violet-500",
      icon: FiCode,
      file: "/resume-project.pdf"
    },
    {
      id: 4,
      title: "Complete Portfolio",
      description: "Full professional experience and achievements",
      color: "from-orange-500 to-red-600",
      darkColor: "from-orange-400 to-red-500",
      icon: FiFileText,
      file: "/resume-complete.pdf"
    }
  ];

  useEffect(() => {
    if (isVisible) {
      setShowTreeRoots(true);
      const timer = setTimeout(() => {
        setShowTreeRoots(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const nextResume = () => {
    setCurrentResume((prev) => (prev + 1) % resumes.length);
  };

  const prevResume = () => {
    setCurrentResume((prev) => (prev - 1 + resumes.length) % resumes.length);
  };

  const TreeRoots = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main trunk */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: showTreeRoots ? "100%" : 0, opacity: showTreeRoots ? 0.8 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-1/2 bottom-0 w-2 bg-gradient-to-t from-amber-600 to-amber-400 dark:from-amber-500 dark:to-amber-300 rounded-t-full transform -translate-x-1/2"
      />
      
      {/* Root branches */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: showTreeRoots ? 1 : 0, 
            opacity: showTreeRoots ? 0.6 : 0 
          }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2 + i * 0.1,
            ease: "easeOut" 
          }}
          className={`absolute bottom-0 w-1 bg-gradient-to-t from-amber-700 to-transparent dark:from-amber-400 rounded-t-full`}
          style={{
            left: `${20 + i * 10}%`,
            height: `${30 + Math.sin(i) * 20}%`,
            transform: `rotate(${-20 + i * 5}deg)`,
            transformOrigin: 'bottom center'
          }}
        />
      ))}
      
      {/* Leaves/resume cards positions */}
      {resumes.map((resume, index) => (
        <motion.div
          key={resume.id}
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={{ 
            scale: showTreeRoots ? 1 : 0, 
            opacity: showTreeRoots ? 1 : 0,
            y: showTreeRoots ? 0 : 50
          }}
          transition={{ 
            duration: 0.6, 
            delay: 1 + index * 0.1,
            ease: "backOut" 
          }}
          className="absolute"
          style={{
            left: `${15 + index * 20}%`,
            top: `${20 + Math.sin(index) * 15}%`,
          }}
        >
          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${resume.color} dark:bg-gradient-to-r dark:${resume.darkColor} animate-pulse`} />
        </motion.div>
      ))}
    </div>
  );

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <TreeRoots />
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="relative max-w-4xl w-full mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors z-10"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Resume carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentResume}
                initial={{ opacity: 0, x: 100, rotateY: 45 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -45 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="glass dark:glass-dark rounded-3xl p-8 border border-white/20 dark:border-white/10 backdrop-blur-xl"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Resume preview */}
                  <div className="relative">
                    <div className={`aspect-[3/4] rounded-2xl bg-gradient-to-br ${resumes[currentResume].color} dark:bg-gradient-to-br dark:${resumes[currentResume].darkColor} p-1 shadow-2xl`}>
                      <div className="w-full h-full bg-white dark:bg-secondary-900 rounded-xl p-6 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-700 dark:to-secondary-800 flex items-center justify-center mb-4">
                          {React.createElement(resumes[currentResume].icon, { 
                            className: "w-8 h-8 text-secondary-600 dark:text-secondary-300" 
                          })}
                        </div>
                        <div className="text-center">
                          <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                            {resumes[currentResume].title}
                          </h3>
                          <div className="space-y-2">
                            {[...Array(8)].map((_, i) => (
                              <div 
                                key={i}
                                className={`h-2 rounded-full bg-secondary-200 dark:bg-secondary-700 ${
                                  i % 3 === 0 ? 'w-full' : i % 3 === 1 ? 'w-3/4' : 'w-1/2'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 opacity-80"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-accent-400 to-primary-400 opacity-60"
                    />
                  </div>

                  {/* Resume details */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold gradient-text-primary mb-2">
                        {resumes[currentResume].title}
                      </h2>
                      <p className="text-secondary-600 dark:text-secondary-400">
                        {resumes[currentResume].description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${resumes[currentResume].color}`} />
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">
                          Tailored for specific roles and industries
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${resumes[currentResume].color}`} />
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">
                          Optimized for ATS systems
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${resumes[currentResume].color}`} />
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">
                          Professional design and formatting
                        </span>
                      </div>
                    </div>

                    {/* Download button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${resumes[currentResume].color} dark:bg-gradient-to-r dark:${resumes[currentResume].darkColor} text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300`}
                      onClick={() => {
                        // Download logic here
                        window.open(resumes[currentResume].file, '_blank');
                      }}
                    >
                      <FiDownload className="w-5 h-5" />
                      <span>Download Resume</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={prevResume}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full glass dark:glass-dark border border-white/20 dark:border-white/10 flex items-center justify-center text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextResume}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full glass dark:glass-dark border border-white/20 dark:border-white/10 flex items-center justify-center text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Resume indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {resumes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentResume(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentResume
                    ? `bg-gradient-to-r ${resumes[currentResume].color} scale-125`
                    : 'bg-secondary-300 dark:bg-secondary-600 hover:bg-secondary-400 dark:hover:bg-secondary-500'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeCarousel;