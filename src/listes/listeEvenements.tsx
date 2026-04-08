import type { ReactNode } from "react";

export type Evenement = {
  id: number;
  img: string;
  date: string;
  titre: string;
  description: ReactNode;
  couleur: string;
  content: ReactNode;
  competences: string[];
};

export const listeEcoles: Evenement[] = [
  {
    id: 3,
    img: "/uqac.jpg",
    date: "2024 • 2025",
    titre: "Université du Québec à Chicoutimi, Canada",
    description:
      "DESS en Eco-Conseil. Conseil en développement durable et transition socio-écologique à l'échelle des entreprises et des particuliers. Sûrement l'une des formations les plus riches sur le plan théorique, pratique et humain.",
    couleur: "#6C8A18",
    content: (
      <div className="evenement-description">
        <p>
          J’y ai suivi des cours thématiques très variés (anthropologie,
          mobilité, ville durable, agriculture...), intégrés à la{" "}
          <span className="text-lime-600">transition socio-écologique</span>{" "}
          dans le but d’accompagner les organisations et de mieux comprendre les{" "}
          <span className="text-lime-600">facteurs de changement</span>. J’ai
          appris les principes de l’
          <span className="text-lime-600">amélioration continue</span> dans le
          cadre des démarches de développement durable. Nous avons eu la chance
          d’échanger avec de nombreux acteurs (associations, entreprises,
          particuliers engagés ) afin de réfléchir à la transition dans tous les
          secteurs. Les apprentissages ont été directement appliqués dans des
          projets concrets, comme l’organisation d’une journée de conférence.
        </p>
        <p>
          Le Québec est très avancé dans ses méthodes et outils de{" "}
          <span className="text-lime-600">consultation publique</span>. Ça a été
          un séjour inspirant pour mieux appréhender la gestion de projet dans
          des contextes controversés.
        </p>
        <p>
          J’ai intégré un groupe de travail afin de réfléchir à une filière de
          <span className="text-lime-600"> réemploi</span> des matériaux de
          construction dans la ville de Saguenay, auprès d’entreprises de l’ESS
          (<span className="text-lime-600">Économie Sociale et Solidaire</span>
          ).
        </p>
        <p>
          Une grande partie de la formation a été consacrée à l’expérience de
          terrain. Nous avons été accueillis par des Autochtones pour échanger
          sur leur place dans la{" "}
          <span className="text-lime-600">prise de décision</span> à l’échelle
          fédérale et provinciale. Nous avons visité de nombreuses forêts pour
          comprendre les enjeux des différents modes de{" "}
          <span className="text-lime-600">gestion forestière</span>. Nous avons
          également visité des sites d’enfouissement et de recyclage afin de
          réfléchir aux enjeux de la{" "}
          <span className="text-lime-600">
            gestion des matières résiduelles
          </span>
          .
        </p>
        <u>
          <a
            href="https://www.uqac.ca/programme/3598-dess-en-eco-conseil/"
            target="_blank"
          >
            ...voir la formation
          </a>
        </u>
      </div>
    ),
    competences: [],
  },
  {
    id: 2,
    img: "/insa.png",
    date: "2020 • 2025",
    titre: "Institut National des Sciences Appliquées, Toulouse",
    description:
      "Génie des procédés appliqués à l’eau, l’énergie et l’environnement. Une formation avant tout scientifique et technique qui a su intégrer les sciences humaines et des valeurs engagées.",
    couleur: "#E42618",
    content: (
      <div className="evenement-description">
        <p>
          J'ai été formé au dimensionnement de différents précédés, opérations
          unitaires et filières énergétiques à l'échelle industrielle. Pour
          garder les enjeux environnementaux au coeur des problématiques
          techniques j'ai étudié le{" "}
          <span className="text-red-600">droit de l'environnement</span> et j'ai
          été sensibilisé à l'optimisation des procédés dans le but de minimiser
          leur impact et avoir une{" "}
          <span className="text-red-600">meilleure gestion des ressources</span>
          . J'ai développé de grandes compétences scientifiques pratiques en
          laboratoire mais aussi dans la rédaction de contenu technique comme
          des <span className="text-red-600">articles scientifiques</span>, des
          rapports de projet, des analyses de procédés sur le plan technique et
          financier. J'ai aussi fait des visites de terrain comme une unité de
          méthanisation et la centrale nucléaire de Golfech. J'ai eu l'occasion
          d'être initiée à des compétences plus transversales comme la{" "}
          <span className="text-red-600">gestion financière</span>, la
          communication, la prospection.
        </p>
        <p>
          J'ai fait ma première année dans une{" "}
          <span className="text-red-600">classe internationale</span> (étudiants
          français, vietnamiens, chinois). Ça a été une année très enrichissante
          sur le plan culturel ou j'ai appris à dépasser certaines barrières
          culturelles (langue, méthodes de travail) lorsqu'il sagissait de
          colaborer sur des projets professionnels.
        </p>
        <u>
          <a
            href="https://www.insa-toulouse.fr/formation/ingenieur-specialite-genie-des-procedes-et-environnement/"
            target="_blank"
          >
            ...voir la formation
          </a>
        </u>
      </div>
    ),
    competences: [],
  },
  {
    id: 1,
    img: "/lgf.jpg",
    date: "Diplômée 2020",
    titre: "Lycée Gustave Flaubert, Tunisie",
    description:
      "Baccalauréat Scientifique avec option Sciences de la Vie et de la Terre du lycée français de la Marsa.",
    couleur: "#094196",
    content: (
      <div className="evenement-description">
        Étant de double nationalité et ayant grandi en Tunisie, j'ai développé
        une grande tolérance et{" "}
        <span className="text-blue-800">ouverture d'esprit</span> sur le monde.
        J'aime penser qu'il faut utiliser les spécificités de chacun au profit
        du groupe et qu'il est néssaire de changer son prisme pour mieux
        comprendre certains enjeux.
      </div>
    ),
    competences: [],
  },
];

