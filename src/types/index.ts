export type PillarId = 'saludable' | 'sustentable' | 'simbolico' | 'sentido';
export type VeiStageId = 'identidad' | 'empoderamiento' | 'valoracion';

export interface FourSPillar {
  id: PillarId;
  name: string;
  ancestralName: string;
  phoneticMeaning: string;
  concept: string;
  productApplication: string;
  processApplication: string;
  guideQuestions: string[];
  color: {
    bg: string;
    border: string;
    text: string;
    accent: string;
  };
}

export interface VeiStage {
  id: VeiStageId;
  name: string;
  leadQuestion: string;
  role: string;
  actions: {
    title: string;
    description: string;
  }[];
  guidePrompt: string;
}

export interface CulturalBusinessProposal {
  businessName: string;
  culturalIdentity: string; // e.g. "Pewenche", "Nagche", "Lafkenche", "Wenteche", "Andina", etc.
  sector: string; // e.g. "Tejidos Artesanales", "Cosmética Natural", "Turismo Vivencial"
  territory: string; // e.g. "Territorio Nagche, La Araucanía"
  
  // 4S answers
  saludableAnswer: string;
  sustentableAnswer: string;
  simbolicoAnswer: string;
  sentidoAnswer: string;
  
  // VEI answers
  identidadAnswer: string;
  empoderamientoAnswer: string;
  valoracionAnswer: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  territory: string;
  identityLabel: string;
  image: string;
  valueProposition: string;
  fourS: {
    saludable: string;
    sustentable: string;
    simbolico: string;
    sentido: string;
  };
  vei: {
    identidad: string;
    empoderamiento: string;
    valoracion: string;
  };
}

export interface GlossaryTerm {
  term: string;
  literalTranslation: string;
  deepMeaning: string;
  businessIntegration: string;
  associatedPillar: string;
}
