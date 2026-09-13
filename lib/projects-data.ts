import type { Locale } from "@/i18n/routing";

export interface WorkPhoto {
  src: string;
  alt: Record<Locale, string>;
}

export interface BeforeAfterPair {
  before: WorkPhoto;
  after: WorkPhoto;
  caption: Record<Locale, string>;
}

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    before: {
      src: "/images/work/clearing-lot-before.jpg",
      alt: {
        ca: "Parcel·la envaïda de vegetació seca abans del desbrossament",
        es: "Parcela invadida de vegetación seca antes del desbroce",
        en: "Plot overrun with dry vegetation before clearing",
      },
    },
    after: {
      src: "/images/work/clearing-lot-after.jpg",
      alt: {
        ca: "La mateixa parcel·la desbrossada i neta",
        es: "La misma parcela desbrozada y limpia",
        en: "The same plot cleared and tidy",
      },
    },
    caption: {
      ca: "Desbrossament complet d'una parcel·la a Tarragona",
      es: "Desbroce completo de una parcela en Tarragona",
      en: "Complete clearing of a plot in Tarragona",
    },
  },
  {
    before: {
      src: "/images/work/cleanup-patio-before.jpg",
      alt: {
        ca: "Pati amb un pi caigut després d'un temporal",
        es: "Patio con un pino caído tras un temporal",
        en: "Patio with a pine tree down after a storm",
      },
    },
    after: {
      src: "/images/work/cleanup-patio-after.jpg",
      alt: {
        ca: "El mateix pati net i despejat, amb l'arbre retirat",
        es: "El mismo patio limpio y despejado, con el árbol retirado",
        en: "The same patio cleared, with the tree removed",
      },
    },
    caption: {
      ca: "Retirada d'un arbre caigut i neteja del pati",
      es: "Retirada de un árbol caído y limpieza del patio",
      en: "Removal of a fallen tree and patio cleanup",
    },
  },
  {
    before: {
      src: "/images/work/cleanup-path-before.jpg",
      alt: {
        ca: "Camí de pas envaït per males herbes",
        es: "Camino de paso invadido por malas hierbas",
        en: "Walkway overrun with weeds",
      },
    },
    after: {
      src: "/images/work/cleanup-driveway-after.jpg",
      alt: {
        ca: "Accés i camí nets i lliures de vegetació",
        es: "Acceso y camino limpios y libres de vegetación",
        en: "Driveway and path cleared and free of vegetation",
      },
    },
    caption: {
      ca: "Neteja d'accessos i camins de pas",
      es: "Limpieza de accesos y caminos de paso",
      en: "Cleanup of driveways and walkways",
    },
  },
];

export const workCategories: {
  id: string;
  photos: WorkPhoto[];
}[] = [
  {
    id: "pruning",
    photos: [
      {
        src: "/images/work/poda-climbing.jpg",
        alt: {
          ca: "Arboricultor pujant a un arbre amb tècniques de trepa",
          es: "Arboricultor subiendo a un árbol con técnicas de trepa",
          en: "Arborist climbing a tree using climbing techniques",
        },
      },
      {
        src: "/images/work/poda-chainsaw-tree.jpg",
        alt: {
          ca: "Poda d'alçada amb motoserra des de dalt de l'arbre",
          es: "Poda en altura con motosierra desde lo alto del árbol",
          en: "Height pruning with a chainsaw from up in the tree",
        },
      },
      {
        src: "/images/work/poda-cypress-removal-1.jpg",
        alt: {
          ca: "Tala controlada d'un xiprer sec entre exemplars sans",
          es: "Tala controlada de un ciprés seco entre ejemplares sanos",
          en: "Controlled felling of a dead cypress among healthy trees",
        },
      },
      {
        src: "/images/work/poda-cypress-removal-2.jpg",
        alt: {
          ca: "Equip treballant amb corda de seguretat durant la tala",
          es: "Equipo trabajando con cuerda de seguridad durante la tala",
          en: "Team working with a safety line during the felling",
        },
      },
      {
        src: "/images/work/poda-cutting-trunk.jpg",
        alt: {
          ca: "Tallant el tronc en trossos després de la tala",
          es: "Cortando el tronco en trozos después de la tala",
          en: "Cutting the trunk into sections after felling",
        },
      },
      {
        src: "/images/work/poda-storm-roof.jpg",
        alt: {
          ca: "Retirada d'un pi caigut sobre una teulada després d'un temporal",
          es: "Retirada de un pino caído sobre un tejado tras un temporal",
          en: "Removing a pine tree fallen on a roof after a storm",
        },
      },
      {
        src: "/images/work/poda-storm-cutting.jpg",
        alt: {
          ca: "Trossejant amb motoserra el pi caigut al pati",
          es: "Trozando con motosierra el pino caído en el patio",
          en: "Cutting the fallen pine into logs on the patio",
        },
      },
      {
        src: "/images/work/poda-olive-espalier.jpg",
        alt: {
          ca: "Olivera formada en espatllera després de la poda",
          es: "Olivo formado en espaldera después de la poda",
          en: "Olive tree trained into an espalier after pruning",
        },
      },
    ],
  },
  {
    id: "clearing",
    photos: [
      {
        src: "/images/work/clearing-trailer-street.jpg",
        alt: {
          ca: "Remolc carregat amb restes de poda per al seu transport",
          es: "Remolque cargado con restos de poda para su transporte",
          en: "Trailer loaded with pruning waste for transport",
        },
      },
      {
        src: "/images/work/clearing-trailer-bags.jpg",
        alt: {
          ca: "Retirada de restes vegetals i sacs després d'una neteja",
          es: "Retirada de restos vegetales y sacos después de una limpieza",
          en: "Removal of plant waste and bags after a cleanup",
        },
      },
      {
        src: "/images/work/clearing-trailer-forest.jpg",
        alt: {
          ca: "Remolc ple de branques a punt per sortir d'una finca",
          es: "Remolque lleno de ramas listo para salir de una finca",
          en: "Trailer full of branches ready to leave a property",
        },
      },
      {
        src: "/images/work/clearing-trailer-forest-2.jpg",
        alt: {
          ca: "Transport de restes de desbrossament per un camí forestal",
          es: "Transporte de restos de desbroce por un camino forestal",
          en: "Transporting brush-clearing waste along a forest track",
        },
      },
    ],
  },
  {
    id: "maintenance",
    photos: [
      {
        src: "/images/work/garden-lemon-tree.jpg",
        alt: {
          ca: "Llimoner cuidat en un jardí particular",
          es: "Limonero cuidado en un jardín particular",
          en: "A well-kept lemon tree in a private garden",
        },
      },
      {
        src: "/images/work/garden-patio-bench.jpg",
        alt: {
          ca: "Racó de jardí amb banc i plantes ben cuidades",
          es: "Rincón de jardín con banco y plantas bien cuidadas",
          en: "Garden corner with a bench and well-tended plants",
        },
      },
      {
        src: "/images/work/garden-conifer-patio.jpg",
        alt: {
          ca: "Conífera ben formada al costat d'un pati enrajolat",
          es: "Conífera bien formada junto a un patio enlosado",
          en: "A well-shaped conifer beside a tiled patio",
        },
      },
    ],
  },
];
