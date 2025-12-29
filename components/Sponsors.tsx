import React from 'react';
import { Button } from './ui/Button';
import { Plus } from 'lucide-react';

interface SponsorsProps {
  onOpenPartnership: () => void;
}

export const Sponsors: React.FC<SponsorsProps> = ({ onOpenPartnership }) => {
  return (
    <section id="sponsors" className="py-20 bg-pickle">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display font-black text-brand-dark text-3xl md:text-5xl uppercase mb-12">
          Parceiros do Esporte
        </h2>
        
        {/* Logos Area */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16">
             {/* First Sponsor - Real Logo (Full Color -> Forced Black for Contrast) */}
             <div className="group relative transition-transform duration-300 hover:scale-105">
                <img 
                    src="https://i.imgur.com/kL00omR.png" 
                    alt="Patrocinador Oficial" 
                    className="h-28 md:h-40 w-auto object-contain drop-shadow-md hover:drop-shadow-xl transition-all duration-300 brightness-0" 
                />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-brand-dark opacity-0 group-hover:opacity-100 transition-opacity">Patrocinador</span>
             </div>

             {/* Placeholder Slot 1 */}
             <button 
                onClick={onOpenPartnership}
                className="group h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-dashed border-brand-dark/20 hover:border-brand-dark/50 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/10"
             >
                <Plus className="text-brand-dark/30 group-hover:text-brand-dark/80 w-8 h-8 mb-1" />
                <span className="text-[10px] font-bold uppercase text-brand-dark/40 group-hover:text-brand-dark/80">Espaço<br/>Logo 2</span>
             </button>

             {/* Placeholder Slot 2 */}
             <button 
                onClick={onOpenPartnership}
                className="group h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-dashed border-brand-dark/20 hover:border-brand-dark/50 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/10"
             >
                <Plus className="text-brand-dark/30 group-hover:text-brand-dark/80 w-8 h-8 mb-1" />
                <span className="text-[10px] font-bold uppercase text-brand-dark/40 group-hover:text-brand-dark/80">Espaço<br/>Logo 3</span>
             </button>

             {/* Placeholder Slot 3 */}
             <button 
                onClick={onOpenPartnership}
                className="group h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-dashed border-brand-dark/20 hover:border-brand-dark/50 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/10"
             >
                <Plus className="text-brand-dark/30 group-hover:text-brand-dark/80 w-8 h-8 mb-1" />
                <span className="text-[10px] font-bold uppercase text-brand-dark/40 group-hover:text-brand-dark/80">Espaço<br/>Logo 4</span>
             </button>
        </div>

        <div className="bg-brand-dark p-8 md:p-12 rounded-3xl max-w-4xl mx-auto text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-pickle/20 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-bold uppercase mb-4 relative z-10">Sua Marca Aqui?</h3>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto relative z-10">
                O Pickleball é o esporte que mais cresce no mundo. Preencha um dos espaços acima e associe sua marca à saúde, dinamismo e a um público engajado.
            </p>
            <div className="relative z-10">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark mx-auto" onClick={onOpenPartnership}>
                    Seja um Patrocinador
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
};