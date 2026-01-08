import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiMapPin, FiPhone, FiLinkedin, FiTwitter, FiWifiOff } from 'react-icons/fi';
import Card from '../components/Card';
import Button from '../components/Button';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Monitor internet connectivity
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check internet connectivity
    if (!isOnline) {
      // Redirect to 404 page with custom message for offline
      navigate('/offline-error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create Gmail compose URL
      const gmailURL = createGmailURL(formData);
      
      // Open Gmail in new tab
      window.open(gmailURL, '_blank');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      alert('Thank you! Gmail compose window opened. Please send the email to complete your message.');
      
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const createGmailURL = ({ name, email, subject, message }) => {
    const recipient = 'cheelaaniketh.work@gmail.com'; // Replace with your actual Gmail
    const emailSubject = encodeURIComponent(subject || `Portfolio Message from ${name}`);
    const emailBody = encodeURIComponent(
      `Hello Aniketh,\n\n` +
      `You have received a new message through your portfolio website:\n\n` +
      `From: ${name}\n` +
      `Email: ${email}\n` +
      `Subject: ${subject}\n\n` +
      `Message:\n${message}\n\n` +
      `---\n` +
      `This message was sent through your portfolio contact form.\n` +
      `Please reply directly to: ${email}`
    );
    
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${emailSubject}&body=${emailBody}`;
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'cheelaaniketh.work@gmail.com',
      href: 'mailto:cheelaaniketh.work@gmail.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 6302017312',
      href: 'tel:+916302017312'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'India',
      href: 'https://maps.google.com/?q=India'
    }
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/cheela-aniketh-a18930227',
      color: 'hover:text-blue-600'
    },
    {
      icon: FiTwitter,
      label: 'Twitter',
      href: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400'
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

  return (
    <section id="contact" className="py-20 bg-white dark:bg-secondary-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="bg-grid absolute inset-0 opacity-5"></div>
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
              Get In <span className="gradient-text-primary">Touch</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                        Name *
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white transition-colors duration-200"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white transition-colors duration-200"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white transition-colors duration-200"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-3 text-secondary-400 w-5 h-5" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white transition-colors duration-200 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </div>

                  {/* Internet Connectivity Indicator */}
                  <div className={`flex items-center gap-2 p-3 rounded-lg ${
                    isOnline 
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' 
                      : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                  }`}>
                    {isOnline ? (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Connected - Ready to send</span>
                      </>
                    ) : (
                      <>
                        <FiWifiOff className="w-4 h-4" />
                        <span className="text-sm font-medium">No internet connection - Turn on internet to send message</span>
                      </>
                    )}
                  </div>

                  <motion.div
                    animate={!isOnline ? {
                      x: [0, -2, 2, -2, 2, 0],
                      y: [0, -1, 1, -1, 1, 0],
                      scale: [1, 0.98, 1.02, 0.98, 1.02, 1],
                      rotate: [0, -1, 1, -1, 1, 0]
                    } : {}}
                    transition={{
                      duration: 0.6,
                      repeat: !isOnline ? Infinity : 0,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    whileHover={!isOnline ? {
                      scale: 0.95,
                      x: [0, -5, 5, -3, 3, 0],
                      transition: { duration: 0.3, repeat: Infinity }
                    } : {}}
                    whileTap={!isOnline ? {
                      scale: 0.9,
                      x: [-10, 10, -8, 8, -5, 5, 0],
                      y: [-3, 3, -2, 2, -1, 1, 0],
                      transition: { duration: 0.4 }
                    } : {}}
                  >
                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      icon={isOnline ? FiSend : FiWifiOff}
                      iconPosition="right"
                      loading={isSubmitting}
                      disabled={isSubmitting || !isOnline}
                      className={`w-full ${!isOnline ? 'opacity-50 cursor-not-allowed animate-buzz-shake' : ''}`}
                      style={{
                        animation: !isOnline ? 'buzz-shake 0.5s ease-in-out infinite alternate, jiggle 0.8s ease-in-out infinite' : 'none'
                      }}
                    >
                      {!isOnline ? 'No Internet Connection' : isSubmitting ? 'Opening Gmail...' : 'Send via Gmail'}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                  Let's connect
                </h3>
                
                <p className="text-secondary-600 dark:text-secondary-400 mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={index}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors duration-200 group"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      >
                        <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-200">
                          <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div>
                          <p className="font-medium text-secondary-900 dark:text-white">
                            {info.label}
                          </p>
                          <p className="text-secondary-600 dark:text-secondary-400">
                            {info.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-8">
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">
                  Follow me
                </h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 bg-secondary-100 dark:bg-secondary-700 rounded-lg text-secondary-600 dark:text-secondary-400 ${social.color} transition-all duration-200 group`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                      >
                        <Icon className="w-6 h-6" />
                        <span className="sr-only">{social.label}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </Card>

              {/* Availability */}
              <Card className="p-8">
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                  Availability
                </h3>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-secondary-600 dark:text-secondary-400">
                    Available for new projects
                  </span>
                </div>
                <p className="text-sm text-secondary-500 dark:text-secondary-400 mt-2">
                  Typically responds within 24 hours
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;