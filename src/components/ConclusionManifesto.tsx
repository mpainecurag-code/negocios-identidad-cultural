import React from 'react';
import { MANIFESTO_IMAGE } from '../data/initialData';
import { ArrowRight } from 'lucide-react';

interface ConclusionManifestoProps {
  onOpenCanvas: () => void;
}

export const ConclusionManifesto: React.FC<ConclusionManifestoProps> = ({ onOpenCanvas }) => {
  return (
    <section className="py-20 md:py-28 border-b border-[#d9c6a5] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Full-Bleed Manifesto Frame */}
        <div className="relative overflow-hidden bg-[#222222] text-white p-8 sm:p-14 lg:p-18 mb-16 rounded-3xl border-2 border-[#d9c6a5] shadow-lg">
          <img 
            src={MANIFESTO_IMAGE} 
            alt="Manos artesanas sosteniendo tierra fértil y un brote vivo a contraluz"
            className="absolute inset-0 w-full h-full object-cover opacity-35 brightness-75 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />

          <div className="relative z-10 max-w-3xl">
            <div className="mb-4">
              <span className="bg-[#69826a] text-white px-4 py-1.5 text-[10px] sm:text-xs uppercase tracking-wider font-bold rounded-full">
                06 / Conclusión & Horizonte Colectivo
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight leading-[1.2] mb-6">
              <span className="bg-[#222222]/80 text-white px-4 py-1.5 inline-block mb-1.5 rounded-2xl">
                DE UN PLAN DE NEGOCIOS
              </span>
              <br />
              <span className="bg-[#69826a] text-white px-4 py-1.5 inline-block rounded-2xl">
                A UN MANIFIESTO DE VIDA
              </span>
            </h2>

            <div className="bg-black/70 border-l-4 border-[#d9c6a5] p-5 sm:p-6 mb-8 text-white/95 text-sm sm:text-base leading-relaxed font-sans rounded-xl">
              "La integración de las 4S y el modelo V.E.I. asegura que el crecimiento económico esté siempre alineado con la integridad cultural, el bienestar de la comunidad y el respeto por el medio ambiente. No se trata solo de construir negocios viables, sino de custodiar la continuidad de los pueblos y sanar el territorio."
            </div>

            <button
              onClick={onOpenCanvas}
              className="px-7 py-3.5 bg-[#69826a] text-white hover:bg-[#4f6650] text-xs sm:text-sm uppercase tracking-wider font-bold transition-colors inline-flex items-center gap-2.5 cursor-pointer shadow-md rounded-full"
            >
              <span>Comenzar en Pliego de Taller</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Principles of Ethical Stewardship */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-7 bg-white rounded-3xl border-2 border-[#d9c6a5] border-t-8 border-t-[#69826a] shadow-sm">
            <span className="bg-[#222222] text-[#d9c6a5] px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider inline-block mb-3 rounded-full">
              01 / Integridad Cultural
            </span>
            <h3 className="text-xl font-sans font-extrabold text-[#222222] mb-3">
              Sin disfraces ni folclorización
            </h3>
            <p className="text-sm text-[#555555] font-sans leading-relaxed">
              Cada símbolo, diseño o receta pertenece a un linaje legítimo y a un respeto ceremonial por el origen territorial (Tüwün). No se produce para la masa desinformada, sino para el encuentro consciente.
            </p>
          </div>

          <div className="p-7 bg-white rounded-3xl border-2 border-[#d9c6a5] border-t-8 border-t-[#222222] shadow-sm">
            <span className="bg-[#222222] text-[#d9c6a5] px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider inline-block mb-3 rounded-full">
              02 / Bienestar Comunitario
            </span>
            <h3 className="text-xl font-sans font-extrabold text-[#222222] mb-3">
              El saber hacer es el mayor patrimonio
            </h3>
            <p className="text-sm text-[#555555] font-sans leading-relaxed">
              El oficio artesano no se regatea. Se aseguran precios justos, compras colectivas de materia prima, transmisión intergeneracional y condiciones de vida dignas para las familias en sus tierras.
            </p>
          </div>

          <div className="p-7 bg-white rounded-3xl border-2 border-[#d9c6a5] border-t-8 border-t-[#d9c6a5] shadow-sm">
            <span className="bg-[#222222] text-[#d9c6a5] px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider inline-block mb-3 rounded-full">
              03 / Respeto por la Tierra
            </span>
            <h3 className="text-xl font-sans font-extrabold text-[#222222] mb-3">
              Yamawun Itrofil Mongen
            </h3>
            <p className="text-sm text-[#555555] font-sans leading-relaxed">
              Inspirado en el respeto irrenunciable por todas las formas de vida, los tiempos de recolección honran los ciclos biológicos de las estaciones y descartan por completo el extractivismo voraz.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