export const listeExp: Evenement[] = [
  {
    id: 4,
    img: "/crous.png",
    date: "(en cours)",
    titre:
      "Service Civique | Sensibiliser et agir pour la transition écologique, Toulouse",
    description:
      "Création et animation d'évènements autour de la transition écologique aurpès de la communauté étudiante de Toulouse.",
    couleur: "#E42618",
    content: (
      <div>
        {" "}
        A venir
        {/* <p>
          Organiser ou participer à l’organisation d’actions autour des
          thématiques de l’environnement,notamment des actions de
          sensibilisation.
        </p>
        <p>
          Participer aux échanges autour de la transition écologique au sein des
          campus et au développement du réseau de partenariats.
        </p>
        <p>
          Participer à la valorisation des initiatives locales et accompagner
          les étudiants dans l’application des mesures possibles sur leur
          campus.
        </p>
        <p>
          Accompagner les étudiants et les associations dans leurs projets liés
          à ces thématiques.
        </p>
        <ul>
          Proposer des actions et des activités adaptées aux différents sites
          Crous :
          <li>
            - En résidence universitaire : tri sélectif, surconsommation de
            l’eau et de l’électricité.
          </li>
          <li>
            - En restaurant universitaire : gaspillage et de l’équilibre
            alimentaire.
          </li>
          <li>
            - Sur les campus universitaires: autour des jardins partagés,
            composteur, récupérateur de déchets végétaux.
          </li>
        </ul>
        <p>
          Organiser des activités de promotion et de sensibilisation autour des
          thématiques liées : commerce équitable, l’économie sociale et
          solidaire (Troc party, échanges de service, pots d’accueil,
          projections débats, etc).
        </p>
        <p>
          Organiser des activités de promotion du commerce équitable, de
          l’économie sociale et solidaire (Troc party, échanges de service, pots
          d’accueil, projections débats, etc) ou d’autres thématiques liées au
          respect de l’environnement.
        </p> */}
      </div>
    ),
    competences: [],
  },
  {
    id: 2,
    img: " /emip.png",
    date: "Mai 2025 (6 mois)",
    titre:
      "Stage | Développement et suivi d'exploitation de parcs photovoltaïques au sol, Toulouse",
    description: (
      <div>
        <p>
          Projets de 300kWc à 1MWc : prospection, étude de pré-faisabilité,
          développement, montage des demandes d'autorisation (dérogations
          d'étude d'impact, déclarations préalables).
        </p>
        <p>
          Développement d’un outil pour analyser la production passée et faire
          des prévisions sur la production future des parcs : identification des
          parcs sous performants et quantification des causes.
        </p>
        <p>
          Participation au groupe de travail sur la stratégie carbone :
          planification des actions pour réduire l'empreinte carbone de
          l'activité. Participation au groupe de travail sur la réflexion autour
          de IA dans notre activité. Participation active à la vie coopérative.
        </p>
      </div>
    ),
    couleur: "#F4A519",
    content: (
      <div className="evenement-description">
        Ces six mois d’expériences dans le domaine de l’énergie m'ont permis
        d'intégrer les enjeux de ce secteur clé de la transition et de gagner en
        compétence{" "}
        <span className="text-amber-500">
          de communication et de négociation
        </span>{" "}
        face aux différents acteurs. J'ai été initié à l'
        <span className="text-amber-500">
          auto-consommation collective
        </span>{" "}
        (ACC) comme méthode de valorisation de l'électricité. Je me suis
        découvert une grande adaptabilité pour m’approprier des projets déjà en
        cours.
      </div>
    ),
    competences: ["Négociation", "Communication", "Gouvernance en coopérative"],
  },
  {
    id: 1,
    img: " /tlsM.jpg",
    date: "Juin 2024 (2 mois)",
    titre:
      "Stage | Prospective, Étude et Programmation du réseau d'eau potable, Toulouse",
    description: (
      <div>
        <p>
          Optimisation d’un outil d’aide à la décision, réduisant le temps
          d’analyse (20 min à 10 secondes). Amélioration de la fiabilité du
          programme de travaux du réseau d’eau potable. Rédaction de la
          documentation du nouvel outil.
        </p>
        <p>
          Mise à jour du rapport de stratégie de gestion patrimoniale du réseau
          d’eau potable à communiquer aux élus.
        </p>
      </div>
    ),
    couleur: "#479FB1",
    content: (
      <div>
        <p className="evenement-description">
          C’est une expérience où j’ai su faire preuve d’initiative et
          d’autonomie pour proposer une méthode et un{" "}
          <span className="text-cyan-600">protocole</span> afin d'améliorer la
          pertinence de l'outil de priorisation. J'ai fait des statistiques et
          travaillé avec QGIS pour faire de la{" "}
          <span className="text-cyan-600">manipulation de données</span> et
          améliorer la base de données d’entrée.
        </p>
      </div>
    ),
    competences: [
      "Manipulation de données",
      "Rédaction d'un rapport stratégique",
    ],
  },
  {
    id: 3,
    img: "",
    date: "",
    titre: "Voir mes autres stages et expériences ...",
    description: "",
    couleur: "#094196",
    content: (
      <div>
        <ul>
          <li className="autre-description">
            <b>PPM Engineering, Tunis | </b> Dimensionnement de station de
            traitement des eaux saumâtres par l’osmose inverse.
            <i className="competences-autre">IMSDesign</i>
          </li>
          <li className="autre-description">
            <b>Bouchamaoui Industries, Tunis | </b>Dimensionnement de parcs
            photovoltaïques. <i className="competences-autre">PVsyst</i>
          </li>
          <li className="autre-description">
            <b>Hi-Tech Detection Systems, Tunis | </b>Visite de laboratoires et
            maintenance des dispositifs PCR.
          </li>
          <li className="autre-description">
            J'ai travaillé comme <b>secrétaire d'examen </b>à l'université
            auprès d'étudiants en situation de handicap.
          </li>
          <li className="autre-description">
            J'ai été formé à l'animation d'<b>atelier scientifique</b> par
            l'association ludilab'Oh pour intervenir auprès de lycéens et
            collégiens.{" "}
            <u>
              <a
                href="https://www.planete-sciences.org/occitanie/web/retour-sur-les-formations-ludilaboh-lespace/"
                target="_blank"
              >
                ...voir l'article
              </a>
            </u>
          </li>
        </ul>
      </div>
    ),
    competences: [],
  },
];

