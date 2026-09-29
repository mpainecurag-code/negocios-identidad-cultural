import React from 'react';
import { HERO_IMAGE } from '../data/initialData';
import { ArrowRight, BookOpen, PenTool } from 'lucide-react';

interface HeroSectionProps {
  onExplore4S: () => void;
  onOpenCanvas: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore4S, onOpenCanvas }) => {
  return (
    <section id="inicio" className="bg-[#F6F5F2] border-b-2 border-[#141414]">
      
      {/* Primary Hero Banner - Matching Survival.es Image 1 Graphic Formula */}
      <div className="relative w-full overflow-hidden bg-[#141414] min-h-[580px] lg:min-h-[640px] flex items-end">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 w-full">
          
          {/* Eyebrow Label in Black Strip */}
          <div className="mb-4">
            <span className="bg-[#141414] text-[#F5A623] px-3 py-1 text-xs uppercase tracking-widest font-mono font-bold border-l-4 border-[#F5A623]">
              Marco Metodológico · Economía Territorial & Emprendimiento con Identidad
            </span>
          </div>

          {/* Headline with Black Tape Boxes (Survival Signature from Image 1) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.25] text-white max-w-5xl mb-6">
            <span className="bg-[#141414] text-white px-3 py-1 inline-block mb-1.5 shadow-sm">
              EL ARTE DE EMPRENDER
            </span>
            <br />
            <span className="bg-[#141414] text-white px-3 py-1 inline-block mb-1.5 shadow-sm">
              CON IDENTIDAD CULTURAL:
            </span>
            <br />
            <span className="bg-[#8C2415] text-white px-3 py-1 inline-block shadow-sm text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
              "Viabilidad sin perder la memoria"
            </span>
          </h1>

          {/* Editorial Excerpt in Semi-Transparent Dark Scrim (Exact match to Image 1) */}
          <div className="bg-[#141414]/90 border-l-4 border-[#8C2415] text-white p-5 sm:p-6 max-w-2xl text-base sm:text-lg font-sans leading-relaxed mb-8 shadow-md">
            <p>
              Una guía integral para creadores y comunidades que rehúsan elegir entre la viabilidad económica y la custodia de su conocimiento ancestral. Fundamentada en las 4S y el ciclo dinámico V.E.I.
            </p>
            <div className="mt-3 text-xs font-mono uppercase tracking-widest text-[#F5A623] font-bold">
              Wallmapu · Saberes de Origen · Comercio Justo
            </div>
          </div>

          {/* Primary Action Button (Survival Golden Yellow CTA) */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenCanvas}
              className="bg-[#F5A623] hover:bg-white text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm px-7 py-4 rounded-none transition-colors border border-black/10 inline-flex items-center gap-2.5 shadow-md cursor-pointer"
            >
              <span>Diseñar en Pliego de Taller</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExplore4S}
              className="bg-[#141414] hover:bg-neutral-800 text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-6 py-4 rounded-none transition-colors border border-white/20 inline-flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#F5A623]" />
              <span>Explorar Pilares 4S</span>
            </button>
          </div>

        </div>
      </div>

      {/* Territorial Manifesto Quote Banner */}
      <div className="bg-[#8C2415] text-white py-6 border-b-2 border-[#141414]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-black text-[#F5A623] px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-widest shrink-0">
              PRINCIPIO GUÍA
            </span>
            <p className="font-serif font-bold text-base sm:text-lg leading-snug">
              "El negocio no disfraza la cultura para venderla; nace de ella para dignificarla y enriquecer a su comunidad."
            </p>
          </div>
          <div className="text-xs font-mono uppercase tracking-widest text-white/80 shrink-0">
            4S (Esencia) × V.E.I. (Estrategia)
          </div>
        </div>
      </div>

      {/* Dual Foundation: Split Blocks in Survival Aesthetic */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Pillar 4S Proposition - High Contrast Editorial Card */}
          <div className="bg-white border-2 border-[#141414] p-8 sm:p-10 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#141414] mb-6">
                <span className="inline-block bg-[#141414] text-white px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest">
                  01 / Esencia & Propósito
                </span>
                <span className="text-xs font-mono uppercase font-bold text-[#8C2415]">
                  El Qué y el Porqué
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#141414] mb-4">
                Las 4S: Los Pilares Innegociables
              </h3>
              
              <p className="text-[#333333] text-base leading-relaxed mb-6 font-sans">
                Son el primer filtro ético y la fuente de diferenciación. Cada entrega debe ser <strong className="text-[#141414] font-bold underline decoration-[#8C2415]">Saludable</strong> (Küme Felen), <strong className="text-[#141414] font-bold underline decoration-[#8C2415]">Sustentable</strong> (Yamawun Itrofil Mongen), <strong className="text-[#141414] font-bold underline decoration-[#8C2415]">Simbólica</strong> (Tüwün Küpalme) y creada con <strong className="text-[#141414] font-bold underline decoration-[#8C2415]">Sentido</strong> (Fellentun).
              </p>
            </div>

            <button
              onClick={onExplore4S}
              className="mt-4 bg-[#8C2415] hover:bg-[#141414] text-white font-extrabold uppercase tracking-wider text-xs px-6 py-3.5 rounded-none transition-colors inline-flex items-center justify-between cursor-pointer w-full"
            >
              <span>Explorar los 4 Pilares Innegociables</span>
              <ArrowRight className="w-4 h-4 text-[#F5A623]" />
            </button>
          </div>

          {/* VEI Cycle Proposition - Rich Red Editorial Block (Survival signature style) */}
          <div className="bg-[#8C2415] text-white border-2 border-[#141414] p-8 sm:p-10 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-white/20 mb-6">
                <span className="inline-block bg-[#141414] text-[#F5A623] px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest">
                  02 / Estrategia & Movimiento
                </span>
                <span className="text-xs font-mono uppercase font-bold text-white/80">
                  El Cómo Dinámico
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-black text-white mb-4">
                El Ciclo V.E.I. en Acción
              </h3>

              <p className="text-white/90 text-base leading-relaxed mb-6 font-sans">
                El motor que activa la promesa en el mercado: <strong className="text-white font-bold">Identidad</strong> para definir quiénes somos; <strong className="text-white font-bold">Empoderamiento</strong> para potenciar talentos y alianzas de oficio; y <strong className="text-white font-bold">Valoración</strong> para comunicar relatos auténticos y alcanzar canales justos.
              </p>
            </div>

            <button
              onClick={onOpenCanvas}
              className="mt-4 bg-[#F5A623] hover:bg-white text-black font-extrabold uppercase tracking-wider text-xs px-6 py-3.5 rounded-none transition-colors inline-flex items-center justify-between cursor-pointer w-full"
            >
              <span>Configurar en Pliego de Taller</span>
              <PenTool className="w-4 h-4 text-black" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
