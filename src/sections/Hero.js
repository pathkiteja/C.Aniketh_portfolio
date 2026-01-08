import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiLinkedin, FiFileText } from 'react-icons/fi';
import Button from '../components/Button';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  const roles = [
    'Finance Professional',
    'Business Analyst', 
    'Project Manager',
    'Strategic Leader'
  ];

  // Track mouse movement for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    // Define all 4 resume files with actual names
    const resumes = [
      { name: 'Resume_Aniketh_1.pdf', url: '/Resume Aniketh (1).pdf' },
      { name: 'Aniketh_Resume.pdf', url: '/Aniketh Resume.pdf' },
      { name: 'Resume_C_Aniketh.pdf', url: '/Resume C.Aniketh.pdf' },
      { name: 'Resume.pdf', url: '/resume.pdf' }
    ];

    // Download each resume
    resumes.forEach((resume, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = resume.url;
        link.download = resume.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 500); // 500ms delay between downloads to avoid browser blocking
    });
  };

  return (
    <>
      <section 
        ref={containerRef}
        id="home" 
        className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-purple-900"
      >
        {/* Interactive Background Effects */}
        <div className="absolute inset-0">
          {/* Mouse-following gradient */}
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: mousePosition.x - 192,
              y: mousePosition.y - 192,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
          />
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid opacity-5"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          {/* Mobile Layout - Original Centered Design */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:hidden"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 text-sm font-medium hover:scale-105 transition-transform cursor-default">
                👋 Hello, I'm
              </span>
            </motion.div>

            {/* Name with hover effects */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 text-secondary-900 dark:text-white cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <span className="gradient-text-primary hover:gradient-text-accent transition-all duration-500">
                ANIKETH CHEELA
              </span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="text-2xl md:text-4xl font-semibold text-secondary-700 dark:text-secondary-300 h-16 flex items-center justify-center">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="gradient-text cursor-default"
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)"
                  }}
                >
                  {roles[currentRole]}
                </motion.span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-400 mb-12 max-w-3xl mx-auto leading-relaxed cursor-default"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Driving business growth through strategic financial analysis, project management, and data-driven insights. Let's transform your business vision into reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="gradient"
                  size="lg"
                  onClick={scrollToProjects}
                  icon={FiArrowRight}
                  iconPosition="right"
                  className="min-w-[200px] hover:shadow-2xl transition-shadow duration-300"
                >
                  View My Work
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  icon={FiFileText}
                  onClick={handleResumeClick}
                  className="min-w-[200px] hover:shadow-2xl transition-shadow duration-300"
                >
                  Download Profile/Resume
                </Button>
              </motion.div>
            </motion.div>

            {/* Original Mobile Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 mb-16 max-w-md mx-auto"
            >
              <motion.div
                className="text-center cursor-default"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-primary-600 dark:text-primary-400"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    textShadow: [
                      "0px 0px 0px rgba(59, 130, 246, 0)",
                      "0px 0px 10px rgba(59, 130, 246, 0.3)",
                      "0px 0px 0px rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  50+
                </motion.div>
                <div className="text-sm text-secondary-600 dark:text-secondary-400">Clients</div>
              </motion.div>
              
              <motion.div
                className="text-center cursor-default"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-accent-600 dark:text-accent-400"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    textShadow: [
                      "0px 0px 0px rgba(168, 85, 247, 0)",
                      "0px 0px 10px rgba(168, 85, 247, 0.3)",
                      "0px 0px 0px rgba(168, 85, 247, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  12
                </motion.div>
                <div className="text-sm text-secondary-600 dark:text-secondary-400">Months Exp</div>
              </motion.div>
              
              <motion.div
                className="text-center cursor-default"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-green-600 dark:text-green-400"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    textShadow: [
                      "0px 0px 0px rgba(34, 197, 94, 0)",
                      "0px 0px 10px rgba(34, 197, 94, 0.3)",
                      "0px 0px 0px rgba(34, 197, 94, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  40+
                </motion.div>
                <div className="text-sm text-secondary-600 dark:text-secondary-400">Active Clients</div>
              </motion.div>
            </motion.div>

            {/* Original Mobile Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-6"
            >
              <motion.a
                href="https://www.linkedin.com/in/cheela-aniketh-a18930227"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-secondary-800 shadow-lg hover:shadow-xl text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin className="w-6 h-6" />
              </motion.a>
              
              <motion.button
                onClick={scrollToContact}
                className="p-3 rounded-full bg-white dark:bg-secondary-800 shadow-lg hover:shadow-xl text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="w-6 h-6 flex items-center justify-center font-semibold text-sm">@</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Desktop Layout - New Left/Right Design */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Greeting */}
              <motion.div variants={itemVariants}>
                <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 text-sm font-medium hover:scale-105 transition-transform cursor-default">
                  👋 Hello, I'm
                </span>
              </motion.div>

              {/* Name with hover effects */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-900 dark:text-white cursor-default"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <span className="gradient-text-primary hover:gradient-text-accent transition-all duration-500">
                  ANIKETH CHEELA
                </span>
              </motion.h1>

              {/* Animated Role */}
              <motion.div variants={itemVariants}>
                <div className="text-xl md:text-3xl font-semibold text-secondary-700 dark:text-secondary-300 h-12 flex items-center">
                  <motion.span
                    key={currentRole}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="gradient-text cursor-default"
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)"
                    }}
                  >
                    {roles[currentRole]}
                  </motion.span>
                </div>
              </motion.div>

              {/* Tagline */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 leading-relaxed cursor-default max-w-lg"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                Driving business growth through strategic financial analysis, project management, and data-driven insights. Let's transform your business vision into reality.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="gradient"
                    size="lg"
                    onClick={scrollToProjects}
                    icon={FiArrowRight}
                    iconPosition="right"
                    className="hover:shadow-2xl transition-shadow duration-300"
                  >
                    View My Work
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    icon={FiFileText}
                    onClick={handleResumeClick}
                    className="hover:shadow-2xl transition-shadow duration-300"
                  >
                    Download Profile/Resume
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social Links with enhanced reactions */}
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-4"
              >
                <motion.a
                  href="https://www.linkedin.com/in/cheela-aniketh-a18930227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-secondary-800 shadow-lg hover:shadow-xl text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.15, 
                    y: -3,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiLinkedin className="w-6 h-6 relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0"
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                
                <motion.button
                  onClick={scrollToContact}
                  className="p-3 rounded-full bg-white dark:bg-secondary-800 shadow-lg hover:shadow-xl text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.15, 
                    y: -3,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="w-6 h-6 flex items-center justify-center font-semibold text-lg relative z-10">@</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0"
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center lg:items-end space-y-8"
            >
              {/* Professional Stats Grid */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md"
              >
                <motion.div
                  className="bg-white dark:bg-secondary-800 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-white/10 text-center cursor-default"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      textShadow: [
                        "0px 0px 0px rgba(59, 130, 246, 0)",
                        "0px 0px 20px rgba(59, 130, 246, 0.4)",
                        "0px 0px 0px rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    50+
                  </motion.div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400 font-medium">Clients</div>
                </motion.div>
                
                <motion.div
                  className="bg-white dark:bg-secondary-800 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-white/10 text-center cursor-default"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      textShadow: [
                        "0px 0px 0px rgba(168, 85, 247, 0)",
                        "0px 0px 20px rgba(168, 85, 247, 0.4)",
                        "0px 0px 0px rgba(168, 85, 247, 0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    12
                  </motion.div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400 font-medium">Months Exp</div>
                </motion.div>
                
                <motion.div
                  className="bg-white dark:bg-secondary-800 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-white/10 text-center cursor-default sm:col-span-2"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      textShadow: [
                        "0px 0px 0px rgba(34, 197, 94, 0)",
                        "0px 0px 20px rgba(34, 197, 94, 0.4)",
                        "0px 0px 0px rgba(34, 197, 94, 0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  >
                    40+
                  </motion.div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400 font-medium">Active Clients</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-secondary-400 dark:border-secondary-600 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-secondary-400 dark:bg-secondary-600 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;