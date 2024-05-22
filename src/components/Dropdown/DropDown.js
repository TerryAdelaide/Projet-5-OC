// Importation de React et de la fonction useState depuis React
import React, { useState } from "react";
// Importation du fichier SCSS pour le composant dropdown
import "./dropdown.scss";
// Importation de l'image de la flèche pour le dropdown
import dropdownArrow from "../../assets/Vector.png";

// création de la fonction du composant Dropdown prenant des props en argument
function Dropdown(props) {
  // Destructuration des props pour obtenir title et data
  const { title, data } = props;
  // Utilisation de useState pour gérer l'état du dropdown, initialement fermé
  const [dropdown, setOpened] = useState(false);

  // Si le dropdown est fermé
  if (dropdown === false) {
    return (
      <div className="dropdown">
        <div className="dropdown--head" style={{ borderRadius: "10px" }}>
          <div className="dropdown--title">{title}</div>
          <img
            src={dropdownArrow}
            alt="dropdown arrow"
            className="dropdown--arrow"
            onClick={() => {
              setOpened(true); // Au clic sur la flèche, ouverture du dropdown
            }}
          />
        </div>
      </div>
    );
  } else {
    // Si le dropdown est ouvert
    return (
      <div className="dropdown">
        <div className="dropdown--head">
          <div className="dropdown--title">{title}</div>
          <img
            src={dropdownArrow}
            alt="dropdown arrow"
            className="dropdown--arrow"
            onClick={() => {
              setOpened(false); // Au clic sur la flèche, fermeture du dropdown
            }}
            style={{ transform: "rotate(180deg)" }} // Rotation de la flèche vers le haut pour indiquer la fermeture
          />
        </div>
        <div>
          {" "}
          {/* Contenu du dropdown */}
          {data.description ? (
            <p className="dropdown--description">{data.description}</p> // Affichage de la description
          ) : (
            <ul className="dropdown--description">
              {data.map((equip, i) => (
                <li key={i} className="dropdown--equip">
                  {equip}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
// Exportation du composant Dropdown par défaut
export default Dropdown;
