import React, { useState } from 'react';
import { FOUR_S_DATA } from '../data/initialData';
import { PillarId } from '../types';
import { ArrowRight, HelpCircle, Compass, CheckCircle2 } from 'lucide-react';

export const FourSPillarsSection: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<PillarId>('saludable');

  const activePillar = FOUR_S_DATA.find((p) => p.id === activePillarId) || FOUR_S_DATA[0];

  return (
    <section id="fundamento-4s" className="py-20 md:py-28 border-b-2 border-[#141414] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Black Title Badge (Survival Identity) */}
        <div className="max-w-3xl mb-14">
          <div className="mb-4">
            <span className="bg-[#141414] text-[#F5A623] px-3 py-1 text-xs uppercase tracking-widest font-mono font-bold">
              01 / Los Fundamentos Éticos
            </span>
          </div>

          <div className="mb-4">
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#141414] tracking-tight leading-tight">
              Las 4S: El qué y el porqué del emprendimiento cultural.
            </h2>
          </div>

          <p className="text-[#333333] leading-relaxed text-base sm:text-lg font-sans">
            Ningún producto o servicio se elabora al azar. Cada pieza responde a un pacto ético con el bienestar humano, la salud de la tierra, la memoria ancestral y la pasión artesana.
          </p>
        </div>

        {/* 4 Pillars Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Sharp Editorial Pillar Navigator */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {FOUR_S_DATA.map((pillar, idx) => {
              const isSelected = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`p-5 text-left transition-colors cursor-pointer border-2 flex items-center justify-between group ${
                    isSelected 
                      ? 'bg-[#141414] text-white border-[#141414] shadow-sm' 
                      : 'bg-[#F6F5F2] text-[#141414] border-[#141414]/20 hover:border-[#8C2415] hover:bg-neutral-100'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono mb-1">
                      <span className={isSelected ? 'text-[#F5A623] font-bold' : 'text-[#8C2415] font-bold'}>
                        0{idx + 1}
                      </span>
                      <span aria-hidden="true" className={isSelected ? 'text-white/40' : 'text-neutral-400'}>/</span>
                      <span className="uppercase tracking-widest font-bold">
                        {pillar.name}
                      </span>
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-serif font-black transition-colors ${
                      isSelected ? 'text-white' : 'text-[#141414] group-hover:text-[#8C2415]'
                    }`}>
                      {pillar.ancestralName}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 flex items-center justify-center transition-colors shrink-0 ${
                    isSelected ? 'bg-[#F5A623] text-black font-bold' : 'text-[#141414]/40 group-hover:text-[#8C2415]'
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}

            {/* Quick Informative Callout - Option 1: Guía de Conexión & Sensibilización */}
            <div className="bg-[#8C2415] text-white p-5 border-2 border-[#141414] mt-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#F5A623] mb-2">
                <Compass className="w-4 h-4" />
                <span>Guía de Conexión & Sensibilización</span>
              </div>
              <p className="text-xs sm:text-sm font-sans leading-relaxed text-white/95">
                Estos cuatro pilares son una brújula viva para acompañar y enriquecer tu proyecto. No son reglas rígidas, sino un espacio de reflexión flexible para conectar con la sabiduría ancestral y fortalecer la identidad única de lo que creas.
              </p>
            </div>
          </div>

          {/* Right Column: High-Impact Dossier Display */}
          <div className="lg:col-span-8 bg-[#F6F5F2] border-2 border-[#141414] p-8 sm:p-12 shadow-sm">
            
            {/* Dossier Header */}
            <div className="border-b-2 border-[#141414] pb-6 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <span className="bg-[#8C2415] text-white px-2.5 py-1 text-xs uppercase tracking-widest font-bold font-mono inline-block mb-3">
                  Pilar 4S · {activePillar.name}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif font-black text-[#141414]">
                  {activePillar.ancestralName}
                </h3>
              </div>

              <div className="text-sm font-serif italic text-[#8C2415] font-bold max-w-sm sm:text-right">
                "{activePillar.phoneticMeaning}"
              </div>
            </div>

            {/* Core Concept Essay */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest font-bold text-[#141414] block mb-2 font-mono">
                Concepto Central
              </span>
              <p className="text-xl sm:text-2xl font-serif font-bold text-[#141414] leading-relaxed">
                {activePillar.concept}
              </p>
            </div>

            {/* Split Applications: Product & Community Process */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t-2 border-[#141414]/20 mb-8">
              <div className="bg-white p-6 border-2 border-[#141414]">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#8C2415]" />
                  <h4 className="text-xs uppercase tracking-widest font-black text-[#141414] font-mono">
                    En Productos & Servicios
                  </h4>
                </div>
                <p className="text-sm text-[#333333] leading-relaxed font-sans">
                  {activePillar.productApplication}
                </p>
              </div>

              <div className="bg-white p-6 border-2 border-[#141414]">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#8C2415]" />
                  <h4 className="text-xs uppercase tracking-widest font-black text-[#141414] font-mono">
                    En Procesos & Comunidad
                  </h4>
                </div>
                <p className="text-sm text-[#333333] leading-relaxed font-sans">
                  {activePillar.processApplication}
                </p>
              </div>
            </div>

            {/* Reflective Questions for the Artisan */}
            <div className="p-6 bg-white border-2 border-[#141414] border-l-8 border-l-[#8C2415]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-black text-[#141414] mb-4 font-mono">
                <HelpCircle className="w-4 h-4 text-[#8C2415]" />
                <span>Interrogantes de Autenticidad para el Creador</span>
              </div>

              <ul className="space-y-3">
                {activePillar.guideQuestions.map((q, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#222222] font-sans leading-relaxed">
                    <span className="bg-[#141414] text-[#F5A623] px-2 py-0.5 font-mono text-xs font-bold shrink-0 mt-0.5">
                      0{i + 1}
                    </span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
