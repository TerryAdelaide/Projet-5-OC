// Importation des bibliothèques nécessaires de React et de React Router
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importation des composants des pages spécifiques de l'application
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ErrorPage from "../pages/Error/Error";
import Rental from "../pages/Rental/Rental";

// Définition du composant de navigation principal
const Navigation = () => {
  return (
    // Définition du Router principal pour gérer la navigation dans l'application
    <Router>
      {/* Importation du composant Header en haut de chaque page */}
      <Header />
      {/* Définition des routes de l'application */}
      <Routes>
        {/* Route pour la page d'accueil ("/" et "/Kasa" mènent à la même page) */}
        {["/", "/Kasa"].map((path) => (
          <Route key={path} path={path} element={<Home />} />
        ))}
        {/* Route pour la page "About" */}
        <Route path="/About" element={<About />} />
        {/* Route pour les pages de chaque location (avec l'id correspondant) */}
        <Route path="/rental/:id" element={<Rental />} />
        {/* Route pour gérer toutes les autres URL non définies, menant à une page d'erreur */}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      {/* Importation du composant Footer en bas de chaque page */}
      <Footer />
    </Router>
  );
};

// Exportation du composant Navigation pour utilisation dans d'autres parties de l'application
export default Navigation;
