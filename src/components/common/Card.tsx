import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  onClick 
}: CardProps) {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
      whileHover={hover ? { y: -5, scale: 1.01 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}