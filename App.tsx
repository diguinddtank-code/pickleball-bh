import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowToPlay } from './components/HowToPlay';
import { Classes } from './components/Classes';
import { FAQ } from './components/FAQ';
import { InstagramSection } from './components/InstagramSection';
import { Testimonials } from './components/Testimonials';
import { Sponsors } from './components/Sponsors';
import { Footer } from './components/Footer';
import { Modal } from './components/ui/Modal';
import { Loader } from './components/ui/Loader';
import { BookingModalContent } from './components/modals/BookingModalContent';
import { PartnershipModalContent } from './components/modals/PartnershipModalContent';
import { FloatingDecor } from './components/FloatingDecor';
import { PickleballGame } from './components/PickleballGame';
import { ModalType } from './types';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeModal, setActiveModal] = useState<ModalType>(ModalType.NONE);

  useEffect(() => {
    // Simulate initial loading for effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const closeModals = () => setActiveModal(ModalType.NONE);

  return (
    <div className="min-h-screen font-sans selection:bg-pickle selection:text-brand-dark bg-brand-dark relative overflow-x-hidden">
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <FloatingDecor /> {/* Background Fun Animations */}
          
          <Navbar 
            onOpenBooking={() => setActiveModal(ModalType.BOOKING)} 
            onOpenGame={() => setActiveModal(ModalType.GAME)}
            onOpenPartnership={() => setActiveModal(ModalType.PARTNERSHIP)}
          />
          
          <main className="relative z-10 w-full overflow-hidden">
            <Hero onOpenBooking={() => setActiveModal(ModalType.BOOKING)} />
            <Features />
            <HowToPlay />
            <Classes onOpenBooking={() => setActiveModal(ModalType.BOOKING)} />
            
            {/* Ranking Teaser Section with Skew */}
            <section id="ranking" className="py-24 bg-gradient-to-r from-brand-gray to-brand-dark border-y border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                {/* Decoration on Hover */}
                <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <span className="text-pickle font-bold tracking-widest uppercase text-sm mb-2 block animate-pulse">Competição</span>
                    <h2 className="font-display font-black text-white text-4xl md:text-5xl lg:text-7xl mb-6 italic break-words">RANKING 2026</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-lg px-4">
                        Prepare-se para a temporada mais disputada da história. Pontue em torneios oficiais e suba na tabela para se tornar uma lenda do PBH.
                    </p>
                    <div className="inline-block p-1 rounded-xl bg-gradient-to-r from-pickle to-green-500 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg shadow-pickle/20 max-w-full">
                        <div className="bg-brand-dark px-6 py-4 md:px-10 md:py-5 rounded-lg">
                            <span className="text-white font-bold text-lg md:text-xl uppercase tracking-wider whitespace-nowrap">Ver Tabela (Em Breve)</span>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
            <InstagramSection />
            <Sponsors onOpenPartnership={() => setActiveModal(ModalType.PARTNERSHIP)} />
            <FAQ />
          </main>

          <Footer />

          {/* Modals */}
          <Modal 
            isOpen={activeModal === ModalType.BOOKING} 
            onClose={closeModals}
            title="Agendar Aula"
          >
            <BookingModalContent />
          </Modal>

          <Modal 
            isOpen={activeModal === ModalType.PARTNERSHIP} 
            onClose={closeModals}
            title="Seja Parceiro"
          >
            <PartnershipModalContent />
          </Modal>

          <Modal 
            isOpen={activeModal === ModalType.GAME} 
            onClose={closeModals}
            title="Pickleball Drill"
          >
             <PickleballGame />
          </Modal>
        </>
      )}
    </div>
  );
}

export default App;