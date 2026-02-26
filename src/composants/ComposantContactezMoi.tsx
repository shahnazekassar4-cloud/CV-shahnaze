import { listeCoordonnees } from "../listes/listeCoordonnees";
import photoImg from "../img/photo-1.jpg";
import { useState } from "react";
import Popup from "./Popup";

export default function BoutonContactezMoi() {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  const openPopup = () => {
    setPopupVisible(true);
  };
  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-center">
        <button className="bouton-contactez-moi" onClick={openPopup}>
          Contactez-moi !
        </button>
      </div>
      {/* {popupVisible == true && <ComposantContactezMoi onClose={closePopup} />} */}
      <Popup isVisible={popupVisible} onClose={closePopup}>
        <div className="flex row items-end gap-10">
          <img src={photoImg} className="w-20 photo mb-5" />
          <ul>
            {listeCoordonnees.map((coo) => {
              return (
                <li className="liste-position">
                  <img src={coo.logo} className="icone" /> {coo.info}
                </li>
              );
            })}
          </ul>
        </div>
      </Popup>
    </div>
  );
}
