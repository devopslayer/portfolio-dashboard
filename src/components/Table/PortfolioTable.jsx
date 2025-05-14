import "./PortfolioTable.css";
import { mockPortfolio } from "../../utils/helpers";

const PortfolioTable = () => {
  const calculateInvestment = (item) => item.purchasePrice * item.quantity;
  const calculatePresentValue = (item) => item.cmp * item.quantity;
  const calculateGainLoss = (item) =>
    calculatePresentValue(item) - calculateInvestment(item);

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Stock</th>
            <th>Purchase Price</th>
            <th>Qty</th>
            <th>Investment</th>
            <th>CMP</th>
            <th>Present Value</th>
            <th>Gain/Loss</th>
            <th>Exchange</th>
            <th>P/E Ratio</th>
            <th>Latest Earnings</th>
          </tr>
        </thead>
        <tbody>
          {mockPortfolio.map((item) => {
            const gainLoss = calculateGainLoss(item);
            return (
              <tr key={item.id}>
                <td>{item.stockName}</td>
                <td>₹{item.purchasePrice}</td>
                <td>{item.quantity}</td>
                <td>₹{calculateInvestment(item).toFixed(2)}</td>
                <td>₹{item.cmp}</td>
                <td>₹{calculatePresentValue(item).toFixed(2)}</td>
                <td className={gainLoss >= 0 ? "gain" : "loss"}>
                  ₹{gainLoss.toFixed(2)}
                </td>
                <td>{item.exchange}</td>
                <td>{item.peRatio}</td>
                <td>{item.earnings}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
