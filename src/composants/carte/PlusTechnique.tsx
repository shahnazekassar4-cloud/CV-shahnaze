export function PlusTechnique() {
  const liste = [
    "Microsoft Office",
    "Notion",
    "QGIS",
    "Blender",
    "SketchUp",
    "LibreCad",
    "Epice Energie",
    "Helioscope",
    "Prosim",
    "Fluent",
    "Matlab",
    "TypeScript",
    "HTML",
    "React",
    "VBA",
    "CSS",
  ];

  return (
    <ul className="competences-container-cartes">
      {liste.map((el) => {
        return <li className="competences-techniques">{el}</li>;
      })}
    </ul>
  );
}
