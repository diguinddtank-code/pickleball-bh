import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Trophy, Users } from 'lucide-react';
import { Button } from './ui/Button';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[100vh] lg:min-h-[90vh] xl:min-h-[105vh] flex items-center justify-center overflow-hidden pb-20 pt-32 lg:pt-20">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069" 
            alt="Pickleball Court Texture" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-dark/70" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
        
        {/* Animated particles/glows */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-pickle/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-20">
            
            {/* Text Content */}
            <motion.div
              className="w-full lg:w-6/12 text-center lg:text-left order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-pickle/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-pickle/20 mb-6 mx-auto lg:mx-0">
                <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pickle opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-pickle"></span>
                </span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">#1 Grupo do Brasil (Desde 2018)</span>
              </div>
              
              {/* Responsive Font Sizes: Tamed 'lg' breakpoint for 15" screens */}
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl text-white mb-6 uppercase leading-[0.9] tracking-tighter drop-shadow-2xl">
                O ESPORTE <br />
                QUE VIROU <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pickle via-yellow-200 to-pickle animate-pulse">VÍCIO</span>
              </h1>
              
              <p className="text-gray-300 text-sm md:text-xl lg:text-lg xl:text-xl max-w-xl mb-8 md:mb-10 font-light leading-relaxed mx-auto lg:mx-0 px-2 lg:px-0">
                Bem-vindo à <strong className="text-white">PickleballBH</strong>. A comunidade pioneira que trouxe a febre americana para Belo Horizonte. Aulas, torneios e diversão garantida na Arena RM.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start items-center w-full sm:w-auto">
                <Button onClick={onOpenBooking} className="w-full sm:w-auto shadow-xl shadow-pickle/20 group justify-center">
                  Agendar Aula <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <a 
                    href="https://www.instagram.com/pickleballbh/" 
                    target="_blank"
                    className="flex items-center gap-3 text-white font-bold uppercase tracking-wide hover:text-pickle transition-colors px-4 py-2 group w-full sm:w-auto justify-center"
                >
                  <PlayCircle className="w-10 h-10 group-hover:scale-110 transition-transform text-pickle" />
                  <span className="border-b-2 border-transparent group-hover:border-pickle transition-all">Ver no Instagram</span>
                </a>
              </div>
            </motion.div>

            {/* Visual/Image Side - Animated SVG - Visible on Mobile now */}
            <motion.div 
                className="flex w-full lg:w-6/12 lg:max-w-none order-1 lg:order-2 relative justify-center items-center mt-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                 {/* 
                    Responsive Container Size: 
                    Mobile: 280px 
                    Tablet: 400px
                    Laptop (lg): 450px (Better fit for 15")
                    Desktop (xl): 500px 
                 */}
                 <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] flex items-center justify-center">
                    {/* Background Circles */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border border-white/5 rounded-full border-dashed"
                    />
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-10 border border-pickle/10 rounded-full border-dotted"
                    />

                    {/* Glowing Aura */}
                    <div className="absolute inset-20 bg-pickle/5 rounded-full blur-3xl animate-pulse"></div>

                    {/* SVG Paddle */}
                    <motion.div
                        initial={{ y: 20, rotate: -5 }}
                        animate={{ y: -20, rotate: 5 }}
                        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="relative z-10 w-full h-full flex items-center justify-center drop-shadow-[0_0_30px_rgba(204,255,0,0.15)]"
                    >
                        <svg viewBox="0 0 300 400" className="w-[80%] h-auto overflow-visible">
                            <defs>
                                <linearGradient id="paddleGrad" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#1e293b" />
                                    <stop offset="100%" stopColor="#0f172a" />
                                </linearGradient>
                                <pattern id="carbon" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                                  <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.05)" />
                                </pattern>
                            </defs>
                            
                            {/* Handle */}
                            <rect x="130" y="300" width="40" height="100" rx="10" fill="#333" />
                            <rect x="130" y="320" width="40" height="5" fill="black" opacity="0.3" />
                            <rect x="130" y="340" width="40" height="5" fill="black" opacity="0.3" />
                            
                            {/* Face */}
                            <rect x="40" y="40" width="220" height="270" rx="40" fill="url(#paddleGrad)" stroke="#CCFF00" strokeWidth="6" />
                            <rect x="45" y="45" width="210" height="260" rx="35" fill="url(#carbon)" />
                            
                            {/* Official Logo Embedded in SVG with Vibrant Animation */}
                            <motion.image 
                                href="https://i.imgur.com/cxjGH3m.png" 
                                x="75" 
                                y="80" 
                                width="150" 
                                height="150"
                                animate={{ 
                                  filter: [
                                    "drop-shadow(0px 0px 5px rgba(204,255,0,0.2)) brightness(1)",
                                    "drop-shadow(0px 0px 20px rgba(204,255,0,0.6)) brightness(1.2)",
                                    "drop-shadow(0px 0px 5px rgba(204,255,0,0.2)) brightness(1)"
                                  ],
                                  scale: [1, 1.05, 1]
                                }}
                                transition={{ 
                                  duration: 3, 
                                  repeat: Infinity, 
                                  ease: "easeInOut" 
                                }}
                            />
                        </svg>
                    </motion.div>

                    {/* SVG Ball */}
                    <motion.div
                      initial={{ y: -80, x: 80, scale: 0.9 }}
                      animate={{ y: -60, x: 80, scale: 1.1 }}
                      transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      className="absolute top-[20%] right-[15%] z-20 w-32 h-32"
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl animate-spin-slow">
                           <circle cx="50" cy="50" r="45" fill="#CCFF00" />
                           {/* Holes */}
                           <g fill="#AACC00">
                             <circle cx="50" cy="50" r="7" />
                             <circle cx="50" cy="20" r="6" />
                             <circle cx="50" cy="80" r="6" />
                             <circle cx="20" cy="50" r="6" />
                             <circle cx="80" cy="50" r="6" />
                             <circle cx="29" cy="29" r="6" />
                             <circle cx="71" cy="29" r="6" />
                             <circle cx="29" cy="71" r="6" />
                             <circle cx="71" cy="71" r="6" />
                           </g>
                           <circle cx="35" cy="35" r="10" fill="white" opacity="0.4" />
                        </svg>
                    </motion.div>

                    {/* Floating Stats Pills - Scaled automatically by container */}
                    <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="absolute top-4 left-0 md:top-10 md:left-0 bg-brand-dark/90 backdrop-blur-xl border border-white/10 p-2 md:p-3 rounded-2xl shadow-xl flex items-center gap-3 z-30"
                    >
                        <div className="bg-pickle/20 p-1.5 md:p-2 rounded-lg text-pickle">
                            <Trophy size={14} className="md:w-[18px] md:h-[18px]" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-[8px] md:text-[10px] uppercase font-bold tracking-wider">Desde</p>
                            <p className="text-white font-bold font-display text-sm md:text-lg leading-none">2018</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="absolute bottom-10 right-0 md:bottom-20 md:right-0 bg-white/95 backdrop-blur-xl border border-white/20 p-2 md:p-3 rounded-2xl shadow-xl flex items-center gap-3 z-30"
                    >
                         <div className="bg-brand-dark p-1.5 md:p-2 rounded-lg text-white">
                            <Users size={14} className="md:w-[18px] md:h-[18px]" />
                        </div>
                         <div>
                            <p className="text-gray-500 text-[8px] md:text-[10px] uppercase font-bold tracking-wider">Comunidade</p>
                            <p className="text-brand-dark font-black font-display text-base md:text-xl leading-none">500+</p>
                        </div>
                    </motion.div>
                 </div>
            </motion.div>

        </div>
      </div>

      {/* Skewed Divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-brand-gray transform -skew-y-3 origin-bottom-right z-20 border-t border-white/5"></div>
    </section>
  );
};