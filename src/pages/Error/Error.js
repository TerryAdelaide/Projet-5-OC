import React from "react";
import { Link } from "react-router-dom";
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

export default Error;
