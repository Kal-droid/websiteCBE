import React from 'react';
import { motion } from 'framer-motion';

interface FinancialGridBackgroundProps {
  className?: string;
  opacity?: number;
}

export default function FinancialGridBackground({ 
  className = '', 
  opacity = 0.15 
}: FinancialGridBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Grid Pattern */}
      <svg
        className="absolute w-full h-full"
        style={{ opacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="financial-grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
          
          {/* Bar Chart Pattern */}
          <pattern
            id="bar-charts"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <g className="text-primary/20">
              <motion.rect width="20" height="140" x="20" y="60" />
              <motion.rect width="20" height="100" x="50" y="100" />
              <motion.rect width="20" height="160" x="80" y="40" />
              <motion.rect width="20" height="80" x="110" y="120" />
              <motion.rect width="20" height="120" x="140" y="80" />
            </g>
          </pattern>
        </defs>

        {/* Background Grid */}
        <rect width="100%" height="100%" fill="url(#financial-grid)" />
        
        {/* Animated Bar Charts */}
        <g>
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#bar-charts)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </g>
      </svg>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
    </div>
  );
}