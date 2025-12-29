import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Preciso levar raquete e bolinha?",
      answer: "Para sua primeira aula experimental na Arena RM, nós fornecemos todo o equipamento! Quando você viciar (e vai!), nós indicamos onde comprar os melhores equipamentos com desconto para parceiros."
    },
    {
      question: "Qual roupa devo usar?",
      answer: "Roupas leves de ginástica e, obrigatoriamente, tênis esportivo. Óculos de proteção são recomendados mas não obrigatórios para iniciantes."
    },
    {
      question: "Nunca joguei raquete, posso ir?",
      answer: "Com certeza! O Pickleball é conhecido por ser o esporte de raquete mais democrático do mundo. Em 20 minutos você já estará trocando bolas e se divertindo."
    },
    {
      question: "Como funciona o Ranking?",
      answer: "Nosso ranking é anual. Os jogadores acumulam pontos participando de nossos torneios internos e desafios da liga. Ao final do ano, premiamos os melhores de cada categoria."
    }
  ];

  return (
    <section className="py-24 bg-brand-dark border-t border-white/5 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-white mb-12 text-center">
          Dúvidas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-white text-lg">{faq.question}</span>
                <span className="text-pickle">
                  {openIndex === idx ? <Minus /> : <Plus />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};