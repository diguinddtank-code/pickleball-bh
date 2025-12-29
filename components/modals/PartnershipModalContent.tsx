import React from 'react';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

export const PartnershipModalContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-brand-dark/50 p-4 rounded-xl border border-white/5">
        <h4 className="font-bold text-white mb-2">Por que patrocinar?</h4>
        <ul className="space-y-2">
            {[
                'Exposição em camisas e banners na Arena RM',
                'Posts colaborativos no Instagram (+Engajamento)',
                'Acesso a público de classe A/B',
                'Naming Rights de Torneios'
            ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="text-pickle w-4 h-4" /> {item}
                </li>
            ))}
        </ul>
      </div>

      <form className="space-y-4">
         <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Nome da Empresa</label>
            <input required type="text" className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:border-pickle focus:outline-none transition-colors" />
         </div>
         <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Corporativo</label>
            <input required type="email" className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:border-pickle focus:outline-none transition-colors" />
         </div>
         <Button fullWidth variant="outline">Baixar Mídia Kit</Button>
         <Button fullWidth>Falar com Comercial</Button>
      </form>
    </div>
  );
};