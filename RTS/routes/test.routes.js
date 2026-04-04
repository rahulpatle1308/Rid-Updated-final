const express = require("express");
const router = express.Router();
const { requireAuth } = require("../middleware/auth");
const testController = require("../controllers/test.controller");

router.post("/quiz/:subject/:testNo/submit", testController.submitTest);

module.exports = router;
