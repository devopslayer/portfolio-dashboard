import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import Portfolio from "../pages/Portfolio/Portfolio";
import NoPageError from "../pages/NoPageError/NoPageError";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio-dashboard/" element={<Home />}>
          <Route
            index
            element={<Navigate to="/portfolio-dashboard/dashboard" />}
          />
          <Route
            path="/portfolio-dashboard/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/portfolio-dashboard/portfolio"
            element={<Portfolio />}
          />
          <Route path="/portfolio-dashboard/*" element={<NoPageError />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
