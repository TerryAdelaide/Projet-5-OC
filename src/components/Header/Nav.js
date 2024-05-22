// Importation de la composante Link depuis react-router-dom
import { Link } from "react-router-dom";
// Importation du fichier SCSS pour le composant Nav
import "./nav.scss";

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/Kasa" className="nav--link">
          Accueil
        </Link>
        <Link to="/About" className="nav--link">
          À propos
        </Link>
      </nav>
    </div>
  );
};

// Exportation du composant Nav par défaut
export default Nav;
