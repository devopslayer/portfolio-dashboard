import SummaryCard from "../SummaryCard/SummaryCard";
import usePortfolioData from "../../hooks/usePortfolioData";

const Dashboard = () => {
  const { sectors } = usePortfolioData();

  const totals = Object.values(sectors).reduce(
    (acc, sector) => {
      acc.investment += sector.total?.investment || 0;
      acc.presentValue += sector.total?.presentValue || 0;
      return acc;
    },
    { investment: 0, presentValue: 0 }
  );

  const gainLoss = totals.presentValue - totals.investment;
  const gainLossPercentage = totals.investment
    ? ((gainLoss / totals.investment) * 100).toFixed(2)
    : 0;

  return (
    <div className="container">
      <h2 className="mb-4">Dashboard</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
        <div className="col">
          <SummaryCard
            title="Total Investment"
            value={`₹${totals.investment.toFixed(2)}`}
            bg="warning"
          />
        </div>
        <div className="col">
          <SummaryCard
            title="Present Value"
            value={`₹${totals.presentValue.toFixed(2)}`}
            bg="info"
          />
        </div>
        <div className="col">
          <SummaryCard
            title="Gain / Loss"
            value={`₹${gainLoss.toFixed(2)} (${gainLossPercentage}%)`}
            bg={gainLoss >= 0 ? "success" : "danger"}
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
