import "./StatisticsCard.css";

function StatisticsCard({
  title,
  value,
  color,
}) {
  return (
    <div
      className="stats-card"
      style={{
        borderTop: `5px solid ${color}`,
      }}
    >
      <h4>{title}</h4>

      <h2>{value}</h2>
    </div>
  );
}

export default StatisticsCard;