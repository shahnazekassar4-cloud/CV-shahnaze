import BoutonContactezMoi from "./ComposantContactezMoi";

export default function EnTete() {
	return (
		<div className="entete">
			<div className="w-180">
				<h1 className="sous-en-tete-0">SHAHNAZE KASSAR</h1>
				<div className="sous-en-tete-1">
					<p>
						<b className="texte">Ingénieure</b> procédés en eau, énergie,
						environnement.
					</p>
					<p>
						Conseil en développement durable et
						<b className="texte"> transition socio-écologique</b>.
					</p>
				</div>
				<div className="sous-en-tete-2">
					<p>
						Je conçois et optimise des
						<b className="texte"> solutions techniques</b> durables tout en
						intégrant les enjeux socio-écologiques.
					</p>
					<p>
						Je recherche un poste à impact dans l’énergie, la mobilité ou
						l’environnement et donner une dimension
						<b className="texte"> engagée</b> à mon parcours professionnel.
					</p>
					<BoutonContactezMoi />
				</div>
			</div>
		</div>
	);
}
