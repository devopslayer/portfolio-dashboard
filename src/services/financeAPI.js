export const fetchPortfolioData = async () => {
  try {
    const response = await fetch("/mock-data/portfolio.json");
    if (!response.ok) {
      throw new Error("Failed to load portfolio data");
    }
    const json = await response.json();
    return json.sectors;
  } catch (error) {
    throw new Error(error.message || "API error");
  }
};
