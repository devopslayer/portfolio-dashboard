import React from "react";
import "./PortfolioTable.css";
import { formatNumber } from "../../utils/formatNumber";
import usePortfolioData from "../../hooks/usePortfolioData";

const PortfolioTable = () => {
  const { sectors, loading, error } = usePortfolioData();

  if (loading) return <p>Loading data...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover table-sm">
        <thead className="table-dark text-center align-middle">
          <tr>
            <th>No</th>
            <th>Particulars</th>
            <th>Purchase Price</th>
            <th>Qty</th>
            <th>Investment</th>
            <th>Portfolio (%)</th>
            <th>NSE/BSE</th>
            <th>CMP</th>
            <th>Present Value</th>
            <th>Gain/Loss</th>
            <th>Gain/Loss (%)</th>
            <th>Market Cap</th>
            <th>P/E (TTM)</th>
            <th>Latest Earnings</th>
            <th>Revenue (TTM)</th>
            <th>EBITDA (TTM)</th>
            <th>EBITDA (%)</th>
            <th>PAT</th>
            <th>PAT (%)</th>
            <th>CFO (March 24)</th>
            <th>CFO (5 years)</th>
            <th>Free Cash Flow (5 years)</th>
            <th>Debts to Equity</th>
            <th>Book Value</th>
            <th>Revenue (%)</th>
            <th>EBITDA (%)</th>
            <th>Profit (%)</th>
            <th>Market Cap (%)</th>
            <th>Price to Sales</th>
            <th>CFO to EBITDA (%)</th>
            <th>CFO to PAT (%)</th>
            <th>Price to Book</th>
            <th>Stage-2 (Yes/No)</th>
            <th>Sold Price</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody className="text-center align-middle">
          {Object.entries(sectors).map(([sectorName, sectorData]) => {
            if (!sectorData.stocks || sectorData.stocks.length === 0)
              return null;

            return (
              <React.Fragment key={sectorName}>
                <tr className="table-light text-center fw-semibold">
                  <td></td>
                  <td>
                    {" "}
                    {sectorName.charAt(0).toUpperCase() +
                      sectorName.slice(1)}{" "}
                    Sector
                  </td>
                  <td colSpan="2"></td>
                  <td>{formatNumber(sectorData.total.investment)}</td>
                  <td>{formatNumber(sectorData.total.portfolio)}</td>
                  <td colSpan="2"></td>
                  <td>{formatNumber(sectorData.total.presentValue)}</td>
                  <td>{formatNumber(sectorData.total.gainLoss)}</td>
                  <td>{formatNumber(sectorData.total.gainLossPercentage)}%</td>
                  <td colSpan="24"></td>
                </tr>
                {sectorData.stocks.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.stockName}</td>
                    <td>{formatNumber(item.purchasePrice)}</td>
                    <td>{formatNumber(item.quantity)}</td>
                    <td>{formatNumber(item.investment)}</td>
                    <td>{formatNumber(item.portfolio) || "-"}</td>
                    <td>{formatNumber(item.exchange)}</td>
                    <td>{formatNumber(item.cmp)}</td>
                    <td>{formatNumber(item.presentValue)}</td>
                    <td className={item.gainLoss >= 0 ? "gain" : "loss"}>
                      {formatNumber(item.gainLoss)}
                    </td>
                    <td>{formatNumber(item.gainLossPercentage)}%</td>
                    <td>{formatNumber(item.marketCap)}</td>
                    <td>{formatNumber(item.peRatio)}</td>
                    <td>{formatNumber(item.earnings)}</td>
                    <td>{formatNumber(item.revenue)}</td>
                    <td>{formatNumber(item.ebitda)}</td>
                    <td>{formatNumber(item.ebitdaPercentage)}%</td>
                    <td>{formatNumber(item.pat)}</td>
                    <td>{formatNumber(item.patPercentage)}%</td>
                    <td>{formatNumber(item.cfoCurrent)}</td>
                    <td>{formatNumber(item.cfo5yr)}</td>
                    <td>{formatNumber(item.freeCashFlow5yr)}</td>
                    <td>{formatNumber(item.debtEquity)}</td>
                    <td>{formatNumber(item.bookValue)}</td>
                    <td>{formatNumber(item.revenuePercentage)}%</td>
                    <td>{formatNumber(item.ebitdaGrowthPercentage)}%</td>
                    <td>{formatNumber(item.profitPercentage)}%</td>
                    <td>{formatNumber(item.marketCapPercentage)}%</td>
                    <td>{formatNumber(item.priceToSales)}</td>
                    <td>{formatNumber(item.cfoToEbitda)}%</td>
                    <td>{formatNumber(item.cfoToPat)}%</td>
                    <td>{formatNumber(item.priceToBook)}</td>
                    <td>{formatNumber(item.stage)}</td>
                    <td>{formatNumber(item.soldPrice)}</td>
                    <td>{formatNumber(item.salePrice)}</td>
                  </tr>
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
