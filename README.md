# Identity Risk Dashboard

A mini identity-risk monitoring dashboard inspired by Unosecur, focused on visualizing access risks across human and machine identities.

---

## 🔍 Project Purpose

Identity-based attacks are one of the biggest security risks today.  
This project demonstrates how identity access events can be analyzed and visualized to identify:

- High-risk login behavior
- Excessive failed authentication attempts
- Risk distribution across identities

This is a **proof-of-work project** showcasing frontend-heavy implementation with backend risk logic.

---

## 🛠 Tech Stack

**Frontend**
- React (Vite)
- Recharts (data visualization)
- Axios
- Custom dashboard UI

**Backend**
- Node.js
- Express.js
- REST APIs

---

## 📊 Features

- Risk summary cards (Low / Medium / High / Critical)
- Risk distribution bar chart
- Access events table with:
  - User identity
  - Authentication type
  - Failed attempts
  - Login time
  - Color-coded risk level
- Supports mock data + API-driven data

---

## 🚀 How to Run Locally

### Backend
```bash
cd backend
npm install
node server.js

Runs on: http://localhost:5000



### Frontend

```bash

cd frontend
npm install
npm run dev
Runs on: http://localhost:5173



Screenshots

*\*Dashboard Overview\*\*

!\[Dashboard Overview]
(./screenshots/dashboard\_overview.png)
(./screenshots/dashboard\_overview1.png)
(./screenshots/dashboard\_overview2.png)


*\*Risk Chart\*\*
!\[Risk Chart](./screenshots/risk\_chart.png)


*\*Access Events Table\*\*
!\[Access Events Table](./screenshots/access\_events\_table.png)











## 👤 Author

Yashwanth S R  
Frontend-focused Developer  
Proof-of-work project inspired by Unosecur

