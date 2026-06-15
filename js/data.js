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
  {
    type: "professionnel",
    tag: "Alternance",
    title: "Chargé de marketing BtoB",
    period: "Août 2025 – présent",
    org: "Roole",
    description: "Coordination, analyse de données, optimisation de processus, communication interne et pilotage d'actions marketing BtoB au sein d'un acteur majeur de l'assurance automobile."
  },
  {
    type: "professionnel",
    tag: "Stage",
    title: "Stage en communication",
    period: "Janvier – Mars 2025",
    org: "Hôpital Foch",
    description: "Supports visuels, contenus web et organisation d'événements professionnels au sein d'un service communication hospitalier exigeant."
  },
  {
    type: "professionnel",
    tag: "Stage",
    title: "Stage en comptabilité / gestion",
    period: "Mars 2024",
    org: "Ocellis",
    description: "Première expérience professionnelle — suivi de données sur Excel, logiques comptables et gestion administrative dans un cadre professionnel structuré."
  },
  {
    type: "scolaire",
    tag: "Formation",
    title: "BUT Gestion des Entreprises et des Administrations",
    period: "2023 – présent",
    org: "Parcours GEMA · IUT de Paris - Rives de Seine",
    description: "Base solide en gestion, management, entrepreneuriat et marketing. Projets en analyse organisationnelle, transformation numérique et pilotage d'actions."
  },
  {
    type: "scolaire",
    tag: "Formation",
    title: "Baccalauréat général — mention assez bien",
    period: "2020 – 2023",
    org: "Lycée Paul Langevin · Suresnes",
    description: "Spécialités SES et HGGSP — première culture économique, sociale et géopolitique, nourrissant l'intérêt pour les organisations et les transformations économiques."
  }
];

