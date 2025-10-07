const path = require("path");

exports.homePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
};
