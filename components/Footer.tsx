import React from 'react';
import { Youtube, Instagram, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="https://i.imgur.com/cxjGH3m.png" 
              alt="PickleballBH Logo" 
              className="h-20 w-auto mb-6 drop-shadow-lg"
            />
            <p className="text-gray-400 max-w-sm mb-6">
              Primeiro grupo de jogadores de Pickleball no Brasil (desde Maio de 2018). Levando diversão e competição a sério.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/pickleballbh/" target="_blank" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-white hover:bg-pickle hover:text-brand-dark transition-colors border border-white/5">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-white hover:bg-red-600 hover:text-white transition-colors border border-white/5">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white uppercase mb-4 tracking-wider">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-pickle transition-colors hover:pl-2 duration-200">Início</a></li>
              <li><a href="#about" className="hover:text-pickle transition-colors hover:pl-2 duration-200">História</a></li>
              <li><a href="#classes" className="hover:text-pickle transition-colors hover:pl-2 duration-200">Aulas</a></li>
              <li><a href="#ranking" className="hover:text-pickle transition-colors hover:pl-2 duration-200">Ranking 2026</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white uppercase mb-4 tracking-wider">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-pickle w-5 h-5 flex-shrink-0 mt-1" />
                <span>Arena RM<br/>Belo Horizonte, MG</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-pickle w-5 h-5 flex-shrink-0" />
                <span>contato@pickleballbh.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} PickleballBH. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="opacity-70">Site feito por</span>
            <a href="https://remakingagency.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-3 py-1 rounded font-bold hover:bg-gray-200 transition-colors inline-block shadow-lg">
                Remaking Agency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};