// --- Page Compétences ---
const competencesData = [
  {
    id: "analyser",
    name: "Analyser",
    number: "01",
    levelAchieved: "Niveau 3/3 atteint",
    levelDesc: "Conseiller pour l'amélioration des processus de l'organisation",
    gradient: "linear-gradient(145deg, #C0392B 0%, #EC7063 100%)",
    accent: "#EC7063",
    niveaux: [
      {
        num: 1,
        title: "Identifier les processus de l'organisation",
        items: [
          // AC11.01
          { text: "Identifier les différents types d'enjeux", example: "Problème de l'alcool au volant chez les jeunes", tags: ["Breathe&Go"] },
          // AC11.02
          { text: "Qualifier les différents types d'organisations", example: "Roole, Maia Village et hôtel-restaurant fictif", tags: ["Roole", "Maia Village", "Hôtel-restaurant"] },
          // AC11.03
          { text: "Identifier les parties prenantes et leurs relations", example: "Directions régionales, intervenants et directeur régional", tags: ["BOZE"] }
        ]
      },
      {
        num: 2,
        title: "Évaluer les processus de l'organisation",
        items: [
          // AC21.01
          { text: "Analyser les différents types d'enjeux", example: "Freins terrain dans la transformation numérique", tags: ["Transfo numérique"] },
          // AC21.02
          { text: "Analyser les dimensions internes et externes d'une organisation", example: "Dysfonctionnements RH, opérationnels et managériaux", tags: ["Hôtel-restaurant"] },
          // AC21.03
          { text: "Évaluer le niveau de performance des processus", example: "Suivi trop manuel, informations dispersées dans l'organisation", tags: ["BOZE"] }
        ]
      },
      {
        num: 3,
        title: "Conseiller pour l'amélioration des processus",
        items: [
          // AC31.01
          { text: "Intégrer l'impact des enjeux sur l'organisation", example: "Impact des ressaisies et de l'appropriation des outils", tags: ["Roole"] },
          // AC31.02
          { text: "Conseiller un type d'organisation", example: "Accompagnement au changement pour un réseau de crèches", tags: ["Maia Village"] },
          // AC31.03
          { text: "Proposer des améliorations des processus", example: "Refonte de l'espace Notion pour fiabiliser le suivi", tags: ["BOZE"] }
        ]
      }
    ]
  },
  {
    id: "decider",
    name: "Décider",
    number: "02",
    levelAchieved: "Niveau 3/3 atteint",
    levelDesc: "Concourir à la prise de décision",
    gradient: "linear-gradient(145deg, #D35400 0%, #F0883A 100%)",
    accent: "#F0883A",
    niveaux: [
      {
        num: 1,
        title: "Identifier les éléments d'aide à la prise de décision",
        items: [
          // AC12.01
          { text: "Identifier les composantes d'un système d'information de gestion", example: "Bases Notion et tableau de bord Excel", tags: ["BOZE", "Bons plans"] },
          // AC12.02
          { text: "Rechercher, collecter et traiter des données brutes", example: "Questionnaires et base de données des bons plans", tags: ["Breathe&Go", "Bons plans"] },
          // AC12.03
          { text: "Identifier les contraintes de l'organisation", example: "Contraintes terrain, budgétaires et organisationnelles", tags: ["Tables rondes"] },
          // AC12.04
          { text: "Identifier les risques", example: "Alcool au volant, adoption d'outil, désorganisation RH", tags: ["Breathe&Go", "Maia Village", "Hôtel-restaurant"] }
        ]
      },
      {
        num: 2,
        title: "Évaluer les éléments d'aide à la prise de décision",
        items: [
          // AC22.01
          { text: "Analyser les enjeux du système d'information", example: "Maturité numérique de Roole avec le modèle DIMM", tags: ["Transfo numérique"] },
          // AC22.02
          { text: "Exploiter un outil de gestion et ses fonctionnalités", example: "Notion, Excel, Forms et outils internes Roole", tags: ["BOZE", "Bons plans"] },
          // AC22.03
          { text: "Traiter les données pour répondre à une problématique", example: "Tableau de bord des bons plans régionaux par performance", tags: ["Bons plans"] },
          // AC22.04
          { text: "Analyser les contraintes et leur impact sur la performance", example: "Hétérogénéité des pratiques dans les concessions", tags: ["Transfo numérique"] },
          // AC22.05
          { text: "Évaluer les risques", example: "Freins à l'adoption d'un outil numérique", tags: ["Maia Village"] }
        ]
      },
      {
        num: 3,
        title: "Concourir à la prise de décision",
        items: [
          // AC32.01
          { text: "Collaborer à l'amélioration continue du système d'information", example: "Réorganisation de l'espace Notion pour les BOZE", tags: ["BOZE"] },
          // AC32.02
          { text: "Exploiter les données pour accompagner la prise de décision", example: "Indicateurs, graphiques et segments du tableau de bord", tags: ["Bons plans"] },
          // AC32.03
          { text: "Participer à la prise de décision selon les contraintes identifiées", example: "Matrice des bons plans à maintenir, pousser ou optimiser", tags: ["Bons plans"] },
          // AC32.04
          { text: "Élaborer des mesures préventives de minimisation des risques", example: "Accompagnement au changement et plan de redressement", tags: ["Maia Village", "Hôtel-restaurant"] }
        ]
      }
    ]
  },
  {
    id: "piloter",
    name: "Piloter",
    number: "03",
    levelAchieved: "Niveau 3/3 atteint",
    levelDesc: "Améliorer les relations entre les parties prenantes",
    gradient: "linear-gradient(145deg, #C8970A 0%, #F5C518 100%)",
    accent: "#F5C518",
    niveaux: [
      {
        num: 1,
        title: "Identifier les relations entre les parties prenantes",
        items: [
          // AC13.01
          { text: "Identifier ses qualités individuelles", example: "Rôle d'architecte du groupe : structure, méthode, livrables", tags: ["Breathe&Go"] },
          // AC13.02
          { text: "Identifier les relations interpersonnelles et collectives", example: "Coordination entre créateurs, mannequins et équipe", tags: ["Fashion Day"] },
          // AC13.03
          { text: "Travailler en équipe avec méthode", example: "Répartition des tâches et échéances sur Notion", tags: ["Breathe&Go", "Fashion Day"] },
          // AC13.04
          { text: "Utiliser les techniques de communication pertinentes", example: "Mails, supports Canva, pitchs et présentations", tags: ["Breathe&Go", "Tables rondes"] }
        ]
      },
      {
        num: 2,
        title: "Coordonner les relations entre les parties prenantes",
        items: [
          // AC23.01
          { text: "Mobiliser ses qualités au service de l'intelligence collective", example: "Structuration des rendus et supports de groupe", tags: ["Breathe&Go"] },
          // AC23.02
          { text: "Analyser les relations collectives dans la stratégie de l'organisation", example: "Rôle des directions régionales dans le pilotage BOZE", tags: ["BOZE"] },
          // AC23.03
          { text: "Utiliser des outils dédiés au travail collaboratif", example: "Notion, Forms, Excel et supports partagés", tags: ["BOZE", "Transfo numérique"] },
          // AC23.04
          { text: "Combiner les méthodes de communication selon la stratégie", example: "Mails ciblés, réseaux sociaux, affiches et supports projetés", tags: ["Fashion Day", "Tables rondes"] }
        ]
      },
      {
        num: 3,
        title: "Améliorer les relations entre les parties prenantes",
        items: [
          // AC33.01
          { text: "Animer une équipe", example: "Sprints, répartition des tâches et suivi de l'avancement", tags: ["Fashion Day"] },
          // AC33.02
          { text: "Mener un projet collaboratif", example: "Coordination d'équipe de bout en bout", tags: ["Breathe&Go", "Fashion Day", "Tables rondes"] },
          // AC33.03
          { text: "Participer à l'amélioration de la communication", example: "Adaptation des invitations et supports des tables rondes Roole", tags: ["Tables rondes"] }
        ]
      }
    ]
  },
  {
    id: "entreprendre",
    name: "Entreprendre",
    number: "04",
    levelAchieved: "Niveau 2/2 atteint",
    levelDesc: "Sécuriser la proposition de valeur",
    gradient: "linear-gradient(145deg, #1A7A40 0%, #3DBD70 100%)",
    accent: "#3DBD70",
    niveaux: [
      {
        num: 1,
        title: "Modéliser la proposition de valeur",
        items: [
          // AC14.01
          { text: "S'adapter aux évolutions et à l'incertitude", example: "Ajustements continus après les retours du corps enseignant", tags: ["Breathe&Go"] },
          // AC14.02
          { text: "Évaluer le potentiel d'un marché", example: "Questionnaires quantitatifs et qualitatifs auprès des usagers", tags: ["Breathe&Go"] },
          // AC14.03
          { text: "Modéliser les composantes d'un business model", example: "Modèle économique complet de Breathe&Go", tags: ["Breathe&Go"] },
          // AC14.04
          { text: "Apprécier la cohérence d'un business model et d'un business plan", example: "Lien entre coût, prix, cible et prévisions financières", tags: ["Breathe&Go"] }
        ]
      },
      {
        num: 2,
        title: "Sécuriser la proposition de valeur",
        items: [
          // AC24.01
          { text: "Tester la viabilité financière d'un business model", example: "Business plan complet avec seuil de rentabilité", tags: ["Breathe&Go"] },
          // AC24.02
          { text: "Apprécier les risques financiers, fiscaux et juridiques", example: "Analyse de faisabilité et des risques du produit", tags: ["Breathe&Go"] },
          // AC24.03
          { text: "Préconiser des mesures de protection contre les risques", example: "Solution préventive face au risque d'alcool au volant", tags: ["Breathe&Go"] },
          // AC24.04
          { text: "Persuader une partie prenante de la viabilité du projet", example: "Pitch final devant plus d'une centaine de personnes", tags: ["Breathe&Go"] },
          // AC24.05
          { text: "Confronter son projet à l'expérience de terrain", example: "Stand, questionnaires et partenariat avec la Prévention Routière", tags: ["Breathe&Go"] }
        ]
      }
    ]
  },
  {
    id: "developper",
    name: "Développer",
    number: "05",
    levelAchieved: "Niveau 2/2 atteint",
    levelDesc: "Optimiser la chaîne de valeur",
    gradient: "linear-gradient(145deg, #1E3A8A 0%, #4469C9 100%)",
    accent: "#4469C9",
    niveaux: [
      {
        num: 1,
        title: "Développer la chaîne de valeur",
        items: [
          // AC15.01
          { text: "Promouvoir un projet, un événement ou une organisation", example: "Affiches, flyers et réseaux sociaux pour l'événement", tags: ["Fashion Day"] },
          // AC15.02
          { text: "Identifier la variété des processus de production", example: "Prototype et impression 3D", tags: ["Breathe&Go"] },
          // AC15.03
          { text: "Utiliser les techniques de négociation avec les partenaires", example: "Échanges avec la Prévention Routière et les acteurs événementiels", tags: ["Breathe&Go", "Fashion Day"] },
          // AC15.04
          { text: "Évaluer une démarche de marketing opérationnel digital", example: "Suivi des bons plans régionaux et campagnes d'animation", tags: ["Bons plans"] },
          // AC15.05
          { text: "Évaluer le risque de trésorerie", example: "Prévisions financières et seuil de rentabilité", tags: ["Breathe&Go"] },
          // AC15.06
          { text: "Contribuer à la gestion opérationnelle des ressources humaines", example: "Plan d'action RH dans le cas de l'hôtel-restaurant", tags: ["Hôtel-restaurant"] }
        ]
      },
      {
        num: 2,
        title: "Optimiser la chaîne de valeur",
        items: [
          // AC25.01
          { text: "Concevoir une stratégie de communication avec les outils adaptés", example: "Identité visuelle complète et plan de communication", tags: ["Fashion Day"] },
          // AC25.02
          { text: "Mettre en œuvre des processus adaptés à la situation de l'entité", example: "Organisation par sprints avec livrables définis", tags: ["Fashion Day"] },
          // AC25.03
          { text: "Concevoir une démarche de marketing opérationnel adaptée", example: "Priorisation des bons plans selon leur performance terrain", tags: ["Bons plans"] },
          // AC25.04
          { text: "Prévenir les risques de défaillance avec les outils adaptés", example: "Plan de redressement complet pour l'hôtel-restaurant", tags: ["Hôtel-restaurant"] },
          // AC25.05
          { text: "Déterminer les axes principaux d'une politique RH", example: "Bien-être au travail, climat social et coordination des équipes", tags: ["Hôtel-restaurant"] }
        ]
      }
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
