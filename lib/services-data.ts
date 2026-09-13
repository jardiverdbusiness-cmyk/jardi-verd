import type { Locale } from "@/i18n/routing";

export type ServiceIcon =
  | "scrub"
  | "tree"
  | "leaf-bin"
  | "broom"
  | "watering-can"
  | "design"
  | "shield"
  | "sparkles";

export interface ServiceContent {
  id: string;
  icon: ServiceIcon;
  slug: Record<Locale, string>;
  title: Record<Locale, string>;
  shortDescription: Record<Locale, string>;
  intro: Record<Locale, string>;
  bullets: Record<Locale, string[]>;
}

export const services: ServiceContent[] = [
  {
    id: "desbrossament",
    icon: "scrub",
    slug: {
      ca: "desbrossament",
      es: "desbroce",
      en: "brush-clearing",
    },
    title: {
      ca: "Desbrossament",
      es: "Desbroce",
      en: "Brush Clearing",
    },
    shortDescription: {
      ca: "Neteja de terrenys, marges i parcel·les envaïts de vegetació densa.",
      es: "Limpieza de terrenos, márgenes y parcelas invadidos por vegetación densa.",
      en: "Clearing land, plots and boundaries overrun by dense vegetation.",
    },
    intro: {
      ca: "Desbrossem parcel·les, marges i terrenys forestals per reduir el risc d'incendi, complir la normativa de franges de protecció i deixar l'espai net i controlat durant tot l'any.",
      es: "Desbrozamos parcelas, márgenes y terrenos forestales para reducir el riesgo de incendio, cumplir la normativa de franjas de protección y mantener el espacio limpio y controlado todo el año.",
      en: "We clear plots, boundaries and rural land to reduce fire risk, meet protective-buffer regulations, and keep the space tidy and under control year-round.",
    },
    bullets: {
      ca: [
        "Desbrossament mecànic i manual segons el terreny",
        "Franges de protecció contra incendis",
        "Neteja de solars i parcel·les abandonades",
        "Manteniment periòdic de marges i camins",
      ],
      es: [
        "Desbroce mecánico y manual según el terreno",
        "Franjas de protección contra incendios",
        "Limpieza de solares y parcelas abandonadas",
        "Mantenimiento periódico de márgenes y caminos",
      ],
      en: [
        "Mechanical or manual clearing depending on the terrain",
        "Fire-protection buffer strips",
        "Cleanup of vacant lots and abandoned plots",
        "Periodic upkeep of boundaries and access paths",
      ],
    },
  },
  {
    id: "poda-tala",
    icon: "tree",
    slug: {
      ca: "poda-i-tala-darbres",
      es: "poda-y-tala-de-arboles",
      en: "tree-pruning-felling",
    },
    title: {
      ca: "Poda i Tala d'Arbres",
      es: "Poda y Tala de Árboles",
      en: "Tree Pruning & Felling",
    },
    shortDescription: {
      ca: "Arboricultura professional: poda d'alçada, tala controlada i esporga.",
      es: "Arboricultura profesional: poda en altura, tala controlada y esporga.",
      en: "Professional arboriculture: height pruning, controlled felling and thinning.",
    },
    intro: {
      ca: "Més de 25 anys pujant a arbres de tota mida. Fem poda d'alçada amb tècniques de trepa, tala controlada en espais reduïts i esporga de formació per a la salut i seguretat de l'arbrat.",
      es: "Más de 25 años subiendo a árboles de todo tamaño. Realizamos poda en altura con técnicas de trepa, tala controlada en espacios reducidos y esporga de formación para la salud y seguridad del arbolado.",
      en: "Over 25 years climbing trees of every size. We handle height pruning with climbing techniques, controlled felling in tight spaces, and formative thinning for healthy, safe trees.",
    },
    bullets: {
      ca: [
        "Poda d'alçada amb tècniques de trepa",
        "Tala controlada en espais amb accés difícil",
        "Esporga de formació i sanejament",
        "Retirada i triturat de branques i restes",
      ],
      es: [
        "Poda en altura con técnicas de trepa",
        "Tala controlada en espacios de difícil acceso",
        "Esporga de formación y saneamiento",
        "Retirada y triturado de ramas y restos",
      ],
      en: [
        "Height pruning using climbing techniques",
        "Controlled felling in hard-to-access spaces",
        "Formative and sanitary thinning",
        "Branch removal and on-site chipping",
      ],
    },
  },
  {
    id: "gestio-restes",
    icon: "leaf-bin",
    slug: {
      ca: "gestio-de-restes-organiques",
      es: "gestion-de-restos-organicos",
      en: "organic-waste-management",
    },
    title: {
      ca: "Gestió de Restes Orgàniques",
      es: "Gestión de Restos Orgánicos",
      en: "Organic Waste Management",
    },
    shortDescription: {
      ca: "Retirada, triturat i gestió correcta de restes vegetals i de poda.",
      es: "Retirada, triturado y gestión correcta de restos vegetales y de poda.",
      en: "Removal, shredding and proper disposal of green and pruning waste.",
    },
    intro: {
      ca: "Ens encarreguem de tot el que queda després de la feina: triturem branques i restes vegetals in situ i gestionem el seu transport a punts autoritzats, sense deixar-te la feina bruta.",
      es: "Nos encargamos de todo lo que queda después del trabajo: trituramos ramas y restos vegetales in situ y gestionamos su transporte a puntos autorizados, sin dejarte el trabajo sucio.",
      en: "We take care of everything left behind: shredding branches and plant waste on site and arranging transport to authorized disposal points, so you're never left with the mess.",
    },
    bullets: {
      ca: [
        "Triturat de branques i restes de poda in situ",
        "Retirada i transport a gestor autoritzat",
        "Neteja final de l'espai de treball",
        "Opció de compostatge per a restes de gespa i fulla",
      ],
      es: [
        "Triturado de ramas y restos de poda in situ",
        "Retirada y transporte a gestor autorizado",
        "Limpieza final del espacio de trabajo",
        "Opción de compostaje para restos de césped y hoja",
      ],
      en: [
        "On-site shredding of branches and pruning waste",
        "Removal and transport to an authorized waste facility",
        "Final cleanup of the work area",
        "Composting option for grass clippings and leaf litter",
      ],
    },
  },
  {
    id: "neteja-jardins",
    icon: "broom",
    slug: {
      ca: "neteja-de-jardins",
      es: "limpieza-de-jardines",
      en: "garden-cleanup",
    },
    title: {
      ca: "Neteja de Jardins",
      es: "Limpieza de Jardines",
      en: "Garden Cleanup",
    },
    shortDescription: {
      ca: "Neteja a fons de jardins descuidats o abans de temporada.",
      es: "Limpieza a fondo de jardines descuidados o antes de temporada.",
      en: "Thorough cleanup of neglected gardens or ahead of a new season.",
    },
    intro: {
      ca: "Recuperem jardins deixats de banda: retirem males herbes, fulla acumulada i vegetació seca, i deixem l'espai a punt per començar de nou o per rebre visites.",
      es: "Recuperamos jardines abandonados: retiramos malas hierbas, hoja acumulada y vegetación seca, y dejamos el espacio listo para empezar de nuevo o recibir visitas.",
      en: "We bring neglected gardens back to life: clearing weeds, built-up leaves and dry vegetation, leaving the space ready for a fresh start or for guests.",
    },
    bullets: {
      ca: [
        "Retirada de males herbes i vegetació seca",
        "Recollida i retirada de fulla acumulada",
        "Neteja de paviments i zones enjardinades",
        "Ideal per a segones residències i abans de vendre o llogar",
      ],
      es: [
        "Retirada de malas hierbas y vegetación seca",
        "Recogida y retirada de hoja acumulada",
        "Limpieza de pavimentos y zonas ajardinadas",
        "Ideal para segundas residencias y antes de vender o alquilar",
      ],
      en: [
        "Weed and dry-vegetation removal",
        "Collection and removal of built-up leaves",
        "Cleaning of paved and planted areas",
        "Ideal for second homes and before selling or renting",
      ],
    },
  },
  {
    id: "manteniment-jardins",
    icon: "watering-can",
    slug: {
      ca: "manteniment-de-jardins",
      es: "mantenimiento-de-jardines",
      en: "garden-maintenance",
    },
    title: {
      ca: "Manteniment de Jardins",
      es: "Mantenimiento de Jardines",
      en: "Garden Maintenance",
    },
    shortDescription: {
      ca: "Manteniment periòdic: gespa, reg, poda de tanques i molt més.",
      es: "Mantenimiento periódico: césped, riego, poda de setos y mucho más.",
      en: "Ongoing upkeep: lawns, irrigation, hedge trimming and more.",
    },
    intro: {
      ca: "Contractes de manteniment setmanal, quinzenal o mensual adaptats al teu jardí: sega de gespa, poda de tanques i arbustos, control de plagues i revisió del reg.",
      es: "Contratos de mantenimiento semanal, quincenal o mensual adaptados a tu jardín: siega de césped, poda de setos y arbustos, control de plagas y revisión del riego.",
      en: "Weekly, bi-weekly or monthly maintenance plans tailored to your garden: lawn mowing, hedge and shrub trimming, pest control and irrigation checks.",
    },
    bullets: {
      ca: [
        "Sega i cura de gespa",
        "Poda de tanques i arbustos",
        "Revisió i ajust de sistemes de reg",
        "Contractes flexibles adaptats a cada jardí",
      ],
      es: [
        "Siega y cuidado de césped",
        "Poda de setos y arbustos",
        "Revisión y ajuste de sistemas de riego",
        "Contratos flexibles adaptados a cada jardín",
      ],
      en: [
        "Lawn mowing and care",
        "Hedge and shrub trimming",
        "Irrigation system checks and adjustments",
        "Flexible plans tailored to each garden",
      ],
    },
  },
  {
    id: "disseny-construccio",
    icon: "design",
    slug: {
      ca: "disseny-i-construccio-de-jardins",
      es: "diseno-y-construccion-de-jardines",
      en: "garden-design-construction",
    },
    title: {
      ca: "Disseny i Construcció de Jardins",
      es: "Diseño y Construcción de Jardines",
      en: "Garden Design & Construction",
    },
    shortDescription: {
      ca: "Creació de jardins nous des de zero, adaptats al teu espai i clima.",
      es: "Creación de jardines nuevos desde cero, adaptados a tu espacio y clima.",
      en: "New gardens built from the ground up, suited to your space and climate.",
    },
    intro: {
      ca: "Dissenyem i construïm jardins adaptats al clima mediterrani: selecció d'espècies, instal·lació de reg automàtic, gespa o gespa artificial, i zones de pas i descans.",
      es: "Diseñamos y construimos jardines adaptados al clima mediterráneo: selección de especies, instalación de riego automático, césped o césped artificial, y zonas de paso y descanso.",
      en: "We design and build gardens suited to the Mediterranean climate: plant selection, automatic irrigation installation, natural or artificial lawn, and pathways and seating areas.",
    },
    bullets: {
      ca: [
        "Disseny personalitzat segons espai i pressupost",
        "Selecció de plantes adaptades al clima local",
        "Instal·lació de sistemes de reg automàtic",
        "Gespa natural o artificial i paviments",
      ],
      es: [
        "Diseño personalizado según espacio y presupuesto",
        "Selección de plantas adaptadas al clima local",
        "Instalación de sistemas de riego automático",
        "Césped natural o artificial y pavimentos",
      ],
      en: [
        "Custom design based on space and budget",
        "Plant selection suited to the local climate",
        "Automatic irrigation system installation",
        "Natural or artificial lawn and paving",
      ],
    },
  },
  {
    id: "tractaments-fitosanitaris",
    icon: "shield",
    slug: {
      ca: "tractaments-fitosanitaris",
      es: "tratamientos-fitosanitarios",
      en: "phytosanitary-treatments",
    },
    title: {
      ca: "Tractaments Fitosanitaris",
      es: "Tratamientos Fitosanitarios",
      en: "Phytosanitary Treatments",
    },
    shortDescription: {
      ca: "Prevenció i tractament de plagues i malalties en plantes i arbres.",
      es: "Prevención y tratamiento de plagas y enfermedades en plantas y árboles.",
      en: "Prevention and treatment of pests and diseases in plants and trees.",
    },
    intro: {
      ca: "Apliquem tractaments fitosanitaris per protegir el teu jardí i arbrat de plagues (com la processionària) i malalties, amb productes autoritzats i personal qualificat.",
      es: "Aplicamos tratamientos fitosanitarios para proteger tu jardín y arbolado de plagas (como la procesionaria) y enfermedades, con productos autorizados y personal cualificado.",
      en: "We apply phytosanitary treatments to protect your garden and trees from pests (such as pine processionary moth) and disease, using authorized products and qualified staff.",
    },
    bullets: {
      ca: [
        "Diagnòstic de plagues i malalties",
        "Tractament contra la processionària i altres plagues",
        "Productes autoritzats i aplicació segura",
        "Plans de prevenció estacional",
      ],
      es: [
        "Diagnóstico de plagas y enfermedades",
        "Tratamiento contra la procesionaria y otras plagas",
        "Productos autorizados y aplicación segura",
        "Planes de prevención estacional",
      ],
      en: [
        "Pest and disease diagnosis",
        "Treatment against pine processionary and other pests",
        "Authorized products, applied safely",
        "Seasonal prevention plans",
      ],
    },
  },
  {
    id: "posta-a-punt",
    icon: "sparkles",
    slug: {
      ca: "posades-a-punt-de-jardins",
      es: "puestas-a-punto-de-jardines",
      en: "seasonal-garden-tune-ups",
    },
    title: {
      ca: "Posades a Punt de Jardins",
      es: "Puestas a Punto de Jardines",
      en: "Seasonal Garden Tune-Ups",
    },
    shortDescription: {
      ca: "Preparació del jardí per a l'estiu, la primavera o visites especials.",
      es: "Preparación del jardín para el verano, la primavera o visitas especiales.",
      en: "Getting your garden ready for summer, spring or a special occasion.",
    },
    intro: {
      ca: "Servei puntual per deixar el jardí impecable abans d'una data clau: l'arribada de l'estiu, una celebració o la venda d'una propietat. Un sol dia, resultats immediats.",
      es: "Servicio puntual para dejar el jardín impecable antes de una fecha clave: la llegada del verano, una celebración o la venta de una propiedad. Un solo día, resultados inmediatos.",
      en: "A one-off service to get your garden looking its best ahead of a key date: the start of summer, a celebration, or selling a property. A single visit, immediate results.",
    },
    bullets: {
      ca: [
        "Poda i repàs general de plantes i tanques",
        "Sega i perfilat de gespa",
        "Neteja de fulla, males herbes i restes",
        "Servei puntual, sense contracte de permanència",
      ],
      es: [
        "Poda y repaso general de plantas y setos",
        "Siega y perfilado de césped",
        "Limpieza de hoja, malas hierbas y restos",
        "Servicio puntual, sin contrato de permanencia",
      ],
      en: [
        "General pruning and tidy-up of plants and hedges",
        "Lawn mowing and edging",
        "Removal of leaves, weeds and debris",
        "One-off service, no long-term contract",
      ],
    },
  },
];

export function getServiceBySlug(locale: Locale, slug: string) {
  return services.find((service) => service.slug[locale] === slug);
}
