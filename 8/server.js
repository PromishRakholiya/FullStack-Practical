const express = require("express");
const app = express();
const PORT = 3001;

let counter = 0;

app.use(express.static("public"));
app.use(express.json());

app.get("/api/counter", (req, res) => {
  res.json({ counter });
});

app.post("/api/increase", (req, res) => {
  counter++;
  res.json({ counter });
});

app.post("/api/decrease", (req, res) => {
  if (counter > 0) counter--;
  res.json({ counter });
});

app.post("/api/reset", (req, res) => {
  counter = 0;
  res.json({ counter });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
