import { Link } from "react-router-dom";
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
export default Nav;
