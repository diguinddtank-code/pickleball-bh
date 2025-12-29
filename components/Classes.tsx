import React from 'react';
import { CheckCircle, Calendar, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';

interface ClassesProps {
  onOpenBooking: () => void;
}

export const Classes: React.FC<ClassesProps> = ({ onOpenBooking }) => {
  return (
    <section id="classes" className="py-16 lg:py-24 bg-brand-dark relative overflow-hidden">
      {/* Background noise */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 xl:gap-16 relative z-10">
        
        {/* Artistic CSS Court Representation */}
        <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1 px-4 md:px-0">
          <div className="relative w-full max-w-[300px] md:max-w-sm lg:max-w-md xl:max-w-lg aspect-[4/5] bg-blue-600 rounded-lg p-2 md:p-4 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 border-4 border-white/10 group mx-auto">
            {/* Court Floor */}
            <div className="w-full h-full bg-blue-500 rounded border-4 border-white relative flex flex-col">
                {/* Kitchen Zones */}
                <div className="absolute top-[35%] w-full h-[30%] bg-blue-400/50 border-y-4 border-white flex items-center justify-center overflow-hidden">
                    <span className="text-white/20 font-black text-3xl md:text-5xl uppercase tracking-widest rotate-[-15deg] whitespace-nowrap select-none">Kitchen</span>
                </div>
                
                {/* Center Line Top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-[35%] bg-white"></div>
                {/* Center Line Bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-[35%] bg-white"></div>

                {/* Net (Visualized abstractly) */}
                <div className="absolute top-1/2 left-0 w-full h-2 bg-black/20 blur-sm transform -translate-y-1/2"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 left-6 md:top-10 md:left-10 w-10 h-10 md:w-16 md:h-16 rounded-full border-4 border-pickle animate-bounce-slow"></div>
                <div className="absolute bottom-16 right-6 md:bottom-20 md:right-10 w-16 h-16 md:w-24 md:h-24 bg-pickle/20 rounded-full blur-xl"></div>
                
                {/* Label */}
                <div className="mt-auto mb-4 ml-4 relative z-10">
                    <div className="bg-brand-dark/90 backdrop-blur px-4 py-2 md:px-6 md:py-3 rounded-lg inline-block border-l-4 border-pickle shadow-lg">
                        <h3 className="text-white font-display font-bold text-base md:text-xl">ARENA RM</h3>
                        <p className="text-pickle text-[10px] md:text-xs uppercase font-bold tracking-wider">Padrão Internacional</p>
                    </div>
                </div>
            </div>
            
            {/* Paddle Decor - Hidden on small screens to prevent overflow issues */}
            <div className="hidden md:flex absolute -top-8 -right-8 md:-top-12 md:-right-12 w-32 h-48 md:w-48 md:h-64 bg-brand-gray rounded-[3rem] border-8 border-brand-dark rotate-12 shadow-xl items-center justify-center group-hover:rotate-6 transition-transform duration-500 z-20">
                <div className="w-full h-full opacity-10 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                <span className="text-4xl md:text-6xl absolute">🥒</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-4 bg-white/5 px-3 py-1 rounded-full border border-white/10 mx-auto lg:mx-0">
             <span className="w-2 h-2 rounded-full bg-pickle animate-pulse"></span>
             <span className="text-gray-400 text-xs uppercase font-bold">Vagas Abertas</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-5xl xl:text-6xl uppercase italic leading-none mb-6 text-white">
            Evolua seu <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pickle to-green-500">Nível de Jogo</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Nossa metodologia combina técnica apurada com a diversão natural do esporte. 
            Na <strong>Arena RM</strong>, você encontra o ambiente perfeito para sair do zero ou virar um pro.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
            <div className="bg-brand-gray p-4 rounded-xl border border-white/5 flex items-center gap-4 group hover:border-pickle/50 transition-colors cursor-default">
                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/30 transition-colors shrink-0">
                    <ArrowUpRight />
                </div>
                <div>
                    <h4 className="text-white font-bold uppercase text-sm md:text-base">Clínicas Técnicas</h4>
                    <p className="text-gray-400 text-xs">Fundamentos, saque e dink</p>
                </div>
            </div>
             <div className="bg-brand-gray p-4 rounded-xl border border-white/5 flex items-center gap-4 group hover:border-pickle/50 transition-colors cursor-default">
                <div className="bg-pickle/20 p-2 rounded-lg text-pickle group-hover:text-white group-hover:bg-pickle/40 transition-colors shrink-0">
                    <Calendar />
                </div>
                <div>
                    <h4 className="text-white font-bold uppercase text-sm md:text-base">Jogos Supervisionados</h4>
                    <p className="text-gray-400 text-xs">Aprenda jogando com instrutores</p>
                </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/5 mb-8 text-left">
            <h5 className="text-white font-bold text-sm uppercase mb-4 opacity-50">Também disponível:</h5>
            <div className="flex flex-wrap gap-2 md:gap-3">
                {['Aluguel de Quadra', 'Empréstimo de Material', 'Day Use', 'Eventos Corporativos'].map((item) => (
                    <span key={item} className="text-[10px] md:text-xs font-bold text-gray-300 bg-black/30 px-3 py-1.5 rounded-md border border-white/10 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-pickle shrink-0" /> {item}
                    </span>
                ))}
            </div>
          </div>

          <Button onClick={onOpenBooking} fullWidth className="md:w-auto shadow-[0_0_20px_rgba(204,255,0,0.3)] justify-center">
            Agendar minha aula
          </Button>
        </div>
      </div>
    </section>
  );
};