import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiCode, FiEye, FiFilter } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiJavascript, SiPython, SiTensorflow, SiMicrosoftexcel, SiSap } from 'react-icons/si';
import Card from '../components/Card';
import Button from '../components/Button';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'IIT Kharagpur - Start-up Investment Research',
      description: 'Assisted in a research project on Start-up Investment Decisions under professor guidance. Conducted comprehensive data collection and analysis to support the research study on Generative AI transformation in artificial intelligence, machine learning, and IoT.',
      image: '/api/placeholder/600/400',
      category: 'analytics',
      technologies: [
        { name: 'Research', icon: SiReact, color: 'text-blue-500' },
        { name: 'Data Analysis', icon: SiPython, color: 'text-blue-600' },
        { name: 'AI/ML Study', icon: SiTensorflow, color: 'text-orange-500' }
      ],
      demo: 'https://www.linkedin.com/posts/cheela-aniketh-a18930227_as-a-management-trainee-activity-7163103244620128256-pGgE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJkhvYB1_GRUtHtRev0jsB3NhEfnrcIwmE',
      featured: true
    },
    {
      id: 2,
      title: 'Iappsys Technologies - Payroll Management',
      description: 'Managed Gen-pact backend operations including employee payroll processing and pay slip calculations in compliance with company policies and government regulations. Utilized Microsoft Excel, Tally ERP, and SAP systems.',
      image: '/api/placeholder/600/400',
      category: 'management',
      technologies: [
        { name: 'Excel', icon: SiMicrosoftexcel, color: 'text-green-600' },
        { name: 'Tally ERP', icon: SiReact, color: 'text-blue-500' },
        { name: 'SAP', icon: SiSap, color: 'text-blue-600' }
      ],
      demo: 'https://www.linkedin.com/posts/cheela-aniketh-a18930227_i-am-pleased-to-announce-that-i-have-successfully-activity-7104357534941020160-029d?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJkhvYB1_GRUtHtRev0jsB3NhEfnrcIwmE',
      featured: true
    },
    {
      id: 3,
      title: 'Financial Dashboard & Analytics',
      description: 'A comprehensive financial dashboard for tracking loan approvals, customer analytics, and risk assessment metrics. Features real-time data visualization and compliance reporting.',
      image: '/api/placeholder/600/400',
      category: 'financial',
      technologies: [
        { name: 'Analytics', icon: SiReact, color: 'text-blue-500' },
        { name: 'Dashboard', icon: SiNodedotjs, color: 'text-green-500' },
        { name: 'Reporting', icon: SiMongodb, color: 'text-green-600' }
      ],
      demo: 'https://financial-dashboard-demo.vercel.app',
      featured: true
    },
    {
      id: 4,
      title: 'Credit Risk Assessment Portal',
      description: 'Advanced credit risk assessment tool with customer profile analysis, fraud detection integration, and automated approval workflows for financial institutions.',
      image: '/api/placeholder/600/400',
      category: 'financial',
      technologies: [
        { name: 'Risk Analysis', icon: SiNodedotjs, color: 'text-green-500' },
        { name: 'Assessment', icon: SiPython, color: 'text-blue-600' },
        { name: 'Automation', icon: SiMongodb, color: 'text-green-600' }
      ],
      demo: 'https://credit-risk-demo.vercel.app',
      featured: false
    },
    {
      id: 5,
      title: 'Business Intelligence Dashboard',
      description: 'Comprehensive BI dashboard for financial performance tracking, team management metrics, and sales target analysis with real-time reporting capabilities.',
      image: '/api/placeholder/600/400',
      category: 'analytics',
      technologies: [
        { name: 'Business Intelligence', icon: SiReact, color: 'text-blue-500' },
        { name: 'Performance Tracking', icon: SiNodedotjs, color: 'text-green-500' },
        { name: 'Analytics', icon: SiMongodb, color: 'text-green-600' }
      ],
      demo: 'https://bi-dashboard-demo.vercel.app',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'financial', label: 'Financial Systems' },
    { id: 'analytics', label: 'Business Analytics' },
    { id: 'management', label: 'Management Tools' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  const ProjectCard = ({ project, index }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`${project.featured ? 'md:col-span-2' : ''}`}
    >
      <Card className="h-full group overflow-hidden p-0" hoverable>
        {/* Project Image */}
        <div className="relative h-48 md:h-64 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 overflow-hidden">
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <FiCode className="w-16 h-16 text-primary-600 dark:text-primary-400" />
          </motion.div>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Project Links Overlay */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                icon={FiExternalLink}
                className="bg-white/90 text-secondary-900 hover:bg-white shadow-lg"
                onClick={() => window.open(project.demo, '_blank')}
              />
            </motion.div>
          </motion.div>

          {/* Featured Badge */}
          {project.featured && (
            <motion.div 
              className="absolute top-4 left-4"
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0px rgba(168, 85, 247, 0)",
                  "0 0 20px rgba(168, 85, 247, 0.5)",
                  "0 0 0px rgba(168, 85, 247, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="px-3 py-1 bg-accent-500 text-white text-xs font-medium rounded-full">
                Featured
              </span>
            </motion.div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
            {project.title}
          </h3>
          
          <p className="text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={techIndex}
                  className="flex items-center space-x-2 px-3 py-1 bg-secondary-100 dark:bg-secondary-700 rounded-full"
                >
                  <TechIcon className={`w-4 h-4 ${tech.color}`} />
                  <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Project Links */}
          <div className="flex justify-center">
            <Button
              variant="primary"
              size="sm"
              icon={FiEye}
              onClick={() => window.open(project.demo, '_blank')}
              className="w-full"
            >
              View Demo
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-secondary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="bg-dots"></div>
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
              Featured <span className="gradient-text-primary">Projects</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              A showcase of my recent work and side projects
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setFilter(category.id)}
                icon={category.id === 'all' ? FiFilter : undefined}
                className="transition-all duration-200"
              >
                {category.label}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;