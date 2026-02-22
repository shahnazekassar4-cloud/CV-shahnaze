import type { ReactNode } from "react";
import { PlusTechnique } from "../composants/composants/PlusTechnique";
import { PlusHumain } from "../composants/composants/PlusHumain";
import { PlusLangues } from "../composants/composants/PlusLangue";
import { PlusMalo } from "../composants/composants/PlusMalo";

export type Carte = {
  id: number;
  titre: string;
  description: ReactNode;
  couleur: string;
  couleurOmbre: string;
  position: string;
};
export const listeCompetences: Carte[] = [
  {
    id: 1,
    titre: "Techniques",
    description: <PlusTechnique />,
    couleur: "rgb(244,165,25)",
    couleurOmbre:
      "hover:shadow-[7px_5px_0px_-1px_rgba(244,165,25,0.5)] hover:z-1",
    position: "absolute left-15 top-0 -rotate-20",
  },
  {
    id: 2,
    titre: "Humaines",
    description: <PlusHumain />,
    couleur: "#6C8A18",
    couleurOmbre:
      "hover:shadow-[7px_5px_0px_-1px_rgba(108,138,24,0.5)] hover:z-1",
    position: "absolute right-3 top-20 rotate-20",
  },
  {
    id: 3,
    titre: "Langues",
    description: <PlusLangues />,
    couleur: "#094196",
    couleurOmbre:
      " hover:shadow-[7px_5px_0px_-1px_rgba(9,65,150,0.5)] hover:z-1",
    position: "absolute bottom-0 right-20",
  },
];
export const listeInterets: Carte[] = [
  {
    id: 1,
    titre: "Jeu de société",
    description: [
      "A trois, nous nous lancé le défi de développer un jeu de société engagé sur des enjeux actuels. Notre objectif est de le présenter à un salon de jeu de société en 2026 !",
    ],
    couleur: "#F4A519",
    couleurOmbre:
      " hover:shadow-[7px_5px_0px_-1px_rgba(244,165,25,0.5)] hover:z-1",
    position: "-rotate-10",
  },

  {
    id: 2,
    titre: "Education canine",
    description: <PlusMalo />,
    couleur: "#094196",
    couleurOmbre:
      "hover:shadow-[7px_5px_0px_-1px_rgba(9,65,150,0.5)] hover:z-1",
    position: "rotate-10",
  },
  {
    id: 3,
    titre: "Ecriture",
    description: [
      "Depuis toujours je m'essai à l'ériture de toute forme : articles engagés, poésie, fictions, chansons. C'est un moyen de m'exprimer que et de partager.",
    ],
    couleur: "#00A651",
    couleurOmbre:
      " hover:shadow-[7px_5px_0px_-1px_rgba(0,166,81,0.5)] hover:z-1",
    position: "-rotate-10",
  },
  {
    id: 4,
    titre: "Sports",
    description: [
      "Tennis",
      "Gymnastique",
      "Roller",
      "Course à pied",
      "Badminton",
    ],
    couleur: "#E42618",
    couleurOmbre:
      "rotate-10 hover:shadow-[7px_5px_0px_-1px_rgba(228,38,24,0.5)] hover:z-1",
    position: "rotate-10",
  },
];
