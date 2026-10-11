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
    <section id="glosario-kimun" className="py-20 md:py-28 border-b border-[#d9c6a5] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="mb-4">
            <span className="bg-[#69826a] text-white px-4 py-1.5 text-[10px] sm:text-xs uppercase tracking-wider font-bold rounded-full">
              05 / El Kimün Ancestral
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#222222] tracking-tight text-balance mb-6 leading-tight uppercase">
            Los conceptos en Mapudungun que sostienen las 4S.
          </h2>

          <p className="text-[#555555] leading-relaxed text-sm sm:text-base font-sans">
            Las 4S no son fórmulas de mercadotecnia importadas: son la interpretación económica de cosmovisiones milenarias donde la vida, la tierra y la palabra tienen un valor sagrado.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mb-10">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar concepto, traducción o sentido..."
              className="w-full pl-10 pr-4 py-3 bg-[#FBF9F5] border-2 border-[#d9c6a5] text-sm focus:outline-none focus:border-[#69826a] font-sans text-[#222222] placeholder:text-[#999999] rounded-full"
            />
            <Search className="w-4 h-4 text-[#69826a] absolute left-3.5 top-4" />
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
                  className={`w-full p-5 text-left transition-colors cursor-pointer border-2 flex items-center justify-between group rounded-2xl ${
                    isSelected 
                      ? 'bg-[#222222] text-white border-[#222222] shadow-sm' 
                      : 'bg-[#FBF9F5] text-[#222222] border-[#d9c6a5] hover:border-[#69826a] hover:bg-[#69826a]/5'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-sans mb-1">
                      <span className={isSelected ? 'text-[#d9c6a5] font-bold' : 'text-[#69826a] font-bold'}>
                        {item.associatedPillar}
                      </span>
                      <span aria-hidden="true" className={isSelected ? 'text-white/40' : 'text-[#d9c6a5]'}>/</span>
                      <span className="uppercase tracking-wider text-[11px]">Mapudungun</span>
                    </div>
                    
                    <h4 className={`text-xl font-sans font-extrabold ${isSelected ? 'text-white' : 'text-[#222222] group-hover:text-[#69826a]'}`}>
                      {item.term}
                    </h4>

                    <p className={`text-xs italic font-sans mt-1 ${isSelected ? 'text-white/80' : 'text-[#555555]'}`}>
                      "{item.literalTranslation}"
                    </p>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 transition-colors ${isSelected ? 'text-[#d9c6a5]' : 'text-[#d9c6a5] group-hover:text-[#69826a]'}`} />
                </button>
              );
            })}

            {filteredTerms.length === 0 && (
              <div className="p-8 text-center bg-[#FBF9F5] border-2 border-[#d9c6a5] text-[#555555] text-sm font-sans rounded-2xl">
                No se hallaron conceptos para "{searchTerm}".
              </div>
            )}
          </div>

          {/* Detailed Term Dossier */}
          <div className="lg:col-span-7 bg-[#FBF9F5] p-8 sm:p-12 rounded-3xl border-2 border-[#d9c6a5] shadow-sm">
            <div className="border-b border-[#d9c6a5] pb-6 mb-8">
              <span className="bg-[#69826a] text-white px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider font-bold rounded-full inline-block mb-3">
                {selectedTerm.associatedPillar} · Kimün Mapuche
              </span>
              
              <h3 className="text-3xl sm:text-4xl font-sans font-extrabold text-[#222222]">
                {selectedTerm.term}
              </h3>
              
              <p className="text-sm sm:text-base font-sans italic text-[#69826a] mt-2 font-bold">
                Traducción Literal: "{selectedTerm.literalTranslation}"
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <span className="text-xs uppercase tracking-wider font-extrabold text-[#222222] block mb-2 font-sans">
                  Significado Filosófico y Territorial
                </span>
                <p className="text-base sm:text-lg font-sans font-semibold text-[#222222] leading-relaxed">
                  {selectedTerm.deepMeaning}
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border-2 border-[#d9c6a5] border-l-8 border-l-[#69826a]">
                <span className="text-xs uppercase tracking-wider font-extrabold text-[#222222] block mb-2 font-sans">
                  Traducción a la Práctica del Negocio
                </span>
                <p className="text-sm sm:text-base text-[#555555] font-sans leading-relaxed">
                  {selectedTerm.businessIntegration}
                </p>
              </div>

              <div className="pt-4 border-t border-[#d9c6a5] flex items-center justify-between text-xs font-sans text-[#555555]">
                <span>Sabiduría Territorial Viva</span>
                <span className="bg-[#222222] text-[#d9c6a5] px-3 py-1 uppercase tracking-wider font-bold rounded-full">
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
