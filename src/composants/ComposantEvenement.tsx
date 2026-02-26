import type { Evenement } from "../listes/listeEvenements";
import { useState } from "react";
import type { ReactNode } from "react";
import MinusIcon from "./Icones/MinusIcon";
import PlusIcon from "./Icones/PlusIcon";

type BoutonProps = {
  couleur: string;
  onClick: () => void;
  children: ReactNode;
};
type contentProps = { content: ReactNode };

export function ComposantEvenement(event: Evenement) {
  const [contentIsVisible, setContentIsVisible] = useState<boolean>(false);
  const toggleContent = () => {
    setContentIsVisible(!contentIsVisible);
  };
  return (
    <div className=" bodures-evenement" onClick={toggleContent}>
      <div className="evenement-position">
        <div className="w-30">
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
          {contentIsVisible == true && (
            <PlusEvenement content={event.content} />
          )}
          {event.competences}
        </div>
        {contentIsVisible ? (
          <Bouton
            couleur={event.couleur}
            onClick={() => setContentIsVisible(false)}
          >
            <MinusIcon />
          </Bouton>
        ) : (
          <Bouton
            couleur={event.couleur}
            onClick={() => setContentIsVisible(true)}
          >
            <PlusIcon />
          </Bouton>
        )}
      </div>
    </div>
  );
}

export function PlusEvenement(props: contentProps) {
  return <div className="mt-3">{props.content}</div>;
}

export function Bouton({ couleur, onClick, children }: BoutonProps) {
  return (
    <button className="bouton" style={{ color: couleur }} onClick={onClick}>
      {children}
    </button>
  );
}
