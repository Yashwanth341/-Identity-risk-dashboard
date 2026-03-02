import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell
} from "recharts";

function RiskChart({ summary }) {
  const data = [
    { name: "Low", value: summary.low || 0, color: "#22c55e" },
    { name: "Medium", value: summary.medium || 0, color: "#f59e0b" },
    { name: "High", value: summary.high || 0, color: "#ef4444" }
  ];

  return (
    <div
      style={{
        background: "#0f172a",
        padding: "20px",
        borderRadius: "14px",
        marginBottom: "30px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.4)"
      }}
    >
      <h3 style={{ color: "#fff", marginBottom: "10px" }}>
        Risk Distribution
      </h3>

      <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px" }}>
        Overview of identity risks detected in the system
      </p>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="name" stroke="#cbd5f5" />
          <YAxis stroke="#cbd5f5" />
          <Tooltip
            cursor={{ fill: "rgba(255,255,255,0.05)" }}
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid #334155",
              borderRadius: "8px",
              color: "#fff"
            }}
          />
          <Bar
            dataKey="value"
            radius={[8, 8, 0, 0]}
            animationDuration={900}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RiskChart;