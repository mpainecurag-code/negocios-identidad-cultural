import { useState } from 'react';
import { FOUR_S_DATA } from '../data/initialData';
import { PillarId } from '../types';
import { ArrowRight, HelpCircle, Compass, CheckCircle2, Leaf, RefreshCw, Mountain, HeartHandshake } from 'lucide-react';

const PILLAR_ICONS: Record<PillarId, React.ReactNode> = {
  saludable: <Leaf className="w-4 h-4" />,
  sustentable: <RefreshCw className="w-4 h-4" />,
  simbolico: <Mountain className="w-4 h-4" />,
  sentido: <HeartHandshake className="w-4 h-4" />,
};

const PILLAR_SUMMARY: Record<PillarId, { concept: string; enProducto: string; enComunidad: string; entregable: string }> = {
  saludable: {
    concept: 'Bienestar físico, mental y espiritual de la persona y su entorno.',
    enProducto: 'Orgánicos, sin tóxicos, promueven autocuidado.',
    enComunidad: 'Ambiente laboral respetuoso y precios dignos.',
    entregable: 'Ficha limpia y protocolo.',
  },
  sustentable: {
    concept: 'Respeto por todas las formas de vida y el buen vivir.',
    enProducto: 'Locales, biodegradables, renovables.',
    enComunidad: 'Economía circular, cero plásticos, respeto a temporadas.',
    entregable: 'Trazabilidad de origen y empaque circular.',
  },
  simbolico: {
    concept: 'Origen territorial, linaje ancestral y sabiduría comunitaria.',
    enProducto: 'Storytelling auténtico y origen geográfico.',
    enComunidad: 'Uso ético de iconografía y saberes.',
    entregable: 'Relato y protocolo ético.',
  },
  sentido: {
    concept: 'Convicción profunda, volver la mirada a lo esencial y propósito de vida.',
    enProducto: 'Calidad y maestría en el oficio.',
    enComunidad: 'Remuneración justa y fortalecimiento comunitario.',
    entregable: 'Precios justos y vocación.',
  },
};

