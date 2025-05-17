import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="home-layout">
      <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="main-content">
        <Header toggleSidebar={toggleSidebar} />
        <div className={`page-content ${isSidebarOpen ? "shifted" : ""}`}>
          <div className="page-container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
