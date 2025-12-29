import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    { name: "Gabriel S.", role: "Aluno", text: "Comecei semana passada e já estou viciado! O clima da galera é sensacional." },
    { name: "Mariana L.", role: "Atleta Amadora", text: "A Arena RM tem a melhor estrutura de BH. Quadra coberta faz toda diferença." },
    { name: "Ricardo P.", role: "Iniciante", text: "Fui sozinho e fiz amizade no primeiro dia. Esporte muito acolhedor." },
    { name: "Fernanda C.", role: "Aluna", text: "Os professores explicam super bem. Evoluí muito em 1 mês de aula." },
    { name: "Lucas M.", role: "Competidor", text: "O ranking dá um gás a mais pra treinar. Organização top!" },
    { name: "Juliana K.", role: "Entusiasta", text: "Melhor cardio que existe. Você corre, ri e se diverte sem ver o tempo passar." },
  ];

  // Duplicate list to create seamless loop
  const marqueeReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 mb-12 text-center relative z-10">
         <span className="text-pickle font-bold tracking-widest uppercase text-sm mb-2 block">Depoimentos</span>
         <h2 className="font-display font-black text-4xl uppercase text-white">Quem Joga, <span className="text-pickle">Aprova</span></h2>
      </div>

      <div className="relative w-full overflow-hidden mask-linear-fade">
         <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-brand-dark to-transparent z-20 pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-brand-dark to-transparent z-20 pointer-events-none"></div>
         
         <motion.div 
            className="flex gap-6 w-max pl-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
                duration: 60, 
                ease: "linear", 
                repeat: Infinity 
            }}
            whileHover={{ animationPlayState: "paused" }}
         >
            {marqueeReviews.map((review, idx) => (
                <div 
                    key={idx} 
                    className="w-[300px] md:w-[400px] shrink-0 bg-gradient-to-br from-brand-gray/80 to-brand-dark border border-white/10 p-8 rounded-3xl relative group hover:border-pickle/50 transition-all shadow-lg"
                >
                    <Quote className="absolute top-6 right-6 text-pickle/20 w-10 h-10 group-hover:text-pickle/40 transition-colors" />
                    
                    <div className="flex gap-1 mb-6 text-pickle">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} fill="currentColor" className="drop-shadow-[0_0_5px_rgba(204,255,0,0.5)]" />
                        ))}
                    </div>
                    
                    <p className="text-gray-200 mb-8 text-lg italic leading-relaxed font-light">"{review.text}"</p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pickle to-green-600 flex items-center justify-center font-bold text-brand-dark text-xl shadow-lg">
                            {review.name.charAt(0)}
                        </div>
                        <div>
                            <p className="text-white font-bold text-base uppercase tracking-wide">{review.name}</p>
                            <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">{review.role}</p>
                        </div>
                    </div>
                </div>
            ))}
         </motion.div>
      </div>
    </section>
  );
};