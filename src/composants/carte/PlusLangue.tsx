export function PlusLangues() {
  const liste = [
    "Français : langue maternelle",
    "Anglais : TOEIC B2",
    "Arabe : dialecte tunisien",
    "Italien : niveau scolaire",
    "Coréen : notions",
  ];
  return (
    <ul className="competences-container-cartes">
      {liste.map((el) => {
        return <li className="competences-langues">{el}</li>;
      })}
    </ul>
  );
}
