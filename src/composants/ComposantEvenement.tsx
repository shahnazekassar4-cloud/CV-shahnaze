import type { Evenement } from "../listes/listeEvenements";
import { useState } from "react";
import MinusIcon from "./Icones/MinusIcon";
import PlusIcon from "./Icones/PlusIcon";
import { ComposantCompetences } from "./ComposantCompetences";

export function ComposantEvenement(props: Evenement) {
  const [contentIsVisible, setContentIsVisible] = useState<boolean>(false);
  const toggleContent = () => {
    setContentIsVisible(!contentIsVisible);
  };
  return (
    <div className="bodures-evenement" onClick={toggleContent}>
      <div className="evenement-position">
        <div className="w-fit md:w-30 flex justify-center">
          <img src={props.img} className="logo" />
        </div>
        <div className="w-full ">
          <div className="date-position">
            <div className="evenement-titre" style={{ color: props.couleur }}>
              {props.titre}
            </div>
            <div className="evenement-date" style={{ color: props.couleur }}>
              {props.date}
            </div>
          </div>
          <div className="evenement-description">{props.description}</div>
          {contentIsVisible == true && (
            <div className="mt-3 evenement-description">{props.content} </div>
          )}
          {
            <ComposantCompetences
              listeCompetence={props.competences}
              couleur={props.couleur}
            />
          }{" "}
        </div>
        {contentIsVisible ? (
          <button className="bouton" style={{ color: props.couleur }}>
            <MinusIcon />
          </button>
        ) : (
          <button className="bouton" style={{ color: props.couleur }}>
            <PlusIcon />
          </button>
        )}
      </div>
    </div>
  );
}
