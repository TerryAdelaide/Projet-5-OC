// Importation du fichier SCSS pour le composant Gallery
import "./gallery.scss";
// Importation du composant Card
import Card from "../Cards/Card";
// Importation des données depuis le fichier JSON
import data from "../../datas/data.json";

const Gallery = () => {
  return (
    <div className="gallery">
      {/* Affichage de chaque élément */}
      {data.map((item) => (
        <Card key={item.id} card={item} /> // Affichage d'une carte pour chaque élément de données
      ))}
    </div>
  );
};

// Exportation du composant Gallery par défaut
export default Gallery;
