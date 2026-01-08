import React from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';
import { FiWifiOff, FiRefreshCw, FiHome, FiMail } from 'react-icons/fi';
import Button from '../components/Button';

const OfflineError = () => {
  const navigate = useNavigate();

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

  const handleRetry = () => {
    if (navigator.onLine) {
      navigate('/');
    } else {
      alert('Please check your internet connection and try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-red-50 to-orange-100 dark:from-slate-900 dark:via-red-900/20 dark:to-orange-900/20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 70%)",
              "radial-gradient(circle at 80% 20%, rgba(251, 146, 60, 0.1) 0%, transparent 70%)",
              "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
              "radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 70%)"
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative text-center max-w-2xl mx-auto px-4"
      >
        {/* Offline Animation */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="w-80 h-80 mx-auto">
            <DotLottieReact
              src="https://lottie.host/d32295da-fcd0-4446-bc0a-f845829d45dc/gaxgWWLRCY.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
          </div>
        </motion.div>

        {/* No Internet Icon */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="w-24 h-24 mx-auto mb-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
            <FiWifiOff className="w-12 h-12 text-red-500" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 dark:text-red-400 mb-4">
            No Internet
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
            Connection Required
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 max-w-md mx-auto">
            Oops! It looks like you're offline. To send me a message, please check your internet connection and try again.
          </p>
          <div className="bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-700 rounded-lg p-4 mb-8">
            <p className="text-orange-800 dark:text-orange-200 font-medium">
              💡 <strong>Quick Fix:</strong> Turn on your internet connection and click "Try Again" to send your message.
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button
            onClick={handleRetry}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
          >
            <FiRefreshCw className="w-4 h-4" />
            Try Again
          </Button>
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <FiHome className="w-4 h-4" />
            Go Home
          </Button>
        </motion.div>

        {/* Contact Alternative */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
            Alternative Contact Methods
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            If you continue having connection issues, you can reach me directly:
          </p>
          <div className="space-y-2">
            <a 
              href="mailto:anikethchandra@gmail.com" 
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <FiMail className="w-4 h-4" />
              anikethchandra@gmail.com
            </a>
            <br />
            <span className="text-slate-500 dark:text-slate-400 text-sm">
              Click the email link above to open your default email client
            </span>
          </div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -60, -20],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-red-400 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${70 + Math.random() * 20}%`
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OfflineError;