import "./banniere.scss";
import bannerabout from "../../assets/banner-about.png";

const BannerAbout = () => {
  return (
    <div className="banner-about">
      <img
        src={bannerabout}
        alt="banniere Kasa"
        className="banner-about--img"
      />
    </div>
  );
};
export default BannerAbout;
