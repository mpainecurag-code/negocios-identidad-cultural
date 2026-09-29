import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#141414] text-white py-16 border-t-4 border-[#8C2415]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/15">
          <div>
            <div className="mb-3">
              <h4 className="text-2xl font-serif font-black text-white uppercase tracking-tight">
                Negocios con Identidad Cultural
              </h4>
            </div>
            
            <p className="text-xs font-sans text-neutral-400 max-w-lg leading-relaxed">
              Marco metodológico para negocios con identidad cultural, fundamentado en la salud viva, la sustentabilidad ecológica, el respeto a la memoria ancestral y la vocación comunitaria territorial.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest font-mono font-bold text-neutral-300">
            <button 
              onClick={() => onNavigate('inicio')} 
              className="hover:text-[#F5A623] transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <button 
              onClick={() => onNavigate('fundamento-4s')} 
              className="hover:text-[#F5A623] transition-colors cursor-pointer"
            >
              Pilares 4S
            </button>
            <button 
              onClick={() => onNavigate('ciclo-vei')} 
              className="hover:text-[#F5A623] transition-colors cursor-pointer"
            >
              Ciclo V.E.I.
            </button>
            <button 
              onClick={() => onNavigate('casos-estudio')} 
              className="hover:text-[#F5A623] transition-colors cursor-pointer"
            >
              Casos
            </button>
            <button 
              onClick={() => onNavigate('lienzo')} 
              className="hover:text-[#F5A623] transition-colors cursor-pointer text-[#F5A623]"
            >
              Pliego de Taller
            </button>
            <button 
              onClick={() => onNavigate('glosario-kimun')} 
              className="hover:text-[#F5A623] transition-colors cursor-pointer"
            >
              Glosario
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[#F5A623]">Küme Felen</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-200">Itrofil Mongen</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-[#8C2415]">Tüwün Küpalme</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-white">Fellentun</span>
          </div>

          <div className="text-neutral-400">
            Economía Territorial & Emprendimiento con Identidad
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs sm:text-sm font-serif italic text-neutral-300">
            Las metodologías mostradas en esta web fueron creadas y diseñadas por <strong className="text-white not-italic font-bold">Juan Huincabal</strong> y <strong className="text-white not-italic font-bold">Mijail Painecura</strong>.
          </p>
        </div>

      </div>
    </footer>
  );
};
