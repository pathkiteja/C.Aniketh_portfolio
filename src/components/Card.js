import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hoverable = true,
  padding = 'default',
  ...props 
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const variants = {
    default: 'bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 shadow-md',
    glass: 'glass dark:glass-dark',
    gradient: 'bg-gradient-to-br from-white to-secondary-50 dark:from-secondary-800 dark:to-secondary-900 border border-secondary-200 dark:border-secondary-700',
    elevated: 'bg-white dark:bg-secondary-800 shadow-xl border border-secondary-200 dark:border-secondary-700'
  };
  
  const paddings = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };
  
  const hoverEffects = hoverable ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : '';
  
  return (
    <motion.div
      className={`${baseClasses} ${variants[variant]} ${paddings[padding]} ${hoverEffects} ${className}`}
      whileHover={hoverable ? { scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;