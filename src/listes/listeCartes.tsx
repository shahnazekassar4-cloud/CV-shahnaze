import type { ReactNode } from "react";
import { PlusTechnique } from "../composants/carte/PlusTechnique";
import { PlusHumain } from "../composants/carte/PlusHumain";
import { PlusLangues } from "../composants/carte/PlusLangue";
import { PlusMalo } from "../composants/carte/PlusMalo";
import { PlusJeu } from "../composants/carte/PlusJeu";
import { PlusEcriture } from "../composants/carte/PlusEcriture";
import { PlusSport } from "../composants/carte/PlusSport";

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
    position: "absolute left-30 top-0 -rotate-5",
  },
  {
    id: 2,
    titre: "Humaines",
    description: <PlusHumain />,
    couleur: "#6C8A18",
    couleurOmbre:
      "hover:shadow-[7px_5px_0px_-1px_rgba(108,138,24,0.5)] hover:z-1",
    position: "absolute right-0 top-20",
  },
  {
    id: 3,
    titre: "Langues",
    description: <PlusLangues />,
    couleur: "#094196",
    couleurOmbre:
      " hover:shadow-[7px_5px_0px_-1px_rgba(9,65,150,0.5)] hover:z-1",
    position: "absolute bottom-21 right-25 rotate-5",
  },
];
export const listeInterets: Carte[] = [
  {
    id: 1,
    titre: "Education canine",
    description: <PlusMalo />,
    couleur: "#F4A519",
    couleurOmbre:
      " hover:shadow-[7px_5px_0px_-1px_rgba(244,165,25,0.5)] hover:z-1",
    position: "-rotate-5 relative left-9",
  },

  {
    id: 2,
    titre: "Jeu de société",
    description: <PlusJeu />,
    couleur: "#094196",
    couleurOmbre:
      "hover:shadow-[7px_5px_0px_-1px_rgba(9,65,150,0.5)] hover:z-1",
    position: "rotate-5 relative left-3.5 bottom-3",
  },
  {
    id: 3,
    titre: "Ecriture",
    description: <PlusEcriture />,
    couleur: "#00A651",
    couleurOmbre:
      " hover:shadow-[7px_5px_0px_-1px_rgba(0,166,81,0.5)] hover:z-1",
    position: "-rotate-5 relative right-3.5",
  },
  {
    id: 4,
    titre: "Sports",
    description: <PlusSport />,
    couleur: "#E42618",
    couleurOmbre:
      "hover:shadow-[7px_5px_0px_-1px_rgba(228,38,24,0.5)] hover:z-1",
    position: "rotate-5 relative right-9 bottom-3",
  },
];
