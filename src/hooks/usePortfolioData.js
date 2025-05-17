import { useEffect, useState } from "react";
import { fetchPortfolioData } from "../services/financeAPI";

const usePortfolioData = () => {
  const [sectors, setSectors] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      setLoading(true);
      const sectorData = await fetchPortfolioData();
      setSectors(sectorData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 15000);
    return () => clearInterval(interval);
  }, []);

  return { sectors, loading, error };
};

export default usePortfolioData;
