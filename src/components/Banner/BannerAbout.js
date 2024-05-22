// Importation du fichier SCSS pour la bannière
import "./banniere.scss";

// Importation de l'image de la bannière About depuis les assets du projet
import bannerabout from "../../assets/banner-about.png";

// Définition du composant BannerAbout
const BannerAbout = () => {
  return (
    // Conteneur principal de la bannière About
    <div className="banner-about">
      {/* Image de la bannière About */}
      <img
        src={bannerabout}
        alt="banniere Kasa"
        className="banner-about--img"
      />
    </div>
  );
};

// Exportation du composant BannerAbout pour utilisation dans d'autres parties de l'application
export default BannerAbout;
