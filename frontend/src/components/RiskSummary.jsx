function RiskSummary({ summary }) {
  const cardStyle = (color) => ({
    flex: 1,
    padding: "20px",
    borderRadius: "12px",
    background: "#111",
    color: "#fff",
    borderLeft: `6px solid ${color}`,
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  });

  return (
    <div style={{ display: "flex", gap: 20, marginBottom: 30 }}>
      <div style={cardStyle("green")}>
        <h4>Low Risk</h4>
        <h2>{summary.low || 0}</h2>
      </div>

      <div style={cardStyle("orange")}>
        <h4>Medium Risk</h4>
        <h2>{summary.medium || 0}</h2>
      </div>

      <div style={cardStyle("red")}>
        <h4>High Risk</h4>
        <h2>{summary.high || 0}</h2>
      </div>
    </div>
  );
}

export default RiskSummary;