import React from 'react';
import { motion } from 'framer-motion';
import './ThemeToggle.css';

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <div className="switch-container" onClick={toggleTheme}>
      <motion.div 
        className="handle"
        animate={{ x: theme === 'light' ? 0 : 30 }}
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      />
      <span className="icon">{theme === 'light' ? '☀️' : '🌙'}</span>
    </div>
  );
};

export default ThemeToggle;