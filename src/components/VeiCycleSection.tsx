import { useState } from 'react';
import { VEI_DATA, FOUR_S_DATA } from '../data/initialData';
import { VeiStageId, PillarId } from '../types';
import { Compass, ShieldCheck, Store, ArrowRight } from 'lucide-react';

export const VeiCycleSection = () => {
  const [activeStageId, setActiveStageId] = useState<VeiStageId>('identidad');
  const [matrixSelectedS, setMatrixSelectedS] = useState<PillarId>('simbolico');
  const [matrixSelectedVei, setMatrixSelectedVei] = useState<VeiStageId>('valoracion');

  const activeStage = VEI_DATA.find((s) => s.id === activeStageId) || VEI_DATA[0];

  const getStageIcon = (id: VeiStageId) => {
    switch (id) {
      case 'identidad':
        return <Compass className="w-5 h-5" />;
      case 'empoderamiento':
        return <ShieldCheck className="w-5 h-5" />;
      case 'valoracion':
        return <Store className="w-5 h-5" />;
    }
  };

  const getMatrixIntersectionContent = (s: PillarId, vei: VeiStageId) => {
    const matrixMap: Record<PillarId, Record<VeiStageId, { action: string; example: string }>> = {
      saludable: {
        identidad: {
          action: 'Definir el compromiso de bienestar integral del producto y el cuidado de los creadores.',
          example: 'Declarar la exclusión total de tintes o preservantes sintéticos para no irritar la piel ni contaminar.'
        },
        empoderamiento: {
          action: 'Aprender técnicas de extracción limpia, ergonomía laboral y bioseguridad comunitaria.',
          example: 'Capacitarse en destilación botánica o higiene natural para estandarizar fórmulas saludables.'
        },
        valoracion: {
          action: 'Comunicar con transparencia los beneficios para la salud física y emocional del cliente.',
          example: 'Publicar fichas botánicas explicando cómo cada planta nativa promueve la relajación y el descanso.'
        }
      },
      sustentable: {
        identidad: {
          action: 'Asumir el respeto por los ciclos de la tierra (Yamawun Itrofil Mongen) como pacto irrenunciable.',
          example: 'Elegir no producir en masa para no sobreexplotar las praderas o los bosques de recolección.'
        },
        empoderamiento: {
          action: 'Crear alianzas con recolectores éticos, aprender sobre embalajes compostables y reciclaje.',
          example: 'Asociarse con otros artesanos para comprar fibras locales certificadas y reducir viajes logísticos.'
        },
        valoracion: {
          action: 'Elegir ferias ecológicas y tiendas sostenibles; transparentar la huella circular de cada pieza.',
          example: 'Mostrar en video cómo el envase se degrada en la compostera y cómo la lana proviene de esquila respetuosa.'
        }
      },
      simbolico: {
        identidad: {
          action: 'Reconocer el Tüwün (origen territorial) y el Kimün (conocimiento ancestral) como la raíz del negocio.',
          example: 'Fundar la marca como portadora de la memoria de un territorio específico (Nagche, Pewenche, Lafkenche).'
        },
        empoderamiento: {
          action: 'Consultar a las autoridades tradicionales y sabios (Kimche) para usar la iconografía con permiso y rigor.',
          example: 'Mapear relatos orales de la familia para plasmarlos con exactitud histórica y respeto ceremonial.'
        },
        valoracion: {
          action: 'Educar al cliente a través del storytelling, explicando el significado profundo de cada patrón.',
          example: 'Adjuntar a cada prenda una tarjeta caligrafiada que describe el relato territorial y el simbolismo cósmico.'
        }
      },
      sentido: {
        identidad: {
          action: 'Conectar la vocación personal y el talento del artesano con la misión transformadora del proyecto.',
          example: 'Definir que el negocio busca dignificar el oficio tradicional y evitar la migración de los jóvenes.'
        },
        empoderamiento: {
          action: 'Fortalecer la confianza y autoestima creativa, perfeccionando las habilidades técnicas y de gestión.',
          example: 'Formarse en costeo justo y finanzas comunitarias para valorar adecuadamente las horas de trabajo manual.'
        },
        valoracion: {
          action: 'Comercializar en plataformas que respeten el precio justo y rechacen el regateo despectivo.',
          example: 'Obtener sellos de Comercio Justo o Sello de Origen que acrediten el valor incalculable del saber hacer.'
        }
      }
    };

    return matrixMap[s][vei];
  };

  const currentIntersection = getMatrixIntersectionContent(matrixSelectedS, matrixSelectedVei);
  const selectedPillarObj = FOUR_S_DATA.find((p) => p.id === matrixSelectedS);
  const selectedVeiObj = VEI_DATA.find((v) => v.id === matrixSelectedVei);

  return (
    <section id="ciclo-vei" className="py-20 md:py-28 border-b border-[#d9c6a5] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="mb-4">
            <span className="bg-[#69826a] text-white px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider font-sans font-bold rounded-full">
              02 / Estrategia Dinámica
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold uppercase tracking-wide text-[#222222] text-balance mb-6 leading-tight">
            Identidad, Empoderamiento y Valoración en movimiento continuo.
          </h2>

          <p className="text-[#555555] leading-relaxed text-base sm:text-lg font-sans">
            El modelo V.E.I. no es un trámite lineal, sino una espiral de maduración comunitaria: descubrimos quiénes somos, nos capacitamos para sostener esa promesa y nos presentamos con honestidad ante un mercado consciente.
          </p>
        </div>


        {/* 3 Phases: High Contrast Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {VEI_DATA.map((stage, idx) => {
            const isSelected = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`p-7 text-left transition-colors cursor-pointer border-2 rounded-3xl flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-[#222222] text-white border-[#222222] shadow-md' 
                    : 'bg-white text-[#222222] border-[#d9c6a5] hover:border-[#69826a] hover:bg-[#FBF9F5]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-sans tracking-wider mb-4 pb-3 border-b border-[#d9c6a5]/40">
                    <span className={isSelected ? 'text-[#d9c6a5] font-bold' : 'text-[#69826a] font-bold'}>
                      ETAPA 0{idx + 1}
                    </span>
                    <span className={isSelected ? 'text-[#d9c6a5]' : 'text-[#222222]'}>
                      {getStageIcon(stage.id)}
                    </span>
                  </div>

                  <h3 className="text-2xl font-sans font-extrabold uppercase tracking-wide mb-2">
                    {stage.name}
                  </h3>

                  <div className={`text-sm font-sans italic mb-3 font-medium ${isSelected ? 'text-[#d9c6a5]' : 'text-[#69826a]'}`}>
                    {stage.leadQuestion}
                  </div>

                  <p className={`text-xs leading-relaxed font-sans ${isSelected ? 'text-white/80' : 'text-[#555555]'}`}>
                    {stage.role}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#d9c6a5]/20 flex items-center justify-between text-xs font-sans font-bold uppercase tracking-wider">
                  <span>{isSelected ? 'Etapa Activa' : 'Ver Acciones'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#d9c6a5]' : 'text-[#69826a]'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Stage Focus */}
        <div className="p-8 sm:p-12 bg-white rounded-3xl border-2 border-[#d9c6a5] shadow-sm mb-24">
          <div className="max-w-3xl mb-8">
            <span className="bg-[#69826a] text-white px-3 py-1 text-[10px] sm:text-xs font-sans uppercase tracking-wider font-bold inline-block mb-3 rounded-full">
              Enfoque Activo · {activeStage.name}
            </span>
            <h4 className="text-2xl sm:text-3xl font-sans font-extrabold uppercase tracking-wide text-[#222222] mb-3">
              {activeStage.leadQuestion}
            </h4>
            <p className="text-[#555555] text-lg font-sans leading-relaxed">
              {activeStage.guidePrompt}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#d9c6a5]">
            {activeStage.actions.map((act, i) => (
              <div key={i} className="p-6 bg-[#FBF9F5] rounded-2xl border-2 border-[#d9c6a5] border-l-8 border-l-[#69826a]">
                <h5 className="text-xs uppercase tracking-wider font-black text-[#222222] mb-2 font-sans">
                  {act.title}
                </h5>
                <p className="text-sm text-[#555555] font-sans leading-relaxed">
                  {act.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Cultural Loom: Telar Táctico (4S x VEI Matrix) */}
        <div id="matriz-integrada" className="pt-4">
          <div className="max-w-3xl mb-12">
            <div className="mb-4">
              <span className="bg-[#222222] text-[#d9c6a5] px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider font-sans font-bold rounded-full">
                El Telar Táctico
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-sans font-extrabold uppercase tracking-wide text-[#222222] tracking-tight mb-4">
              La Matriz Táctica: Donde cada pilar cobra acción real.
            </h3>

            <p className="text-[#555555] text-base leading-relaxed font-sans">
              Selecciona un pilar innegociable de la urdimbre (4S) y una fase estratégica de la trama (V.E.I.) para explorar la acción concreta que une el pensamiento ético con la viabilidad comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Weft & Warp Selectors */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Urdimbre (4S) */}
              <div className="p-6 bg-white rounded-3xl border-2 border-[#d9c6a5]">
                <span className="text-xs uppercase tracking-wider font-black text-[#222222] block mb-3 font-sans">
                  1. Urdimbre / Pilar Innegociable (4S)
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {FOUR_S_DATA.map((p) => {
                    const active = matrixSelectedS === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setMatrixSelectedS(p.id)}
                        className={`p-3.5 text-left transition-colors cursor-pointer border-2 rounded-2xl ${
                          active
                            ? 'bg-[#222222] text-white border-[#222222]'
                            : 'bg-[#FBF9F5] text-[#222222] border-[#d9c6a5] hover:border-[#69826a]'
                        }`}
                      >
                        <div className="font-sans font-extrabold uppercase tracking-wide text-sm">{p.name}</div>
                        <div className={`text-xs italic truncate font-sans font-medium mt-1 ${active ? 'text-[#d9c6a5]' : 'text-[#69826a]'}`}>
                          {p.ancestralName}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Trama (VEI) */}
              <div className="p-6 bg-white rounded-3xl border-2 border-[#d9c6a5]">
                <span className="text-xs uppercase tracking-wider font-black text-[#222222] block mb-3 font-sans">
                  2. Trama / Movimiento Estratégico (V.E.I.)
                </span>
                <div className="grid grid-cols-3 gap-2.5">
                  {VEI_DATA.map((v) => {
                    const active = matrixSelectedVei === v.id;
                    return (
                      <button
                        key={v.id}
                        onClick={() => setMatrixSelectedVei(v.id)}
                        className={`py-3 px-2 text-center transition-colors cursor-pointer border-2 rounded-full ${
                          active
                            ? 'bg-[#69826a] text-white border-[#69826a]'
                            : 'bg-[#FBF9F5] text-[#222222] border-[#d9c6a5] hover:border-[#69826a]'
                        }`}
                      >
                        <div className="font-bold text-[10px] sm:text-xs uppercase tracking-wider">{v.name}</div>
                        <div className={`hidden sm:block text-[10px] mt-0.5 truncate font-sans italic ${active ? 'text-white/90' : 'text-[#555555]'}`}>
                          {v.leadQuestion}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Hand-Stamped Workshop Note */}
            <div className="lg:col-span-7 p-8 sm:p-10 bg-white rounded-3xl border-2 border-[#d9c6a5] shadow-sm relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#222222] font-sans pb-4 border-b border-[#d9c6a5] mb-6 gap-3">
                <span className="font-bold uppercase tracking-wider">PLIEGO DE TELAR TÁCTICO</span>
                <span className="bg-[#d9c6a5] text-[#222222] font-extrabold px-3 py-1 uppercase tracking-wider rounded-full text-center">
                  {selectedPillarObj?.name} × {selectedVeiObj?.name}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider font-black text-[#69826a] block mb-2 font-sans">
                    Acción Estratégica en el Taller
                  </span>
                  <p className="text-xl sm:text-2xl font-sans font-extrabold text-[#222222] leading-relaxed">
                    {currentIntersection.action}
                  </p>
                </div>

                <div className="p-6 bg-[#FBF9F5] rounded-2xl border-2 border-[#d9c6a5] border-l-8 border-l-[#69826a]">
                  <span className="text-xs uppercase tracking-wider font-black text-[#222222] block mb-1 font-sans">
                    Caso de Aplicación en la Práctica Territorial
                  </span>
                  <p className="text-base text-[#555555] font-sans leading-relaxed">
                    "{currentIntersection.example}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#d9c6a5] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#555555] font-sans tracking-wider gap-2">
                  <span>Urdimbre: <strong className="text-[#222222]">{selectedPillarObj?.ancestralName}</strong></span>
                  <span>Trama: <strong className="text-[#222222]">{selectedVeiObj?.leadQuestion}</strong></span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
