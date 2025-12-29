import React from 'react';
import { motion } from 'framer-motion';

export const HowToPlay: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "O Saque",
      desc: "Deve ser por baixo (underhand). A raquete deve fazer contato com a bola abaixo da linha da cintura. O saque é cruzado na diagonal.",
      highlight: "Regra de Ouro: Sem quicar antes de bater."
    },
    {
      num: "02",
      title: "O Duplo Quique",
      desc: "O recebedor deve deixar a bola quicar. O sacador (e parceiro) também devem deixar a devolução quicar. Só depois disso o voleio é liberado.",
      highlight: "Quica lá, Quica cá."
    },
    {
      num: "03",
      title: "A Cozinha (NVZ)",
      desc: "A área de não-voleio (perto da rede). Você não pode pisar nela para bater uma bola no ar (voleio). É a área estratégica do jogo.",
      highlight: "Pise apenas se a bola quicar lá."
    }
  ];

  return (
    <section id="rules" className="py-24 bg-brand-gray relative z-10 rounded-b-[3rem]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <span className="text-pickle font-bold tracking-widest uppercase text-sm mb-2 block">Pickleball 101</span>
                <h2 className="font-display font-black text-4xl md:text-5xl uppercase italic text-white">
                    Entenda o Jogo <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Em 3 Passos</span>
                </h2>
            </div>
            <div className="hidden md:block">
                <div className="w-20 h-20 bg-pickle rounded-full flex items-center justify-center animate-spin-slow">
                    <span className="text-4xl">🎾</span>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover="hover"
              className="relative bg-brand-dark rounded-3xl p-8 border border-white/5 overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <span className="text-9xl font-black text-white">{step.num}</span>
              </div>

              {/* Dink Shot Animation Layer */}
              <motion.div 
                className="absolute inset-0 pointer-events-none z-0"
                variants={{
                    hover: { opacity: 1 },
                    initial: { opacity: 0 }
                }}
                initial="initial"
              >
                 {/* The Ball Path */}
                 <motion.div
                    className="w-4 h-4 bg-pickle rounded-full absolute left-[-10%] top-[40%] shadow-[0_0_15px_#CCFF00]"
                    variants={{
                        hover: {
                            left: ["10%", "50%", "90%"],
                            top: ["40%", "20%", "60%"],
                            scale: [1, 1.2, 0.9],
                            transition: {
                                duration: 1.2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 0.5
                            }
                        }
                    }}
                 />
                 {/* Visual Net (Line) */}
                 <div className="absolute left-1/2 bottom-0 w-0.5 h-16 bg-white/10 border-r border-dashed border-white/20 transform -translate-x-1/2"></div>
              </motion.div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-pickle font-black text-xl border border-white/5 group-hover:bg-pickle group-hover:text-brand-dark transition-colors">
                    {step.num}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase group-hover:text-pickle transition-colors">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 h-24">{step.desc}</p>
                
                <div className="bg-brand-gray/50 p-3 rounded-lg border-l-2 border-pickle">
                    <p className="text-xs text-gray-300 italic">"{step.highlight}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};