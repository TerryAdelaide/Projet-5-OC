// Importation du fichier SCSS pour le Footer
import "./footer.scss";
// Importation de l'image
import whiteLogo from "../../assets/white-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      {/* Affichage du logo */}
      <img src={whiteLogo} className="footer--logo" alt="logo Kasa" />
      {/* Conteneur pour aligner les éléments du footer */}
      <div className="footer--align">
        {/* Icône de copyright */}
        <i className="fa-regular fa-copyright"></i>
        <p className="footer--text">2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

// Exportation du composant Footer par défaut
export default Footer;
