const express = require("express");
const router = express.Router();

const TeacherTest = require("../../models/teacherTestModel");

// 🔥 Shorts MCQ Route
router.get("/shorts-mcq", async (req, res) => {
  try {

    const tests = await TeacherTest.find()
      .populate("teacher")
      .limit(10);

    let questions = [];

    tests.forEach(test => {
      test.questions.forEach(q => {
        questions.push({
          text: q.text,
          options: q.options,
          teacher: test.teacher
        });
      });
    });

    res.render("NationalTestSeries/ShortsMCQ/Shortsmcq", { questions });

  } catch (err) {
    console.log(err);
    res.send("Error loading MCQ");
  }
});

module.exports = router;