import investmentLogo from "../../assets/investment.png";
import "./Header.css";

const Header = () => (
  <nav className="navbar navbar-dark bg-dark px-3">
    <span className="navbar-brand mb-0 h1 d-flex align-items-center">
      {/* Portfolio icons created by Eucalyp - Flaticon, For more details you can visit to (https://www.flaticon.com/free-icons/portfolio) */}
      <img
        src={investmentLogo}
        alt="Brand Logo"
        width="30"
        height="30"
        className="d-inline-block align-top me-3"
      />
      Portfolio Dashboard
    </span>
  </nav>
);

export default Header;
