import type { Evenement } from "../listes/listeEvenements";
import { useState } from "react";
import type { ReactNode } from "react";

type BoutonProps = { couleur: string; onOff: () => void };

type contentProps = { content: ReactNode };

export function ComposantEvenements(event: Evenement) {
  const [plusIsVisible, setPlusIsVisible] = useState<boolean>(false);
  return (
    <div className="evenement-position bodures-evenement">
      <div className="w-35">
        <img src={event.img} className="logo" />
      </div>
      <div className="w-200 ">
        <div className="date-position">
          <div className="evenement-titre" style={{ color: event.couleur }}>
            {event.titre}
          </div>
          <div className="evenement-date" style={{ color: event.couleur }}>
            {event.date}
          </div>
        </div>
        <div className="evenement-description">{event.description}</div>
        {plusIsVisible == true && <PlusEvenement content={event.content} />}
      </div>
      {plusIsVisible == false && (
        <BoutonPlus
          onOff={() => setPlusIsVisible(true)}
          couleur={event.couleur}
        />
      )}
      {plusIsVisible == true && (
        <BoutonMoins
          onOff={() => setPlusIsVisible(false)}
          couleur={event.couleur}
        />
      )}
    </div>
  );
}

export function PlusEvenement(props: contentProps) {
  return <div className="mt-3">{props.content}</div>;
}

export function BoutonPlus({ couleur, onOff }: BoutonProps) {
  return (
    <button className="bouton-plus" style={{ color: couleur }} onClick={onOff}>
      +
    </button>
  );
}

export function BoutonMoins({ couleur, onOff }: BoutonProps) {
  return (
    <button className="bouton-plus" style={{ color: couleur }} onClick={onOff}>
      -
    </button>
  );
}
