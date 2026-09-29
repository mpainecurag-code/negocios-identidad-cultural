import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/initialData';
import { GlossaryTerm } from '../types';
import { Search, ArrowRight } from 'lucide-react';

export const GlossarySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm>(GLOSSARY_TERMS[0]);

  const filteredTerms = GLOSSARY_TERMS.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.literalTranslation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.deepMeaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="glosario-kimun" className="py-20 md:py-28 border-b-2 border-[#141414] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="mb-4">
            <span className="bg-[#141414] text-[#F5A623] px-3 py-1 text-xs uppercase tracking-widest font-mono font-bold">
              05 / El Kimün Ancestral
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#141414] tracking-tight text-balance mb-6 leading-tight">
            Los conceptos en Mapudungun que sostienen las 4S.
          </h2>

          <p className="text-[#333333] leading-relaxed text-base sm:text-lg font-sans">
            Las 4S no son fórmulas de mercadotecnia importadas: son la interpretación económica de cosmovisiones milenarias donde la vida, la tierra y la palabra tienen un valor sagrado.
          </p>
        </div>

        {/* Minimalist High-Contrast Search Bar */}
        <div className="max-w-md mb-10">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar concepto, traducción o sentido..."
              className="w-full pl-10 pr-4 py-3 bg-[#F6F5F2] border-2 border-[#141414] text-sm focus:outline-none focus:border-[#8C2415] font-sans text-[#141414] placeholder:text-[#777777] rounded-none"
            />
            <Search className="w-4 h-4 text-[#141414] absolute left-3.5 top-4" />
          </div>
        </div>

        {/* Herbario Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Concept Index Cards */}
          <div className="lg:col-span-5 space-y-2">
            {filteredTerms.map((item) => {
              const isSelected = item.term === selectedTerm.term;
              return (
                <button
                  key={item.term}
                  onClick={() => setSelectedTerm(item)}
                  className={`w-full p-5 text-left transition-colors cursor-pointer border-2 flex items-center justify-between group ${
                    isSelected 
                      ? 'bg-[#141414] text-white border-[#141414] shadow-sm' 
                      : 'bg-[#F6F5F2] text-[#141414] border-[#141414]/20 hover:border-[#8C2415] hover:bg-neutral-100'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono mb-1">
                      <span className={isSelected ? 'text-[#F5A623] font-bold' : 'text-[#8C2415] font-bold'}>
                        {item.associatedPillar}
                      </span>
                      <span aria-hidden="true" className={isSelected ? 'text-white/40' : 'text-neutral-400'}>/</span>
                      <span className="uppercase tracking-widest text-[11px]">Mapudungun</span>
                    </div>
                    
                    <h4 className={`text-xl font-serif font-black ${isSelected ? 'text-white' : 'text-[#141414] group-hover:text-[#8C2415]'}`}>
                      {item.term}
                    </h4>

                    <p className={`text-xs italic font-serif mt-1 ${isSelected ? 'text-white/80' : 'text-[#555555]'}`}>
                      "{item.literalTranslation}"
                    </p>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 transition-colors ${isSelected ? 'text-[#F5A623]' : 'text-neutral-400 group-hover:text-[#8C2415]'}`} />
                </button>
              );
            })}

            {filteredTerms.length === 0 && (
              <div className="p-8 text-center bg-[#F6F5F2] border-2 border-[#141414]/20 text-[#666666] text-sm font-sans">
                No se hallaron conceptos para "{searchTerm}".
              </div>
            )}
          </div>

          {/* Detailed Term Ledger Dossier */}
          <div className="lg:col-span-7 bg-[#F6F5F2] p-8 sm:p-12 border-2 border-[#141414] shadow-sm">
            <div className="border-b-2 border-[#141414] pb-6 mb-8">
              <span className="bg-[#8C2415] text-white px-2.5 py-1 text-xs uppercase tracking-widest font-bold font-mono inline-block mb-3">
                {selectedTerm.associatedPillar} · Kimün Mapuche
              </span>
              
              <h3 className="text-3xl sm:text-4xl font-serif font-black text-[#141414]">
                {selectedTerm.term}
              </h3>
              
              <p className="text-base font-serif italic text-[#8C2415] mt-2 font-bold">
                Traducción Literal: "{selectedTerm.literalTranslation}"
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest font-black text-[#141414] block mb-2 font-mono">
                  Significado Filosófico y Territorial
                </span>
                <p className="text-lg font-serif font-bold text-[#141414] leading-relaxed">
                  {selectedTerm.deepMeaning}
                </p>
              </div>

              <div className="p-6 bg-white border-2 border-[#141414] border-l-8 border-l-[#8C2415]">
                <span className="text-xs uppercase tracking-widest font-black text-[#141414] block mb-2 font-mono">
                  Traducción a la Práctica del Negocio
                </span>
                <p className="text-sm sm:text-base text-[#333333] font-sans leading-relaxed">
                  {selectedTerm.businessIntegration}
                </p>
              </div>

              <div className="pt-4 border-t-2 border-[#141414]/15 flex items-center justify-between text-xs font-mono text-[#555555]">
                <span>Sabiduría Territorial Viva</span>
                <span className="bg-[#141414] text-[#F5A623] px-2 py-0.5 uppercase tracking-wider font-bold">
                  Custodia de la Vida
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
