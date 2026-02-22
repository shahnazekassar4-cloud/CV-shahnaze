import gpsImg from "../img/gps.png";
import mailImg from "../img/mail.png";
import telephone from "../img/telephone.png";
import linkedin from "../img/linkedin.png";

export type Coordonnees = {
  id: number;
  logo: string;
  nom: string;
  info: string;
};
export const listeCoordonnees: Coordonnees[] = [
  {
    id: 1,
    logo: telephone,
    nom: "Téléphone",
    info: "07 77 78 35 01",
  },
  {
    id: 2,
    logo: mailImg,
    nom: "Email",
    info: "shahnazekassar4@gmail.com",
  },
  {
    id: 3,
    logo: gpsImg,
    nom: "Mobilité",
    info: "Occitanie",
  },
  {
    id: 4,
    logo: linkedin,
    nom: "LinkedIn",
    info: "www.linkedin.com",
  },
];
