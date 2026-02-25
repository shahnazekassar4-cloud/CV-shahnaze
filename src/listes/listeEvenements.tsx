import insaImg from "../img/insa.png";
import uqacImg from "../img/uqac.jpg";
import emipImg from "../img/emip.png";
import tlsMImg from "../img/tlsM.jpg";
import eccImg from "../img/ecoconseil.jpg";
import otalentsImg from "../img/otalents.png";
import lgfImg from "../img/lgf.jpg";
// import recupImg from "../img/recup.jpg";
import type { ReactNode } from "react";
import { PlusUqac } from "../composants/evenement/PlusUqac";
import { PlusInsa } from "../composants/evenement/PlusInsa";
import { PlusLgf } from "../composants/evenement/PlusLgf";
import { PlusEmip } from "../composants/evenement/PlusEmip";
import { PlusTlsM } from "../composants/evenement/PlusTlsM";
import { PlusEcc } from "../composants/evenement/PlusEcc";
import { PlusOtalents } from "../composants/evenement/PlusOtalents";
import { CompetencesEmip } from "../composants/Competences/CompetencesEmip";
import { CompetencesTlsM } from "../composants/Competences/CompetencesTlsM";
import Autre from "../composants/evenement/Autre";

export type Evenement = {
  id: number;
  img: string;
  date: string;
  titre: string;
  description: ReactNode;
  couleur: string;
  content: ReactNode;
  competences: ReactNode;
};

export const listeEcoles: Evenement[] = [
  {
    id: 3,
    img: uqacImg,
    date: "2024 • 2025",
    titre: "Université du Québec à Chicoutimi, Canada",
    description:
      "DESS en EcoConseil. Conseil en développement durable et transition socio-écologique à l'échelle des entreprises et des particuliers. Surement l'une des formations les plus riches sur le plan théorique, pratique et humain.",
    couleur: "#6C8A18",
    content: <PlusUqac />,
    competences: "",
  },
  {
    id: 2,
    img: insaImg,
    date: "2020 • 2025",
    titre: "Institut National des Sciences Appliquées, Toulouse",
    description:
      "Génie des procédés appliqués à l’eau, l’énergie et l’environnement. Une formation avant scientifique et technique qui a su intégrer les sciences humaines et des valeurs engagés.",
    couleur: "#E42618",
    content: <PlusInsa />,
    competences: "",
  },
  {
    id: 1,
    img: lgfImg,
    date: "Diplômée 2020",
    titre: "Lycée Gustave Flaubert, Tunisie",
    description:
      "Baccalauréat scientifique avec option science de la vie et de la terre du lycée français de la Marsa.",
    couleur: "#094196",
    content: <PlusLgf />,
    competences: "",
  },
];

export const listeExp: Evenement[] = [
  {
    id: 2,
    img: emipImg,
    date: "Mai 2025 (6 mois)",
    titre:
      "Développement et suivi d'exploitation de parcs photovoltaïques au sol, Toulouse",
    description:
      "Prospection, étude de préfaisabilité, développement, montage dossiers réglementaires (dérogations environnementales, déclarations préalables) pour des projets de 300KWc à 1MWc. Développement d’un outil de prévision de production des parcs et flux financiers : identification des parcs sous performants et des causes. Contribution à la stratégie carbone et aux réflexions IA au sein de la coopérative",
    couleur: "#F4A519",
    content: <PlusEmip />,
    competences: <CompetencesEmip />,
  },
  {
    id: 1,
    img: tlsMImg,
    date: "Juin 2024 (2 mois)",
    titre: "Prospective, Étude et Programmation, Toulouse",
    description:
      "Optimisation d’un outil d’aide à la décision, réduisant le temps d’analyse (20 min à 10 secondes) et amélioration de la fiabilité du programme de travaux du réseau d’eau potable.Mise à jour du rapport de stratégie de gestion patrimoniale du réseau d’eau potable à communiquer aux élus.",
    couleur: "#479FB1",
    content: <PlusTlsM />,
    competences: <CompetencesTlsM />,
  },
  {
    id: 3,
    img: "",
    date: "",
    titre: "Autres stages et expériences",
    description: "",
    couleur: "#094196",
    content: <Autre />,
    competences: "",
  },
];

export const listeProjets: Evenement[] = [
  // {
  //   id: 3,
  //   img: recupImg,
  //   date: "2026",
  //   titre: "Bénévolat : Réccup'Occitanie",
  //   description: "composatage",
  //   couleur: "#003e28",
  //   content: "<PlusTlsM />", competences:"",
  // },
  {
    id: 2,
    img: eccImg,
    date: "2024 • 2025",
    titre: "Repenser la prise de décision dans la transition socio-écologique",
    description:
      "Organisation d’une journée de conférence, d’un panel et cocréation d’un atelier participatif pour expérimenter différentes méthodes de prise de décision avec des élus, chercheurs et étudiants. Gestion de la trésorerie et des partenariats.",
    couleur: "#00A651",
    content: <PlusEcc />,
    competences: "",
  },
  {
    id: 1,
    img: otalentsImg,
    date: "2023 • 2025",
    titre: "Programme Ô talents de l’INSA, Cordées de la réussite",
    description:
      "Recrutement et formation des 60 tuteurs. Accompagnement de 400 collégiens et lycées pour promouvoir les études supérieures, lutter contre l’auto-censure et développer la culture générale. Création d’une vidéo promotionnelle pour la communication du dispositif.",
    couleur: "#EF3125",
    content: <PlusOtalents />,
    competences: "",
  },
];
