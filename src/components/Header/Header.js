// Importation du fichier SCSS pour le composant Header
import "./header.scss";
// Importation de l'image du logo
import logo from "../../assets/logo.png";
// Importation du composant Nav
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="header--logo" alt="logo Kasa" />
      <Nav />
    </div>
  );
};

// Exportation du composant Header par défaut
export default Header;
