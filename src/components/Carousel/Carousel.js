// Importation de React et du hook useState pour gérer l'état local du composant
import React, { useState } from "react";

// Importation des images des flèches pour la navigation dans le carousel
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";

// Importation du fichier SCSS pour le carousel
import "./carousel.scss";

// Définition du composant Carousel, qui accepte des props
function Carousel(props) {
  // Extraction de la propriété 'data' des props
  const { data } = props;

  // Déclaration de l'état 'index' pour suivre l'image actuellement affichée, initialisée à 0
  const [index, setIndex] = useState(0);

  // Fonction pour incrémenter l'index et afficher la prochaine image
  const increment = () => {
    let newIndex = index + 1;
    if (newIndex === data.pictures.length) {
      // Si on atteint la fin des images, revenir à la première image
      setIndex(0);
    } else {
      // Sinon, passer à l'image suivante
      setIndex(newIndex);
    }
  };

  // Fonction pour décrémenter l'index et afficher l'image précédente
  const decrement = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      // Si on est à la première image, aller à la dernière image
      setIndex(data.pictures.length - 1);
    } else {
      // Sinon, revenir à l'image précédente
      setIndex(newIndex);
    }
  };

  // Retourne le JSX représentant la structure du carousel
  return data.pictures.length === 1 ? (
    // Si il y a seulement une image, afficher seulement cette image
    <div className="carousel">
      <img
        src={data.pictures[index]}
        alt="location"
        className="carousel--img"
      />
    </div>
  ) : (
    // Sinon, afficher le carousel complet avec les flèches de navigation
    <div className="carousel">
      {/* Flèche gauche pour décrémenter l'index */}
      <img
        src={arrowLeft}
        alt="fleche gauche"
        className="arrow arrow-left"
        onClick={decrement}
      />
      {/* Flèche droite pour incrémenter l'index */}
      <img
        src={arrowRight}
        alt="fleche droite"
        className="arrow arrow-right"
        onClick={increment}
      />
      {/* Image actuellement affichée dans le carousel */}
      <img
        src={data.pictures[index]}
        alt="location"
        className="carousel--img"
      />
      {/* Compteur pour indiquer la position actuelle dans la série d'images */}
      <p className="carousel--counter">
        {index + 1}/{data.pictures.length}
      </p>
    </div>
  );
}

// Exportation du composant Carousel pour utilisation dans d'autres parties de l'application
export default Carousel;
