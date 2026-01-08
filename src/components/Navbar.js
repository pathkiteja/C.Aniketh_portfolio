import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiHome, FiUser, FiCode, FiBriefcase, FiMail, FiAward } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';
import { useScrollDirection } from '../hooks/useScrollDirection';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarPosition, setSidebarPosition] = useState({ x: 0, y: 0 });
  const { theme, toggleTheme } = useTheme();
  const { scrollDirection, scrollY } = useScrollDirection();

  const navItems = [
    { id: 'home', label: 'Home', icon: FiHome },
    { id: 'about', label: 'About', icon: FiUser },
    { id: 'skills', label: 'Skills', icon: FiCode },
    { id: 'projects', label: 'Projects', icon: FiBriefcase },
    { id: 'experience', label: 'Experience', icon: FiAward },
    { id: 'contact', label: 'Contact', icon: FiMail },
  ];

  // Optimized scroll handler with throttling for better performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = navItems.map(item => document.getElementById(item.id));
          const scrollPosition = window.scrollY + 100;

          // Find active section more efficiently
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(navItems[i].id);
              break;
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Reset sidebar to center-right position
  const resetSidebarPosition = () => {
    setSidebarPosition({ x: 0, y: 0 });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Fast smooth scrolling - reduced duration for better performance
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    setIsOpen(false);
  };

  const navbarVisible = scrollDirection !== 'down' || scrollY < 100;

  return (
    <>
      {/* Mobile Top Navbar - Keep existing design */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: navbarVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4 lg:hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="glass dark:glass-dark rounded-2xl px-6 py-4 border border-white/20 dark:border-white/10">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold gradient-text-primary"
              >
                C.Aniketh
              </motion.div>

              {/* Theme Toggle & Mobile Menu */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  icon={theme === 'dark' ? FiSun : FiMoon}
                  className="p-2"
                />
                
                {/* Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(!isOpen)}
                  icon={isOpen ? FiX : FiMenu}
                  className="p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Desktop Right Sidebar Navigation - Native Drag Implementation */}
      <div
        className="fixed right-6 top-1/2 z-50 hidden lg:block select-none"
        style={{
          transform: `translate(${sidebarPosition.x}px, ${sidebarPosition.y}px)`,
          opacity: navbarVisible ? 1 : 0.7,
          transition: 'opacity 0.2s ease',
          cursor: 'grab'
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          const startX = e.clientX - sidebarPosition.x;
          const startY = e.clientY - sidebarPosition.y;
          
          const handleMouseMove = (e) => {
            setSidebarPosition({
              x: e.clientX - startX,
              y: e.clientY - startY
            });
          };
          
          const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
          };
          
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
          document.body.style.cursor = 'grabbing';
          document.body.style.userSelect = 'none';
        }}
      >
        <div className="glass dark:glass-dark rounded-xl p-3 border border-white/20 dark:border-white/10 shadow-lg cursor-grab active:cursor-grabbing">
          {/* Simple Drag Indicator */}
          <div
            className="text-center mb-3 p-1"
            onDoubleClick={resetSidebarPosition}
          >
            <div className="w-8 h-1 bg-secondary-400 dark:bg-secondary-500 rounded-full mx-auto mb-1"></div>
            <div className="w-6 h-1 bg-secondary-400 dark:bg-secondary-500 rounded-full mx-auto mb-1"></div>
            <div className="w-4 h-1 bg-secondary-400 dark:bg-secondary-500 rounded-full mx-auto"></div>
          </div>

          {/* Simple Logo */}
          <div className="text-center mb-4">
            <div className="text-lg font-bold gradient-text-primary">
              C.Aniketh
            </div>
            <div className="text-xs text-secondary-500 dark:text-secondary-400">
              Portfolio
            </div>
          </div>

          {/* Navigation Items with Names - Optimized for Speed */}
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors duration-100 ${
                    isActive
                      ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
                      : 'text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 hover:bg-secondary-100 dark:hover:bg-secondary-800'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Theme Toggle - Optimized */}
          <div className="mt-4 pt-3 border-t border-white/20 dark:border-white/10">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors duration-100"
            >
              {theme === 'dark' ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
              <span className="font-medium">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Optimized */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 lg:hidden"
          >
            <div className="glass dark:glass-dark rounded-2xl p-6 border border-white/20 dark:border-white/10">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full px-4 py-3 rounded-lg text-left font-medium transition-colors duration-100 flex items-center space-x-3 ${
                        activeSection === item.id
                          ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
                          : 'text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 hover:bg-secondary-100 dark:hover:bg-secondary-800'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;