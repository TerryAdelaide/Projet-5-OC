import { aProposData } from "./Data";
import Dropdown from "../../components/Dropdown/DropDown";
import BannerAbout from "../../components/Banner/BannerAbout";

const About = () => {
  return (
    <div>
      <BannerAbout />
      {aProposData.map((data) => (
        <Dropdown key={data.id} data={data} type="string" title={data.title} />
      ))}
    </div>
  );
};
export default About;
