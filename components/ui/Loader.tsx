import React from 'react';
import { motion } from 'framer-motion';

export const Loader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[60] bg-brand-dark flex flex-col items-center justify-center p-4 overflow-hidden"
    >
      <div className="relative w-full max-w-md h-64 flex flex-col items-center justify-center">
        
        {/* The Ball - SVG Implementation for realism */}
        <motion.div
          animate={{
            y: [-100, 20, -100],
            rotate: [0, 180, 360],
          }}
          transition={{
            y: {
                duration: 0.6,
                repeat: Infinity,
                ease: "easeIn", // Gravity feel
                repeatType: "reverse"
            },
            rotate: {
                duration: 1.2,
                repeat: Infinity,
                ease: "linear"
            }
          }}
          className="w-24 h-24 z-10 relative mb-8"
        >
           <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_30px_rgba(204,255,0,0.6)]">
              <circle cx="50" cy="50" r="48" fill="#CCFF00" stroke="#AACC00" strokeWidth="2" />
              {/* Holes */}
              <circle cx="30" cy="30" r="6" fill="#AACC00" opacity="0.6" />
              <circle cx="70" cy="30" r="6" fill="#AACC00" opacity="0.6" />
              <circle cx="50" cy="50" r="8" fill="#AACC00" opacity="0.6" />
              <circle cx="30" cy="70" r="6" fill="#AACC00" opacity="0.6" />
              <circle cx="70" cy="70" r="6" fill="#AACC00" opacity="0.6" />
              <circle cx="50" cy="20" r="5" fill="#AACC00" opacity="0.4" />
              <circle cx="50" cy="80" r="5" fill="#AACC00" opacity="0.4" />
              <circle cx="20" cy="50" r="5" fill="#AACC00" opacity="0.4" />
              <circle cx="80" cy="50" r="5" fill="#AACC00" opacity="0.4" />
           </svg>
        </motion.div>

        {/* Shadow hit effect */}
        <motion.div
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.1, 0.6, 0.1]
          }}
          transition={{
            duration: 0.6, // Matches half the full bounce cycle (down then up)
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
          className="absolute top-[60%] w-32 h-4 bg-white/20 rounded-[50%] blur-xl"
        />

        {/* Logo Image below animation */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col items-center"
        >
             <img 
                src="https://i.imgur.com/cxjGH3m.png" 
                alt="PickleballBH Logo" 
                className="w-48 h-auto drop-shadow-xl mb-3"
            />
            <p className="text-gray-500 font-display font-bold tracking-[0.3em] text-[10px] uppercase flex items-center gap-1">
              @pickleballbh <span className="text-pickle text-sm leading-none">®</span>
            </p>
        </motion.div>
      </div>
    </motion.div>
  );
};