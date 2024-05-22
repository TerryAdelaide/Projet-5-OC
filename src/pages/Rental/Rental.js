// Importation de React et de useEffect, useState
import React, { useEffect, useState } from "react";
// Importation de useNavigate et useParams depuis react-router-dom
import { useNavigate, useParams } from "react-router-dom";
// Importation des données depuis le fichier JSON
import data from "../../datas/data.json";
// Importation du composant Carousel
import Carousel from "../../components/Carousel/Carousel";
// Importation du composant RentInfo
import RentInfo from "../../components/RentInfo/RentInfo";

const Rental = () => {
  const { id } = useParams(); // Récupération des paramètres de l'URL
  const navigation = useNavigate(); // Récupération de la fonction de navigation
  const [activeLogement, setActiveLogement] = useState(null); // Déclaration de l'état pour stocker les détails du logement actif
  const [loading, setLoading] = useState(true); // Déclaration de l'état pour gérer l'état de chargement

  useEffect(() => {
    // Utilisation de useEffect pour charger les données du logement actif
    const index = data.findIndex((item) => item.id === id); // Recherche de l'index du logement dans les données
    if (index < 0) {
      // Si le logement n'est pas trouvé
      navigation("/404"); // Redirection vers la page d'erreur 404
    } else {
      // Si le logement est trouvé
      setActiveLogement(data[index]); // Mise à jour des détails du logement actif
      setLoading(false); // Fin du chargement
    }
  }, [id, navigation]); // Les dépendances incluent l'ID du logement et la fonction de navigation

  return loading ? ( // Rendu conditionnel basé sur l'état de chargement
    <div>Loading...</div> // Affichage d'un message de chargement lors du chargement des données
  ) : (
    <div>
      <Carousel data={activeLogement} />{" "}
      {/* Affichage du Carousel avec les données du logement actif */}
      <RentInfo data={activeLogement} />{" "}
      {/* Affichage des informations de location avec les données du logement actif */}
    </div>
  );
};

// Exportation du composant Rental par défaut
export default Rental;
