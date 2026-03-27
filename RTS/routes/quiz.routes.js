const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middleware/auth");
const User = require('../../models/user')
const TestResult = require("../models/TestResult");


/* =====================================================
   ✅ QUIZ PAGE OPEN
===================================================== */
router.get("/quiz/:category/:subject/:testNo", requireAuth, (req, res) => {
  const { category, subject, testNo } = req.params;

  res.render(`dashboard/${category}/${subject}/test`, {
    category: category.toUpperCase(),
    subject: subject.toUpperCase(),
    testNo: Number(testNo)
  });
});


/* =====================================================
   ✅ QUIZ SUBMIT
===================================================== */
router.post("/quiz/:category/:subject/:testNo/submit", requireAuth, async (req, res) => {
  try {
    const user = req.user;
    const { category, subject, testNo } = req.params;

    const {
      totalQuestions,
      attempted,
      correct,
      percentage,
      accuracy,
      timeSpent
    } = req.body;

    if (!totalQuestions) {
      return res.status(400).json({
        success: false,
        message: "Total questions missing"
      });
    }

    // ✅ SAVE RESULT
    const result = await TestResult.create({
      user: user._id,
      category,
      subject: subject.toUpperCase(),
      setNo: Number(testNo),
      totalQuestions,
      attempted,
      correct,
      percentage,
      accuracy,
      timeSpent
    });

    // ✅ SAVE USER HISTORY
    user.testHistory.push({
      resultId: result._id,
      category,
      subject: subject.toUpperCase(),
      setNo: Number(testNo),
      score: correct,
      percentage,
      totalQuestions,
      incorrect: attempted - correct
    });

    user.totalTestsAttempted += 1;

    const totalScore = user.testHistory.reduce(
      (sum, t) => sum + (t.percentage || 0),
      0
    );

    user.averageScore = Math.round(totalScore / user.totalTestsAttempted);

    await user.save();

    res.json({
      success: true,
      resultId: result._id
    });

  } catch (err) {
    console.error("❌ SUBMIT ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Submit failed"
    });
  }
});


/* =====================================================
   ✅ RESULT PAGE
===================================================== */
router.get("/quiz/:category/:subject/:testNo/result/:resultId", requireAuth, async (req, res) => {
  try {
    const { category, subject } = req.params;

    // ✅ only own result
    const result = await TestResult.findOne({
      _id: req.params.resultId,
      user: req.user._id
    }).lean();

    if (!result) return res.redirect("/dashboard");

    // convert mm:ss → seconds
    let timeInSeconds = 0;
    if (result.timeSpent) {
      const parts = result.timeSpent.split(":");
      if (parts.length === 2) {
        timeInSeconds = Number(parts[0]) * 60 + Number(parts[1]);
      }
    }

    const formattedResult = {
      subject: result.subject,
      setNo: result.setNo,
      total: result.totalQuestions,
      attempted: result.attempted,
      correct: result.correct,
      incorrect: result.attempted - result.correct,
      percentage: result.percentage,
      accuracy: result.accuracy,
      timeSpent: result.timeSpent,
      timeInSeconds
    };

    // ✅ render correct view
    res.render("test-result", {
      result: formattedResult,
      category,
      subject
    });

  } catch (err) {
    console.error("❌ RESULT ERROR:", err);
    res.redirect("/dashboard");
  }
});



module.exports = router;
