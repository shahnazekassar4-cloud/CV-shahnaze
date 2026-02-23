import type { ReactNode } from "react";
import { PlusTechnique } from "../composants/composants/PlusTechnique";
import { PlusHumain } from "../composants/composants/PlusHumain";
import { PlusLangues } from "../composants/composants/PlusLangue";
import { PlusMalo } from "../composants/composants/PlusMalo";
import { PlusJeu } from "../composants/composants/PlusJeu";
import { PlusEcriture } from "../composants/composants/PlusEcriture";
import { PlusSport } from "../composants/composants/PlusSport";

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
    position: "absolute left-15 top-0 -rotate-10",
  },
  {
    id: 2,
    titre: "Humaines",
    description: <PlusHumain />,
    couleur: "#6C8A18",
    couleurOmbre:
      "hover:shadow-[7px_5px_0px_-1px_rgba(108,138,24,0.5)] hover:z-1",
    position: "absolute right-3 top-20 rotate-10",
  },
  {
    id: 3,
    titre: "Langues",
    description: <PlusLangues />,
    couleur: "#094196",
    couleurOmbre:
      " hover:shadow-[7px_5px_0px_-1px_rgba(9,65,150,0.5)] hover:z-1",
    position: "absolute bottom-25 right-30",
  },
];
export const listeInterets: Carte[] = [
  {
    id: 1,
    titre: "Jeu de société",
    description: <PlusJeu />,
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
    description: <PlusEcriture />,
    couleur: "#00A651",
    couleurOmbre:
      " hover:shadow-[7px_5px_0px_-1px_rgba(0,166,81,0.5)] hover:z-1",
    position: "-rotate-10",
  },
  {
    id: 4,
    titre: "Sports",
    description: <PlusSport />,
    couleur: "#E42618",
    couleurOmbre:
      "rotate-10 hover:shadow-[7px_5px_0px_-1px_rgba(228,38,24,0.5)] hover:z-1",
    position: "rotate-10",
  },
];
