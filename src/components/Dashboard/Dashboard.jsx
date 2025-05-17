import SummaryCard from "../SummaryCard/SummaryCard";
import usePortfolioData from "../../hooks/usePortfolioData";
import SectorPieChart from "../Charts/SectorPieChart";
import GainLossBarChart from "../Charts/GainLossBarChart";
import { formatNumber } from "../../utils/formatNumber";

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
    ? formatNumber((gainLoss / totals.investment) * 100)
    : 0;

  return (
    <div className="container">
      <h2 className="mb-4">Dashboard</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
        <div className="col">
          <SummaryCard
            title="Total Investment"
            value={`₹${formatNumber(totals.investment)}`}
            bg="warning"
          />
        </div>
        <div className="col">
          <SummaryCard
            title="Present Value"
            value={`₹${formatNumber(totals.presentValue)}`}
            bg="info"
          />
        </div>
        <div className="col">
          <SummaryCard
            title="Gain / Loss"
            value={`₹${formatNumber(gainLoss)} (${gainLossPercentage}%)`}
            bg={gainLoss >= 0 ? "success" : "danger"}
            textColor="white"
          />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <SectorPieChart />
        </div>
        <div className="col">
          <GainLossBarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
