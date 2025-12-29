import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Users, Trophy, Zap, Star } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-gray relative z-20 -mt-10 rounded-t-[3rem]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase italic mb-4">
            A Experiência <span className="text-pickle">PBH</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Muito mais que apenas bater na bola. Somos um ecossistema completo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Card 1 - Community - Large */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-gradient-to-br from-brand-dark to-brand-gray p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users size={120} />
            </div>
            <div className="relative z-10">
              <div className="bg-pickle w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-brand-dark">
                <Star className="fill-brand-dark" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2 uppercase">Comunidade Pioneira</h3>
              <p className="text-gray-400 max-w-md">Fundado em Maio de 2018, somos o primeiro grupo oficial do Brasil. Temos o know-how e a paixão que só quem começou tudo pode oferecer.</p>
            </div>
          </motion.div>

          {/* Card 2 - Arena */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-blue-600 p-8 rounded-3xl border border-white/10 relative overflow-hidden text-white"
          >
             <Dumbbell className="w-10 h-10 mb-4" />
             <h3 className="font-display font-bold text-xl mb-2 uppercase">Arena RM</h3>
             <p className="text-blue-100 text-sm">Estrutura de ponta. Quadras cobertas, piso profissional e iluminação perfeita.</p>
          </motion.div>

          {/* Card 3 - Ranking */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-dark p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-pickle transition-colors"
          >
             <Trophy className="w-10 h-10 text-pickle mb-4" />
             <h3 className="font-display font-bold text-xl text-white mb-2 uppercase">Competitivo</h3>
             <p className="text-gray-400 text-sm">Ranking anual e torneios regulares para quem tem sangue nos olhos.</p>
          </motion.div>

          {/* Card 4 - Networking - Large - Reduced Text Size */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-gradient-to-br from-brand-dark to-gray-900 p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
          >
             <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                    <Zap className="text-white w-8 h-8" />
                </div>
                <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2 uppercase">Networking de Elite</h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        Conecte-se com profissionais e faça amizades dentro e fora da quadra. O ambiente ideal para o seu lifestyle.
                    </p>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};