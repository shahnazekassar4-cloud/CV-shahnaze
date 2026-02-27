import photoImg from "../img/photo-1.jpg";
import InfoIcon from "./Icones/InfoIcon";
export default function EnTete() {
  return (
    <div className="entete mt-10">
      <div className="flex relative left-119">
        <InfoIcon />
      </div>
      <div className="w-180 ">
        <div className="flex items-end">
          <img src={photoImg} className="photo h-34 mr-10 ml-3" />
          <div>
            <h1 className="sous-en-tete-0">SHAHNAZE KASSAR</h1>
            <div className="sous-en-tete-1">
              <p>
                <b>Ingénieure</b> procédés en eau, énergie, environnement.
              </p>
              <p>
                Conseil en développement durable et
                <b> transition socio-écologique</b>.
              </p>
            </div>
          </div>
        </div>
        <div className="sous-en-tete-2">
          Je conçois et optimise des
          <b> solutions techniques</b> durables tout en intégrant les enjeux
          socio-écologiques actuels. Je recherche un poste à impact dans
          l’énergie, la mobilité ou l’environnement pour donner une dimension
          <b> engagée</b> à mon parcours professionnel.
        </div>
      </div>
    </div>
  );
}
