import { FiMenu } from "react-icons/fi";
import investmentLogo from "../../assets/investment.png";
import "./Header.css";

const Header = ({ toggleSidebar }) => (
  <div className="header-fixed">
    <FiMenu className="menu-icon me-3" onClick={toggleSidebar} />
    <img
      src={investmentLogo}
      alt="Brand Logo"
      width="30"
      height="30"
      className="d-inline-block align-top me-2"
    />
    <span>Portfolio Dashboard</span>
  </div>
);

export default Header;
