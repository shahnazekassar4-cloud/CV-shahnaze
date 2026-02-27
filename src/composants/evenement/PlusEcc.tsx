import eccImg from "../../img/eccImg.jpeg";

export function PlusEcc() {
  return (
    <div>
      <img src={eccImg} className="mb-3 rounded-2xl" />
      <div className="evenement-description">
        Durant mon année au Canada, j’ai eu l’occasion de coorganiser une
        journée de conférence pour{" "}
        <span className="text-green-600">
          “repenser la prise de décision dans la transition socio-écologique”
        </span>
        . J’ai notamment cocréé un atelier participatif qui avait pour but
        d’expérimenter différentes méthodes de prise de décision au travers d’un
        scénario inscrit dans les enjeux actuels du Québec. Le public de 70
        personnes était constitué d’élus, de professionnels, de chercheurs et
        d’étudiants. J’étais notamment responsable de la{" "}
        <span className="text-green-600">
          gestion de la trésorerie et des partenariats
        </span>
        . J’ai alors pu travailler avec de nombreux acteurs publics comme
        privés, animer un panel et travailler en équipe pour gérer des{" "}
        <span className="text-green-600">situations d’urgence</span> en temps
        réel.{" "}
        <u>
          <a
            href="https://colloques.uqac.ca/ecoconseil/sources-recommandees/"
            target="_blank"
          >
            ...voir le site
          </a>
        </u>
      </div>
    </div>
  );
}
