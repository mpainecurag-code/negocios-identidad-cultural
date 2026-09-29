import { FourSPillar, VeiStage, CaseStudy, GlossaryTerm, CulturalBusinessProposal } from '../types';

export const HERO_IMAGE = 'https://mercadomapuche.cl/wp-content/uploads/2024/11/post-3-pinon.jpg';
export const CASE_NAGCHE_IMAGE = '/src/assets/images/case_nagche_weaving_1790554708941.jpg';
export const CASE_PEWENCHE_IMAGE = '/src/assets/images/case_pewenche_cosmetics_1790554719654.jpg';
export const CASE_LAFKENCHE_IMAGE = '/src/assets/images/case_lafkenche_coast_1790554729600.jpg';
export const MANIFESTO_IMAGE = '/src/assets/images/manifesto_community_earth_1790554739400.jpg';

export const FOUR_S_DATA: FourSPillar[] = [
  {
    id: 'saludable',
    name: 'Saludable',
    ancestralName: 'Küme Felen',
    phoneticMeaning: 'Estar bien, armonía y bienestar integral de la persona y su entorno',
    concept: 'Preocupación por el bienestar integral (físico, mental y espiritual) del cliente y de la comunidad.',
    productApplication: 'Ofrecer productos orgánicos, libres de químicos sintéticos, que promuevan la relajación, la nutrición consciente, el conocimiento tradicional o prácticas saludables para el cuerpo y el espíritu.',
    processApplication: 'Mantener un ambiente de trabajo respetuoso, equilibrado y no extractivista. Fomentar relaciones comerciales justas, precios dignos y cuidado de la salud de quienes producen.',
    guideQuestions: [
      '¿De qué manera tus productos o servicios cuidan la salud física o emocional de quien los recibe?',
      '¿Tus materias primas están libres de tóxicos o químicos nocivos?',
      '¿El proceso de elaboración respeta el ritmo humano y el bienestar de los creadores?'
    ],
    color: {
      bg: 'bg-[#E5EFE9]',
      border: 'border-[#A3C8B3]',
      text: 'text-[#1E4D36]',
      accent: 'text-[#2E654A]'
    }
  },
  {
    id: 'sustentable',
    name: 'Sustentable',
    ancestralName: 'Yamawun Itrofil Mongen Küme Mongen',
    phoneticMeaning: 'Respeto recíproco por todas las formas de vida y el buen vivir',
    concept: 'Cuidado y respeto profundo por el medio ambiente, los ciclos naturales de la tierra y la biodiversidad.',
    productApplication: 'Uso exclusivo de materiales locales, recolectados con permiso de la naturaleza, reciclados o de fuentes renovables gestionadas con estricta responsabilidad ecológica.',
    processApplication: 'Minimizar activamente la huella de carbono, eliminar plásticos de un solo uso mediante packaging biodegradable o reutilizable, y aplicar principios circulares donde nada sea despericiado.',
    guideQuestions: [
      '¿De dónde provienen tus materiales y qué impacto deja su recolección o extracción?',
      '¿Cómo manejas tus residuos y empaques para no generar basura en el territorio?',
      '¿Tu producción honra las estaciones y tiempos biológicos sin forzar a la tierra?'
    ],
    color: {
      bg: 'bg-[#DCE8E0]',
      border: 'border-[#9BBCA5]',
      text: 'text-[#143522]',
      accent: 'text-[#1B432C]'
    }
  },
  {
    id: 'simbolico',
    name: 'Simbólico',
    ancestralName: 'Tüwün Küpalme, Mapuche Kimün',
    phoneticMeaning: 'Origen territorial, linaje ancestral y sabiduría comunitaria',
    concept: 'Valoración del territorio sagrado, la memoria histórica, el conocimiento transmitido de generación en generación y el contexto cultural.',
    productApplication: 'Branding y storytelling honesto donde la marca cuenta el origen territorial del producto, su historia viva y su significado cultural respetuoso.',
    processApplication: 'Diseño ético que incorpora iconografía, tramas, paletas cromáticas y formas con profundo significado, evitando la apropiación cultural o la folklorización superficial.',
    guideQuestions: [
      '¿Qué relato territorial o memoria viva está plasmada en lo que creas?',
      '¿La iconografía o formas utilizadas tienen un permiso y un significado respetado?',
      '¿Tu cliente comprende el valor del territorio del cual nace tu propuesta?'
    ],
    color: {
      bg: 'bg-[#F9EAE4]',
      border: 'border-[#DDB0A1]',
      text: 'text-[#672513]',
      accent: 'text-[#963D24]'
    }
  },
  {
    id: 'sentido',
    name: 'Sentido',
    ancestralName: 'Fellentun, Wiñokintungetual',
    phoneticMeaning: 'Convicción profunda, volver la mirada a lo esencial y propósito de vida',
    concept: 'Valoración de la vocación, el talento personal, la pasión y el propósito trascendente que impulsa al emprendedor y a su comunidad.',
    productApplication: 'Autenticidad radical: el negocio es un reflejo genuino y sin disfraces de las habilidades, historia y pasiones del creador. Se "siente" verdadero y conmueve.',
    processApplication: 'Capital humano en el centro: poner en valor el "saber hacer" artesanal y técnico como el activo más sagrado y valioso de la organización, dignificando el oficio.',
    guideQuestions: [
      '¿Cuál es el motor íntimo que te impulsa a dedicar tu tiempo a este oficio?',
      '¿Cómo se refleja tu vocación personal en los detalles finales de tu entrega?',
      '¿El trabajo genera orgullo y dignidad en tu familia y comunidad?'
    ],
    color: {
      bg: 'bg-[#FBF2E3]',
      border: 'border-[#E2C392]',
      text: 'text-[#7D4609]',
      accent: 'text-[#B86B18]'
    }
  }
];

