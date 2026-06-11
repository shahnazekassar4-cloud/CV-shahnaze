export function PlusFormations() {
  const liste = [
    "Permis B",
    "PSC1",
    "Animatrice atelier 2tonnes",
    "Gaspillage animentaire",
    "Réduction des déchets",
    "Formation Civique et Citoyenne",
  ];
  return (
    <ul className="competences-container-cartes">
      {liste.map((el) => {
        return <li className="competences-formations mb-2">{el}</li>;
      })}
    </ul>
  );
}
