import gpsImg from "../img/gps.png";
import mailImg from "../img/mail.png";
import telephone from "../img/telephone.png";
import linkedin from "../img/linkedin.png";
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
		logo: telephone,
		nom: "Téléphone",
		info: "07 77 78 35 01",
	},
	{
		id: 2,
		logo: mailImg,
		nom: "Email",
		info: (
			<a href="mailto:shahnazekassar4@gmail.com" className="hover:underline">
				shahnazekassar4@gmail.com
			</a>
		),
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
		info: (
			<a
				href="https://www.linkedin.com/in/shahnaze-kassar-519898205?originalSubdomain=fr"
				className="hover:underline"
			>
				www.linkedin.com
			</a>
		),
	},
];
