const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.post("/calculate", (req, res) => {
  const { num1, num2, operation } = req.body;

  if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
    return res.json({ error: "⚠️ Please enter valid numbers!" });
  }

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  let result;

  switch (operation) {
    case "add":
      result = n1 + n2;
      break;
    case "subtract":
      result = n1 - n2;
      break;
    case "multiply":
      result = n1 * n2;
      break;
    case "divide":
      if (n2 === 0) {
        return res.json({ error: "🚫 Cannot divide by zero!" });
      }
      result = n1 / n2;
      break;
    default:
      return res.json({ error: "Invalid operation" });
  }

  res.json({ result });
});

module.exports = router;
