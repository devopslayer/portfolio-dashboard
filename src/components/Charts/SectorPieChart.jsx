import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import usePortfolioData from "../../hooks/usePortfolioData";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7f50",
  "#00c49f",
  "#ffbb28",
];

const SectorPieChart = () => {
  const { sectors, loading, error } = usePortfolioData();

  const data = Object.entries(sectors).map(([sector, { total }]) => ({
    name: sector.charAt(0).toUpperCase() + sector.slice(1),
    value: parseFloat(total.investment),
  }));

  if (loading) return <p>Loading data...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Investment Distribution by Sector</h5>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SectorPieChart;
