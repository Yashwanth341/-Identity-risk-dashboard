import { useEffect, useState } from "react";
import { getEvents, getRiskSummary } from "./services/api";
import RiskSummary from "./components/RiskSummary";
import RiskChart from "./components/RiskChart";
import EventTable from "./components/EventTable";
import StatCard from "./components/StatCard";
import "./App.css";

const mockEvents = [
  {
    userId: "john.doe",
    identityType: "Password",
    failedAttempts: 1,
    loginTime: "2026-03-02 09:12",
    risk: "LOW"
  },
  {
    userId: "admin.root",
    identityType: "OTP",
    failedAttempts: 5,
    loginTime: "2026-03-02 10:03",
    risk: "HIGH"
  },
  {
    userId: "sara.hr",
    identityType: "SSO",
    failedAttempts: 2,
    loginTime: "2026-03-02 10:45",
    risk: "MEDIUM"
  },
  {
    userId: "unknown_user",
    identityType: "Password",
    failedAttempts: 8,
    loginTime: "2026-03-02 11:18",
    risk: "CRITICAL"
  }
];

const calculateRiskScore = (event) => {
  let score = event.failedAttempts * 10;

  if (event.identityType === "OTP") score += 15;
  if (event.identityType === "SSO") score += 10;

  if (event.risk === "HIGH") score += 20;
  if (event.risk === "CRITICAL") score += 30;

  return Math.min(score, 100);
};

function App() {
  const [events, setEvents] = useState(
  mockEvents.map(e => ({
    ...e,
    riskScore: calculateRiskScore(e)
  }))
);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    getEvents()
      .then(res => setEvents(res.data.analyzed || []))
      .catch(err => console.error("Events error", err));

    getRiskSummary()
      .then(res => setSummary(res.data))
      .catch(err => console.error("Summary error", err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Identity Risk Dashboard </h2><div style={{ display: "flex", gap: 20, marginBottom: 30 }}>
  <StatCard title="High Risk" value={summary.high || 0} color="red" />
  <StatCard title="Medium Risk" value={summary.medium || 0} color="orange" />
  <StatCard title="Low Risk" value={summary.low || 0} color="green" />
  <StatCard title="Total Events" value={summary.totalEvents || 0} color="#0af" />
</div>

      <RiskSummary summary={summary} />
      <RiskChart summary={summary} />
      <EventTable events={events} />
    </div>
  );
}

export default App;