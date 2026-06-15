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
    intro: "Analyser les organisations, identifier les sources de friction et concevoir des solutions adaptées au terrain.",
    bg: "#d8caf6",
    encartColor: "#ac88e8",
    encartTextColor: "white",
    hoverColor: "#c2a9ef",
    tagBg: "rgba(255,255,255,0.2)",
    accentOnWhite: "#6d4fb0",   // version foncée lisible sur fond blanc (popup + label)
    accentTagText: "#ffffff",   // couleur du texte des tags au hover
    reversed: true, // cartes à gauche, visuel à droite
    title: "Repérer des dysfonctionnements et construire des solutions",
    tags: ["Analyser", "Décider", "Développer"],
    // Pour ajouter une image : remplacer null par le chemin → "images/theme1.jpg"
    image: null,
    imageAlt: "Image thématique 1",
    cards: [
      {
        title: "les BOZE : optimiser et fluidifier un processus interne",
        description: "Quand une mission répétitive prend plus de temps qu'elle ne le devrait, c'est souvent qu'un processus mérite d'être repensé. J'ai donc utilisé Notion pour rendre la préparation des réunions BOZE plus fluide, plus fiable et plus lisible.",
        tags: ["Analyser", "Décider", "Piloter"],
        link: "boze.html",
        popupName: "les BOZE",
        competencyDetails: [
          { name: "Analyser", level: "Niveau 3", description: "Conseiller pour améliorer les processus.", example: "Identification des pertes de temps et des informations dispersées." },
          { name: "Décider", level: "Niveau 3", description: "Concourir à la prise de décision.", example: "Réorganisation de l'espace Notion pour fiabiliser le suivi." },
          { name: "Piloter", level: "Niveau 3", description: "Améliorer les relations entre les parties prenantes.", example: "Coordination des sujets, intervenants et directions régionales." }
        ]
      },
      {
        title: "Maia Village : accompagner la transition numérique",
        description: "Mettre en place un outil digital ne garantit pas qu'il sera bien adopté. Ce projet m'a appris à penser la transition numérique dans son ensemble, du besoin de départ jusqu'à l'accompagnement au changement.",
        tags: ["Analyser", "Décider", "Piloter"],
        link: "maia-village.html",
        popupName: "Maia Village",
        competencyDetails: [
          { name: "Analyser", level: "Niveau 3", description: "Intégrer les enjeux de l'organisation et proposer des améliorations.", example: "Analyse des besoins des crèches et des familles, rédaction du cahier des charges." },
          { name: "Décider", level: "Niveau 3", description: "Concourir à la prise de décision selon les contraintes identifiées.", example: "Comparaison des prestataires et choix de l'outil adapté." },
          { name: "Piloter", level: "Niveau 3", description: "Améliorer la communication en lien avec la stratégie.", example: "Création des supports, formations et accompagnement au changement." }
        ]
      },
      {
        title: "Hôtel-restaurant sous tension, du diagnostic au plan d'action",
        description: "Quand les difficultés s'accumulent dans une organisation, il devient vite difficile de savoir par où commencer. Ce travail m'a appris à relier les dysfonctionnements entre eux pour construire un plan d'action progressif et cohérent.",
        tags: ["Analyser", "Décider", "Développer"],
        link: "hotel-restaurant.html",
        popupName: "Hôtel-restaurant",
        competencyDetails: [
          { name: "Analyser", level: "Niveau 3", description: "Intégrer les enjeux de l'organisation et proposer des améliorations.", example: "Diagnostic global de l'établissement et des dysfonctionnements RH et opérationnels." },
          { name: "Décider", level: "Niveau 3", description: "Concourir à la prise de décision selon les contraintes identifiées.", example: "Construction d'un plan d'action progressif." },
          { name: "Développer", level: "Niveau 3", description: "Déterminer les axes principaux d'une politique RH.", example: "Recommandations sur le bien-être, le climat social et la prévention." }
        ]
      }
    ]
  },
  {
    id: "theme-2",
    intro: "Transformer des données brutes en décisions structurées — du tableau de bord Excel au plan de transformation piloté par des KPI.",
    bg: "#dcece9",
    encartColor: "#82b2c0",
    encartTextColor: "white",
    hoverColor: "#c3dedd",
    tagBg: "rgba(255,255,255,0.25)",
    accentOnWhite: "#2a7080",   // version foncée lisible sur fond blanc
    accentTagText: "#ffffff",
    title: "Structurer l'action et outiller la décision",
    tags: ["Piloter", "Coordonner", "Suivre"],
    image: null,
    imageAlt: "Image thématique 2",
    cards: [
      {
        title: "Bons plans régionaux : transformer des données dispersées en outil de pilotage",
        description: "Quand les données existent mais ne permettent pas vraiment de décider, il faut les restructurer. J'ai conçu en autonomie un tableau de bord Excel automatisé pour transformer des chiffres dispersés en outil de pilotage.",
        tags: ["Analyser", "Décider", "Développer"],
        link: "bons-plans.html",
        popupName: "Bons plans régionaux",
        competencyDetails: [
          { name: "Analyser", level: "Niveau 3", description: "Proposer des améliorations des processus.", example: "Restructuration de données dispersées en information exploitable." },
          { name: "Décider", level: "Niveau 3", description: "Exploiter les données et décider selon les contraintes.", example: "Tableau de bord Excel et matrice maintenir / pousser / optimiser." },
          { name: "Développer", level: "Niveau 3", description: "Concevoir une démarche de marketing opérationnel adaptée.", example: "Priorisation des bons plans régionaux." }
        ]
      },
      {
        title: "Piloter une transformation numérique par les KPI",
        description: "Je ne me suis pas contenté d'analyser la situation et de proposer des pistes de transformation numérique. J'ai choisi d'aller plus loin en construisant sur Notion un véritable outil de pilotage fonctionnel.",
        tags: ["Analyser", "Décider", "Piloter", "Développer"],
        link: "transfo-numerique.html",
        popupName: "Transformation numérique par les KPI",
        competencyDetails: [
          { name: "Analyser", level: "Niveau 3", description: "Intégrer les enjeux de l'organisation et proposer des améliorations.", example: "Diagnostic DIMM chez Roole et définition de trois chantiers de transformation." },
          { name: "Décider", level: "Niveau 3", description: "Améliorer le système d'information et exploiter les données.", example: "Tableau de bord Notion, KPI et suivi des irritants terrain." },
          { name: "Piloter", level: "Niveau 3", description: "Mener un projet collaboratif.", example: "Suivi des chantiers et du déploiement." },
          { name: "Développer", level: "Niveau 3", description: "Concevoir une démarche de marketing opérationnel adaptée.", example: "Kit vendeur et logique de certification." }
        ]
      }
    ]
  },
  {
    id: "theme-3",
    intro: "Mener des projets créateurs de valeur jusqu'au bout, de l'idée initiale à la réalisation concrète, avec ambition et méthode.",
    bg: "#fcefb4",
    encartColor: "#f9dc5c",
    encartTextColor: "white",
    hoverColor: "#fae588",
    tagBg: "rgba(255,255,255,0.25)",
    accentOnWhite: "#8a6a00",
    accentTagText: "#2F2723",
    reversed: true,
    title: "Concevoir et faire avancer des projets créateurs de valeur",
    tags: ["Entreprendre", "Créer", "Innover"],
    image: "images/section5_v2.jpg",
    bgPosition: "center 18%",
    imageAlt: "Présentation de projet — Timothé Flipo au micro",
    cards: [
      {
        title: "Breathe&Go : concevoir de A à Z une solution innovante",
        description: "De l'idée de départ au prototype final, découvrez comment j'ai mené en équipe un projet entrepreneurial à forte valeur, récompensé par le prix de l'innovation et le prix entrepreneurial face aux dix équipes présentes de notre IUT.",
        tags: ["Piloter", "Entreprendre", "Développer"],
        link: "breathe-go.html",
        popupName: "Breathe&Go",
        competencyDetails: [
          { name: "Entreprendre", level: "Niveau 3", description: "Tester la viabilité d'un business model, le défendre et le confronter au terrain.", example: "Business plan, pitch devant l'amphithéâtre, questionnaires quantitatifs et qualitatifs." },
          { name: "Piloter", level: "Niveau 3", description: "Mener un projet collaboratif.", example: "Espace Notion partagé pour coordonner l'équipe." },
          { name: "Développer", level: "Niveau 3", description: "Concevoir une stratégie de communication avec les outils adaptés.", example: "Réseaux sociaux et livret investisseurs." }
        ]
      },
      {
        title: "Tables rondes Roole : renforcer l'impact d'un événement professionnel",
        description: "Du cadrage des thématiques à la création des supports d'invitation, jusqu'à la construction d'une présentation projetée devant 80 personnes, ce projet m'a appris à piloter un événement professionnel sur plusieurs fronts.",
        tags: ["Analyser", "Décider", "Piloter", "Développer"],
        link: "tables-rondes.html",
        popupName: "Tables rondes Roole",
        competencyDetails: [
          { name: "Analyser", level: "Niveau 3", description: "Intégrer les enjeux et contraintes de l'organisation.", example: "Analyse des besoins et contraintes de Roole." },
          { name: "Décider", level: "Niveau 3", description: "Concourir à la prise de décision selon les contraintes.", example: "Choix du format événementiel." },
          { name: "Piloter", level: "Niveau 3", description: "Mener un projet collaboratif.", example: "Invitations, formulaires et suivi sur Excel." },
          { name: "Développer", level: "Niveau 3", description: "Concevoir une stratégie de communication et de marketing opérationnel.", example: "Mails ciblés, support PowerPoint et format pour crédibiliser Roole." }
        ]
      },
      {
        title: "Fashion Day : piloter un projet événementiel avec une identité forte",
        description: "Logo, affiches, flyers, espace Notion, cahier des charges, coordination avec des créateurs et mannequins… Avec Fashion Day, j'ai appris à faire avancer un projet créatif en combinant direction artistique, organisation et travail d'équipe.",
        tags: ["Piloter", "Entreprendre", "Développer"],
        link: "fashion-day.html",
        popupName: "Fashion Day",
        competencyDetails: [
          { name: "Piloter", level: "Niveau 3", description: "Animer une équipe et mener un projet collaboratif.", example: "Sprints, répartition des tâches et coordination créateurs / mannequins." },
          { name: "Entreprendre", level: "Niveau 3", description: "Confronter son projet à l'expérience de terrain.", example: "Cahier des charges et organisation réelle de l'événement." },
          { name: "Développer", level: "Niveau 3", description: "Concevoir une stratégie de communication et de marketing opérationnel.", example: "Logo, affiches, flyers, réseaux et promotion de l'événement." }
        ]
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
    gradient: "linear-gradient(145deg, #7B1111 0%, #E03030 100%)",
    accent: "#E03030",
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
    gradient: "linear-gradient(145deg, #9D3A00 0%, #E8650A 100%)",
    accent: "#E8650A",
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
    gradient: "linear-gradient(145deg, #9A6C00 0%, #F0BC00 100%)",
    accent: "#F0BC00",
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
    gradient: "linear-gradient(145deg, #0E5C2F 0%, #1DB954 100%)",
    accent: "#1DB954",
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
    gradient: "linear-gradient(145deg, #0F1942 0%, #1E3A8A 100%)",
    accent: "#1E3A8A",
    projects: [
      { title: "Projet à compléter", link: "#" },
      { title: "Projet à compléter", link: "#" },
      { title: "Projet à compléter", link: "#" }
    ]
  }
];

// --- Compétences informatiques (cartes flip, page Compétences) ---
// logo: chemin vers un SVG/PNG (images/logos/) — initials sert de repli si logo est null
// logos: tableau de logos (carte regroupant plusieurs outils, ex. Claude/ChatGPT/NotebookLM)
const softwareSkillsData = [
  {
    id: "notion",
    name: "Notion",
    level: 5,
    levelDisplay: "5",
    levelMax: 5,
    levelDescription: "Maîtrise complète ou quasi complète de tous les éléments du logiciel.",
    logo: "images/logos/notion.svg",
    initials: "N",
    examples: [
      "Second cerveau",
      "Tableaux de bord pour des projets, notamment Breathe&Go et Fashion Day",
      "Portfolio réalisé en deuxième année de BUT"
    ]
  },
  {
    id: "canva",
    name: "Canva",
    level: 5,
    levelDisplay: "5",
    levelMax: 5,
    levelDescription: "Maîtrise complète ou quasi complète de tous les éléments du logiciel.",
    logo: "images/logos/canva.svg",
    initials: "C",
    examples: [
      "Refonte de documents d'invitation et de mailing pour les Tables Rondes chez Roole",
      "Création d'une grande partie de mes présentations depuis ma première année de BUT",
      "Création d'affiches et de directions artistiques pour différents projets"
    ]
  },
  {
    id: "excel",
    name: "Excel",
    level: 3.5,
    levelDisplay: "3,5",
    levelMax: 5,
    levelDescription: "En cours d'apprentissage.",
    logo: "images/logos/excel.svg",
    initials: "X",
    examples: [
      "Tableau de bord pour les bons plans régionaux, avec graphiques et segments de filtres selon les mois, les bons plans ou les saisons",
      "Création de tableaux croisés dynamiques à partir de bases de données"
    ]
  },
  {
    id: "powerbi",
    name: "Power BI",
    level: 2,
    levelDisplay: "2",
    levelMax: 5,
    levelDescription: "En cours d'apprentissage.",
    logo: "images/logos/powerbi.svg",
    initials: "BI",
    examples: [
      "Lecture de bases de données",
      "Utilisation des filtres pour extraire les données qui m'intéressent"
    ]
  },
  {
    id: "ia-tools",
    name: "Claude, ChatGPT et NotebookLM",
    level: 4,
    levelDisplay: "4",
    levelMax: 5,
    levelDescription: "Acquis et en cours d'approfondissement.",
    logo: null,
    logos: ["images/logos/claude.svg", "images/logos/chatgpt.svg", "images/logos/notebooklm.svg"],
    initials: "IA",
    examples: [
      "Utilisation de Claude Code pour construire mon portfolio",
      "Utilisation de Claude Design pour améliorer des affiches chez Roole",
      "Utilisation de Claude CoWork pour des projets Excel",
      "Utilisation de ChatGPT et Claude Chat pour challenger mes idées, améliorer mes travaux et structurer mes réflexions",
      "Utilisation avancée grâce à des techniques de méta-prompting",
      "Utilisation de NotebookLM pour résumer des contenus et les intégrer dans mon second cerveau"
    ]
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    level: 4,
    levelDisplay: "4",
    levelMax: 5,
    levelDescription: "Acquis.",
    logo: "images/logos/mailchimp.svg",
    initials: "M",
    examples: [
      "Mise en forme et envoi de newsletters internes chez Roole"
    ]
  },
  {
    id: "wordpress",
    name: "WordPress",
    level: 2.5,
    levelDisplay: "2,5",
    levelMax: 5,
    levelDescription: "Utilisation passée.",
    logo: "images/logos/wordpress.svg",
    initials: "W",
    examples: [
      "Amélioration de la mise en page du site internet de l'Hôpital Foch",
      "Création et mise en forme de nouvelles pages pour le site internet de l'Hôpital Foch"
    ]
  },
  {
    id: "sketchup",
    name: "SketchUp 3D",
    level: 2.5,
    levelDisplay: "2,5",
    levelMax: 5,
    levelDescription: "Utilisation passée.",
    logo: "images/logos/sketchup.svg",
    initials: "SK",
    examples: [
      "Création de maisons en 3D de A à Z",
      "Importation de créations SketchUp dans un logiciel de rendu 3D pour obtenir des visuels de style architectural"
    ]
  },
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    level: 1,
    levelDisplay: "1",
    levelMax: 5,
    levelDescription: "Utilisation brève et passée.",
    logo: "images/logos/illustrator.svg",
    initials: "Ai",
    examples: [
      "Création de logos",
      "Amélioration d'affiches pour l'Hôpital Foch"
    ]
  }
];
