import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Founders: React.FC = () => {
  return (
    <section className="py-24 bg-brand-gray relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <span className="text-pickle font-bold tracking-widest uppercase text-sm mb-2 block">Quem Somos</span>
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase italic text-white mb-6">
            O Início de Tudo
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
             A história do Pickleball em BH se confunde com a nossa história. Fundamos o grupo com um propósito: espalhar a paixão pelo esporte.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
            <div className="absolute -top-10 -left-10 text-pickle/10">
                <Quote size={120} />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-dark rounded-3xl p-8 md:p-12 border border-white/10 relative z-10 overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-pickle/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="flex flex-col md:flex-row items-center gap-12">
                     <div className="shrink-0 relative">
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-pickle shadow-[0_0_30px_rgba(204,255,0,0.2)]">
                            {/* Placeholder for Founder Image - Using a generic energetic person for now */}
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600" alt="Fundadores" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="absolute bottom-0 right-0 bg-pickle text-brand-dark font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider">
                            Founders
                        </div>
                     </div>

                     <div>
                        <h3 className="font-display font-black text-2xl text-white uppercase mb-4">
                            Liderando o Movimento
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6 italic">
                            "Quando começamos em 2018, éramos apenas alguns amigos curiosos sobre esse esporte americano. Hoje, ver as quadras cheias e o sorriso no rosto de centenas de jogadores é a nossa maior vitória. O PickleballBH é feito de pessoas."
                        </p>
                        <div className="flex gap-4">
                             <div className="h-1 w-12 bg-pickle rounded-full"></div>
                        </div>
                     </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};