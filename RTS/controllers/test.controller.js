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

    // ✅ STEP 1: Save result
    const result = await TestResult.create({
      user: user._id,
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

    // ✅ STEP 2: Update user (IMPORTANT 🔥)
    const dbUser = await User.findById(user._id);

   dbUser.testHistory.push({
  resultId: result._id,
  subject,
  setNo: testNo,
  score: correct,
  totalQuestions: total,
  percentage,
  date: new Date()   // ✅ YE ADD KARNA HAI
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