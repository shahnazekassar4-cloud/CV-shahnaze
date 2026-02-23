import EnTete from "../composants/EnTete";
import BoutonContactezMoi from "../composants/ComposantContactezMoi";
import { listeEcoles } from "../listes/listeEvenements";
import { listeExp } from "../listes/listeEvenements";
import { listeProjets } from "../listes/listeEvenements";
import { ComposantEvenement } from "../composants/ComposantEvenements";
import { listeCompetences } from "../listes/listeCartes";
import { listeInterets } from "../listes/listeCartes";
import { ComposantCarte } from "../composants/ComposantCartes";
import motivationsImg from "../img/motivations.png";
import { Permis } from "../composants/Permis";

const Home = () => {
	return (
		<div>
			<EnTete />
			<div className="parties">
				<h2 className="chapitre">MES FORMATIONS</h2>
				{listeEcoles.map((ecole) => {
					return (
						<ComposantEvenement
							key={ecole.id}
							id={ecole.id}
							img={ecole.img}
							date={ecole.date}
							titre={ecole.titre}
							description={ecole.description}
							infos={ecole.infos}
							couleur={ecole.couleur}
							content={ecole.content}
						/>
					);
				})}
			</div>
			<div className="parties">
				<h2 className="chapitre">MES COMPETENCES</h2>
				<div className="flex justify-between mt-10">
					<div className="carte-competences-position relative w-130 h-155">
						{listeCompetences.map((competence) => {
							return (
								<ComposantCarte
									key={competence.id}
									id={competence.id}
									titre={competence.titre}
									description={competence.description}
									couleur={competence.couleur}
									couleurOmbre={competence.couleurOmbre}
									position={competence.position}
								/>
							);
						})}
						<Permis />
					</div>
					<div className="flex row items-center justify-center">
						<img src={motivationsImg} className="w-80" />
					</div>
				</div>
			</div>
			<div className="parties">
				<div className="w-fit bg-zinc-100 rounded-xl py-5">
					<h2 className="chapitre">MES EXPERIENCES PROFESSIONNELLES</h2>
					{listeExp.map((exp) => {
						return (
							<ComposantEvenement
								key={exp.id}
								id={exp.id}
								img={exp.img}
								date={exp.date}
								titre={exp.titre}
								description={exp.description}
								infos={exp.infos}
								couleur={exp.couleur}
								content={exp.content}
							/>
						);
					})}
				</div>
			</div>
			<div className="parties">
				<h2 className="chapitre">GESTION DE PROJET ET EVENEMENTS ANIMES</h2>
				{listeProjets.map((projet) => {
					return (
						<ComposantEvenement
							key={projet.id}
							id={projet.id}
							img={projet.img}
							date={projet.date}
							titre={projet.titre}
							description={projet.description}
							infos={projet.infos}
							couleur={projet.couleur}
							content={projet.content}
						/>
					);
				})}
			</div>
			<div className="parties">
				<h2 className="chapitre">
					MES PROJETS PERSONNELES ET CENTRES D'INTERETS
				</h2>
				<div className="carte-interets-position">
					{listeInterets.map((interet) => {
						return (
							<ComposantCarte
								key={interet.id}
								id={interet.id}
								titre={interet.titre}
								description={interet.description}
								couleur={interet.couleur}
								couleurOmbre={interet.couleurOmbre}
								position={interet.position}
							/>
						);
					})}
				</div>
			</div>
			<BoutonContactezMoi />
		</div>
	);
};

export default Home;
