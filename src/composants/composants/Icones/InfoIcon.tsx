import { useState } from "react";
type popupProps = { onClose: () => void };

function InfoIcon() {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const openPopup = () => {
    setPopupVisible(true);
  };
  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.2857142857142858"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-badge-info-icon lucide-badge-info text-[#646cff] bouton-info "
        onClick={openPopup}
      >
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <line x1="12" x2="12" y1="16" y2="12" />
        <line x1="12" x2="12.01" y1="8" y2="8" />
      </svg>
      {popupVisible == true && <PopupInfo onClose={closePopup} />}
    </div>
  );
}
export default InfoIcon;

function PopupInfo(props: popupProps) {
  return (
    <div className="popup-layout" onClick={props.onClose}>
      <div className="popup">
        <button onClick={props.onClose} className="bouton-croix">
          ×
        </button>
        <div>hello</div>
      </div>
    </div>
  );
}