export const listeProjets: Evenement[] = [
  {
    id: 4,
    img: " /logoPescadou.png",
    date: "2026",
    titre: "Développement d'un site vitrine pour une épicerie fine Le Pescadou",
    description: (
      <div>
        J'ai développé le site internet d'une épicerine fine pour présenter ses
        produits, ses coordonées et ses réseaux. J'ai créé un frontend
        administrateur pour modifier le contenu du site.
      </div>
    ),
    couleur: "#742a2a",
    content: (
      <div>
        <div className="evenement-description">
          <a
            className="evenement-description"
            href="https://le-pescadou.web.app/"
            target="_blank"
          >
            <u>...voir le site</u>
          </a>
        </div>
      </div>
    ),
    competences: [
      "React",
      "Tailwind",
      "Deploiement Firebase",
      "Backend Strapi",
    ],
  },
  {
    id: 2,
    img: " /ecoconseil.jpg",
    date: "2024 • 2025",
    titre:
      "Evenement Eco-Conseil | Repenser la prise de décision dans la transition socio-écologique, Canada",
    description: (
      <div>
        Organisation d’une journée de conférence, d’un panel et cocréation d’un
        atelier participatif pour expérimenter différentes méthodes de prise de
        décision avec des élus, chercheurs et étudiants. Gestion de la
        trésorerie et des partenariats.
      </div>
    ),
    couleur: "#00A651",
    content: (
      <div>
        <img src={"/eccImg.jpeg"} className="mb-3 rounded-2xl" />
        <div className="evenement-description">
          Durant mon année au Canada, j’ai eu l’occasion de coorganiser une
          journée de conférence pour{" "}
          <span className="text-green-600">
            “repenser la prise de décision dans la transition socio-écologique”
          </span>
          . J’ai notamment cocréé un atelier participatif qui avait pour but
          d’expérimenter différentes méthodes de prise de décision au travers
          d’un scénario inscrit dans les enjeux actuels du Québec. Le public de
          70 personnes était constitué d’élus, de professionnels, de chercheurs
          et d’étudiants. J’étais notamment responsable de la{" "}
          <span className="text-green-600">
            gestion de la trésorerie et des partenariats
          </span>
          . J’ai alors pu travailler avec de nombreux acteurs publics comme
          privés, animer un panel et travailler en équipe pour gérer des{" "}
          <span className="text-green-600">situations d’urgence</span> en temps
          réel.{" "}
          <u>
            <a
              href="https://colloques.uqac.ca/ecoconseil/sources-recommandees/"
              target="_blank"
            >
              ...voir le site
            </a>
          </u>
        </div>
      </div>
    ),
    competences: [
      "Gestion de trésorerie",
      "Communication et partenariat",
      "Identité graphique",
      "Création et animation",
    ],
  },
  {
    id: 1,
    img: " /otalents.png",
    date: "2023 • 2025",
    titre: "Bénévolat | Tutorat aux Cordées de la réussite de l'INSA",
    description:
      "Recrutement et formation des 60 tuteurs. Accompagnement de 400 collégiens et lycéens pour promouvoir les études supérieures, lutter contre l’auto-censure et développer la culture générale. Création d’une vidéo promotionnelle pour la communication du dispositif.",
    couleur: "#EF3125",
    content: (
      <div className="flex justify-center w-full">
        <iframe
          width="620"
          height="280"
          src="https://www.youtube.com/embed/7X1qljHoGuk?si=06xvJn1M9WUrZ5iY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ border: "2px solid transparent", borderRadius: "10px" }}
          className="mb-3 w-full"
        ></iframe>
      </div>
    ),
    competences: ["Animation", "Vulgarisation", "Médiation"],
  },
  {
    id: 3,
    img: " /recup.jpg",
    date: "2026",
    titre: "Bénévolat | Réccup'Occitanie, Toulouse",
    description:
      "  Vidange et nettoyage des bokashis. Retournement des caissons de composte.",
    couleur: "#003e28",
    content: (
      <u className="evenement-description">
        <a href="https://www.recup-compostage-urbain.fr/" target="_blank">
          ...voir le site
        </a>
      </u>
    ),
    competences: [],
  },
];
