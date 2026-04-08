type ComposantCompetencesProps = { listeCompetence: string[]; couleur: string };

export function ComposantCompetences(props: ComposantCompetencesProps) {
  return (
    <div>
      <ul className="flex gap-1 w-max-[100%] flex-wrap">
        {props.listeCompetence.map((competence) => {
          return (
            <li
              className="px-2 py-1 rounded-xl text-xs mr-1"
              style={{
                backgroundColor: props.couleur + "22",
                color: props.couleur,
              }}
            >
              {competence}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
