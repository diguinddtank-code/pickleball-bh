import React from 'react';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const InstagramSection: React.FC = () => {
  const images = [
    '',
    '',
    '',
    '',
    '',
    '', 
    ''
  ];

  // The Reel ID from the provided link
  const reelId = "DSyAcCDkrSW";

  return (
    <section className="py-24 bg-brand-dark overflow-hidden relative">
      <div className="container mx-auto px-4 mb-12 relative z-10">
        
        {/* Adjusted gap for better 15.6" laptop compatibility */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-24 mb-16">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left min-w-0">
                <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-red-500">Em Alta</span>
                </div>
                {/* Responsive text sizing to prevent wrapping on medium screens */}
                <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-none mb-6">
                    A Galera do <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Instagram</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                   Siga @pickleballbh para ficar por dentro dos treinos, dicas e a resenha da melhor comunidade de BH.
                </p>
                <a href="https://www.instagram.com/pickleballbh/" target="_blank" rel="noreferrer">
                    <Button 
                      variant="outline" 
                      className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white w-full md:w-auto active:scale-95 active:bg-pink-600 active:border-pink-600"
                      whileTap={{ scale: 0.9, backgroundColor: "#db2777" }}
                    >
                        <Instagram className="w-5 h-5" /> Seguir no Instagram
                    </Button>
                </a>
            </div>

            {/* Featured Reel Embed */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end shrink-0">
                <div className="relative w-[300px] md:w-[350px]">
                     {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-[2.5rem] blur-xl opacity-50 animate-pulse-slow"></div>
                    
                    {/* Phone/Card Frame */}
                    <div className="relative rounded-[2rem] overflow-hidden border-8 border-brand-gray shadow-2xl bg-black aspect-[9/16]">
                         <iframe 
                            src={`https://www.instagram.com/reel/${reelId}/embed`}
                            className="w-full h-full object-cover"
                            frameBorder="0" 
                            scrolling="no" 
                            allowTransparency={true}
                            allow="encrypted-media"
                            title="Destaque PickleballBH"
                        ></iframe>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pickle/20 rounded-full blur-xl z-0"></div>
                </div>
            </div>
        </div>
      </div>

      {/* Marquee Effect */}
      <div className="relative w-full overflow-hidden flex gap-4">
         {/* Left Gradient Overlay */}
         <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-brand-dark to-transparent z-20 pointer-events-none"></div>
         {/* Right Gradient Overlay */}
         <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-brand-dark to-transparent z-20 pointer-events-none"></div>

         <motion.div 
            className="flex gap-4 min-w-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
                duration: 30, 
                ease: "linear", 
                repeat: Infinity 
            }}
         >
            {[...images, ...images].map((img, idx) => (
                <div 
                    key={idx} 
                    className="relative w-40 h-40 md:w-64 md:h-64 shrink-0 rounded-2xl overflow-hidden border-2 border-white/5 group grayscale hover:grayscale-0 transition-all duration-500"
                >
                    <img src={img} alt="Insta" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 md:p-6">
                        <span className="text-white font-bold flex items-center gap-2 text-xs md:text-sm"><Instagram size={14}/> Ver Galeria</span>
                    </div>
                </div>
            ))}
         </motion.div>
      </div>
    </section>
  );
};