const express = require("express");
const calculateRisk = require("../utils/riskCalculator");

const router = express.Router();

let events = [];

router.post("/events", (req, res) => {
  const incomingEvents = req.body.events;

  const processed = incomingEvents.map(event => ({
    ...event,
    risk: calculateRisk(event)
  }));

  events = processed;
  res.json({ message: "Events processed", data: events });
});

router.get("/events", (req, res) => {
  res.json(events);
});

router.get("/risk-summary", (req, res) => {
  const summary = { Low: 0, Medium: 0, High: 0 };

  events.forEach(e => summary[e.risk]++);
  res.json(summary);
});

module.exports = router;