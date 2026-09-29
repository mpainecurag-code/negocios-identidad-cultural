import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/initialData';
import { CaseStudy, CulturalBusinessProposal } from '../types';
import { ArrowRight, Check, MapPin } from 'lucide-react';

interface CaseStudiesSectionProps {
  onLoadCaseIntoCanvas: (caseProposal: CulturalBusinessProposal) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onLoadCaseIntoCanvas }) => {
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
    <section id="casos-estudio" className="py-20 md:py-28 border-b-2 border-[#141414] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="mb-4">
            <span className="bg-[#141414] text-[#F5A623] px-3 py-1 text-xs uppercase tracking-widest font-mono font-bold">
              03 / Casos de Estudio en Territorio
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#141414] tracking-tight text-balance mb-6 leading-tight">
            Tres territorios, tres oficios, un solo principio ético.
          </h2>

          <p className="text-[#333333] leading-relaxed text-base sm:text-lg font-sans">
            Explora cómo la textilería Nagche, la fitocosmética Pewenche y el turismo Lafkenche han transformado las 4S y el V.E.I. en modelos de vida sostenibles y dignos.
          </p>
        </div>

        {/* Horizontal Case Selection Tabs (Survival high contrast style) */}
        <div className="flex items-center gap-3 pb-4 mb-10 overflow-x-auto">
          {CASE_STUDIES.map((c, idx) => {
            const isSelected = c.id === activeCaseId;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCaseId(c.id)}
                className={`text-xs uppercase tracking-wider font-extrabold px-5 py-3 transition-colors whitespace-nowrap cursor-pointer border-2 ${
                  isSelected 
                    ? 'bg-[#141414] text-white border-[#141414]' 
                    : 'bg-[#F6F5F2] text-[#141414] border-[#141414]/20 hover:border-[#8C2415] hover:bg-neutral-100'
                }`}
              >
                <span>0{idx + 1} · {c.title}</span>
              </button>
            );
          })}
        </div>

        {/* 50/50 Split Showcase (Directly replicating the Survival.es visual language of Images 2 & 3) */}
        <div className="border-2 border-[#141414] shadow-md mb-12 overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Side A: Left Documentary Photography */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[520px] bg-[#141414] flex items-end">
              <img 
                src={activeCase.image} 
                alt={activeCase.title}
                className="absolute inset-0 w-full h-full object-cover object-center grayscale-[5%] contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10 p-6 flex items-center justify-between w-full">
                <div className="bg-[#141414] text-[#F5A623] px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5 border border-white/20">
                  <MapPin className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>{activeCase.territory}</span>
                </div>
                <div className="bg-[#141414]/90 text-white text-[11px] font-mono px-3 py-1 uppercase tracking-widest">
                  {activeCase.identityLabel}
                </div>
              </div>
            </div>

            {/* Side B: Right Solid Rust-Red Block (#8C2415) - Signature Survival Graphic */}
            <div className="lg:col-span-6 bg-[#8C2415] text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                {/* Territory tag */}
                <div className="text-xs font-mono uppercase tracking-widest text-[#F5A623] font-bold mb-4 flex items-center gap-2">
                  <span>EXPEDIENTE TERRITORIAL</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeCase.identityLabel}</span>
                </div>

                {/* Solid Black Title Box (Exact match to Image 2 "Qué hacemos" and Image 3 "Involúcrate") */}
                <div className="inline-block bg-[#141414] text-white px-5 py-2.5 text-2xl sm:text-4xl font-serif font-black tracking-tight mb-5 shadow-sm">
                  {activeCase.title}
                </div>

                {/* Tagline */}
                <p className="text-base sm:text-lg font-serif italic text-white/95 mb-6 leading-relaxed">
                  "{activeCase.tagline}"
                </p>

                {/* Value proposition narrative */}
                <div className="p-5 bg-black/35 border-l-4 border-[#F5A623] mb-8">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#F5A623] block mb-2 font-mono">
                    Propuesta de Valor Integrada
                  </span>
                  <p className="text-sm sm:text-base text-white/95 font-sans leading-relaxed">
                    {activeCase.valueProposition}
                  </p>
                </div>
              </div>

              {/* Action Button: Survival Yellow Button */}
              <div>
                <button
                  onClick={() => handleApplyToCanvas(activeCase)}
                  className="px-7 py-4 bg-[#F5A623] text-black hover:bg-white transition-colors text-xs sm:text-sm uppercase tracking-wider font-extrabold inline-flex items-center gap-2.5 rounded-none border border-black/10 cursor-pointer shadow-md"
                >
                  {copiedId === activeCase.id ? (
                    <>
                      <Check className="w-5 h-5 text-black" />
                      <span>¡Cargado en Pliego de Taller!</span>
                    </>
                  ) : (
                    <>
                      <span>Cargar en mi Pliego de Taller</span>
                      <ArrowRight className="w-4 h-4 text-black" />
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Deep Case Breakdown in High Contrast Grids */}
          <div className="p-8 sm:p-12 bg-[#F6F5F2] border-t-2 border-[#141414] space-y-10">
            
            {/* 4S Breakdown */}
            <div>
              <div className="mb-6 pb-2 border-b-2 border-[#141414]">
                <h4 className="text-xs uppercase tracking-widest font-black text-[#141414] font-mono">
                  Desglose Innegociable de las 4S en este Territorio
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="p-5 bg-white border-2 border-[#141414] border-t-6 border-t-[#141414]">
                  <span className="text-xs uppercase tracking-widest font-black text-[#8C2415] block mb-2 font-mono">
                    Saludable (Küme Felen)
                  </span>
                  <p className="text-xs sm:text-sm text-[#333333] font-sans leading-relaxed">
                    {activeCase.fourS.saludable}
                  </p>
                </div>

                <div className="p-5 bg-white border-2 border-[#141414] border-t-6 border-t-[#141414]">
                  <span className="text-xs uppercase tracking-widest font-black text-[#8C2415] block mb-2 font-mono">
                    Sustentable (Yamawun)
                  </span>
                  <p className="text-xs sm:text-sm text-[#333333] font-sans leading-relaxed">
                    {activeCase.fourS.sustentable}
                  </p>
                </div>

                <div className="p-5 bg-white border-2 border-[#141414] border-t-6 border-t-[#8C2415]">
                  <span className="text-xs uppercase tracking-widest font-black text-[#8C2415] block mb-2 font-mono">
                    Simbólico (Tüwün)
                  </span>
                  <p className="text-xs sm:text-sm text-[#333333] font-sans leading-relaxed">
                    {activeCase.fourS.simbolico}
                  </p>
                </div>

                <div className="p-5 bg-white border-2 border-[#141414] border-t-6 border-t-[#F5A623]">
                  <span className="text-xs uppercase tracking-widest font-black text-[#8C2415] block mb-2 font-mono">
                    Sentido (Fellentun)
                  </span>
                  <p className="text-xs sm:text-sm text-[#333333] font-sans leading-relaxed">
                    {activeCase.fourS.sentido}
                  </p>
                </div>

              </div>
            </div>

            {/* VEI Deployment Breakdown */}
            <div className="pt-6 border-t-2 border-[#141414]/15">
              <div className="mb-6 pb-2 border-b-2 border-[#141414]">
                <h4 className="text-xs uppercase tracking-widest font-black text-[#141414] font-mono">
                  Articulación Estratégica con Ciclo V.E.I.
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="p-5 bg-white border-2 border-[#141414] border-l-8 border-l-[#141414]">
                  <span className="text-xs uppercase tracking-widest font-black text-[#141414] block mb-1 font-mono">
                    (I) Identidad
                  </span>
                  <span className="text-xs font-serif italic text-[#8C2415] font-bold block mb-2">
                    ¿Quiénes somos?
                  </span>
                  <p className="text-xs sm:text-sm text-[#444444] font-sans leading-relaxed">
                    {activeCase.vei.identidad}
                  </p>
                </div>

                <div className="p-5 bg-white border-2 border-[#141414] border-l-8 border-l-[#8C2415]">
                  <span className="text-xs uppercase tracking-widest font-black text-[#8C2415] block mb-1 font-mono">
                    (E) Empoderamiento
                  </span>
                  <span className="text-xs font-serif italic text-[#8C2415] font-bold block mb-2">
                    ¿Cómo nos fortalecemos?
                  </span>
                  <p className="text-xs sm:text-sm text-[#444444] font-sans leading-relaxed">
                    {activeCase.vei.empoderamiento}
                  </p>
                </div>

                <div className="p-5 bg-white border-2 border-[#141414] border-l-8 border-l-[#F5A623]">
                  <span className="text-xs uppercase tracking-widest font-black text-[#141414] block mb-1 font-mono">
                    (V) Valoración
                  </span>
                  <span className="text-xs font-serif italic text-[#8C2415] font-bold block mb-2">
                    ¿Cómo nos mostramos al mundo?
                  </span>
                  <p className="text-xs sm:text-sm text-[#444444] font-sans leading-relaxed">
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
