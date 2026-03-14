const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middleware/auth");
const TestResult = require("../models/TestResult");


/* =====================================================
   RESULT VIEW PAGE
===================================================== */
router.get(
  "/quiz/:category/:subject/test-:setNo/result/:resultId",
  requireAuth,
  async (req, res) => {
    try {
      const { resultId, category, subject, setNo } = req.params;

      const result = await TestResult.findOne({
        _id: resultId,
        user: req.user._id
      }).lean();

      if (!result) {
        return res.redirect("/dashboard");
      }

      // ✅ format for UI
      const formattedResult = {
        subject: result.subject,
        setNo: result.setNo,
        total: result.totalQuestions,
        attempted: result.attempted,
        correct: result.correct,
        incorrect: result.attempted - result.correct,
        percentage: result.percentage,
        accuracy: result.accuracy,
        timeSpent: result.timeSpent
      };

      // ✅ render page
      res.render("dashboard/result", {
        result: formattedResult,
        category,
        subject,
        setNo
      });

    } catch (err) {
      console.error("❌ RESULT PAGE ERROR:", err);
      res.redirect("/dashboard");
    }
  }
);

module.exports = router;
