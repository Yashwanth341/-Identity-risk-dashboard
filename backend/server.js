const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());


// 🔹 TEMP in-memory storage (IMPORTANT)
let storedEvents = [];

// Health check
app.get("/", (req, res) => {
  res.send("Unosecur Identity Risk API is running 🚀");
});

// 🔹 POST: analyze events
app.post("/api/events", (req, res) => {
  const { events } = req.body;

  if (!events || !Array.isArray(events)) {
    return res.status(400).json({ error: "Invalid events payload" });
  }

  const analyzed = events.map((event) => {
    let risk = "Low";

    if (event.identityType === "machine" && event.failedAttempts > 2) {
      risk = "High";
    } else if (event.failedAttempts >= 3 || event.loginTime < "05:00") {
      risk = "Medium";
    }

    return {
      userId: event.userId,
      identityType: event.identityType,
      failedAttempts: event.failedAttempts,
      loginTime: event.loginTime,
      risk
    };
  });

  // 🔹 store for frontend
  storedEvents = analyzed;

  res.json({
    totalEvents: analyzed.length,
    analyzed
  });
});

// 🔹 GET: return events (for frontend table)
app.get("/api/events", (req, res) => {
  res.json(storedEvents);
});

// 🔹 GET: return risk summary (for cards + chart)
app.get("/api/risk-summary", (req, res) => {
  const summary = { Low: 0, Medium: 0, High: 0 };

  storedEvents.forEach(e => {
    summary[e.risk]++;
  });

  res.json(summary);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});