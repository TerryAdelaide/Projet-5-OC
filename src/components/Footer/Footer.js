import "./footer.scss";
import whiteLogo from "../../assets/white-logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <img src={whiteLogo} className="footer--logo" alt="logo Kasa" />
      <div className="footer--align">
        <i className="fa-regular fa-copyright"></i>
        <p className="footer--text">2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};
export default Footer;
