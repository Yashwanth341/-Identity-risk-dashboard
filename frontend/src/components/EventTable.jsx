function EventTable({ events }) {
  const riskColor = (risk) => {
    switch (risk) {
      case "CRITICAL":
        return "#b71c1c";
      case "HIGH":
        return "#f57c00";
      case "MEDIUM":
        return "#fbc02d";
      case "LOW":
        return "#2e7d32";
      default:
        return "#555";
    }
  };

  return (
    <div style={{ marginTop: 40 }}>
      <h3 style={{ marginBottom: 12 }}>🔐 Access Events</h3>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#0b0b0a",
          boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
          borderRadius: 8,
          overflow: "hidden"
        }}
      >
        <thead style={{ background: "#020202" }}>
          <tr>
            <th style={th}>👤 User</th>
            <th style={th}>🧬 Identity</th>
            <th style={th}>❌ Failed Attempts</th>
            <th style={th}>⏱ Login Time</th>
            <th style={th}>⚠ Risk Level</th>
          </tr>
        </thead>

        <tbody>
          {events.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: 20 }}>
                No access events found
              </td>
            </tr>
          )}

          {events.map((e, i) => (
            <tr
              key={i}
              style={{
                background: i % 2 === 0 ? "#111" : "#0b0b0a"
              }}
            >
              <td style={td}>{e.userId}</td>
              <td style={td}>{e.identityType}</td>
              <td style={td}>{e.failedAttempts}</td>
              <td style={td}>{e.loginTime}</td>
              <td style={td}>
                <span
                  style={{
                    padding: "6px 14px",
                    borderRadius: 14,
                    fontWeight: 600,
                    fontSize: 12,
                    color: "#fff",
                    background: riskColor(e.risk)
                  }}
                >
                  {e.risk} ({e.riskScore})
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  padding: 14,
  textAlign: "left",
  fontWeight: 600,
  fontSize: 13,
  borderBottom: "1px solid #333",
  color: "#ddd"
};

const td = {
  padding: 14,
  borderBottom: "1px solid #1f1f1f",
  fontSize: 13,
  color: "#ccc"
};

export default EventTable;