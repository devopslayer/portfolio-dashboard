export const formatNumber = (value) => {
  if (typeof value === "number") {
    return value % 1 !== 0 ? value.toFixed(2) : value;
  }
  return value || "-";
};
