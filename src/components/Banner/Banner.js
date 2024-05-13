import "./banniere.scss";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="banniere Kasa" className="banner--img" />
      <div className="banner--opacity">
        <p className="banner--text">Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
};
export default Banner;
