import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavItem } from '../../types/navigation';

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
}

export default function NavLink({ item, isActive }: NavLinkProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={item.to}
        className={`flex items-center space-x-2 py-1 px-2 rounded-md transition-all ${
          isActive 
            ? 'text-accent font-medium bg-white/10' 
            : 'text-white/90 hover:text-accent-light hover:bg-white/5'
        }`}
      >
        <span className="text-current">{item.icon}</span>
        <span className="font-medium tracking-wide">{item.text}</span>
      </Link>
    </motion.div>
  );
}