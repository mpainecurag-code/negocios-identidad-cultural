interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-[#222222] text-white py-16 border-t-4 border-[#69826a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/15">
          <div>
            <div className="mb-3">
              <h4 className="text-2xl font-sans font-extrabold text-white uppercase tracking-wide">
                Negocios con Identidad Cultural
              </h4>
            </div>
            
            <p className="text-xs font-sans text-neutral-400 max-w-lg leading-relaxed">
              Marco metodológico para negocios con identidad cultural, fundamentado en la salud viva, la sustentabilidad ecológica, el respeto a la memoria ancestral y la vocación comunitaria territorial.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider font-sans font-bold text-neutral-300">
            <button 
              onClick={() => onNavigate('inicio')} 
              className="hover:text-[#69826a] transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <button 
              onClick={() => onNavigate('fundamento-4s')} 
              className="hover:text-[#69826a] transition-colors cursor-pointer"
            >
              Pilares 4S
            </button>
            <button 
              onClick={() => onNavigate('ciclo-vei')} 
              className="hover:text-[#69826a] hover:underline underline-offset-8 decoration-2 decoration-[#69826a] transition-colors cursor-pointer"
            >
              Ciclo V.E.I.
            </button>
            <button 
              onClick={() => onNavigate('casos-estudio')} 
              className="hover:text-[#69826a] transition-colors cursor-pointer"
            >
              Casos
            </button>
            <button 
              onClick={() => onNavigate('lienzo')} 
              className="hover:text-[#69826a] transition-colors cursor-pointer text-[#69826a]"
            >
              Pliego de Taller
            </button>

          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans tracking-wider text-neutral-400">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[#69826a] font-medium">Küme Felen</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-white font-medium">Itrofil Mongen</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-[#d9c6a5] font-medium">Tüwün Küpalme</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-200 font-medium">Fellentun</span>
          </div>

          <div className="text-neutral-400">
            Economía Territorial & Emprendimiento con Identidad
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs sm:text-sm font-sans italic text-neutral-300">
            Las metodologías mostradas en esta web fueron creadas y diseñadas por <strong className="text-white not-italic font-bold">Juan Huincabal</strong> y <strong className="text-white not-italic font-bold">Mijail Painecura</strong>.
          </p>
        </div>

      </div>
    </footer>
  );
};
