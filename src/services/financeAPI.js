export const fetchPortfolioData = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.BASE_URL}mock-data/portfolio.json`
    );
    if (!response.ok) {
      throw new Error("Failed to load portfolio data");
    }
    const json = await response.json();
    return json.sectors;
  } catch (error) {
    throw new Error(error.message || "API error");
  }
};
