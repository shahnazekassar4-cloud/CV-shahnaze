import maloImg from "../../img/malo.png";

export function PlusMalo() {
  return (
    <div>
      <p>
        J'ai adapoté Malo il y a 7 mois. C'est la plus grande aventure que j'ai
        eu à traverser me demandant tous les jours de me dépasser un peu plus.
      </p>
      <img src={maloImg} className="-rotate-10"></img>
    </div>
  );
}
