export function PlusOtalents() {
  return (
    <div evenement-description>
      <p className="evenement-description"> 🠒 Vidéo promotionnelle</p>
      <div className="flex justify-center">
        <iframe
          width="620"
          height="280"
          src="https://www.youtube.com/embed/7X1qljHoGuk?si=06xvJn1M9WUrZ5iY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ border: "2px solid transparent", borderRadius: "10px" }}
        ></iframe>
      </div>
      <p className="evenement-description"> 🠒 Vidéo promotionnelle</p>
    </div>
  );
}
