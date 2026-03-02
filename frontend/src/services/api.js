import axios from "axios";

const API = "http://localhost:5000";

/**
 * Sends sample identity events to backend
 * Backend analyzes & returns risk-tagged events
 */
export const getEvents = () =>
  axios.post(`${API}/api/events`, {
    events: [
      {
        userId: "user1",
        identityType: "human",
        loginTime: "02:30",
        failedAttempts: 4
      },
      {
        userId: "user2",
        identityType: "machine",
        loginTime: "10:00",
        failedAttempts: 1
      }
    ]
  });

/**
 * Fetches aggregated risk summary
 */
export const getRiskSummary = () =>
  axios.get(`${API}/api/risk-summary`);