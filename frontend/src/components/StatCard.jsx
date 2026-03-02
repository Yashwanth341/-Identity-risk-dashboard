const StatCard = ({ title, value, color }) => {
  return (
    <div style={{
      background: "#111",
      padding: "20px",
      borderRadius: "10px",
      color: "#fff",
      minWidth: "180px",
      borderLeft: `5px solid ${color}`
    }}>
      <h4 style={{ margin: 0, opacity: 0.8 }}>{title}</h4>
      <h2 style={{ marginTop: 10 }}>{value}</h2>
    </div>
  );
};

export default StatCard;