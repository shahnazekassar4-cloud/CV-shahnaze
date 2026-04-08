import type { ReactNode } from "react";

export type Coordonnees = {
  id: number;
  logo: string;
  nom: string;
  info: string | ReactNode;
};
export const listeCoordonnees: Coordonnees[] = [
  {
    id: 1,
    logo: "/phone.png",
    nom: "Téléphone",
    info: "07 77 78 35 01",
  },
  {
    id: 2,
    logo: "/mail.png",
    nom: "Email",
    info: (
      <a href="mailto:shahnazekassar4@gmail.com" className="hover:underline">
        shahnazekassar4@gmail.com
      </a>
    ),
  },
  {
    id: 3,
    logo: "/map-pin.png",
    nom: "Mobilité",
    info: "Occitanie",
  },
  {
    id: 4,
    logo: "/linkedin.png",
    nom: "LinkedIn",
    info: (
      <a
        href="https://www.linkedin.com/in/shahnaze-kassar-519898205?originalSubdomain=fr"
        className="hover:underline"
        target="_blank"
      >
        www.linkedin.com
      </a>
    ),
  },
];
