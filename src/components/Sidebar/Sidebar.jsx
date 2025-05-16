import { NavLink } from "react-router-dom";
import { FiHome, FiBarChart2 } from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => (
  <div className={`sidebar ${isOpen ? "open" : ""}`}>
    <div className="sidebar-content mt-3">
      <NavLink
        to="/dashboard"
        className="nav-link text-white mb-3"
        activeclassname="active"
      >
        <FiHome className="me-2" /> Dashboard
      </NavLink>
      <NavLink
        to="/portfolio"
        className="nav-link text-white mb-3"
        activeclassname="active"
      >
        <FiBarChart2 className="me-2" /> My Portfolio
      </NavLink>
    </div>
  </div>
);

export default Sidebar;
