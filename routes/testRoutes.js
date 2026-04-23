const express = require('express');
const router = express.Router();
const Test = require("../../models/teacherTestModel");
// Test route
router.get('/test', (req, res) => {
  res.json({
    success: true,
    message: 'Workshop API is working!',
    timestamp: new Date().toISOString()
  });
});

// Test POST route
router.post('/test-post', (req, res) => {
  console.log("Test POST received:", req.body);
  res.json({
    success: true,
    message: 'POST request received successfully',
    data: req.body,
    timestamp: new Date().toISOString()
  });
});


// ✅ ONLY PUBLISHED TEST SHOW
router.get("/national-test", async (req, res) => {
  try {
    const tests = await Test.find({ status: "published" })
      .populate("teacher", "name")
      .sort({ createdAt: -1 });

    res.render("NationalTestSeries/NationalTest", { tests });
  } catch (err) {
    console.log(err);
    res.send("Error loading tests");
  }
});

module.exports = router;