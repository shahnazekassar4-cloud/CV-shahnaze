export function PlusHumain() {
  const liste = [
    "    Gestion de projet",
    "Animation",
    "Ésprit critique",
    "Écoute active",
    "Professionalisme",
    "Autonomie",
    "Prise d'initiative",
    "Bienveillance",
    "Rigueur",
    "Passionnée",
  ];
  return (
    <ul className="competences-container-cartes">
      {" "}
      {liste.map((el) => {
        return <li className="competences-humaines">{el}</li>;
      })}
    </ul>
  );
}
