function calculateRisk(event) {
  if (event.failedAttempts > 3) return "High";

  const hour = parseInt(event.loginTime.split(":")[0]);
  if (hour >= 0 && hour <= 5) return "Medium";

  return "Low";
}

module.exports = calculateRisk;