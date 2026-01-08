import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import Card from '../components/Card';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const workExperience = [
    {
      type: 'work',
      title: 'Branch Sales Manager',
      company: 'Piramal Finance Ltd.',
      location: 'Hyderabad, India',
      period: 'June 2024 - June 2025',
      description: 'Led branch operations focusing on customer profile analysis, loan approvals, and team management. Coordinated with fraud control units and mentored relationship managers to achieve sales targets.',
      achievements: [
        'Reviewed and analyzed customer profiles for creditworthiness assessment',
        'Led and mentored teams of Relationship Managers and Sales Managers',
        'Coordinated with Fraud Control Unit to minimize risk and verify customer authenticity',
        'Trained team members and delegated responsibilities to achieve branch sales targets'
      ],
      technologies: ['MS Excel', 'MS Word', 'Financial Analysis', 'Risk Assessment']
    }
  ];

  const internshipsProjects = [
    {
      type: 'internship',
      title: 'Management Trainee',
      company: 'Iappsys Technologies Pvt. Ltd.',
      location: 'India',
      period: '2023 - 2024',
      description: 'Processed employee payrolls and managed financial operations using enterprise software. Supported backend financial operations for major client companies.',
      achievements: [
        'Processed employee payrolls in compliance with company policies',
        'Prepared pay slips following government regulations',
        'Supported backend financial operations for client companies like Genpact'
      ],
      technologies: ['Tally ERP', 'SAP', 'Financial Processing', 'Data Management']
    },
    {
      type: 'internship',
      title: 'Management Trainee',
      company: 'Indian Institute of Technology (IIT), Kharagpur',
      location: 'Kharagpur, India',
      period: '2022 - 2023',
      description: 'Assisted in research project on Start-up Investment Decisions under professor guidance. Conducted comprehensive study on Generative AI and its evolution in technology.',
      achievements: [
        'Collected and analyzed data to support research outcomes',
        'Conducted study on Generative AI and its impact on AI, ML, and IoT',
        'Gained exposure to analytical and strategic financial thinking'
      ],
      technologies: ['Research Analysis', 'Data Collection', 'AI/ML Research', 'Financial Strategy']
    }
  ];

  const education = [
    {
      type: 'education',
      title: 'Post-Graduate Diploma in Business Management(BFSI)',
      company: 'Institute of Public Enterprise',
      location: 'Hyderabad, India',
      period: '2022 - 2024',
      description: 'Specialized in Finance & Marketing with comprehensive coursework in financial modeling and business management. Active member of Startup-Pedia club.',
      achievements: [
        'CGPA: 7.9/10',
        'Club Member, Startup-Pedia',
        'Transcribed start-up pitches for investment review',
        'Contributed to documentation for investment analysis'
      ],
      technologies: ['Financial Modelling', 'Accounting Standards', 'Corporate Laws', 'Business Management']
    },
    {
      type: 'education',
      title: 'Bachelor of Commerce',
      company: 'Avinash College of Commerce, Osmania University',
      location: 'Hyderabad, India',
      period: '2019 - 2022',
      description: 'Comprehensive business education with focus on accounting, finance, and business operations. Strong foundation in financial and managerial accounting.',
      achievements: [
        'CGPA: 7.6/10',
        'Strong academic performance in core subjects',
        'Developed analytical and problem-solving skills'
      ],
      technologies: ['Financial Accounting', 'Cost Accounting', 'Business Statistics', 'Business Law']
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return FiBriefcase;
      case 'internship':
        return FiBriefcase;
      case 'education':
        return FiAward;
      default:
        return FiBriefcase;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case 'work':
        return 'text-blue-600';
      case 'internship':
        return 'text-purple-600';
      case 'education':
        return 'text-green-600';
      default:
        return 'text-blue-600';
    }
  };

  const getBgColor = (type) => {
    switch (type) {
      case 'work':
        return 'bg-blue-100 dark:bg-blue-900/30';
      case 'internship':
        return 'bg-purple-100 dark:bg-purple-900/30';
      case 'education':
        return 'bg-green-100 dark:bg-green-900/30';
      default:
        return 'bg-blue-100 dark:bg-blue-900/30';
    }
  };

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

  return (
    <section id="experience" className="py-20 bg-secondary-50 dark:bg-secondary-800 relative overflow-hidden">
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
              Professional <span className="gradient-text-primary">Journey</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              My career progression through work experience, internships, and education
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>

            <div className="space-y-16">
              {/* Work Experience Section */}
              <div>
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl font-bold text-center mb-8 text-secondary-800 dark:text-secondary-200"
                >
                  Work Experience
                </motion.h3>
                <div className="space-y-12">
                  {workExperience.map((item, index) => {
                    const Icon = getIcon(item.type);
                    const isEven = index % 2 === 0;

                    return (
                      <motion.div
                        key={`work-${index}`}
                        variants={itemVariants}
                        className={`relative flex items-center ${
                          isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                        }`}
                      >
                        {/* Timeline Icon */}
                        <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                          <div className={`flex items-center justify-center w-12 h-12 rounded-full ${getBgColor(item.type)} border-4 border-white dark:border-secondary-800`}>
                            <Icon className={`w-6 h-6 ${getColor(item.type)}`} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                          isEven ? 'md:pr-8' : 'md:pl-8'
                        }`}>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Card className="p-6">
                              {/* Header */}
                              <div className="mb-4">
                                <div className="flex items-center space-x-2 text-sm text-secondary-500 dark:text-secondary-400 mb-2">
                                  <FiCalendar className="w-4 h-4" />
                                  <span>{item.period}</span>
                                  <span>•</span>
                                  <FiMapPin className="w-4 h-4" />
                                  <span>{item.location}</span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-1">
                                  {item.title}
                                </h3>
                                
                                <p className="text-primary-600 dark:text-primary-400 font-semibold">
                                  {item.company}
                                </p>
                              </div>

                              {/* Description */}
                              <p className="text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
                                {item.description}
                              </p>

                              {/* Achievements */}
                              {item.achievements && item.achievements.length > 0 && (
                                <div className="mb-4">
                                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                                    Key Achievements:
                                  </h4>
                                  <ul className="space-y-1">
                                    {item.achievements.map((achievement, achIndex) => (
                                      <li
                                        key={achIndex}
                                        className="flex items-start space-x-2 text-secondary-600 dark:text-secondary-400"
                                      >
                                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>{achievement}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Technologies */}
                              <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 text-sm rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </Card>
                          </motion.div>
                        </div>

                        {/* Spacer for desktop */}
                        <div className="hidden md:block w-5/12"></div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Internships & Projects Section */}
              <div>
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl font-bold text-center mb-8 text-secondary-800 dark:text-secondary-200"
                >
                  Internships & Projects
                </motion.h3>
                <div className="space-y-12">
                  {internshipsProjects.map((item, index) => {
                    const Icon = getIcon(item.type);
                    const isEven = (workExperience.length + index) % 2 === 0;

                    return (
                      <motion.div
                        key={`internship-${index}`}
                        variants={itemVariants}
                        className={`relative flex items-center ${
                          isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                        }`}
                      >
                        {/* Timeline Icon */}
                        <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                          <div className={`flex items-center justify-center w-12 h-12 rounded-full ${getBgColor(item.type)} border-4 border-white dark:border-secondary-800`}>
                            <Icon className={`w-6 h-6 ${getColor(item.type)}`} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                          isEven ? 'md:pr-8' : 'md:pl-8'
                        }`}>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Card className="p-6">
                              {/* Header */}
                              <div className="mb-4">
                                <div className="flex items-center space-x-2 text-sm text-secondary-500 dark:text-secondary-400 mb-2">
                                  <FiCalendar className="w-4 h-4" />
                                  <span>{item.period}</span>
                                  <span>•</span>
                                  <FiMapPin className="w-4 h-4" />
                                  <span>{item.location}</span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-1">
                                  {item.title}
                                </h3>
                                
                                <p className="text-primary-600 dark:text-primary-400 font-semibold">
                                  {item.company}
                                </p>
                              </div>

                              {/* Description */}
                              <p className="text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
                                {item.description}
                              </p>

                              {/* Achievements */}
                              {item.achievements && item.achievements.length > 0 && (
                                <div className="mb-4">
                                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                                    Key Achievements:
                                  </h4>
                                  <ul className="space-y-1">
                                    {item.achievements.map((achievement, achIndex) => (
                                      <li
                                        key={achIndex}
                                        className="flex items-start space-x-2 text-secondary-600 dark:text-secondary-400"
                                      >
                                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>{achievement}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Technologies */}
                              <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 text-sm rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </Card>
                          </motion.div>
                        </div>

                        {/* Spacer for desktop */}
                        <div className="hidden md:block w-5/12"></div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Education Section */}
              <div>
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl font-bold text-center mb-8 text-secondary-800 dark:text-secondary-200"
                >
                  Education
                </motion.h3>
                <div className="space-y-12">
                  {education.map((item, index) => {
                    const Icon = getIcon(item.type);
                    const isEven = (workExperience.length + internshipsProjects.length + index) % 2 === 0;

                    return (
                      <motion.div
                        key={`education-${index}`}
                        variants={itemVariants}
                        className={`relative flex items-center ${
                          isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                        }`}
                      >
                        {/* Timeline Icon */}
                        <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                          <div className={`flex items-center justify-center w-12 h-12 rounded-full ${getBgColor(item.type)} border-4 border-white dark:border-secondary-800`}>
                            <Icon className={`w-6 h-6 ${getColor(item.type)}`} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                          isEven ? 'md:pr-8' : 'md:pl-8'
                        }`}>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Card className="p-6">
                              {/* Header */}
                              <div className="mb-4">
                                <div className="flex items-center space-x-2 text-sm text-secondary-500 dark:text-secondary-400 mb-2">
                                  <FiCalendar className="w-4 h-4" />
                                  <span>{item.period}</span>
                                  <span>•</span>
                                  <FiMapPin className="w-4 h-4" />
                                  <span>{item.location}</span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-1">
                                  {item.title}
                                </h3>
                                
                                <p className="text-primary-600 dark:text-primary-400 font-semibold">
                                  {item.company}
                                </p>
                              </div>

                              {/* Description */}
                              <p className="text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
                                {item.description}
                              </p>

                              {/* Achievements */}
                              {item.achievements && item.achievements.length > 0 && (
                                <div className="mb-4">
                                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                                    Key Achievements:
                                  </h4>
                                  <ul className="space-y-1">
                                    {item.achievements.map((achievement, achIndex) => (
                                      <li
                                        key={achIndex}
                                        className="flex items-start space-x-2 text-secondary-600 dark:text-secondary-400"
                                      >
                                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>{achievement}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Technologies */}
                              <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 text-sm rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </Card>
                          </motion.div>
                        </div>

                        {/* Spacer for desktop */}
                        <div className="hidden md:block w-5/12"></div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;