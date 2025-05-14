import Header from "../../components/Header/Header";
import PortfolioTable from "../../components/Table/PortfolioTable";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2 className="mb-4">My Portfolio</h2>
        <PortfolioTable />
      </div>
    </>
  );
};

export default Home;
