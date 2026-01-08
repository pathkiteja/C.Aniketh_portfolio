import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiHeart, FiCoffee, FiCode } from 'react-icons/fi';
import Card from '../components/Card';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const stats = [
    { number: '12', label: 'Months Professional Experience', icon: FiCode },
    { number: '50+', label: 'Total Clients Worked With', icon: FiHeart },
    { number: '40+', label: 'Active/Engaged Clients', icon: FiUser },
    { number: '10+', label: 'Certifications', icon: FiCoffee, link: 'https://www.linkedin.com/in/cheela-aniketh-a18930227' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-secondary-900 relative overflow-hidden">
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
              About <span className="gradient-text-primary">Me</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Experienced finance professional with expertise in credit assessment and team leadership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Profile Image */}
                  <div className="w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border-4 border-white dark:border-secondary-800 shadow-2xl">
                    <img 
                      src="/images/aniket.jpg" 
                      alt="Aniketh Cheela - Finance Professional"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback UI */}
                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-center">
                        <FiUser className="w-24 h-24 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                        <p className="text-secondary-600 dark:text-secondary-400 font-medium">
                          Aniketh Cheela
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full animate-bounce-subtle"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-500 rounded-full animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
                </motion.div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-secondary-900 dark:text-white">
                  Hi there! I'm <span className="gradient-text-primary">Aniketh Cheela</span>
                </h3>
                
                <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
                  I'm an experienced finance professional with expertise in credit assessment, 
                  loan approval, and team leadership. With a solid foundation in financial analysis 
                  and risk evaluation, I have consistently ensured compliance with organizational, 
                  legal, and technical standards.
                </p>
                
                <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
                  My leadership skills are evident through my successful management and mentoring 
                  of teams of Relationship Managers, driving both performance and goal achievement. 
                  I am adept at utilizing financial tools like MS Excel, MS Word, and Tally ERP, 
                  and demonstrate a strong understanding of financial modeling, ratio analysis, 
                  and valuation techniques.
                </p>

                <div className="pt-6">
                  <h4 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
                    Career Objective:
                  </h4>
                  <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed mb-6">
                    To pursue a responsible position and work in a challenging work environment that uses my skills, 
                    smart working ability and helps widen my spectrum of knowledge and gain practical insights applying 
                    the theoretical knowledge gained so far while enhancing the organization's development and reputation.
                  </p>
                </div>

                <div className="pt-6">
                  <h4 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
                    What drives me:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      'Ensuring compliance with organizational and legal standards',
                      'Driving team performance and goal achievement',
                      'Continuous professional growth and learning',
                      'Contributing to organizational success through practical insights'
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        className="flex items-center space-x-3 text-secondary-600 dark:text-secondary-400"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const CardContent = (
                  <>
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-secondary-900 dark:text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-secondary-600 dark:text-secondary-400 font-medium">
                      {stat.label}
                    </div>
                  </>
                );

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    {stat.link ? (
                      <a
                        href={stat.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
                          {CardContent}
                        </Card>
                      </a>
                    ) : (
                      <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                        {CardContent}
                      </Card>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;