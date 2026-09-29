import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenCanvas: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenCanvas }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-[#141414] shadow-xs">
      {/* Top micro announcement bar like activist editorial sites */}
      <div className="bg-[#141414] text-white text-[11px] font-mono tracking-widest uppercase px-6 py-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#F5A623] inline-block"></span>
          <span>Metodología para Negocios con Identidad Cultural · Juan Huincabal & Mijail Painecura</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-neutral-300">
          <span>Economía Territorial & Emprendimiento con Identidad</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark with Survival bold attitude */}
        <a 
          href="#inicio" 
          onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }}
          className="group flex items-center"
        >
          <span className="text-lg sm:text-2xl font-serif font-black tracking-tight text-[#141414] group-hover:text-[#8C2415] transition-colors uppercase">
            Negocios con Identidad Cultural
          </span>
        </a>

        {/* Zone 2: Clean, bold text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-widest font-bold text-[#141414]">
          <button 
            onClick={() => handleNavClick('fundamento-4s')} 
            className="hover:text-[#8C2415] hover:underline underline-offset-8 decoration-2 decoration-[#8C2415] transition-colors cursor-pointer py-1"
          >
            Pilares 4S
          </button>
          <button 
            onClick={() => handleNavClick('ciclo-vei')} 
            className="hover:text-[#8C2415] hover:underline underline-offset-8 decoration-2 decoration-[#8C2415] transition-colors cursor-pointer py-1"
          >
            Ciclo V.E.I.
          </button>
          <button 
            onClick={() => handleNavClick('matriz-integrada')} 
            className="hover:text-[#8C2415] hover:underline underline-offset-8 decoration-2 decoration-[#8C2415] transition-colors cursor-pointer py-1"
          >
            Telar Táctico
          </button>
          <button 
            onClick={() => handleNavClick('casos-estudio')} 
            className="hover:text-[#8C2415] hover:underline underline-offset-8 decoration-2 decoration-[#8C2415] transition-colors cursor-pointer py-1"
          >
            Casos de Estudio
          </button>
          <button 
            onClick={() => handleNavClick('glosario-kimun')} 
            className="hover:text-[#8C2415] hover:underline underline-offset-8 decoration-2 decoration-[#8C2415] transition-colors cursor-pointer py-1"
          >
            Glosario Kimün
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions (Survival signature yellow rectangular button) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onOpenCanvas();
              setMobileMenuOpen(false);
            }}
            className="px-5 py-3 text-xs uppercase tracking-wider font-extrabold text-black bg-[#F5A623] hover:bg-[#141414] hover:text-white transition-colors rounded-none border border-black/10 cursor-pointer whitespace-nowrap shadow-xs"
          >
            Pliego de Taller
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#141414] hover:bg-neutral-100 cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b-2 border-[#141414] px-6 py-6 space-y-4">
          <button 
            onClick={() => handleNavClick('fundamento-4s')} 
            className="block w-full text-left text-sm uppercase tracking-widest font-bold text-[#141414] hover:text-[#8C2415] py-2 border-b border-neutral-100"
          >
            Pilares 4S
          </button>
          <button 
            onClick={() => handleNavClick('ciclo-vei')} 
            className="block w-full text-left text-sm uppercase tracking-widest font-bold text-[#141414] hover:text-[#8C2415] py-2 border-b border-neutral-100"
          >
            Ciclo V.E.I.
          </button>
          <button 
            onClick={() => handleNavClick('matriz-integrada')} 
            className="block w-full text-left text-sm uppercase tracking-widest font-bold text-[#141414] hover:text-[#8C2415] py-2 border-b border-neutral-100"
          >
            Telar Táctico
          </button>
          <button 
            onClick={() => handleNavClick('casos-estudio')} 
            className="block w-full text-left text-sm uppercase tracking-widest font-bold text-[#141414] hover:text-[#8C2415] py-2 border-b border-neutral-100"
          >
            Casos de Estudio
          </button>
          <button 
            onClick={() => handleNavClick('glosario-kimun')} 
            className="block w-full text-left text-sm uppercase tracking-widest font-bold text-[#141414] hover:text-[#8C2415] py-2"
          >
            Glosario Kimün
          </button>
        </div>
      )}
    </header>
  );
};
