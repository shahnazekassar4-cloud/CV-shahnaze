import type { Carte } from "../listes/listeCartes";

export function ComposantCarte(carte: Carte) {
	return (
		<div
			className={`carte ${carte.couleurOmbre} ${carte.position}`}
			style={{ borderColor: carte.couleur }}
		>
			<div className="carte-titre" style={{ color: carte.couleur }}>
				{carte.titre}
			</div>
			<div>{carte.description}</div>
		</div>
	);
}
