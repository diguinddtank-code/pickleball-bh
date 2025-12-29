import React, { useState } from 'react';
import { Button } from '../ui/Button';

export const BookingModalContent: React.FC = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    // Here you would integrate with an API or WhatsApp
  };

  if (step === 2) {
    return (
      <div className="text-center py-10">
        <div className="w-20 h-20 bg-pickle/20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
          🎾
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Solicitação Enviada!</h3>
        <p className="text-gray-400 mb-6">Nossa equipe entrará em contato via WhatsApp para confirmar seu horário na Arena RM.</p>
        <Button onClick={() => setStep(1)} variant="secondary">Agendar Outra</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Seu Nome</label>
        <input required type="text" className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:border-pickle focus:outline-none transition-colors" placeholder="Ex: João da Silva" />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">WhatsApp</label>
          <input required type="tel" className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:border-pickle focus:outline-none transition-colors" placeholder="(31) 99999-9999" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Nível</label>
          <select className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:border-pickle focus:outline-none transition-colors">
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Melhor Horário</label>
        <div className="grid grid-cols-3 gap-2">
          {['Manhã', 'Tarde', 'Noite'].map(t => (
            <label key={t} className="cursor-pointer">
              <input type="radio" name="time" className="peer sr-only" />
              <div className="text-center p-2 rounded-lg border border-white/10 text-gray-400 peer-checked:bg-pickle peer-checked:text-brand-dark peer-checked:font-bold transition-all hover:bg-white/5">
                {t}
              </div>
            </label>
          ))}
        </div>
      </div>

      <Button fullWidth type="submit" className="mt-4">
        Solicitar Agendamento
      </Button>
      <p className="text-center text-xs text-gray-500 mt-4">
        Responderemos em até 2 horas.
      </p>
    </form>
  );
};