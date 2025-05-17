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
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="*" element={<NoPageError />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