export const FourSPillarsSection = () => {
  const [activePillarId, setActivePillarId] = useState<PillarId>('simbolico');

  const activePillar = FOUR_S_DATA.find((p) => p.id === activePillarId) || FOUR_S_DATA[0];

  const SummaryCard = ({ pillarId, position }: { pillarId: PillarId; position: string }) => {
    const pillar = FOUR_S_DATA.find(p => p.id === pillarId)!;
    const summary = PILLAR_SUMMARY[pillarId];
    const idx = FOUR_S_DATA.indexOf(pillar);
    return (
      <div className={`bg-[#FBF9F5] rounded-3xl border-2 border-[#d9c6a5] p-5 sm:p-6 ${position}`}>
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-[#69826a] text-white w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold">
            {String(idx + 1).padStart(2, '0')}
          </span>
          <h4 className="text-lg font-sans font-extrabold uppercase tracking-wide text-[#222222]">{pillar.name}</h4>
        </div>
        <p className="text-xs italic text-[#69826a] font-medium mb-3">{pillar.ancestralName.split(',')[0]}</p>
        <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-3">{summary.concept}</p>
        <div className="space-y-1.5 text-xs text-[#555555]">
          <p><strong className="text-[#222222]">En producto:</strong> {summary.enProducto}</p>
          <p><strong className="text-[#222222]">En comunidad:</strong> {summary.enComunidad}</p>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-xs text-[#69826a] font-medium">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span><strong>Entregable:</strong> {summary.entregable}</span>
        </div>
      </div>
    );
  };

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
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold uppercase tracking-wide text-[#222222] leading-tight mb-4">
            Las 4S: El qué y el porqué del emprendimiento cultural.
          </h2>
          <p className="text-[#555555] leading-relaxed text-sm sm:text-base font-sans">
            Ningún producto o servicio se elabora al azar. Cada pieza responde a un pacto ético con el bienestar humano, la salud de la tierra, la memoria ancestral y la pasión artesana.
          </p>
        </div>

        {/* ========== CIRCLE + 4 SUMMARY CARDS LAYOUT ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center mb-10">
          
          {/* Left Column: Cards 01 y 03 */}
          <div className="flex flex-col gap-6">
            <SummaryCard pillarId="saludable" position="" />
            <SummaryCard pillarId="simbolico" position="" />
          </div>

          {/* Center: SVG Circle */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 500 500" className="w-full max-w-[380px] aspect-square">
              {/* Cuadrante Superior Izquierdo: SALUDABLE */}
              <path d="M 248 248 L 14 248 A 234 234 0 0 1 248 14 Z" fill="#69826a" stroke="#FFFFFF" strokeWidth="3" />
              <Leaf x="126" y="110" className="w-5 h-5" />
              <text x="142" y="135" textAnchor="middle" fill="#FFFFFF" fontSize="13.5" fontWeight="800" fontFamily="Montserrat">SALUDABLE</text>
              <text x="142" y="153" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="10.5" fontStyle="italic" fontFamily="Montserrat">Küme Felen</text>

              {/* Cuadrante Superior Derecho: SUSTENTABLE */}
              <path d="M 252 248 L 252 14 A 234 234 0 0 1 486 248 Z" fill="#4f6650" stroke="#FFFFFF" strokeWidth="3" />
              <text x="358" y="135" textAnchor="middle" fill="#FFFFFF" fontSize="13.5" fontWeight="800" fontFamily="Montserrat">SUSTENTABLE</text>
              <text x="358" y="153" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="10.5" fontStyle="italic" fontFamily="Montserrat">Yamawun Itrofil</text>

              {/* Cuadrante Inferior Izquierdo: SIMBÓLICO */}
              <path d="M 248 252 L 248 486 A 234 234 0 0 1 14 252 Z" fill="#d9c6a5" stroke="#FFFFFF" strokeWidth="3" />
              <text x="142" y="365" textAnchor="middle" fill="#222222" fontSize="13.5" fontWeight="800" fontFamily="Montserrat">SIMBÓLICO</text>
              <text x="142" y="383" textAnchor="middle" fill="#444444" fontSize="10.5" fontStyle="italic" fontFamily="Montserrat">Tüwün · Kimün</text>

              {/* Cuadrante Inferior Derecho: SENTIDO */}
              <path d="M 252 252 L 486 252 A 234 234 0 0 1 252 486 Z" fill="#222222" stroke="#FFFFFF" strokeWidth="3" />
              <text x="358" y="365" textAnchor="middle" fill="#FFFFFF" fontSize="13.5" fontWeight="800" fontFamily="Montserrat">SENTIDO</text>
              <text x="358" y="383" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="10.5" fontStyle="italic" fontFamily="Montserrat">Fellentun</text>

              {/* Centro */}
              <circle cx="250" cy="250" r="72" fill="#FFFFFF" stroke="#FBF9F5" strokeWidth="6" />
              <text x="250" y="237" textAnchor="middle" fill="#69826a" fontSize="11" fontWeight="800" letterSpacing="0.14em" fontFamily="Montserrat">LAS</text>
              <text x="250" y="268" textAnchor="middle" fill="#222222" fontSize="32" fontWeight="800" fontFamily="Montserrat">4S</text>
            </svg>
            <p className="text-xs uppercase tracking-wider text-[#555555] font-bold mt-4 text-center">
              Toca cada cuadrante para explorar
            </p>
          </div>

          {/* Right Column: Cards 02 y 04 */}
          <div className="flex flex-col gap-6">
            <SummaryCard pillarId="sustentable" position="" />
            <SummaryCard pillarId="sentido" position="" />
          </div>
        </div>

        {/* ========== GUÍA DE CONEXIÓN BANNER ========== */}
        <div className="bg-[#FBF9F5] rounded-3xl border-2 border-[#d9c6a5] p-5 sm:p-6 mb-14 flex items-start gap-4">
          <div className="bg-[#69826a] text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-sans font-extrabold uppercase tracking-wider text-[#222222] mb-1">
              Guía de Conexión & Sensibilización
            </h4>
            <p className="text-xs sm:text-sm font-sans leading-relaxed text-[#555555]">
              Estos cuatro pilares son una brújula viva para acompañar y enriquecer tu proyecto. No son reglas rígidas, sino un espacio de reflexión flexible para conectar con la sabiduría ancestral y fortalecer la identidad única de lo que creas.
            </p>
          </div>
        </div>

        {/* ========== INTERACTIVE PILLAR DETAIL ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left: Pillar Navigator */}
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
                      : 'bg-[#FBF9F5] text-[#222222] border-[#d9c6a5] hover:border-[#69826a] hover:bg-[#69826a]/5'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-sans tracking-wider mb-1">
                      <span className={isSelected ? 'text-[#d9c6a5] font-bold' : 'text-[#69826a] font-bold'}>
                        0{idx + 1}
                      </span>
                      <span className="uppercase tracking-wider font-bold">
                        {pillar.name}
                      </span>
                    </div>
                    <h3 className={`text-lg sm:text-xl font-sans font-extrabold uppercase tracking-wide transition-colors ${
                      isSelected ? 'text-white' : 'text-[#222222] group-hover:text-[#69826a]'
                    }`}>
                      {pillar.ancestralName}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 flex items-center justify-center shrink-0 rounded-full transition-colors ${
                    isSelected ? 'bg-[#69826a] text-white' : 'text-[#222222]/40 group-hover:text-[#69826a]'
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Dossier Detail */}
          <div className="lg:col-span-8 bg-[#FBF9F5] rounded-3xl border-2 border-[#d9c6a5] p-8 sm:p-12 shadow-sm">
            
            {/* Header */}
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

            {/* ¿Qué significa en simple? */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-wider font-bold text-[#555555] block mb-2 font-sans">
                ¿Qué significa en simple?
              </span>
              <p className="text-lg sm:text-xl font-sans font-semibold text-[#222222] leading-relaxed">
                {activePillar.concept}
              </p>
            </div>

            {/* Product & Community */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#d9c6a5] mb-8">
              <div className="bg-white rounded-2xl p-6 border-2 border-[#d9c6a5]">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#69826a]" />
                  <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#222222] font-sans">
                    En tu Producto o Servicio
                  </h4>
                </div>
                <p className="text-sm text-[#555555] leading-relaxed font-sans">
                  {activePillar.productApplication}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-[#d9c6a5]">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#69826a]" />
                  <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#222222] font-sans">
                    En tu Proceso & Comunidad
                  </h4>
                </div>
                <p className="text-sm text-[#555555] leading-relaxed font-sans">
                  {activePillar.processApplication}
                </p>
              </div>
            </div>

            {/* Reflective Questions */}
            <div className="p-6 bg-white rounded-2xl border-2 border-[#d9c6a5] border-l-8 border-l-[#69826a]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-[#222222] mb-4 font-sans">
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
