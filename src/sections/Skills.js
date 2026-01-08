import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiTrendingUp,
  FiBarChart,
  FiFileText,
  FiDollarSign,
  FiPieChart,
  FiDatabase,
  FiCloud
} from 'react-icons/fi';
import {
  SiMicrosoftexcel,
  SiMicrosoftword,
  SiMicrosoftpowerpoint,
  SiGooglesheets
} from 'react-icons/si';
import { HiCalculator } from 'react-icons/hi';
import Card from '../components/Card';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Financial Analysis',
      icon: FiTrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      skills: [
        { name: 'Financial Modelling', icon: HiCalculator, level: 95 },
        { name: 'Ratio Analysis', icon: FiBarChart, level: 90 },
        { name: 'Good chunk of knowledge on the global Stock markets and MF Industry [Certified from NISM & AMFI]', icon: FiTrendingUp, level: 90 },
        { name: 'Credit Assessment', icon: FiFileText, level: 95 },
        { name: 'Data Analysis', icon: FiBarChart, level: 85 },
      ]
    },
    {
      title: 'Business Management',
      icon: FiPieChart,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      skills: [
        { name: 'Team Leadership', icon: FiDatabase, level: 92 },
        { name: 'Loan Approval', icon: FiDollarSign, level: 95 },
        { name: 'Risk Management', icon: FiBarChart, level: 88 },
        { name: 'Financial Documentation', icon: FiFileText, level: 90 },
      ]
    },
    {
      title: 'Technology & Tools',
      icon: FiCloud,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      skills: [
        { name: 'MS Excel (Advanced)', icon: SiMicrosoftexcel, level: 95 },
        { name: 'MS Word', icon: SiMicrosoftword, level: 90 },
        { name: 'MS PowerPoint', icon: SiMicrosoftpowerpoint, level: 85 },
        { name: 'Tally ERP', icon: HiCalculator, level: 85 },
        { name: 'SAP', icon: FiBarChart, level: 70 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: 'easeOut' }
    })
  };

  return (
    <section id="skills" className="py-20 bg-secondary-50 dark:bg-secondary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="bg-grid"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
              Skills & <span className="gradient-text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Professional skills and tools that drive business success
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={categoryIndex}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full p-6">
                    <div className="text-center mb-6">
                      <div className={`inline-flex p-3 rounded-xl ${category.bgColor} mb-4`}>
                        <CategoryIcon className={`w-8 h-8 ${category.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = skill.icon;
                        const isHovered = hoveredSkill === `${categoryIndex}-${skillIndex}`;
                        return (
                          <motion.div 
                            key={skillIndex} 
                            className="space-y-2 cursor-pointer"
                            onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <motion.div
                                  animate={isHovered ? { 
                                    scale: 1.2,
                                    rotate: 360
                                  } : { scale: 1, rotate: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className={isHovered ? category.color : ""}
                                >
                                  <SkillIcon className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
                                </motion.div>
                                <span className="font-medium text-secondary-900 dark:text-white">
                                  {skill.name}
                                </span>
                              </div>
                              <motion.span 
                                className="text-sm text-secondary-500 dark:text-secondary-400"
                                animate={isHovered ? { scale: 1.1, fontWeight: 'bold' } : { scale: 1, fontWeight: 'normal' }}
                              >
                                {skill.level}%
                              </motion.span>
                            </div>
                            
                            <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2 overflow-hidden">
                              <motion.div
                                className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                                variants={progressVariants}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                custom={skill.level}
                                transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                                whileHover={{ 
                                  background: "linear-gradient(90deg, #f59e0b, #ef4444)",
                                  boxShadow: "0 0 10px rgba(239, 68, 68, 0.5)"
                                }}
                              />
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants}>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6 text-center">
                Other Technologies & Tools
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'MS Excel', icon: SiMicrosoftexcel, color: 'text-green-600' },
                  { name: 'Tally ERP', icon: HiCalculator, color: 'text-blue-600' },
                  { name: 'SAP', icon: FiBarChart, color: 'text-blue-500' },
                  { name: 'PowerPoint', icon: SiMicrosoftpowerpoint, color: 'text-orange-600' },
                  { name: 'Google Sheets', icon: SiGooglesheets, color: 'text-green-500' },
                  { name: 'Financial Analysis', icon: FiTrendingUp, color: 'text-purple-600' },
                ].map((tech, index) => {
                  const TechIcon = tech.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center group cursor-pointer"
                      whileHover={{ 
                        scale: 1.1,
                        y: -5
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                    >
                      <motion.div
                        className="w-16 h-16 mx-auto mb-3 bg-white dark:bg-secondary-700 rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-2xl transition-shadow duration-300"
                        whileHover={{ 
                          rotate: [0, -10, 10, 0],
                          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <TechIcon className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                      </motion.div>
                      <p className="text-sm font-medium text-secondary-700 dark:text-secondary-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {tech.name}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* Certifications & Languages */}
          <motion.div variants={itemVariants} className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Certifications */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6 text-center">
                  Certifications
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      name: 'Investment Banking Job Simulation – J.P. Morgan',
                      link: 'https://www.linkedin.com/posts/cheela-aniketh-a18930227_i-just-completed-jp-morgan-chases-investment-activity-7131571170016972800-aJDV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJkhvYB1_GRUtHtRev0jsB3NhEfnrcIwmE'
                    },
                    {
                      name: 'Bloomberg Market Concepts',
                      link: 'https://www.linkedin.com/posts/cheela-aniketh-a18930227_bloomberg-activity-7013919572655296513-81JK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJkhvYB1_GRUtHtRev0jsB3NhEfnrcIwmE'
                    },
                    {
                      name: 'Microsoft Excel: Advanced – Udemy',
                      link: 'https://www.linkedin.com/posts/cheela-aniketh-a18930227_activity-6989966654126391296-WzeQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJkhvYB1_GRUtHtRev0jsB3NhEfnrcIwmE'
                    },
                    {
                      name: 'Advanced Financial Literacy – NISM',
                      link: 'https://www.linkedin.com/posts/cheela-aniketh-a18930227_nism2024-activity-7163797530453983235-PwVk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJkhvYB1_GRUtHtRev0jsB3NhEfnrcIwmE'
                    }
                  ].map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">
                          {cert.name}
                        </span>
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-pointer hover:underline font-medium ml-2"
                      >
                        Link
                      </a>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Languages */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6 text-center">
                  Languages
                </h3>
                <div className="space-y-4">
                  {[
                    { language: 'English', level: 'Advanced', percentage: 95 },
                    { language: 'Hindi', level: 'Native', percentage: 100 },
                    { language: 'Telugu', level: 'Native', percentage: 100 }
                  ].map((lang, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-secondary-900 dark:text-white">
                          {lang.language}
                        </span>
                        <span className="text-sm text-secondary-500 dark:text-secondary-400">
                          {lang.level}
                        </span>
                      </div>
                      <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${lang.percentage}%` } : {}}
                          transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;