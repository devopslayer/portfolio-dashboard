import { NavLink } from "react-router-dom";
import { FiHome, FiBarChart2 } from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = ({ isOpen, setIsSidebarOpen }) => {
  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-content mt-3">
        <NavLink
          to="/portfolio-dashboard/dashboard"
          className="nav-link text-white mb-3"
          activeclassname="active"
          onClick={handleNavClick}
        >
          <FiHome className="me-2" /> Dashboard
        </NavLink>
        <NavLink
          to="/portfolio-dashboard/portfolio"
          className="nav-link text-white mb-3"
          activeclassname="active"
          onClick={handleNavClick}
        >
          <FiBarChart2 className="me-2" /> My Portfolio
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
