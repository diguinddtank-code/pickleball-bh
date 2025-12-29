import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const FloatingDecor: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Create different movement speeds for parallax effect
  const y1 = useTransform(scrollY, [0, 2000], [0, 500]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -300]);
  const rotate1 = useTransform(scrollY, [0, 2000], [0, 360]);
  const rotate2 = useTransform(scrollY, [0, 2000], [0, -180]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* Floating Pickleball 1 (Top Left) */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[10%] left-[5%] opacity-10 w-24 h-24 md:w-48 md:h-48"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-pickle">
           <circle cx="50" cy="50" r="48" />
           <circle cx="20" cy="50" r="5" fill="#0F172A" />
           <circle cx="80" cy="50" r="5" fill="#0F172A" />
           <circle cx="50" cy="20" r="5" fill="#0F172A" />
           <circle cx="50" cy="80" r="5" fill="#0F172A" />
           <circle cx="50" cy="50" r="8" fill="#0F172A" />
        </svg>
      </motion.div>

      {/* Floating Pickleball 2 (Bottom Right) */}
      <motion.div 
        style={{ y: y2, rotate: rotate2 }}
        className="absolute bottom-[20%] right-[5%] opacity-5 w-32 h-32 md:w-64 md:h-64"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
           <circle cx="50" cy="50" r="48" />
           <circle cx="35" cy="35" r="6" fill="#0F172A" />
           <circle cx="65" cy="65" r="6" fill="#0F172A" />
        </svg>
      </motion.div>

      {/* Racket Outline (Middle Left) */}
      <motion.div 
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-[40%] left-[-5%] opacity-5 w-64 h-96 rotate-12"
      >
          <div className="w-full h-full border-4 border-white rounded-[40px]"></div>
      </motion.div>

    </div>
  );
};