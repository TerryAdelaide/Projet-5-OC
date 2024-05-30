// Importation du composant Link de react-router-dom pour créer des liens de navigation
import { Link } from "react-router-dom";

// Importation du fichier SCSS pour les cards
import "./card.scss";

// Définition du composant Card
const Card = (props) => {
  // Extraction de la propriété 'card' des props
  const { card } = props;

  // Retourne le JSX représentant la structure de la carte
  return (
    // Composant Link pour créer un lien navigable vers la page de location spécifique
    <Link to={`/Rental/${card.id}`} className="link">
      {/* Conteneur principal de la carte */}
      <article className="card">
        {/* Section de la carte pour aligner le texte et l'image */}
        <div className="text-align">
          {/* Image de couverture de la carte avec la source définie par card.cover */}
          <img className="card--img" src={card.cover} alt="location" />

          {/* Titre de la carte défini par card.title */}
          <p className="card--text">{card.title}</p>
          <div className="opacity"></div>
        </div>
        {/* Div pour l'effet d'opacité (overlay) sur la carte */}
      </article>
    </Link>
  );
};

// Exportation du composant Card pour utilisation dans d'autres parties de l'application
export default Card;
