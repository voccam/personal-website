export type Experience = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

export type Formation = {
  title: string;
  school: string;
  period: string;
  details?: string;
};

export type ProjectConcept = {
  title: string;
  summary: string;
  details: string;
  focus: string;
  technologies: string[];
  status: "prototype" | "research" | "ideation";
};

export const profile = {
  name: "Mathis Vandesmal",
  title: "Étudiant en Génie électrique — ECAM Bruxelles",
  location: "Bruxelles, Belgique",
  phone: "+32 485 46 39 07",
  ecamEmail: "23328@ecam.be",
  personalEmail: "mathisvds932@gmail.com",
  intro:
    "Passionné par les systèmes embarqués et les technologies qui améliorent l'impact humain, je combine une formation d'électronique avec un intérêt marqué pour le développement web moderne.",
  objectives:
    "Je recherche un stage de 30 jours pour avril/mai 2026 afin d'intégrer une équipe exigeante, apprendre au contact de professionnels expérimentés et contribuer rapidement grâce à des prototypes pragmatiques.",
  quote:
    "Leadership, rigueur et curiosité scientifique au service de projets concrets qui apportent une vraie valeur ajoutée.",
};

export const experiences: Experience[] = [
  {
    role: "Élève-officier — Royal Military Academy",
    organization: "Défense belge",
    period: "Août 2021 — Aujourd'hui",
    description:
      "En charge d'exercices de terrain pour l'armée belge avec une forte discipline personnelle, gestion d'équipes et prise de décision rapide.",
  },
  {
    role: "Stage d’observation — Ingénieur industriel",
    organization: "At Rotecor",
    period: "Décembre 2019",
    description:
      "Découverte des métiers de l'industrie : maintenance, optimisation de process et importance d'une documentation claire.",
  },
  {
    role: "Animateur — Mouvement de jeunesse (Patro)",
    organization: "Saint-Roch Saint-Sauveur",
    period: "2010 — 2021",
    description:
      "Animation hebdomadaire de groupes d'enfants, planification d'activités et gestion d'événements avec responsabilités pédagogiques.",
  },
];

export const education: Formation[] = [
  {
    title: "Sciences de l'ingénieur industriel — Génie électrique",
    school: "ECAM Bruxelles",
    period: "2023 — Aujourd'hui",
    details: "Focus sur l'électronique de puissance, systèmes embarqués et développement temps réel.",
  },
  {
    title: "Polytechnique (DNF)",
    school: "Royal Military Academy",
    period: "2021 — 2023",
    details: "Discipline militaire, leadership, mathématiques avancées et automatisation.",
  },
  {
    title: "CESS (Math-Sciences-Langues)",
    school: "Institut Saint-Joseph — La Louvière",
    period: "2021",
  },
];

export const skills = {
  technical: [
    "MATLAB",
    "AutoCAD",
    "Altium Designer",
    "MPLab",
    "Python",
    "C / Julia",
    "Arduino",
  ],
  product: [
    "Next.js",
    "TypeScript",
    "Prisma + SQLite",
    "Tailwind CSS",
    "Docker",
    "React Server Components",
  ],
  soft: [
    "Leadership",
    "Rigueur",
    "Autonomie",
    "Sens de l'analyse",
    "Curiosité",
    "Esprit de synthèse",
  ],
  languages: [
    { label: "Français", level: "native" },
    { label: "English", level: "fluent" },
    { label: "Dutch", level: "intermediate" },
  ],
  interests: [
    "Électronique de défense",
    "Innovation technologique",
    "Aéronautique",
    "Création de contenu web",
    "Sport et trail",
    "Engagement jeunesse",
  ],
};

export const innovationProjects: ProjectConcept[] = [
  {
    title: "ECAM Sticker Tracker",
    summary: "Carte communautaire façon PoopMap qui répertorie les stickers et QR codes de l'école.",
    details:
      "Les étudiants postent un spot, ajoutent une photo et des notes sur l'accessibilité du lieu. L'admin peut modérer les entrées et afficher la popularité des emplacements.",
    focus: "Open data étudiant & gamification du campus",
    technologies: ["Next.js Map", "Geolocalisation", "Realtime validations", "Prisma"],
    status: "prototype",
  },
  {
    title: "Defibrillator Wristband",
    summary:
      "Bracelet ergonomique qui reprend les gestes réflexes des secours avec des signaux haptiques guidés.",
    details:
      "Recherche sur la miniaturisation des électrodes, la communication Bluetooth avec les équipes d'intervention et l'intégration d'un guide vocal multilingue.",
    focus: "Tech médicale portable",
    technologies: ["PCB custom", "BLE", "Voice interface", "Safety diagnostics"],
    status: "ideation",
  },
  {
    title: "StrideSense Shoe Clip",
    summary:
      "Capteur placé sur les lacets pour analyser cadence, temps de contact au sol et symétrie pendant la course.",
    details:
      "Inspiré des montres connectées mais dédié aux coureurs qui veulent libérer leurs poignets. Les données sont synchronisées dans un tableau de bord web.",
    focus: "Data pour la performance sportive",
    technologies: ["IMU", "Edge computing", "Next.js dashboards"],
    status: "research",
  },
  {
    title: "Bot 2048 Strategist",
    summary: "IA qui joue à 2048 en évaluant différentes heuristiques et stratégies gagnantes.",
    details:
      "Expérimentation de DFS, heuristiques de monotonicité et scoring basé sur le potentiel de fusion, avec visualisation en temps réel dans le navigateur.",
    focus: "IA ludique & pédagogie",
    technologies: ["TypeScript", "Web Workers", "Prisma simulations"],
    status: "prototype",
  },
];
