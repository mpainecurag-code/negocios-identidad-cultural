import React, { useState } from 'react';
import { CulturalBusinessProposal } from '../types';
import { CASE_STUDIES } from '../data/initialData';
import { Copy, Check, RotateCcw, FileDown } from 'lucide-react';
import { exportProposalToPdf } from '../utils/pdfExport';

interface CanvasBuilderProps {
  proposal: CulturalBusinessProposal;
  onChange: (updated: CulturalBusinessProposal) => void;
  onReset: () => void;
}

export const CanvasBuilder: React.FC<CanvasBuilderProps> = ({ proposal, onChange, onReset }) => {
  const [copied, setCopied] = useState(false);
  const [downloadingPdf, setDownloadingPdf] = useState(false);

  const updateField = (field: keyof CulturalBusinessProposal, value: string) => {
    onChange({
      ...proposal,
      [field]: value
    });
  };

  const handleDownloadPdf = () => {
    setDownloadingPdf(true);
    try {
      exportProposalToPdf(proposal);
    } catch (err) {
      console.error('Error al generar PDF:', err);
    } finally {
      setTimeout(() => setDownloadingPdf(false), 1500);
    }
  };

  const handleCopyManifesto = async () => {
    const text = `
MANIFIESTO DE PROPUESTA DE VALOR CULTURAL
Modelo VEI & Las 4S · Pliego de Taller

Emprendimiento: ${proposal.businessName || 'Sin nombre'}
Identidad Cultural: ${proposal.culturalIdentity || 'Sin definir'}
Rubro / Oficio: ${proposal.sector || 'Sin definir'}
Territorio: ${proposal.territory || 'Sin definir'}

--------------------------------------------------
PROPUESTA DE VALOR INTEGRADA:
"Creamos ${proposal.sector || 'propuestas con propósito'} que honran la raíz de nuestra ${proposal.culturalIdentity || 'identidad'}, al servicio de clientes conscientes que buscan autenticidad, calidad y respeto territorial."

PILÁRES 4S INNEGOCIABLES:
• Saludable (Küme Felen): ${proposal.saludableAnswer || 'Pendiente'}
• Sustentable (Yamawun Itrofil Mongen): ${proposal.sustentableAnswer || 'Pendiente'}
• Simbólico (Tüwün Küpalme, Kimün): ${proposal.simbolicoAnswer || 'Pendiente'}
• Con Sentido (Fellentun, Wiñokintungetual): ${proposal.sentidoAnswer || 'Pendiente'}

--------------------------------------------------
ACTIVACIÓN DINÁMICA CON EL MODELO V.E.I.:
(I) Identidad - ¿Quiénes somos?:
${proposal.identidadAnswer || 'Pendiente'}

(E) Empoderamiento - ¿Cómo nos fortalecemos?:
${proposal.empoderamientoAnswer || 'Pendiente'}

(V) Valoración - ¿Cómo nos mostramos al mundo?:
${proposal.valoracionAnswer || 'Pendiente'}

--------------------------------------------------
Las metodologías mostradas en esta web fueron creadas y diseñadas por Juan Huincabal y Mijail Painecura.
    `.trim();

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const loadCaseTemplate = (caseId: string) => {
    const cs = CASE_STUDIES.find((c) => c.id === caseId);
    if (!cs) return;

    onChange({
      businessName: cs.title,
      culturalIdentity: cs.identityLabel,
      sector: cs.title.includes('Tejedoras') ? 'Textilería Tradicional' : cs.title.includes('Cosmética') ? 'Fitocosmética Natural' : 'Turismo Vivencial Comunitario',
      territory: cs.territory,
      saludableAnswer: cs.fourS.saludable,
      sustentableAnswer: cs.fourS.sustentable,
      simbolicoAnswer: cs.fourS.simbolico,
      sentidoAnswer: cs.fourS.sentido,
      identidadAnswer: cs.vei.identidad,
      empoderamientoAnswer: cs.vei.empoderamiento,
      valoracionAnswer: cs.vei.valoracion
    });
  };

  return (
    <section id="lienzo" className="py-20 md:py-28 border-b-2 border-[#141414] bg-[#F6F5F2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-8 border-b-2 border-[#141414]">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="bg-[#141414] text-[#F5A623] px-3 py-1 text-xs uppercase tracking-widest font-mono font-bold">
                04 / Taller Práctico
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#141414] tracking-tight leading-tight">
              Lienzo de Propuesta de Valor Cultural
            </h2>

            <p className="text-[#333333] text-base mt-4 font-sans leading-relaxed">
              Formula los pilares innegociables de tu proyecto y su activación estratégica. El resultado se convertirá en el manifiesto fundacional de tu negocio.
            </p>
          </div>

          {/* Quick Actions (Survival bold buttons) */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={handleDownloadPdf}
              disabled={downloadingPdf}
              className="px-5 py-3.5 bg-[#F5A623] hover:bg-[#141414] hover:text-white text-black text-xs uppercase tracking-wider font-extrabold transition-colors flex items-center gap-2 cursor-pointer shadow-sm border border-black/10 rounded-none disabled:opacity-70"
            >
              {downloadingPdf ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Generando PDF...</span>
                </>
              ) : (
                <>
                  <FileDown className="w-4 h-4 text-black" />
                  <span>Descargar PDF</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyManifesto}
              className="px-5 py-3.5 bg-[#141414] text-white hover:bg-[#8C2415] text-xs uppercase tracking-wider font-extrabold transition-colors flex items-center gap-2 cursor-pointer shadow-sm rounded-none"
            >
              {copied ? <Check className="w-4 h-4 text-[#F5A623]" /> : <Copy className="w-4 h-4 text-[#F5A623]" />}
              <span>{copied ? '¡Copiado!' : 'Copiar Manifiesto'}</span>
            </button>

            <button
              onClick={onReset}
              className="px-4 py-3.5 bg-neutral-200 text-[#141414] text-xs uppercase tracking-wider font-bold hover:bg-neutral-300 transition-colors flex items-center gap-1.5 cursor-pointer rounded-none border border-black/10"
              title="Restablecer pliego en blanco"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpiar</span>
            </button>
          </div>
        </div>

        {/* Template Loaders as High-Contrast Toolbar */}
        <div className="bg-white border-2 border-[#141414] p-4 sm:p-5 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#8C2415]"></span>
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#141414]">
              Cargar Pliego de Referencia:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => loadCaseTemplate('nagche-textiles')}
              className="px-3 py-1.5 bg-[#F6F5F2] hover:bg-[#141414] hover:text-white text-[#141414] border border-[#141414]/20 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Tejedoras Nagche
            </button>
            <button
              onClick={() => loadCaseTemplate('pewenche-cosmetics')}
              className="px-3 py-1.5 bg-[#F6F5F2] hover:bg-[#141414] hover:text-white text-[#141414] border border-[#141414]/20 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Fitocosmética Pewenche
            </button>
            <button
              onClick={() => loadCaseTemplate('lafkenche-tourism')}
              className="px-3 py-1.5 bg-[#F6F5F2] hover:bg-[#141414] hover:text-white text-[#141414] border border-[#141414]/20 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Turismo Lafkenche
            </button>
          </div>
        </div>

        {/* Studio Workspace: Formulator vs Broadsheet Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Workshop Formulator */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 00 / Identificación */}
            <div className="bg-white p-7 sm:p-8 border-2 border-[#141414] shadow-sm">
              <div className="mb-6 pb-2 border-b-2 border-[#141414] flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-black text-[#141414] font-mono">
                  00 / Identificación Territorial
                </span>
                <span className="text-xs font-mono text-[#8C2415] font-bold">Base de Datos</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-[#141414] mb-2 font-mono">
                    Nombre del Emprendimiento
                  </label>
                  <input
                    type="text"
                    value={proposal.businessName}
                    onChange={(e) => updateField('businessName', e.target.value)}
                    placeholder="Ej. Tejedoras Nagche con Propósito"
                    className="w-full px-4 py-3 bg-[#F6F5F2] border-2 border-[#141414] text-sm focus:outline-none focus:border-[#8C2415] font-sans text-[#141414] rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-[#141414] mb-2 font-mono">
                    Identidad Cultural / Linaje
                  </label>
                  <input
                    type="text"
                    value={proposal.culturalIdentity}
                    onChange={(e) => updateField('culturalIdentity', e.target.value)}
                    placeholder="Ej. Identidad Pewenche, Nagche, Lafkenche..."
                    className="w-full px-4 py-3 bg-[#F6F5F2] border-2 border-[#141414] text-sm focus:outline-none focus:border-[#8C2415] font-sans text-[#141414] rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-[#141414] mb-2 font-mono">
                    Oficio o Rubro
                  </label>
                  <input
                    type="text"
                    value={proposal.sector}
                    onChange={(e) => updateField('sector', e.target.value)}
                    placeholder="Ej. Textilería, Fitocosmética, Ecoturismo..."
                    className="w-full px-4 py-3 bg-[#F6F5F2] border-2 border-[#141414] text-sm focus:outline-none focus:border-[#8C2415] font-sans text-[#141414] rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-[#141414] mb-2 font-mono">
                    Territorio de Origen (Tüwün)
                  </label>
                  <input
                    type="text"
                    value={proposal.territory}
                    onChange={(e) => updateField('territory', e.target.value)}
                    placeholder="Ej. Lonquimay, Curarrehue, Lago Budi..."
                    className="w-full px-4 py-3 bg-[#F6F5F2] border-2 border-[#141414] text-sm focus:outline-none focus:border-[#8C2415] font-sans text-[#141414] rounded-none"
                  />
                </div>
              </div>
            </div>

            {/* 01 / Las 4S */}
            <div className="bg-white p-7 sm:p-8 border-2 border-[#141414] shadow-sm space-y-6">
              <div className="pb-2 border-b-2 border-[#141414] flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-black text-[#8C2415] font-mono">
                  01 / Los Pilares Innegociables (Las 4S)
                </span>
                <span className="text-xs font-mono text-[#141414] font-bold">Filtro Ético</span>
              </div>

              {/* Saludable */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#141414] mb-2 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8C2415]"></span>
                  <span>Saludable (Küme Felen)</span>
                </label>
                <textarea
                  rows={2}
                  value={proposal.saludableAnswer}
                  onChange={(e) => updateField('saludableAnswer', e.target.value)}
                  placeholder="¿Cómo cuida la salud y bienestar físico/espiritual sin químicos nocivos?"
                  className="w-full px-4 py-3 bg-[#F6F5F2] border-2 border-[#141414] text-sm focus:outline-none focus:border-[#8C2415] font-sans text-[#141414] rounded-none"
                />
              </div>

              {/* Sustentable */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#141414] mb-2 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8C2415]"></span>
                  <span>Sustentable (Yamawun Itrofil Mongen)</span>
                </label>
                <textarea
                  rows={2}
                  value={proposal.sustentableAnswer}
                  onChange={(e) => updateField('sustentableAnswer', e.target.value)}
                  placeholder="¿Qué materias primas locales se usan y cómo se respeta el ciclo biológico?"
                  className="w-full px-4 py-3 bg-[#F6F5F2] border-2 border-[#141414] text-sm focus:outline-none focus:border-[#8C2415] font-sans text-[#141414] rounded-none"
                />
              </div>

              {/* Simbólico */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#141414] mb-2 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8C2415]"></span>
                  <span>Simbólico (Tüwün Küpalme)</span>
                </label>
                <textarea
                  rows={2}
                  value={proposal.simbolicoAnswer}
                  onChange={(e) => updateField('simbolicoAnswer', e.target.value)}
                  placeholder="¿Qué memoria, iconografía o historia territorial transmite cada pieza?"
                  className="w-full px-4 py-3 bg-[#F6F5F2] border-2 border-[#141414] text-sm focus:outline-none focus:border-[#8C2415] font-sans text-[#141414] rounded-none"
                />
              </div>

              {/* Sentido */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#141414] mb-2 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8C2415]"></span>
                  <span>Con Sentido (Fellentun, Wiñokintungetual)</span>
                </label>
                <textarea
                  rows={2}
                  value={proposal.sentidoAnswer}
                  onChange={(e) => updateField('sentidoAnswer', e.target.value)}
                  placeholder="¿Cuál es la vocación profunda y cómo dignifica el oficio artesano?"
                  className="w-full px-4 py-3 bg-[#F6F5F2] border-2 border-[#141414] text-sm focus:outline-none focus:border-[#8C2415] font-sans text-[#141414] rounded-none"
                />
              </div>
            </div>

            {/* 02 / Despliegue VEI */}
            <div className="bg-white p-7 sm:p-8 border-2 border-[#141414] shadow-sm space-y-6">
              <div className="pb-2 border-b-2 border-[#141414] flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-black text-[#141414] font-mono">
                  02 / Activación Estratégica (Ciclo V.E.I.)
                </span>
                <span className="text-xs font-mono text-[#F5A623] bg-black px-2 py-0.5 font-bold">Motor Dinámico</span>
              </div>

              {/* Identidad */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#141414] mb-1 font-mono">
                  (I) Identidad — ¿Quiénes somos?
                </label>
                <textarea
                  rows={2}
                  value={proposal.identidadAnswer}
                  onChange={(e) => updateField('identidadAnswer', e.target.value)}
                  placeholder='Ej. Somos "Tejedoras Nagche con Propósito", guardianas de la lana y la memoria viva.'
                  className="w-full px-4 py-3 bg-[#F6F5F2] border-2 border-[#141414] text-sm focus:outline-none focus:border-[#8C2415] font-sans text-[#141414] rounded-none"
                />
              </div>

              {/* Empoderamiento */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#141414] mb-1 font-mono">
                  (E) Empoderamiento — ¿Cómo nos fortalecemos?
                </label>
                <textarea
                  rows={2}
                  value={proposal.empoderamientoAnswer}
                  onChange={(e) => updateField('empoderamientoAnswer', e.target.value)}
                  placeholder="Ej. Formación en técnicas de tinte botánico, compras colectivas de insumos y alianzas de oficio."
                  className="w-full px-4 py-3 bg-[#F6F5F2] border-2 border-[#141414] text-sm focus:outline-none focus:border-[#8C2415] font-sans text-[#141414] rounded-none"
                />
              </div>

              {/* Valoración */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#141414] mb-1 font-mono">
                  (V) Valoración — ¿Cómo nos mostramos al mundo?
                </label>
                <textarea
                  rows={2}
                  value={proposal.valoracionAnswer}
                  onChange={(e) => updateField('valoracionAnswer', e.target.value)}
                  placeholder="Ej. Difusión en redes sociales del proceso artesanal y presencia en tiendas de comercio justo."
                  className="w-full px-4 py-3 bg-[#F6F5F2] border-2 border-[#141414] text-sm focus:outline-none focus:border-[#8C2415] font-sans text-[#141414] rounded-none"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Broadsheet Manifesto Ledger (Ready to Print) */}
          <div className="lg:col-span-5 sticky top-24">
            
            <div className="bg-white p-8 sm:p-10 border-2 border-[#141414] shadow-md print:p-0 print:border-none print:shadow-none relative">
              
              {/* Header Stamp */}
              <div className="border-b-2 border-[#141414] pb-6 mb-6">
                <div className="flex items-center justify-between text-xs font-mono text-[#8C2415] font-bold mb-3 uppercase tracking-widest">
                  <span className="bg-[#141414] text-[#F5A623] px-2 py-0.5">PLIEGO DE TALLER</span>
                  <span>DOC. VEI-4S</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#141414] leading-tight">
                  {proposal.businessName || 'Tu Negocio con Identidad'}
                </h3>

                <div className="text-xs font-mono text-[#333333] mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#8C2415] text-white px-1.5 py-0.5 font-bold uppercase">{proposal.culturalIdentity || 'Identidad'}</span>
                  <span>/</span>
                  <span className="font-semibold">{proposal.sector || 'Oficio'}</span>
                  <span>/</span>
                  <span className="font-semibold">{proposal.territory || 'Territorio'}</span>
                </div>
              </div>

              {/* Body Manifesto */}
              <div className="space-y-6">
                
                <div>
                  <span className="text-xs uppercase tracking-widest font-black text-[#141414] block mb-2 font-mono">
                    Declaración de Propuesta de Valor
                  </span>
                  <p className="text-base sm:text-lg font-serif italic text-[#141414] leading-relaxed p-4 bg-[#F6F5F2] border-l-4 border-[#8C2415]">
                    "Creamos {(proposal.sector || 'propuestas con propósito').toLowerCase()} que honran la raíz de nuestra {proposal.culturalIdentity || 'identidad'}, al servicio de clientes conscientes que buscan autenticidad, calidad y respeto territorial."
                  </p>
                </div>

                {/* 4S Attributes */}
                <div>
                  <span className="text-xs uppercase tracking-widest font-black text-[#141414] block mb-2.5 font-mono">
                    Pilares 4S Certificados en el Taller
                  </span>
                  <div className="space-y-2 text-xs font-sans">
                    <div className="p-3 bg-[#F6F5F2] border-l-4 border-[#141414]">
                      <strong className="text-[#141414] font-bold uppercase font-mono block mb-0.5">Saludable:</strong>
                      <span className="text-[#333333]">{proposal.saludableAnswer || 'Pendiente de redactar'}</span>
                    </div>
                    <div className="p-3 bg-[#F6F5F2] border-l-4 border-[#141414]">
                      <strong className="text-[#141414] font-bold uppercase font-mono block mb-0.5">Sustentable:</strong>
                      <span className="text-[#333333]">{proposal.sustentableAnswer || 'Pendiente de redactar'}</span>
                    </div>
                    <div className="p-3 bg-[#F6F5F2] border-l-4 border-[#8C2415]">
                      <strong className="text-[#8C2415] font-bold uppercase font-mono block mb-0.5">Simbólico:</strong>
                      <span className="text-[#333333]">{proposal.simbolicoAnswer || 'Pendiente de redactar'}</span>
                    </div>
                    <div className="p-3 bg-[#F6F5F2] border-l-4 border-[#F5A623]">
                      <strong className="text-black font-bold uppercase font-mono block mb-0.5">Con Sentido:</strong>
                      <span className="text-[#333333]">{proposal.sentidoAnswer || 'Pendiente de redactar'}</span>
                    </div>
                  </div>
                </div>

                {/* VEI Dynamic */}
                <div className="pt-4 border-t-2 border-[#141414]/15">
                  <span className="text-xs uppercase tracking-widest font-black text-[#141414] block mb-2 font-mono">
                    Ciclo V.E.I. en Movimiento
                  </span>
                  <div className="space-y-2 text-xs font-sans text-[#333333]">
                    <p>
                      <strong className="text-[#141414] font-mono uppercase">Identidad:</strong> {proposal.identidadAnswer || 'Pendiente'}
                    </p>
                    <p>
                      <strong className="text-[#8C2415] font-mono uppercase">Empoderamiento:</strong> {proposal.empoderamientoAnswer || 'Pendiente'}
                    </p>
                    <p>
                      <strong className="text-[#141414] font-mono uppercase">Valoración:</strong> {proposal.valoracionAnswer || 'Pendiente'}
                    </p>
                  </div>
                </div>

                {/* Colophon */}
                <div className="pt-6 border-t-2 border-[#141414] text-xs font-serif italic text-[#333333] text-center">
                  <p>"Donde el crecimiento económico florece de la memoria cultural y el respeto por la tierra."</p>
                  <p className="mt-2 text-[11px] font-sans not-italic text-[#666666]">
                    Las metodologías mostradas en esta web fueron creadas y diseñadas por Juan Huincabal y Mijail Painecura
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
