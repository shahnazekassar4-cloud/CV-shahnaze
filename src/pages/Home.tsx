import EnTete from "../composants/EnTete";
import BoutonContactezMoi from "../composants/ComposantContactezMoi";
import { listeEcoles } from "../listes/listeEvenements";
import { listeExp } from "../listes/listeEvenements";
import { listeProjets } from "../listes/listeEvenements";
import { ComposantEvenement } from "../composants/ComposantEvenement";
import { listeCompetences } from "../listes/listeCartes";
import { listeInterets } from "../listes/listeCartes";
import { ComposantCarte } from "../composants/ComposantCarte";
import { Permis } from "../composants/Permis";

export type CouleurCompetenceProps = { couleur: string };

const Home = () => {
  return (
    <div>
      <EnTete />
      <BoutonContactezMoi />
      <div className="parties">
        <h2 className="chapitre">MES FORMATIONS</h2>
        {listeEcoles.map((event) => {
          return (
            <ComposantEvenement
              key={event.id}
              id={event.id}
              img={event.img}
              date={event.date}
              titre={event.titre}
              description={event.description}
              couleur={event.couleur}
              content={event.content}
              competences={event.competences}
            />
          );
        })}
      </div>
      <div className="parties">
        <h2 className="chapitre">MES COMPETENCES</h2>
        <div className="flex justify-center mt-10 gap-10">
          <div className="carte-competences-position relative md:w-130 min-h-155">
            {listeCompetences.map((carte) => {
              return (
                <ComposantCarte
                  key={carte.id}
                  id={carte.id}
                  titre={carte.titre}
                  description={carte.description}
                  couleur={carte.couleur}
                  couleurOmbre={carte.couleurOmbre}
                  position={carte.position}
                />
              );
            })}
            <Permis />
          </div>
          <div className="hidden md:flex row items-center justify-center">
            <img src={"/motivations.png"} className="w-80" />
          </div>
        </div>
      </div>
      <div className="parties">
        <h2 className="chapitre">MES EXPERIENCES PROFESSIONNELLES</h2>
        {listeExp.map((event) => {
          return (
            <ComposantEvenement
              key={event.id}
              id={event.id}
              img={event.img}
              date={event.date}
              titre={event.titre}
              description={event.description}
              couleur={event.couleur}
              content={event.content}
              competences={event.competences}
            />
          );
        })}
      </div>
      <div className="parties">
        <h2 className="chapitre">PROJETS, EVENEMENTS, ASSOCIATIF</h2>
        {listeProjets.map((event) => {
          return (
            <ComposantEvenement
              key={event.id}
              id={event.id}
              img={event.img}
              date={event.date}
              titre={event.titre}
              description={event.description}
              couleur={event.couleur}
              content={event.content}
              competences={event.competences}
            />
          );
        })}
      </div>
      <div className="parties">
        <h2 className="chapitre">
          MES PROJETS PERSONNELS ET CENTRES D'INTERETS
        </h2>
        <div className="carte-interets-position">
          {listeInterets.map((carte) => {
            return (
              <ComposantCarte
                key={carte.id}
                id={carte.id}
                titre={carte.titre}
                description={carte.description}
                couleur={carte.couleur}
                couleurOmbre={carte.couleurOmbre}
                position={carte.position}
              />
            );
          })}
        </div>
      </div>
      <BoutonContactezMoi />
      <div className="parties">
        <a
          className="telechargement"
          href="https://drive.google.com/uc?export=download&id=1RWjyybfZgKfMXoSwhIgE56HzrJMOBDBN"
        >
          Télécharger mon CV au format PDF
        </a>
      </div>
    </div>
  );
};

export default Home;
