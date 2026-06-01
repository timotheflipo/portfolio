// ============================================
// DONNÉES DU SITE — modifier ici pour mettre à jour le contenu
// ============================================

// --- Section 2 : Blocs Notion ---
const notionBlocks = [
  {
    number: "1",
    title: "Ce que c'est",
    text: "C'est un concept de Thiago Forte, qui le définit comme une base de connaissances personnelle et numérique fonctionnant comme une extension de sa propre mémoire."
  },
  {
    number: "2",
    title: "Pourquoi je l'ai créé",
    text: "Depuis mon enfance, je regarde beaucoup de documentaires. J'ai donc eu envie de créer un espace pour stocker, classer et réutiliser les informations qui m'intéressent."
  },
  {
    number: "3",
    title: "Ce qu'on y trouve",
    text: "Aujourd'hui, mon Notion rassemble à la fois des espaces de stockage d'informations, comme mes documentaires ou mes lectures, et des espaces de travail, comme mes to do lists, mes cours et mes projets."
  },
  {
    number: "4",
    title: "Ce que cela montre",
    text: "Cela montre ma créativité, ma curiosité pour le numérique et les systèmes de productivité, ainsi que ma capacité à structurer l'information pour mieux apprendre et mieux travailler."
  }
];

// --- Sections 3-5 : Thématiques de compétences ---
const thematiquesData = [
  {
    id: "theme-1",
    bg: "#d8caf6",
    encartColor: "#ac88e8",
    encartTextColor: "white",
    hoverColor: "#c2a9ef",
    tagBg: "rgba(255,255,255,0.2)",
    reversed: true, // cartes à gauche, visuel à droite
    title: "Repérer des dysfonctionnements et construire des solutions",
    tags: ["Analyser", "Décider", "Développer"],
    // Pour ajouter une image : remplacer null par le chemin → "images/theme1.jpg"
    image: null,
    imageAlt: "Image thématique 1",
    cards: [
      {
        title: "Projet à compléter",
        description: "Description du projet. Ce texte sera remplacé par le vrai contenu lorsque vous ajouterez vos projets.",
        tags: ["Gestion", "Analyse"],
        link: "#"
      },
      {
        title: "Projet à compléter",
        description: "Description du projet. Ce texte sera remplacé par le vrai contenu lorsque vous ajouterez vos projets.",
        tags: ["Diagnostic", "Solutions"],
        link: "#"
      },
      {
        title: "Projet à compléter",
        description: "Description du projet. Ce texte sera remplacé par le vrai contenu lorsque vous ajouterez vos projets.",
        tags: ["Amélioration", "Process"],
        link: "#"
      }
    ]
  },
  {
    id: "theme-2",
    bg: "#dcece9",
    encartColor: "#82b2c0",
    encartTextColor: "white",
    hoverColor: "#c3dedd",
    tagBg: "rgba(255,255,255,0.25)",
    // TITRE À COMPLÉTER — remplacer le placeholder ci-dessous
    title: "Titre de la deuxième thématique à compléter",
    tags: ["Piloter", "Coordonner", "Suivre"],
    image: null,
    imageAlt: "Image thématique 2",
    cards: [
      {
        title: "Projet à compléter",
        description: "Description du projet. Ce texte sera remplacé par le vrai contenu lorsque vous ajouterez vos projets.",
        tags: ["Pilotage", "Coordination"],
        link: "#"
      },
      {
        title: "Projet à compléter",
        description: "Description du projet. Ce texte sera remplacé par le vrai contenu lorsque vous ajouterez vos projets.",
        tags: ["Suivi", "Reporting"],
        link: "#"
      },
      {
        title: "Projet à compléter",
        description: "Description du projet. Ce texte sera remplacé par le vrai contenu lorsque vous ajouterez vos projets.",
        tags: ["Organisation", "Méthode"],
        link: "#"
      }
    ]
  },
  {
    id: "theme-3",
    bg: "#fcefb4",
    encartColor: "#f9dc5c",
    encartTextColor: "#1c1c1a",
    hoverColor: "#fae588",
    tagBg: "rgba(28,28,26,0.1)",
    reversed: true, // cartes à gauche, visuel à droite
    // TITRE À COMPLÉTER
    title: "Titre de la troisième thématique à compléter",
    tags: ["Entreprendre", "Créer", "Innover"],
    image: "images/section5_presentation.jpg",
    bgPosition: "center center",
    imageAlt: "Présentation de projet — Timothé Flipo au micro",
    cards: [
      {
        title: "Projet à compléter",
        description: "Description du projet. Ce texte sera remplacé par le vrai contenu lorsque vous ajouterez vos projets.",
        tags: ["Initiative", "Création"],
        link: "#"
      },
      {
        title: "Projet à compléter",
        description: "Description du projet. Ce texte sera remplacé par le vrai contenu lorsque vous ajouterez vos projets.",
        tags: ["Innovation", "Projet"],
        link: "#"
      },
      {
        title: "Projet à compléter",
        description: "Description du projet. Ce texte sera remplacé par le vrai contenu lorsque vous ajouterez vos projets.",
        tags: ["Entrepreneuriat", "Développement"],
        link: "#"
      }
    ]
  }
];

