import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2, Handshake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenGame: () => void;
  onOpenPartnership: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenGame, onOpenPartnership }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'História', href: '#about' },
    { name: 'Aulas & Arena', href: '#classes' },
    { name: 'Regras', href: '#rules' },
    { name: 'Ranking', href: '#ranking' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-2xl py-2 border-b border-white/5' : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group relative z-50">
            <motion.img 
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="https://i.imgur.com/cxjGH3m.png" 
              alt="PickleballBH" 
              className={`w-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300 ${isScrolled ? 'h-14 md:h-16' : 'h-20 md:h-24'}`}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-pickle transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-pickle after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}

            {/* Sponsor Link */}
            <button 
                onClick={onOpenPartnership}
                className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors flex items-center gap-1 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/5 hover:border-white/30"
            >
                <Handshake size={14} className="text-pickle" />
                Quero ser Patrocinador
            </button>
            
            {/* Game Button Desktop */}
            <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={onOpenGame}
                className="text-pickle hover:text-white transition-colors p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-pickle hover:border-pickle hover:text-brand-dark"
                title="Mini Game"
            >
                <Gamepad2 size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenBooking}
              className="bg-pickle text-brand-dark font-black px-6 py-2.5 rounded-lg uppercase text-sm shadow-[0_0_15px_rgba(204,255,0,0.4)] hover:shadow-[0_0_25px_rgba(204,255,0,0.6)] transition-all hover:-translate-y-0.5"
            >
              Agendar Aula
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white z-50 relative p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} className="text-pickle" /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-dark z-40 lg:hidden flex flex-col justify-center items-center p-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-center w-full max-w-sm mt-10">
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (idx * 0.1) }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-display font-black text-white hover:text-pickle uppercase tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                onClick={() => {
                    onOpenPartnership();
                    setIsMobileMenuOpen(false);
                }}
                className="text-sm font-bold text-gray-400 hover:text-white uppercase tracking-widest flex items-center justify-center gap-2 py-2"
              >
                 <Handshake size={16} className="text-pickle" /> Quero ser Patrocinador
              </motion.button>
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => {
                  onOpenGame();
                  setIsMobileMenuOpen(false);
                }}
                className="text-xl font-bold text-gray-300 hover:text-pickle flex items-center justify-center gap-2 uppercase tracking-widest border border-white/10 p-4 rounded-xl"
              >
                <Gamepad2 /> Jogar Mini-Game
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="w-full h-px bg-white/10 my-2"
              />
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => {
                  onOpenBooking();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-pickle text-brand-dark font-black py-4 rounded-xl uppercase text-lg w-full shadow-lg shadow-pickle/20"
              >
                Começar a Jogar
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};