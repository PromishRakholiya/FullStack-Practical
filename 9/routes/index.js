const express = require("express");
const { homePage } = require("../controllers/homeController");

const router = express.Router();

// Home route
router.get("/", homePage);

module.exports = router;