// --- Section 6 : FAQ Recruteur ---
const faqItems = [
  {
    q: "Quel type de poste recherchez-vous ?",
    a: "Je recherche une alternance orientée gestion de projet, pilotage, transformation ou coordination, avec une dimension organisationnelle et des outils de suivi."
  },
  {
    q: "À partir de quand êtes-vous disponible ?",
    a: "Je suis disponible à partir de septembre 2026, dans le cadre d'un master en alternance sur deux ans."
  },
  {
    q: "Quel rythme d'alternance avez-vous ?",
    a: "Mon rythme est de deux semaines en entreprise, puis une semaine en formation."
  },
  {
    q: "Dans quel environnement voulez-vous évoluer ?",
    a: "Je souhaite rejoindre une équipe dans laquelle je peux contribuer à des projets transverses, structurer des informations et participer à l'amélioration des méthodes de travail."
  },
  {
    q: "Quels sujets vous intéressent le plus ?",
    a: "Je m'intéresse particulièrement au pilotage de projet, à la transformation des organisations, aux outils de productivité, à l'analyse de données et à l'amélioration de processus."
  },
  {
    q: "Pourquoi consulter ce portfolio plutôt que seulement votre CV ?",
    a: "Mon CV présente mon parcours. Ce portfolio montre davantage ma progression, mes preuves de travail, mes méthodes et la manière dont j'ai développé mes compétences en situation."
  }
];

// --- Page Parcours : Timeline ---
const timelineItems = [
  // TYPE : "scolaire" ou "professionnel"
  // TAG : "Formation" | "Alternance" | "Stage" | "Projet"
  {
    type: "scolaire",
    tag: "Formation",
    title: "BUT GEA — Parcours GEMA",
    period: "2023 — 2026",
    org: "IUT de Sceaux, Université Paris-Saclay",
    description: "Bachelor Universitaire de Technologie Gestion des Entreprises et des Administrations, spécialisation Gestion et Management des Organisations."
  },
  {
    type: "professionnel",
    tag: "Alternance",
    title: "Alternant — Roole",
    period: "2024 — 2026",
    org: "Roole",
    description: "Alternance dans le cadre de la 2e et 3e année de BUT GEA. Missions à compléter."
  },
  {
    type: "scolaire",
    tag: "Formation",
    title: "Master Management Stratégique et Changement",
    period: "À partir de sept. 2026",
    org: "Université Paris-Saclay",
    description: "Poursuite d'études en master sur deux ans, en alternance, orientée transformation et management stratégique des organisations."
  },
  {
    type: "professionnel",
    tag: "Stage",
    title: "Stage — À compléter",
    period: "Période à compléter",
    org: "Organisme à compléter",
    description: "Description des missions à compléter."
  },
  {
    type: "scolaire",
    tag: "Formation",
    title: "Baccalauréat Général — À compléter",
    period: "2023",
    org: "Lycée à compléter",
    description: "Spécialités et mention à compléter."
  }
];

// --- Page Compétences ---
const competencesData = [
  {
    id: "analyser",
    name: "Analyser",
    number: "01",
    description: "Identifier et analyser les enjeux d'une situation, repérer des dysfonctionnements et proposer des pistes d'amélioration.",
    gradient: "linear-gradient(145deg, #4a2c8a 0%, #ac88e8 100%)",
    accent: "#ac88e8",
    projects: [
      { title: "Projet à compléter", link: "#" },
      { title: "Projet à compléter", link: "#" },
      { title: "Projet à compléter", link: "#" }
    ]
  },
  {
    id: "decider",
    name: "Décider",
    number: "02",
    description: "Prendre des décisions éclairées en mobilisant les informations pertinentes et en évaluant les alternatives.",
    gradient: "linear-gradient(145deg, #1a5a60 0%, #82b2c0 100%)",
    accent: "#82b2c0",
    projects: [
      { title: "Projet à compléter", link: "#" },
      { title: "Projet à compléter", link: "#" },
      { title: "Projet à compléter", link: "#" }
    ]
  },
  {
    id: "piloter",
    name: "Piloter",
    number: "03",
    description: "Planifier, coordonner et suivre la réalisation d'activités et de projets avec méthode et rigueur.",
    gradient: "linear-gradient(145deg, #b85c00 0%, #f9dc5c 100%)",
    accent: "#f9dc5c",
    projects: [
      { title: "Projet à compléter", link: "#" },
      { title: "Projet à compléter", link: "#" },
      { title: "Projet à compléter", link: "#" }
    ]
  },
  {
    id: "entreprendre",
    name: "Entreprendre",
    number: "04",
    description: "Concevoir et mettre en œuvre des projets avec une démarche créative, proactive et orientée résultats.",
    gradient: "linear-gradient(145deg, #0a4a3a 0%, #38c99a 100%)",
    accent: "#38c99a",
    projects: [
      { title: "Projet à compléter", link: "#" },
      { title: "Projet à compléter", link: "#" },
      { title: "Projet à compléter", link: "#" }
    ]
  },
  {
    id: "developper",
    name: "Développer",
    number: "05",
    description: "Mobiliser et enrichir ses connaissances, s'adapter à de nouveaux contextes et contribuer au développement des organisations.",
    gradient: "linear-gradient(145deg, #1c1c40 0%, #6c7adb 100%)",
    accent: "#6c7adb",
    projects: [
      { title: "Projet à compléter", link: "#" },
      { title: "Projet à compléter", link: "#" },
      { title: "Projet à compléter", link: "#" }
    ]
  }
];
