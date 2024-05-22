// Importation des données spécifiques à la page Data
import { aProposData } from "./Data";
// Importation du composant Dropdown
import Dropdown from "../../components/Dropdown/DropDown";
// Importation du composant BannerAbout
import BannerAbout from "../../components/Banner/BannerAbout";

const About = () => {
  return (
    <div>
      <BannerAbout />
      {aProposData.map(
        (
          data // Récupération des données spécifiques à la page Data
        ) => (
          <Dropdown
            key={data.id}
            data={data}
            type="string"
            title={data.title}
          /> // Affichage d'un Dropdown pour chaque élément de données
        )
      )}
    </div>
  );
};

// Exportation du composant About par défaut
export default About;
