const TestResult = require("../models/TestResult");
const User = require('../../models/user');

exports.submitTest = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found"
      });
    }

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

    // ✅ Save in TestResult collection
    const result = await TestResult.create({
      user: user._id,
      subject,
      setNo: testNo,
      totalQuestions: total,
      attempted,
      correct,
      percentage,
      accuracy,
      timeSpent
    });

    // ❌ REMOVE THIS BLOCK (problem yahi tha)
    /*
    const wrong = attempted - correct;

    user.testHistory.push({
      resultId: result._id,
      subject,
      setNo: testNo,
      score: correct,
      percentage,
      totalQuestions: total,
      incorrect: wrong
    });

    user.totalTestsAttempted += 1;

    const totalScore = user.testHistory.reduce(
      (sum, t) => sum + (t.percentage || 0),
      0
    );

    user.averageScore = Math.round(
      totalScore / user.totalTestsAttempted
    );

    await user.save();
    */

    // ✅ Only send response
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