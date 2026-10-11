import { HERO_IMAGE } from '../data/initialData';
import { ArrowRight, BookOpen, PenTool } from 'lucide-react';

interface HeroSectionProps {
  onExplore4S: () => void;
  onOpenCanvas: () => void;
}

export const HeroSection = ({ onExplore4S, onOpenCanvas }: HeroSectionProps) => {
  return (
    <section id="inicio" className="bg-[#FBF9F5] border-b border-[#d9c6a5]">
      
      {/* Primary Hero Banner */}
      <div className="relative w-full overflow-hidden bg-[#222222] min-h-[580px] lg:min-h-[640px] flex items-end">
        {/* Full-width photography */}
        <img 
          src={HERO_IMAGE} 
          alt="Recolectores y artesanos en su territorio ancestral"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.92] contrast-[1.08]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback to local image if remote image fails
            (e.currentTarget as HTMLImageElement).src = '/images/hero_craft_workshop_1790554698993.jpg';
          }}
        />

        {/* Cinematic gradient scrim ensuring WCAG AAA legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 w-full">
          
          {/* Eyebrow Label Pill */}
          <div className="mb-4">
            <span className="bg-[#69826a] text-white px-3.5 py-1.5 text-xs uppercase tracking-wider font-sans font-bold rounded-full inline-block shadow-sm">
              Marco Metodológico · Economía Territorial & Emprendimiento con Identidad
            </span>
          </div>

          {/* Headline with Clean White Text & Territorial Accent */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight leading-[1.25] text-white max-w-5xl mb-6">
            <span className="drop-shadow-md inline-block mb-1.5">
              EL ARTE DE EMPRENDER
            </span>
            <br />
            <span className="drop-shadow-md inline-block mb-1.5">
              CON IDENTIDAD CULTURAL:
            </span>
            <br />
            <span className="bg-[#69826a] text-white px-4 py-1.5 rounded-2xl inline-block shadow-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:whitespace-nowrap mt-1">
              "Viabilidad sin perder la memoria"
            </span>
          </h1>

          {/* Editorial Excerpt in Dark Scrim Container */}
          <div className="bg-[#222222]/90 border-l-4 border-[#69826a] rounded-2xl text-white p-5 sm:p-6 max-w-2xl text-base sm:text-lg font-sans leading-relaxed mb-8 shadow-md">
            <p>
              Una guía integral para creadores y comunidades que rehúsan elegir entre la viabilidad económica y la custodia de su conocimiento ancestral. Fundamentada en las 4S y el ciclo dinámico V.E.I.
            </p>
            <div className="mt-3 text-xs font-sans uppercase tracking-wider text-[#d9c6a5] font-bold">
              Wallmapu · Saberes de Origen · Comercio Justo
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenCanvas}
              className="bg-[#69826a] hover:bg-[#4f6650] text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-7 py-3.5 rounded-full transition-colors inline-flex items-center gap-2.5 shadow-md cursor-pointer"
            >
              <span>Diseñar en Pliego de Taller</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExplore4S}
              className="bg-[#222222] hover:bg-[#222222]/80 text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-6 py-3.5 rounded-full transition-colors border border-white/20 inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <BookOpen className="w-4 h-4 text-[#d9c6a5]" />
              <span>Explorar Pilares 4S</span>
            </button>
          </div>

        </div>
      </div>

      {/* Territorial Manifesto Quote Banner */}
      <div className="bg-[#69826a] text-white py-6 border-b border-[#4f6650]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-[#222222] text-[#d9c6a5] px-3 py-1 text-xs font-sans font-bold uppercase tracking-wider rounded-full shrink-0">
              PRINCIPIO GUÍA
            </span>
            <p className="font-sans font-bold text-base sm:text-lg leading-snug">
              "El negocio no disfraza la cultura para venderla; nace de ella para dignificarla y enriquecer a su comunidad."
            </p>
          </div>
          <div className="text-xs font-sans uppercase tracking-wider text-white/90 shrink-0">
            4S (Esencia) × V.E.I. (Estrategia)
          </div>
        </div>
      </div>

      {/* Dual Foundation: Split Blocks */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Pillar 4S Proposition - High Contrast Card */}
          <div className="bg-white rounded-3xl border-2 border-[#d9c6a5] p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#d9c6a5] mb-6">
                <span className="inline-block bg-[#222222] text-[#d9c6a5] px-3 py-1 text-xs font-sans font-bold uppercase tracking-wider rounded-full">
                  01 / Esencia & Propósito
                </span>
                <span className="text-xs font-sans uppercase font-bold text-[#69826a] tracking-wider">
                  El Qué y el Porqué
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#222222] mb-4">
                Las 4S: Los Pilares Innegociables
              </h3>
              
              <p className="text-[#555555] text-base leading-relaxed mb-6 font-sans">
                Son el primer filtro ético y la fuente de diferenciación. Cada entrega debe ser <strong className="text-[#222222] font-bold underline decoration-[#69826a]">Saludable</strong> (Küme Felen), <strong className="text-[#222222] font-bold underline decoration-[#69826a]">Sustentable</strong> (Yamawun Itrofil Mongen), <strong className="text-[#222222] font-bold underline decoration-[#69826a]">Simbólica</strong> (Tüwün Küpalme) y creada con <strong className="text-[#222222] font-bold underline decoration-[#69826a]">Sentido</strong> (Fellentun).
              </p>
            </div>

            <button
              onClick={onExplore4S}
              className="mt-4 bg-[#69826a] hover:bg-[#4f6650] text-white font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-full transition-colors inline-flex items-center justify-between cursor-pointer w-full shadow-sm"
            >
              <span>Explorar los 4 Pilares Innegociables</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* VEI Cycle Proposition - Green Editorial Block */}
          <div className="bg-[#69826a] text-white rounded-3xl border-2 border-[#d9c6a5] p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/20 mb-6">
                <span className="inline-block bg-[#222222] text-[#d9c6a5] px-3 py-1 text-xs font-sans font-bold uppercase tracking-wider rounded-full">
                  02 / Estrategia & Movimiento
                </span>
                <span className="text-xs font-sans uppercase font-bold text-white/90 tracking-wider">
                  El Cómo Dinámico
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-white mb-4">
                El Ciclo V.E.I. en Acción
              </h3>

              <p className="text-white/90 text-base leading-relaxed mb-6 font-sans">
                El motor que activa la promesa en el mercado: <strong className="text-white font-bold">Identidad</strong> para definir quiénes somos; <strong className="text-white font-bold">Empoderamiento</strong> para potenciar talentos y alianzas de oficio; y <strong className="text-white font-bold">Valoración</strong> para comunicar relatos auténticos y alcanzar canales justos.
              </p>
            </div>

            <button
              onClick={onOpenCanvas}
              className="mt-4 bg-[#222222] hover:bg-[#222222]/80 text-white font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-full transition-colors inline-flex items-center justify-between cursor-pointer w-full shadow-sm"
            >
              <span>Configurar en Pliego de Taller</span>
              <PenTool className="w-4 h-4 text-[#d9c6a5]" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
