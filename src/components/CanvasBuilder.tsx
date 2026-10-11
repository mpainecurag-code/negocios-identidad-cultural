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
    <section id="lienzo" className="py-20 md:py-28 border-b border-[#d9c6a5] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-8 border-b border-[#d9c6a5]">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="bg-[#69826a] text-white px-4 py-1.5 text-[10px] sm:text-xs uppercase tracking-wider font-bold rounded-full">
                04 / Taller Práctico
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#222222] tracking-tight leading-tight">
              Lienzo de Propuesta de Valor Cultural
            </h2>

            <p className="text-[#555555] text-sm sm:text-base mt-4 font-sans leading-relaxed">
              Formula los pilares innegociables de tu proyecto y su activación estratégica. El resultado se convertirá en el manifiesto fundacional de tu negocio.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={handleDownloadPdf}
              disabled={downloadingPdf}
              className="px-6 py-3 bg-[#69826a] hover:bg-[#4f6650] text-white text-xs uppercase tracking-wider font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-sm rounded-full disabled:opacity-70"
            >
              {downloadingPdf ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Generando PDF...</span>
                </>
              ) : (
                <>
                  <FileDown className="w-4 h-4" />
                  <span>Descargar PDF</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyManifesto}
              className="px-6 py-3 bg-[#222222] text-white hover:bg-[#222222]/80 text-xs uppercase tracking-wider font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-sm rounded-full"
            >
              {copied ? <Check className="w-4 h-4 text-[#d9c6a5]" /> : <Copy className="w-4 h-4 text-[#d9c6a5]" />}
              <span>{copied ? '¡Copiado!' : 'Copiar Manifiesto'}</span>
            </button>

            <button
              onClick={onReset}
              className="px-5 py-3 bg-[#FBF9F5] text-[#222222] text-xs uppercase tracking-wider font-bold hover:bg-[#d9c6a5]/30 transition-colors flex items-center gap-1.5 cursor-pointer rounded-full border border-[#d9c6a5]"
              title="Restablecer pliego en blanco"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpiar</span>
            </button>
          </div>
        </div>

        {/* Template Loaders */}
        <div className="bg-white rounded-3xl border-2 border-[#d9c6a5] p-5 sm:p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#69826a] rounded-full"></span>
            <span className="text-xs uppercase tracking-wider font-bold text-[#222222]">
              Cargar Pliego de Referencia:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => loadCaseTemplate('nagche-textiles')}
              className="px-4 py-1.5 bg-[#FBF9F5] hover:bg-[#69826a] hover:text-white text-[#222222] border border-[#d9c6a5] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-full"
            >
              Tejedoras Nagche
            </button>
            <button
              onClick={() => loadCaseTemplate('pewenche-cosmetics')}
              className="px-4 py-1.5 bg-[#FBF9F5] hover:bg-[#69826a] hover:text-white text-[#222222] border border-[#d9c6a5] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-full"
            >
              Fitocosmética Pewenche
            </button>
            <button
              onClick={() => loadCaseTemplate('lafkenche-tourism')}
              className="px-4 py-1.5 bg-[#FBF9F5] hover:bg-[#69826a] hover:text-white text-[#222222] border border-[#d9c6a5] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-full"
            >
              Turismo Lafkenche
            </button>
          </div>
        </div>

        {/* Studio Workspace: Formulator vs Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Workshop Formulator */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 00 / Identificación */}
            <div className="bg-white p-7 sm:p-8 rounded-3xl border-2 border-[#d9c6a5] shadow-sm">
              <div className="mb-6 pb-3 border-b border-[#d9c6a5] flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-extrabold text-[#222222]">
                  00 / Identificación Territorial
                </span>
                <span className="text-[10px] font-bold text-[#69826a] uppercase tracking-wider bg-[#69826a]/10 px-3 py-1 rounded-full">Base de Datos</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#222222] mb-2">
                    Nombre del Emprendimiento
                  </label>
                  <input
                    type="text"
                    value={proposal.businessName}
                    onChange={(e) => updateField('businessName', e.target.value)}
                    placeholder="Ej. Tejedoras Nagche con Propósito"
                    className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#d9c6a5] text-sm focus:outline-none focus:border-[#69826a] font-sans text-[#222222] rounded-2xl"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#222222] mb-2">
                    Identidad Cultural / Linaje
                  </label>
                  <input
                    type="text"
                    value={proposal.culturalIdentity}
                    onChange={(e) => updateField('culturalIdentity', e.target.value)}
                    placeholder="Ej. Identidad Pewenche, Nagche, Lafkenche..."
                    className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#d9c6a5] text-sm focus:outline-none focus:border-[#69826a] font-sans text-[#222222] rounded-2xl"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#222222] mb-2">
                    Oficio o Rubro
                  </label>
                  <input
                    type="text"
                    value={proposal.sector}
                    onChange={(e) => updateField('sector', e.target.value)}
                    placeholder="Ej. Textilería, Fitocosmética, Ecoturismo..."
                    className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#d9c6a5] text-sm focus:outline-none focus:border-[#69826a] font-sans text-[#222222] rounded-2xl"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#222222] mb-2">
                    Territorio de Origen (Tüwün)
                  </label>
                  <input
                    type="text"
                    value={proposal.territory}
                    onChange={(e) => updateField('territory', e.target.value)}
                    placeholder="Ej. Lonquimay, Curarrehue, Lago Budi..."
                    className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#d9c6a5] text-sm focus:outline-none focus:border-[#69826a] font-sans text-[#222222] rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* 01 / Las 4S */}
            <div className="bg-white p-7 sm:p-8 rounded-3xl border-2 border-[#d9c6a5] shadow-sm space-y-6">
              <div className="pb-3 border-b border-[#d9c6a5] flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-extrabold text-[#69826a]">
                  01 / Los Pilares Innegociables (Las 4S)
                </span>
                <span className="text-[10px] font-bold text-[#222222] uppercase tracking-wider bg-[#222222]/5 px-3 py-1 rounded-full">Filtro Ético</span>
              </div>

              {/* Saludable */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#222222] mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#69826a] rounded-full"></span>
                  <span>Saludable (Küme Felen)</span>
                </label>
                <textarea
                  rows={2}
                  value={proposal.saludableAnswer}
                  onChange={(e) => updateField('saludableAnswer', e.target.value)}
                  placeholder="¿Cómo cuida la salud y bienestar físico/espiritual sin químicos nocivos?"
                  className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#d9c6a5] text-sm focus:outline-none focus:border-[#69826a] font-sans text-[#222222] rounded-2xl"
                />
              </div>

              {/* Sustentable */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#222222] mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#4f6650] rounded-full"></span>
                  <span>Sustentable (Yamawun Itrofil Mongen)</span>
                </label>
                <textarea
                  rows={2}
                  value={proposal.sustentableAnswer}
                  onChange={(e) => updateField('sustentableAnswer', e.target.value)}
                  placeholder="¿Qué materias primas locales se usan y cómo se respeta el ciclo biológico?"
                  className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#d9c6a5] text-sm focus:outline-none focus:border-[#69826a] font-sans text-[#222222] rounded-2xl"
                />
              </div>

              {/* Simbólico */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#222222] mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#d9c6a5] rounded-full"></span>
                  <span>Simbólico (Tüwün Küpalme)</span>
                </label>
                <textarea
                  rows={2}
                  value={proposal.simbolicoAnswer}
                  onChange={(e) => updateField('simbolicoAnswer', e.target.value)}
                  placeholder="¿Qué memoria, iconografía o historia territorial transmite cada pieza?"
                  className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#d9c6a5] text-sm focus:outline-none focus:border-[#69826a] font-sans text-[#222222] rounded-2xl"
                />
              </div>

              {/* Sentido */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#222222] mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#222222] rounded-full"></span>
                  <span>Con Sentido (Fellentun, Wiñokintungetual)</span>
                </label>
                <textarea
                  rows={2}
                  value={proposal.sentidoAnswer}
                  onChange={(e) => updateField('sentidoAnswer', e.target.value)}
                  placeholder="¿Cuál es la vocación profunda y cómo dignifica el oficio artesano?"
                  className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#d9c6a5] text-sm focus:outline-none focus:border-[#69826a] font-sans text-[#222222] rounded-2xl"
                />
              </div>
            </div>

            {/* 02 / Despliegue VEI */}
            <div className="bg-white p-7 sm:p-8 rounded-3xl border-2 border-[#d9c6a5] shadow-sm space-y-6">
              <div className="pb-3 border-b border-[#d9c6a5] flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-extrabold text-[#222222]">
                  02 / Activación Estratégica (Ciclo V.E.I.)
                </span>
                <span className="text-[10px] font-bold text-[#222222] uppercase tracking-wider bg-[#d9c6a5] px-3 py-1 rounded-full">Motor Dinámico</span>
              </div>

              {/* Identidad */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#222222] mb-1">
                  (I) Identidad — ¿Quiénes somos?
                </label>
                <textarea
                  rows={2}
                  value={proposal.identidadAnswer}
                  onChange={(e) => updateField('identidadAnswer', e.target.value)}
                  placeholder='Ej. Somos "Tejedoras Nagche con Propósito", guardianas de la lana y la memoria viva.'
                  className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#d9c6a5] text-sm focus:outline-none focus:border-[#69826a] font-sans text-[#222222] rounded-2xl"
                />
              </div>

              {/* Empoderamiento */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#222222] mb-1">
                  (E) Empoderamiento — ¿Cómo nos fortalecemos?
                </label>
                <textarea
                  rows={2}
                  value={proposal.empoderamientoAnswer}
                  onChange={(e) => updateField('empoderamientoAnswer', e.target.value)}
                  placeholder="Ej. Formación en técnicas de tinte botánico, compras colectivas de insumos y alianzas de oficio."
                  className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#d9c6a5] text-sm focus:outline-none focus:border-[#69826a] font-sans text-[#222222] rounded-2xl"
                />
              </div>

              {/* Valoración */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#222222] mb-1">
                  (V) Valoración — ¿Cómo nos mostramos al mundo?
                </label>
                <textarea
                  rows={2}
                  value={proposal.valoracionAnswer}
                  onChange={(e) => updateField('valoracionAnswer', e.target.value)}
                  placeholder="Ej. Difusión en redes sociales del proceso artesanal y presencia en tiendas de comercio justo."
                  className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#d9c6a5] text-sm focus:outline-none focus:border-[#69826a] font-sans text-[#222222] rounded-2xl"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Manifesto Ledger */}
          <div className="lg:col-span-5 sticky top-24">
            
            <div className="bg-white p-8 sm:p-10 rounded-3xl border-2 border-[#d9c6a5] shadow-md print:p-0 print:border-none print:shadow-none relative">
              
              {/* Header */}
              <div className="border-b border-[#d9c6a5] pb-6 mb-6">
                <div className="flex items-center justify-between text-xs font-bold mb-3 uppercase tracking-wider">
                  <span className="bg-[#222222] text-[#d9c6a5] px-3 py-1 rounded-full">PLIEGO DE TALLER</span>
                  <span className="text-[#69826a]">DOC. VEI-4S</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#222222] leading-tight">
                  {proposal.businessName || 'Tu Negocio con Identidad'}
                </h3>

                <div className="text-xs text-[#555555] mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#69826a] text-white px-2 py-0.5 font-bold uppercase rounded-full">{proposal.culturalIdentity || 'Identidad'}</span>
                  <span>/</span>
                  <span className="font-semibold">{proposal.sector || 'Oficio'}</span>
                  <span>/</span>
                  <span className="font-semibold">{proposal.territory || 'Territorio'}</span>
                </div>
              </div>

              {/* Body Manifesto */}
              <div className="space-y-6">
                
                <div>
                  <span className="text-xs uppercase tracking-wider font-extrabold text-[#222222] block mb-2">
                    Declaración de Propuesta de Valor
                  </span>
                  <p className="text-sm sm:text-base font-sans italic text-[#222222] leading-relaxed p-4 bg-[#FBF9F5] border-l-4 border-[#69826a] rounded-xl">
                    "Creamos {(proposal.sector || 'propuestas con propósito').toLowerCase()} que honran la raíz de nuestra {proposal.culturalIdentity || 'identidad'}, al servicio de clientes conscientes que buscan autenticidad, calidad y respeto territorial."
                  </p>
                </div>

                {/* 4S Attributes */}
                <div>
                  <span className="text-xs uppercase tracking-wider font-extrabold text-[#222222] block mb-2.5">
                    Pilares 4S Certificados en el Taller
                  </span>
                  <div className="space-y-2 text-xs font-sans">
                    <div className="p-3 bg-[#FBF9F5] border-l-4 border-[#69826a] rounded-xl">
                      <strong className="text-[#69826a] font-bold uppercase block mb-0.5">Saludable:</strong>
                      <span className="text-[#555555]">{proposal.saludableAnswer || 'Pendiente de redactar'}</span>
                    </div>
                    <div className="p-3 bg-[#FBF9F5] border-l-4 border-[#4f6650] rounded-xl">
                      <strong className="text-[#4f6650] font-bold uppercase block mb-0.5">Sustentable:</strong>
                      <span className="text-[#555555]">{proposal.sustentableAnswer || 'Pendiente de redactar'}</span>
                    </div>
                    <div className="p-3 bg-[#FBF9F5] border-l-4 border-[#d9c6a5] rounded-xl">
                      <strong className="text-[#8a7352] font-bold uppercase block mb-0.5">Simbólico:</strong>
                      <span className="text-[#555555]">{proposal.simbolicoAnswer || 'Pendiente de redactar'}</span>
                    </div>
                    <div className="p-3 bg-[#FBF9F5] border-l-4 border-[#222222] rounded-xl">
                      <strong className="text-[#222222] font-bold uppercase block mb-0.5">Con Sentido:</strong>
                      <span className="text-[#555555]">{proposal.sentidoAnswer || 'Pendiente de redactar'}</span>
                    </div>
                  </div>
                </div>

                {/* VEI Dynamic */}
                <div className="pt-4 border-t border-[#d9c6a5]">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-[#222222] block mb-2">
                    Ciclo V.E.I. en Movimiento
                  </span>
                  <div className="space-y-2 text-xs font-sans text-[#555555]">
                    <p>
                      <strong className="text-[#69826a] uppercase">Identidad:</strong> {proposal.identidadAnswer || 'Pendiente'}
                    </p>
                    <p>
                      <strong className="text-[#d9c6a5] uppercase">Empoderamiento:</strong> {proposal.empoderamientoAnswer || 'Pendiente'}
                    </p>
                    <p>
                      <strong className="text-[#222222] uppercase">Valoración:</strong> {proposal.valoracionAnswer || 'Pendiente'}
                    </p>
                  </div>
                </div>

                {/* Colophon */}
                <div className="pt-6 border-t border-[#d9c6a5] text-xs font-sans italic text-[#555555] text-center">
                  <p>"Donde el crecimiento económico florece de la memoria cultural y el respeto por la tierra."</p>
                  <p className="mt-2 text-[11px] not-italic text-[#888888]">
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
