import "./SummaryCard.css";

const SummaryCard = ({ title, value, bg = "light", textColor = "dark" }) => {
  return (
    <div className={`card text-${textColor} bg-${bg} mb-3 shadow-sm`}>
      <div className="card-body text-center">
        <h6 className="card-title mb-2">{title}</h6>
        <h5 className="card-text fw-bold">{value}</h5>
      </div>
    </div>
  );
};

export default SummaryCard;
