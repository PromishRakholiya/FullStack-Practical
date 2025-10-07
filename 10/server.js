const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

// API to fetch logs
app.get("/api/logs", (req, res) => {
  const logFilePath = path.join(__dirname, "logs", "errors.txt");

  fs.readFile(logFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "⚠️ Log file not found or inaccessible." });
    }

    const lines = data.split("\n").filter(line => line.trim() !== "");
    res.json({ logs: lines });
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Log Viewer running at http://localhost:${PORT}`);
});
