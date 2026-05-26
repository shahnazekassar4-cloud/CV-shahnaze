export function PlusSport() {
  const liste = [
    "    10 ans de tennis",
    "Roller",
    "Gymnastique",
    "Cheerleading",
    "Badminton",
    "Course à pied",
  ];
  return (
    <ul className="competences-container-cartes">
      {liste.map((el) => {
        return <li className="competences-sport">{el}</li>;
      })}
    </ul>
  );
}
