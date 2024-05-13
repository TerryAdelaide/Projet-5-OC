import "./header.scss";
import logo from "../../assets/logo.png";
import Nav from "./Nav";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="header--logo" alt="logo Kasa" />
      <Nav />
    </div>
  );
};
export default Header;
