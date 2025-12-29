import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wide";
  
  const variants = {
    primary: "bg-pickle text-brand-dark hover:bg-white hover:shadow-[0_0_20px_rgba(204,255,0,0.6)]",
    secondary: "bg-white text-brand-dark hover:bg-gray-200",
    outline: "border-2 border-pickle text-pickle hover:bg-pickle hover:text-brand-dark"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};