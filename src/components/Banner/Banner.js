// Importation du fichier SCSS pour la bannière
import "./banniere.scss";

// Importation de l'image de la bannière depuis les assets du projet
import banner from "../../assets/banner.png";

// Définition du composant Banner
const Banner = () => {
  return (
    // Conteneur principal de la bannière
    <div className="banner">
      {/* Image de la bannière */}
      <img src={banner} alt="banniere Kasa" className="banner--img" />
      {/* Overlay de la bannière pour l'effet d'opacité */}
      <div className="banner--opacity">
        <p className="banner--text">Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
};

// Exportation du composant Banner pour utilisation dans d'autres parties de l'application
export default Banner;
