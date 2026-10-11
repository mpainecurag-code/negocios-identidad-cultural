import { useState } from 'react';
import { CASE_STUDIES } from '../data/initialData';
import { CaseStudy, CulturalBusinessProposal } from '../types';
import { ArrowRight, Check, MapPin, Leaf, RefreshCw, Mountain, HeartHandshake, Compass, Store } from 'lucide-react';

interface CaseStudiesSectionProps {
  onLoadCaseIntoCanvas: (caseProposal: CulturalBusinessProposal) => void;
}

export const CaseStudiesSection = ({ onLoadCaseIntoCanvas }: CaseStudiesSectionProps) => {
  const [activeCaseId, setActiveCaseId] = useState<string>('nagche-textiles');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeCase = CASE_STUDIES.find((c) => c.id === activeCaseId) || CASE_STUDIES[0];

  const handleApplyToCanvas = (cs: CaseStudy) => {
    const proposal: CulturalBusinessProposal = {
      businessName: cs.title,
      culturalIdentity: cs.identityLabel,
      sector: cs.title.includes('Tejedoras') ? 'Textilería Tradicional' : cs.title.includes('Cosmética') ? 'Fitocosmética Natural' : 'Turismo Comunitario',
      territory: cs.territory,
      saludableAnswer: cs.fourS.saludable,
      sustentableAnswer: cs.fourS.sustentable,
      simbolicoAnswer: cs.fourS.simbolico,
      sentidoAnswer: cs.fourS.sentido,
      identidadAnswer: cs.vei.identidad,
      empoderamientoAnswer: cs.vei.empoderamiento,
      valoracionAnswer: cs.vei.valoracion
    };

    onLoadCaseIntoCanvas(proposal);
    setCopiedId(cs.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="casos-estudio" className="py-20 md:py-28 border-b border-[#d9c6a5] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="mb-4">
            <span className="bg-[#69826a] text-white px-4 py-1.5 text-[10px] sm:text-xs uppercase tracking-wider font-sans font-bold rounded-full inline-block">
              03 / Casos de Estudio en Territorio
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#222222] tracking-tight text-balance mb-6 leading-tight uppercase">
            Tres territorios, tres oficios, un solo principio ético.
          </h2>

          <p className="text-[#555555] leading-relaxed text-base sm:text-lg font-sans">
            Explora cómo la textilería Nagche, la fitocosmética Pewenche y el turismo Lafkenche han transformado las 4S y el V.E.I. en modelos de vida sostenibles y dignos.
          </p>
        </div>

        {/* Horizontal Case Selection Tabs */}
        <div className="flex items-center gap-3 pb-4 mb-10 overflow-x-auto">
          {CASE_STUDIES.map((c, idx) => {
            const isSelected = c.id === activeCaseId;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCaseId(c.id)}
                className={`text-xs uppercase tracking-wider font-bold px-6 py-3 transition-colors whitespace-nowrap cursor-pointer rounded-full border-2 ${
                  isSelected 
                    ? 'bg-[#222222] text-white border-[#222222] shadow-sm' 
                    : 'bg-[#FBF9F5] text-[#222222] border-[#d9c6a5] hover:border-[#69826a] hover:bg-[#69826a]/10'
                }`}
              >
                <span>0{idx + 1} · {c.title}</span>
              </button>
            );
          })}
        </div>

        {/* 50/50 Split Showcase */}
        <div className="rounded-3xl border-2 border-[#d9c6a5] shadow-sm mb-12 overflow-hidden bg-white">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Side A: Left Documentary Photography */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[520px] bg-[#222222] flex items-end">
              <img 
                src={activeCase.image} 
                alt={activeCase.title}
                className="absolute inset-0 w-full h-full object-cover object-center grayscale-[5%] contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10 p-6 flex flex-wrap items-center justify-between gap-3 w-full">
                <div className="bg-[#222222] text-[#d9c6a5] px-3.5 py-1.5 text-xs font-sans font-bold uppercase tracking-wider inline-flex items-center gap-1.5 rounded-full border border-[#d9c6a5]/30 shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#d9c6a5]" />
                  <span>{activeCase.territory}</span>
                </div>
                <div className="bg-[#222222]/90 text-[#d9c6a5] text-[11px] font-sans font-bold px-3.5 py-1.5 uppercase tracking-wider rounded-full border border-[#d9c6a5]/30">
                  {activeCase.identityLabel}
                </div>
              </div>
            </div>

            {/* Side B: Right Solid Verde Territorial Block (#69826a) */}
            <div className="lg:col-span-6 bg-[#69826a] text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                {/* Territory tag */}
                <div className="text-xs font-sans uppercase tracking-wider text-[#d9c6a5] font-bold mb-4 flex items-center gap-2">
                  <span>EXPEDIENTE TERRITORIAL</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeCase.identityLabel}</span>
                </div>

                {/* Title Box */}
                <div className="inline-block bg-[#222222] text-white rounded-2xl px-5 py-2.5 text-2xl sm:text-4xl font-sans font-extrabold tracking-wide mb-5 shadow-sm">
                  {activeCase.title}
                </div>

                {/* Tagline */}
                <p className="text-base sm:text-lg font-sans italic text-white/95 mb-6 leading-relaxed">
                  "{activeCase.tagline}"
                </p>

                {/* Value proposition narrative */}
                <div className="p-5 bg-black/35 border-l-4 border-[#d9c6a5] rounded-xl mb-8">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#d9c6a5] block mb-2 font-sans">
                    Propuesta de Valor Integrada
                  </span>
                  <p className="text-sm sm:text-base text-white/95 font-sans leading-relaxed">
                    {activeCase.valueProposition}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => handleApplyToCanvas(activeCase)}
                  className="px-7 py-3.5 bg-[#d9c6a5] text-[#222222] hover:bg-white transition-colors text-xs sm:text-sm uppercase tracking-wider font-bold inline-flex items-center gap-2.5 rounded-full cursor-pointer shadow-sm"
                >
                  {copiedId === activeCase.id ? (
                    <>
                      <Check className="w-5 h-5 text-[#222222]" />
                      <span>¡Cargado en Pliego de Taller!</span>
                    </>
                  ) : (
                    <>
                      <span>Cargar en mi Pliego de Taller</span>
                      <ArrowRight className="w-4 h-4 text-[#222222]" />
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Deep Case Breakdown */}
          <div className="p-8 sm:p-12 bg-[#FBF9F5] border-t border-[#d9c6a5] space-y-10">
            
            {/* 4S Breakdown */}
            <div>
              <div className="mb-6 pb-2 border-b border-[#d9c6a5]">
                <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#222222] font-sans">
                  Desglose Innegociable de las 4S en este Territorio
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="p-5 bg-white rounded-2xl border-2 border-[#d9c6a5] border-t-[6px] border-t-[#69826a] shadow-xs">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-[#69826a] block mb-2 font-sans flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5" />
                    Saludable (Küme Felen)
                  </span>
                  <p className="text-xs sm:text-sm text-[#555555] font-sans leading-relaxed">
                    {activeCase.fourS.saludable}
                  </p>
                </div>

                <div className="p-5 bg-white rounded-2xl border-2 border-[#d9c6a5] border-t-[6px] border-t-[#4f6650] shadow-xs">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-[#4f6650] block mb-2 font-sans flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5" />
                    Sustentable (Yamawun)
                  </span>
                  <p className="text-xs sm:text-sm text-[#555555] font-sans leading-relaxed">
                    {activeCase.fourS.sustentable}
                  </p>
                </div>

                <div className="p-5 bg-white rounded-2xl border-2 border-[#d9c6a5] border-t-[6px] border-t-[#d9c6a5] shadow-xs">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-[#222222] block mb-2 font-sans flex items-center gap-1.5">
                    <Mountain className="w-3.5 h-3.5 text-[#69826a]" />
                    Simbólico (Tüwün)
                  </span>
                  <p className="text-xs sm:text-sm text-[#555555] font-sans leading-relaxed">
                    {activeCase.fourS.simbolico}
                  </p>
                </div>

                <div className="p-5 bg-white rounded-2xl border-2 border-[#d9c6a5] border-t-[6px] border-t-[#222222] shadow-xs">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-[#222222] block mb-2 font-sans flex items-center gap-1.5">
                    <HeartHandshake className="w-3.5 h-3.5 text-[#69826a]" />
                    Sentido (Fellentun)
                  </span>
                  <p className="text-xs sm:text-sm text-[#555555] font-sans leading-relaxed">
                    {activeCase.fourS.sentido}
                  </p>
                </div>

              </div>
            </div>

            {/* VEI Deployment Breakdown */}
            <div className="pt-6 border-t border-[#d9c6a5]">
              <div className="mb-6 pb-2 border-b border-[#d9c6a5]">
                <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#222222] font-sans">
                  Articulación Estratégica con Ciclo V.E.I.
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="p-5 bg-white rounded-2xl border-2 border-[#d9c6a5] border-l-8 border-l-[#69826a] shadow-xs">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-[#222222] block mb-1 font-sans flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 text-[#69826a]" />
                    (I) Identidad
                  </span>
                  <span className="text-xs font-sans italic text-[#69826a] font-medium block mb-2">
                    ¿Quiénes somos?
                  </span>
                  <p className="text-xs sm:text-sm text-[#555555] font-sans leading-relaxed">
                    {activeCase.vei.identidad}
                  </p>
                </div>

                <div className="p-5 bg-white rounded-2xl border-2 border-[#d9c6a5] border-l-8 border-l-[#d9c6a5] shadow-xs">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-[#222222] block mb-1 font-sans flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#69826a]" />
                    (E) Empoderamiento
                  </span>
                  <span className="text-xs font-sans italic text-[#69826a] font-medium block mb-2">
                    ¿Cómo nos fortalecemos?
                  </span>
                  <p className="text-xs sm:text-sm text-[#555555] font-sans leading-relaxed">
                    {activeCase.vei.empoderamiento}
                  </p>
                </div>

                <div className="p-5 bg-white rounded-2xl border-2 border-[#d9c6a5] border-l-8 border-l-[#222222] shadow-xs">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-[#222222] block mb-1 font-sans flex items-center gap-1.5">
                    <Store className="w-3.5 h-3.5 text-[#69826a]" />
                    (V) Valoración
                  </span>
                  <span className="text-xs font-sans italic text-[#69826a] font-medium block mb-2">
                    ¿Cómo nos mostramos al mundo?
                  </span>
                  <p className="text-xs sm:text-sm text-[#555555] font-sans leading-relaxed">
                    {activeCase.vei.valoracion}
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
