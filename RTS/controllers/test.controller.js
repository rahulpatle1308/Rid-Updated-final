const TestResult = require("../models/TestResult");
const User = require('../../models/user');

exports.submitTest = async (req, res) => {
  try {
    const user = req.user; // May be null for anonymous users

    const {
      subject,
      testNo,
      total,
      attempted,
      correct,
      percentage,
      accuracy,
      timeSpent
    } = req.body;

    // ✅ STEP 1: Save result (works for both logged in and anonymous users)
    const result = await TestResult.create({
      user: user ? user._id : null, // Allow null for anonymous
      subject,
      setNo: testNo,
      totalQuestions: total,
      attempted,
      correct,
      percentage,
      accuracy,
      timeSpent,
      category: req.params.category || "general"
    });

    // ✅ STEP 2: Update user only if logged in
    if (user) {
      const dbUser = await User.findById(user._id);

      dbUser.testHistory.push({
        resultId: result._id,
        subject,
        setNo: testNo,
        score: correct,
        totalQuestions: total,
        percentage,
        date: new Date()
      });

      // ✅ STEP 3: Total tests
      dbUser.totalTestsAttempted = dbUser.testHistory.length;

      // ✅ STEP 4: Average
      const totalScore = dbUser.testHistory.reduce(
        (sum, t) => sum + (t.percentage || 0),
        0
      );

      dbUser.averageScore = Math.round(
        totalScore / dbUser.totalTestsAttempted
      );

      await dbUser.save();
    }

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
};