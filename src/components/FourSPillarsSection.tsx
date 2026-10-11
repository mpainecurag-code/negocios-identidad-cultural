import { useState } from 'react';
import { FOUR_S_DATA } from '../data/initialData';
import { PillarId } from '../types';
import { ArrowRight, HelpCircle, Compass, CheckCircle2, Leaf, RefreshCw, Mountain, HeartHandshake } from 'lucide-react';

export const FourSPillarsSection = () => {
  const [activePillarId, setActivePillarId] = useState<PillarId>('saludable');

  const activePillar = FOUR_S_DATA.find((p) => p.id === activePillarId) || FOUR_S_DATA[0];

  return (
    <section id="fundamento-4s" className="py-20 md:py-28 border-b border-[#d9c6a5] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="mb-4">
            <span className="bg-[#69826a] text-white px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider font-sans font-bold rounded-full">
              01 / Los Fundamentos Éticos
            </span>
          </div>

          <div className="mb-4">
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold uppercase tracking-wide text-[#222222] leading-tight">
              Las 4S: El qué y el porqué del emprendimiento cultural.
            </h2>
          </div>

          <p className="text-[#555555] leading-relaxed text-base sm:text-lg font-sans">
            Ningún producto o servicio se elabora al azar. Cada pieza responde a un pacto ético con el bienestar humano, la salud de la tierra, la memoria ancestral y la pasión artesana.
          </p>
        </div>

        {/* Gráfico Circular Las 4S */}
        <div className="flex justify-center mb-16">
          <svg viewBox="0 0 500 500" className="w-full max-w-[430px] aspect-square">
            <path d="M 248 248 L 14 248 A 234 234 0 0 1 248 14 Z" fill="#69826a" stroke="#FFFFFF" strokeWidth="3" />
            <text x="142" y="130" textAnchor="middle" fill="#FFFFFF" fontSize="13.5" fontWeight="800" fontFamily="Montserrat">SALUDABLE</text>
            <text x="142" y="148" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="10.5" fontStyle="italic" fontFamily="Montserrat">Küme Felen</text>

            <path d="M 252 248 L 252 14 A 234 234 0 0 1 486 248 Z" fill="#4f6650" stroke="#FFFFFF" strokeWidth="3" />
            <text x="358" y="130" textAnchor="middle" fill="#FFFFFF" fontSize="13.5" fontWeight="800" fontFamily="Montserrat">SUSTENTABLE</text>
            <text x="358" y="148" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="10.5" fontStyle="italic" fontFamily="Montserrat">Yamawun Itrofil</text>

            <path d="M 248 252 L 248 486 A 234 234 0 0 1 14 252 Z" fill="#d9c6a5" stroke="#FFFFFF" strokeWidth="3" />
            <text x="142" y="365" textAnchor="middle" fill="#222222" fontSize="13.5" fontWeight="800" fontFamily="Montserrat">SIMBÓLICO</text>
            <text x="142" y="383" textAnchor="middle" fill="#444444" fontSize="10.5" fontStyle="italic" fontFamily="Montserrat">Tüwün · Kimün</text>

            <path d="M 252 252 L 486 252 A 234 234 0 0 1 252 486 Z" fill="#222222" stroke="#FFFFFF" strokeWidth="3" />
            <text x="358" y="365" textAnchor="middle" fill="#FFFFFF" fontSize="13.5" fontWeight="800" fontFamily="Montserrat">SENTIDO</text>
            <text x="358" y="383" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="10.5" fontStyle="italic" fontFamily="Montserrat">Fellentun</text>

            <circle cx="250" cy="250" r="72" fill="#FFFFFF" stroke="#FBF9F5" strokeWidth="6" />
            <text x="250" y="237" textAnchor="middle" fill="#69826a" fontSize="11" fontWeight="800" letterSpacing="0.14em" fontFamily="Montserrat">LAS</text>
            <text x="250" y="268" textAnchor="middle" fill="#222222" fontSize="32" fontWeight="800" fontFamily="Montserrat">4S</text>
          </svg>
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
                  className={`p-5 text-left transition-colors cursor-pointer border-2 rounded-2xl flex items-center justify-between group ${
                    isSelected 
                      ? 'bg-[#222222] text-white border-[#222222] shadow-sm' 
                      : 'bg-[#FBF9F5] text-[#222222] border-[#d9c6a5] hover:border-[#69826a] hover:bg-[#FBF9F5]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-sans tracking-wider mb-1">
                      <span className={isSelected ? 'text-[#d9c6a5] font-bold' : 'text-[#69826a] font-bold'}>
                        0{idx + 1}
                      </span>
                      <span aria-hidden="true" className={isSelected ? 'text-white/40' : 'text-neutral-400'}>/</span>
                      <span className="uppercase tracking-wider font-bold">
                        {pillar.name}
                      </span>
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-sans font-extrabold uppercase tracking-wide transition-colors ${
                      isSelected ? 'text-white' : 'text-[#222222] group-hover:text-[#69826a]'
                    }`}>
                      {pillar.ancestralName}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 flex items-center justify-center transition-colors shrink-0 rounded-full ${
                    isSelected ? 'bg-[#69826a] text-white font-bold' : 'text-[#222222]/40 group-hover:text-[#69826a]'
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}

            {/* Quick Informative Callout - Option 1: Guía de Conexión & Sensibilización */}
            <div className="bg-[#69826a] text-white p-5 rounded-2xl border-2 border-[#d9c6a5] mt-4">
              <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#d9c6a5] mb-2">
                <Compass className="w-4 h-4" />
                <span>Guía de Conexión & Sensibilización</span>
              </div>
              <p className="text-xs sm:text-sm font-sans leading-relaxed text-white/95">
                Estos cuatro pilares son una brújula viva para acompañar y enriquecer tu proyecto. No son reglas rígidas, sino un espacio de reflexión flexible para conectar con la sabiduría ancestral y fortalecer la identidad única de lo que creas.
              </p>
            </div>
          </div>

          {/* Right Column: High-Impact Dossier Display */}
          <div className="lg:col-span-8 bg-[#FBF9F5] rounded-3xl border-2 border-[#d9c6a5] p-8 sm:p-12 shadow-sm">
            
            {/* Dossier Header */}
            <div className="border-b border-[#d9c6a5] pb-6 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <span className="bg-[#69826a] text-white px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider font-bold font-sans rounded-full inline-block mb-3">
                  Pilar 4S · {activePillar.name}
                </span>
                <h3 className="text-3xl sm:text-4xl font-sans font-extrabold uppercase tracking-wide text-[#222222]">
                  {activePillar.ancestralName}
                </h3>
              </div>

              <div className="text-sm font-medium italic text-[#69826a] max-w-sm sm:text-right">
                "{activePillar.phoneticMeaning}"
              </div>
            </div>

            {/* Core Concept Essay */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-wider font-bold text-[#222222] block mb-2 font-sans">
                Concepto Central
              </span>
              <p className="text-xl sm:text-2xl font-sans font-bold text-[#222222] leading-relaxed">
                {activePillar.concept}
              </p>
            </div>

            {/* Split Applications: Product & Community Process */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#d9c6a5] mb-8">
              <div className="bg-white rounded-2xl p-6 border-2 border-[#d9c6a5]">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#69826a]" />
                  <h4 className="text-xs uppercase tracking-wider font-black text-[#222222] font-sans">
                    En Productos & Servicios
                  </h4>
                </div>
                <p className="text-sm text-[#555555] leading-relaxed font-sans">
                  {activePillar.productApplication}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-[#d9c6a5]">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#69826a]" />
                  <h4 className="text-xs uppercase tracking-wider font-black text-[#222222] font-sans">
                    En Procesos & Comunidad
                  </h4>
                </div>
                <p className="text-sm text-[#555555] leading-relaxed font-sans">
                  {activePillar.processApplication}
                </p>
              </div>
            </div>

            {/* Reflective Questions for the Artisan */}
            <div className="p-6 bg-white rounded-2xl border-2 border-[#d9c6a5] border-l-8 border-l-[#69826a]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-black text-[#222222] mb-4 font-sans">
                <HelpCircle className="w-4 h-4 text-[#69826a]" />
                <span>Interrogantes de Autenticidad para el Creador</span>
              </div>

              <ul className="space-y-3">
                {activePillar.guideQuestions.map((q, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#555555] font-sans leading-relaxed">
                    <span className="bg-[#222222] text-[#d9c6a5] px-2 py-0.5 font-sans tracking-wider rounded-full text-xs font-bold shrink-0 mt-0.5">
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
