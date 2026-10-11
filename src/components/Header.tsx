import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenCanvas: () => void;
}

export const Header = ({ onNavigate, onOpenCanvas }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#d9c6a5] shadow-xs">
      {/* Top micro announcement bar */}
      <div className="bg-[#222222] text-white text-[11px] font-sans tracking-wider uppercase px-6 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#69826a] inline-block"></span>
          <span>Metodología para Negocios con Identidad Cultural · Juan Huincabal & Mijail Painecura</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-neutral-300">
          <span>Economía Territorial & Emprendimiento con Identidad</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#inicio" 
          onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }}
          className="group flex items-center"
        >
          <span className="text-lg sm:text-2xl font-sans font-extrabold tracking-tight text-[#222222] group-hover:text-[#69826a] transition-colors uppercase">
            Negocios con Identidad Cultural
          </span>
        </a>

        {/* Zone 2: Clean, bold text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-wider font-bold text-[#222222]">
          <button 
            onClick={() => handleNavClick('fundamento-4s')} 
            className="hover:text-[#69826a] hover:underline underline-offset-8 decoration-2 decoration-[#69826a] transition-colors cursor-pointer py-1"
          >
            Pilares 4S
          </button>
          <button 
            onClick={() => handleNavClick('ciclo-vei')} 
            className="hover:text-[#69826a] hover:underline underline-offset-8 decoration-2 decoration-[#69826a] transition-colors cursor-pointer py-1"
          >
            Ciclo V.E.I.
          </button>
          <button 
            onClick={() => handleNavClick('matriz-integrada')} 
            className="hover:text-[#69826a] hover:underline underline-offset-8 decoration-2 decoration-[#69826a] transition-colors cursor-pointer py-1"
          >
            Telar Táctico
          </button>
          <button 
            onClick={() => handleNavClick('casos-estudio')} 
            className="hover:text-[#69826a] hover:underline underline-offset-8 decoration-2 decoration-[#69826a] transition-colors cursor-pointer py-1"
          >
            Casos de Estudio
          </button>
          <button 
            onClick={() => handleNavClick('glosario-kimun')} 
            className="hover:text-[#69826a] hover:underline underline-offset-8 decoration-2 decoration-[#69826a] transition-colors cursor-pointer py-1"
          >
            Glosario Kimün
          </button>
        </nav>

        {/* Zone 3: Primary action button and mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onOpenCanvas();
              setMobileMenuOpen(false);
            }}
            className="px-6 py-3 text-xs uppercase tracking-wider font-bold text-white bg-[#69826a] hover:bg-[#4f6650] transition-colors rounded-full cursor-pointer whitespace-nowrap shadow-xs"
          >
            Pliego de Taller
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#222222] hover:bg-[#FBF9F5] transition-colors cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white rounded-2xl border border-[#d9c6a5] mx-4 mb-4 p-6 space-y-4 shadow-md">
          <button 
            onClick={() => handleNavClick('fundamento-4s')} 
            className="block w-full text-left text-sm uppercase tracking-wider font-bold text-[#222222] hover:text-[#69826a] py-2 border-b border-[#d9c6a5]/30 transition-colors"
          >
            Pilares 4S
          </button>
          <button 
            onClick={() => handleNavClick('ciclo-vei')} 
            className="block w-full text-left text-sm uppercase tracking-wider font-bold text-[#222222] hover:text-[#69826a] py-2 border-b border-[#d9c6a5]/30 transition-colors"
          >
            Ciclo V.E.I.
          </button>
          <button 
            onClick={() => handleNavClick('matriz-integrada')} 
            className="block w-full text-left text-sm uppercase tracking-wider font-bold text-[#222222] hover:text-[#69826a] py-2 border-b border-[#d9c6a5]/30 transition-colors"
          >
            Telar Táctico
          </button>
          <button 
            onClick={() => handleNavClick('casos-estudio')} 
            className="block w-full text-left text-sm uppercase tracking-wider font-bold text-[#222222] hover:text-[#69826a] py-2 border-b border-[#d9c6a5]/30 transition-colors"
          >
            Casos de Estudio
          </button>
          <button 
            onClick={() => handleNavClick('glosario-kimun')} 
            className="block w-full text-left text-sm uppercase tracking-wider font-bold text-[#222222] hover:text-[#69826a] py-2 transition-colors"
          >
            Glosario Kimün
          </button>
        </div>
      )}
    </header>
  );
};