export const VEI_DATA: VeiStage[] = [
  {
    id: 'identidad',
    name: 'Identidad (I)',
    leadQuestion: '¿Quiénes somos?',
    role: 'El Punto de Partida Fundacional',
    guidePrompt: 'La Identidad se construye sobre la base innegociable de las 4S. No es un eslogan publicitario, sino el núcleo de lo que tu negocio es e irradia.',
    actions: [
      {
        title: 'Definición de Esencia 4S',
        description: 'Explicitar con nitidez cómo tu negocio es Saludable, Sustentable, Simbólico y con Sentido en sus raíces cotidianas.'
      },
      {
        title: 'Propuesta de Valor Irrepetible',
        description: 'Articular tu identidad con anclaje territorial genuino (por ejemplo: "Cosméticos saludables con identidad Pewenche" o "Turismo sustentable con sentido Lafkenche").'
      }
    ]
  },
  {
    id: 'empoderamiento',
    name: 'Empoderamiento (E)',
    leadQuestion: '¿Cómo nos fortalecemos?',
    role: 'El Motor Interno de Capacidades',
    guidePrompt: 'Desarrollar y consolidar las capacidades internas necesarias para cumplir con fidelidad la promesa hecha en las 4S.',
    actions: [
      {
        title: 'Autoconocimiento y Puesta en Valor',
        description: 'Mapear exhaustivamente las habilidades heredadas, el talento técnico (Sentido), los saberes ancestrales (Simbólico) y los recursos comunitarios disponibles.'
      },
      {
        title: 'Entornos Propicios y Alianzas',
        description: 'Buscar formación estratégica, tecnología apropiada, compras colectivas de insumos y redes con otros cultores para mejorar procesos sin perder el alma cultural.'
      }
    ]
  },
  {
    id: 'valoracion',
    name: 'Valoración (V)',
    leadQuestion: '¿Cómo nos mostramos al mundo?',
    role: 'El Puente hacia el Mercado y la Sociedad',
    guidePrompt: 'La forma coherente en que comunicamos y comercializamos nuestra identidad para que el mundo reconozca su justo valor y la elija conscientemente.',
    actions: [
      {
        title: 'Promoción y Difusión con Relato',
        description: 'Estrategias de comunicación que no solo vendan un producto físico, sino que revelen la memoria detrás, el proceso de tintes naturales, el origen del material y el simbolismo de cada trazo.'
      },
      {
        title: 'Canales Comerciales Éticos y Sellos',
        description: 'Selección de puntos de venta y plataformas alineadas con tus valores, optando por certificaciones (Sello de Origen, Comercio Justo, Empresa B) que validen externamente tus principios.'
      }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'nagche-textiles',
    title: 'Tejedoras Nagche con Propósito',
    tagline: 'Tejidos artesanales que visten con identidad y propósito territorial',
    territory: 'Valle Central Nagche, La Araucanía',
    identityLabel: 'Textilería Ancestral Mapuche',
    image: CASE_NAGCHE_IMAGE,
    valueProposition: '"Creamos tejidos artesanales que visten con identidad y propósito, ayudando a clientes conscientes que buscan belleza y calidad. Cada pieza es saludable, sustentable, simbólica y creada con profundo sentido vocacional."',
    fourS: {
      saludable: 'Hecha con tintes 100% vegetales y minerales extraídos de corteza de michay y hojas de chilco que no irritan y cuidan tu piel sin toxicidad.',
      sustentable: 'Tejida exclusivamente con vellones de lana de oveja local de crianza ética y respetuosa, con lavado en agua de vertiente sin detergentes químicos.',
      simbolico: 'Incorpora iconografía tradicional del witral (telar vertical) que cuenta la historia y memoria del territorio Nagche.',
      sentido: 'Creada a mano por maestras artesanas que plasman su vocación, paciencia y talento ancestral en cada urdimbre.'
    },
    vei: {
      identidad: 'Nos definimos como "Tejedoras Nagche con Propósito": guardianas de la lana y de la memoria viva de nuestra gente.',
      empoderamiento: 'Nos organizamos en taller cooperativo, nos capacitamos en técnicas de comercio digital y compramos vellones en conjunto para obtener mejor precio y calidad.',
      valoracion: 'Creamos relatos fotográficos y audiovisuales donde mostramos la recolección de tintes (Saludable/Sustentable) y compartimos el significado de cada diseño (Simbólico) en canales de comercio ético.'
    }
  },
  {
    id: 'pewenche-cosmetics',
    title: 'Kura & Aliwen: Fitocosmética Pewenche',
    tagline: 'Cuidado de la piel inspirado en la longevidad del bosque milenario de Pehuenes',
    territory: 'Alto Biobío y Cordillera de Lonquimay (Pewenmapu)',
    identityLabel: 'Fitocosmética Botánica Ancestral',
    image: CASE_PEWENCHE_IMAGE,
    valueProposition: '"Fórmulas botánicas regenerativas que nutren la piel con aceites puros de piñón y resinas nativas, protegiendo los ecosistemas de montaña y dignificando la medicina de las hierbateras cordilleranas."',
    fourS: {
      saludable: 'Bálsamos e hidrolatos libres de parabenos, fragancias artificiales y sulfatos. Nutrición pura con ácidos grasos esenciales y antioxidantes naturales.',
      sustentable: 'Recolección silvestre de piñones caídos según la tradición del piñoneo, sin dañar el árbol sagrado (Araucaria araucana). Envases de vidrio retornables.',
      simbolico: 'Inspirado en el Kimün de la salud integral cordillerana, reconociendo el espíritu guardián (Ngen) del bosque en cada formulación.',
      sentido: 'Desarrollado por recolectoras que encuentran en este oficio la continuidad de los saberes medicinales de sus abuelas (Machi y Lawentuchefe).'
    },
    vei: {
      identidad: 'Somos un laboratorio vivo de cosmética limpia con raíz Pewenche, honrando la memoria de la cordillera.',
      empoderamiento: 'Alianza técnica con biotecnólogos locales para análisis de estabilidad microbiológica y estandarización sin perder los métodos artesanales.',
      valoracion: 'Presencia en tiendas orgánicas especializadas con sello de comercio justo y talleres online sobre la relación entre autocuidado y naturaleza.'
    }
  },
  {
    id: 'lafkenche-tourism',
    title: 'Ruta del Viento & Mar Lafkenche',
    tagline: 'Turismo comunitario y vivencial en las costas del Océano Austral',
    territory: 'Lago Budi y Costa Lafkenche de Tirúa a Carahue',
    identityLabel: 'Turismo Vivencial Comunitario',
    image: CASE_LAFKENCHE_IMAGE,
    valueProposition: '"Experiencias de viaje inmersivo donde el visitante convive con familias Lafkenche, degusta gastronomía marina ancestral y aprende a escuchar el lenguaje del mar y los humedales."',
    fourS: {
      saludable: 'Alimentación basada en algas nativas (cochayuyo, luche), pescados de roca y hortalizas de huerta limpia. Desconexión del estrés urbano.',
      sustentable: 'Hospedaje en rucas tradicionales bioclimáticas de bajo impacto. Rutas en embarcaciones a remo sin motores a combustión que perturben las aves.',
      simbolico: 'Transmisión oral de historias costeras (Epew) en el fogón y comprensión del Lafken (mar) como un ser vivo con espíritu.',
      sentido: 'Iniciativa colectiva de familias locales para revitalizar el mapudungun y evitar la migración forzada de las juventudes a las grandes urbes.'
    },
    vei: {
      identidad: 'Operadora turística comunitaria de identidad Lafkenche, anclada en el respeto mutuo entre viajero y anfitrión.',
      empoderamiento: 'Certificación en primeros auxilios en áreas remotas, gestión de calidad turística y aprendizaje de idiomas para guías jóvenes de la comunidad.',
      valoracion: 'Alianzas con agencias europeas de turismo ético y plataformas de impacto social que valoran el intercambio cultural sin folclorización.'
    }
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Küme Felen',
    literalTranslation: 'Estar bien / Buen estado de ser',
    deepMeaning: 'Concepto mapuche de bienestar holístico donde no hay separación entre la salud del cuerpo físico, el equilibrio psíquico, la paz espiritual y la armonía comunitaria.',
    businessIntegration: 'Fundamento del pilar Saludable: asegura que los productos no intoxiquen y que las relaciones laborales promuevan el equilibrio mental y emocional.',
    associatedPillar: 'Saludable (1ª S)'
  },
  {
    term: 'Yamawun Itrofil Mongen',
    literalTranslation: 'Respeto mutuo por toda la diversidad de la vida',
    deepMeaning: 'La convicción de que el ser humano no es dueño ni superior a la naturaleza, sino un integrante más que debe relacionarse con respeto (Yamuwün) hacia todas las vidas visibles e invisibles (Itrofill mongen).',
    businessIntegration: 'Fundamento del pilar Sustentable: guía el abastecimiento ético, la regeneración ecológica y el descarte de modelos extractivistas.',
    associatedPillar: 'Sustentable (2ª S)'
  },
  {
    term: 'Küme Mongen',
    literalTranslation: 'El Buen Vivir / Vida en armonía',
    deepMeaning: 'Paradigma civilizatorio que concibe la plenitud humana no en la acumulación desmedida de bienes materiales, sino en la convivencia pacífica con la comunidad y la tierra.',
    businessIntegration: 'Inspira modelos de negocio circulares y comunitarios donde el éxito se mide por la salud del ecosistema social y ambiental.',
    associatedPillar: 'Sustentable (2ª S)'
  },
  {
    term: 'Tüwün Küpalme',
    literalTranslation: 'Territorio de origen y linaje familiar ancestral',
    deepMeaning: 'Tüwün se refiere al lugar geográfico y espiritual del cual proviene una persona; Küpalme al linaje y herencia de valores y virtudes transmitidos por los antepasados.',
    businessIntegration: 'Fundamento del pilar Simbólico: fundamenta la autenticidad del origen territorial, la denominación protegida y la coherencia del relato de marca.',
    associatedPillar: 'Simbólico (3ª S)'
  },
  {
    term: 'Mapuche Kimün',
    literalTranslation: 'Sabiduría, conocimiento y comprensión',
    deepMeaning: 'El cuerpo vivo de conocimientos científicos, astronómicos, botánicos, arquitectónicos y filosóficos acuñados durante milenios a través de la observación profunda de la naturaleza.',
    businessIntegration: 'Aporta técnicas artesanales milenarias, recetas botánicas, patrones de diseño con significado territorial y solvencia cultural.',
    associatedPillar: 'Simbólico (3ª S)'
  },
  {
    term: 'Fellentun',
    literalTranslation: 'Espiritualidad sentida y respetada',
    deepMeaning: 'La espiritualidad activa y el compromiso moral con los principios propios, actuar guiado por una certeza ética interior que no se transa ante las presiones externas.',
    businessIntegration: 'Fundamento del pilar Sentido: otorga coherencia inquebrantable a las decisiones estratégicas de la empresa ante dilemas de mercado.',
    associatedPillar: 'Sentido (4ª S)'
  },
  {
    term: 'Wiñokintungetual',
    literalTranslation: 'Mirar hacia atrás (el pasado) atesorar, para caminar hacia adelante, proyectando el futuro',
    deepMeaning: 'La acción reflexiva de revisar los orígenes, escuchar la memoria de los antiguos y rescatar el propósito original para orientar los pasos futuros en tiempos de incertidumbre.',
    businessIntegration: 'El motor del propósito y la vocación: recordar por qué se fundó el negocio y reconectar con el valor del talento humano como el mayor activo.',
    associatedPillar: 'Sentido (4ª S)'
  }
];

export const INITIAL_PROPOSAL_TEMPLATE: CulturalBusinessProposal = {
  businessName: 'Telar y Tierra',
  culturalIdentity: 'Identidad Nagche',
  sector: 'Textilería Artesanal & Tintes Naturales',
  territory: 'Valle de Imperial, Wallmapu',
  saludableAnswer: 'Fibras naturales hiladas a mano tratadas con extractos vegetales sin fijadores tóxicos, suaves para pieles sensibles y amigables con el entorno.',
  sustentableAnswer: 'Lana de ovejas de libre pastoreo con esquila tradicional en temporada. Empaques de papel kraft compostable y reutilización de restos textiles.',
  simbolicoAnswer: 'Iconografía que expresa la relación del agua y la tierra según la cosmovisión del territorio, compartiendo la ficha explicativa de cada símbolo con el cliente.',
  sentidoAnswer: 'Revalorización del oficio de la maestra hilandera y tejedora, asegurando ingresos justos y transmitiendo la técnica a las nuevas generaciones.',
  identidadAnswer: 'Somos "Creadoras de Textilería Sagrada Nagche", tejiendo abrigos y accesorios de alta durabilidad con alma territorial.',
  empoderamientoAnswer: 'Conformación de cooperativa de trabajo para compra directa de materia prima e inversión en talleres de diseño ergonómico y fotografía digital.',
  valoracionAnswer: 'Difusión de minidocumentales sobre el proceso del teñido en redes sociales y venta en ferias culturales y plataformas de comercio ético.'
};

