import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import PortfolioTable from "../components/Table/PortfolioTable";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="portfolio" element={<PortfolioTable />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
