// Importation de React
import React from "react";
// Importation de la composante Link depuis react-router-dom
import { Link } from "react-router-dom";
// Importation du fichier SCSS pour le composant Error
import "./error.scss";

const Error = () => {
  return (
    <div className="error">
      <p className="error--404">404</p>
      <p className="error--text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/Kasa" className="error--link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

// Exportation du composant Error par défaut
export default Error;
