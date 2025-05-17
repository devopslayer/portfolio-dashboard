import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import usePortfolioData from "../../hooks/usePortfolioData";

const GainLossBarChart = () => {
  const { sectors, loading, error } = usePortfolioData();

  const data = Object.entries(sectors).map(([sector, { total }]) => ({
    name: sector.charAt(0).toUpperCase() + sector.slice(1),
    gainLoss: parseFloat(total.gainLoss || 0),
  }));

  if (loading) return <p>Loading data...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Sector-wise Gain / Loss (₹)</h5>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="gainLoss" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GainLossBarChart;
