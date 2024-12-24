const express = require("express");
const app = express();
const path = require("path");

// Server status and resource usage (simulasi data)
let serverData = {
  status: "Offline",
  cpuUsage: "0 GHz / 1 GHz",
  ramUsage: "0 GB / 1 GB",
  diskUsage: "0.27 GB / 3 GB",
};

// Middleware untuk mengakses file di folder "public"
app.use(express.static(path.join(__dirname, "public")));

// Endpoint untuk mendapatkan status server
app.get("/api/server", (req, res) => {
  res.json(serverData);
});

// Endpoint untuk memulai server
app.post("/api/server/start", (req, res) => {
  serverData.status = "Running";
  serverData.cpuUsage = "0.5 GHz / 1 GHz";
  serverData.ramUsage = "0.5 GB / 1 GB";
  serverData.diskUsage = "0.3 GB / 3 GB";
  res.json({ message: "Server started", serverData });
});

// Endpoint untuk menghentikan server
app.post("/api/server/stop", (req, res) => {
  serverData.status = "Offline";
  serverData.cpuUsage = "0 GHz / 1 GHz";
  serverData.ramUsage = "0 GB / 1 GB";
  serverData.diskUsage = "0.27 GB / 3 GB";
  res.json({ message: "Server stopped", serverData });
});

// Jalankan server di port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
