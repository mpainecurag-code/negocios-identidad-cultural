import React from 'react';
import { MANIFESTO_IMAGE } from '../data/initialData';
import { ArrowRight } from 'lucide-react';

interface ConclusionManifestoProps {
  onOpenCanvas: () => void;
}

export const ConclusionManifesto: React.FC<ConclusionManifestoProps> = ({ onOpenCanvas }) => {
  return (
    <section className="py-20 md:py-28 border-b-2 border-[#141414] bg-[#F6F5F2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Full-Bleed High-Contrast Activist Frame */}
        <div className="relative overflow-hidden bg-[#141414] text-white p-8 sm:p-14 lg:p-18 mb-16 border-2 border-[#141414] shadow-lg">
          <img 
            src={MANIFESTO_IMAGE} 
            alt="Manos artesanas sosteniendo tierra fértil y un brote vivo a contraluz"
            className="absolute inset-0 w-full h-full object-cover opacity-35 brightness-75 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />

          <div className="relative z-10 max-w-3xl">
            <div className="mb-4">
              <span className="bg-[#8C2415] text-white px-3 py-1 text-xs uppercase tracking-widest font-mono font-bold">
                06 / Conclusión & Horizonte Colectivo
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-[1.2] mb-6">
              <span className="bg-[#141414] text-white px-3 py-1 inline-block mb-1.5">
                DE UN PLAN DE NEGOCIOS
              </span>
              <br />
              <span className="bg-[#8C2415] text-white px-3 py-1 inline-block">
                A UN MANIFIESTO DE VIDA
              </span>
            </h2>

            <div className="bg-black/80 border-l-4 border-[#F5A623] p-5 sm:p-6 mb-8 text-white/95 text-base sm:text-lg leading-relaxed font-sans">
              "La integración de las 4S y el modelo V.E.I. asegura que el crecimiento económico esté siempre alineado con la integridad cultural, el bienestar de la comunidad y el respeto por el medio ambiente. No se trata solo de construir negocios viables, sino de custodiar la continuidad de los pueblos y sanar el territorio."
            </div>

            <button
              onClick={onOpenCanvas}
              className="px-8 py-4 bg-[#F5A623] text-black hover:bg-white text-xs sm:text-sm uppercase tracking-wider font-extrabold transition-colors inline-flex items-center gap-2.5 cursor-pointer shadow-md rounded-none border border-black/10"
            >
              <span>Comenzar en Pliego de Taller</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>

        {/* 3 Principles of Ethical Stewardship (Survival Bold Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-7 bg-white border-2 border-[#141414] border-t-8 border-t-[#8C2415] shadow-xs">
            <span className="bg-[#141414] text-[#F5A623] px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-wider inline-block mb-3">
              01 / Integridad Cultural
            </span>
            <h3 className="text-xl font-serif font-black text-[#141414] mb-3">
              Sin disfraces ni folclorización
            </h3>
            <p className="text-sm text-[#333333] font-sans leading-relaxed">
              Cada símbolo, diseño o receta pertenece a un linaje legítimo y a un respeto ceremonial por el origen territorial (Tüwün). No se produce para la masa desinformada, sino para el encuentro consciente.
            </p>
          </div>

          <div className="p-7 bg-white border-2 border-[#141414] border-t-8 border-t-[#141414] shadow-xs">
            <span className="bg-[#141414] text-[#F5A623] px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-wider inline-block mb-3">
              02 / Bienestar Comunitario
            </span>
            <h3 className="text-xl font-serif font-black text-[#141414] mb-3">
              El saber hacer es el mayor patrimonio
            </h3>
            <p className="text-sm text-[#333333] font-sans leading-relaxed">
              El oficio artesano no se regatea. Se aseguran precios justos, compras colectivas de materia prima, transmisión intergeneracional y condiciones de vida dignas para las familias en sus tierras.
            </p>
          </div>

          <div className="p-7 bg-white border-2 border-[#141414] border-t-8 border-t-[#F5A623] shadow-xs">
            <span className="bg-[#141414] text-[#F5A623] px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-wider inline-block mb-3">
              03 / Respeto por la Tierra
            </span>
            <h3 className="text-xl font-serif font-black text-[#141414] mb-3">
              Yamawun Itrofil Mongen
            </h3>
            <p className="text-sm text-[#333333] font-sans leading-relaxed">
              Inspirado en el respeto irrenunciable por todas las formas de vida, los tiempos de recolección honran los ciclos biológicos de las estaciones y descartan por completo el extractivismo voraz.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
