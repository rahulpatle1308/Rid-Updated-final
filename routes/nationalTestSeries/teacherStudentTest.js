const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const TeacherTest = require("../../models/teacherTestModel");

// 🔥 TEMP STORE (user wise questions)
let tempQuestionsStore = {};


// ================= SAVE TEMP QUESTIONS =================
router.post("/save-temp-questions", (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    tempQuestionsStore[decoded.userId] = req.body.questions || [];

    console.log("Saved Temp Questions:", tempQuestionsStore[decoded.userId]);

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});


// ================= CREATE TEST =================
router.post("/create-test", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const creatorModel = decoded.role === "teacher" ? "Teacher" : "User";

    // 🔥 TEMP QUESTIONS
    const rawQuestions = tempQuestionsStore[decoded.userId] || [];

    console.log("RAW QUESTIONS:", rawQuestions);

    if (!rawQuestions.length) {
      return res.json({ success: false, msg: "No questions found" });
    }

    // 🔥 FINAL FORMAT FIX
    const formattedQuestions = rawQuestions.map(q => {

      const questionText = q.text || q.q || "No Question";
      const type = q.type || "MCQ";
      const points = q.points || q.marks || 1;

      let options = [];

      // ✅ TRUE / FALSE FIX
      if (type === "TF" || type === "True/False") {
        options = [
          { text: "True", isCorrect: q.correctAnswer === "True" },
          { text: "False", isCorrect: q.correctAnswer === "False" }
        ];
      } 
      // ✅ MCQ FIX
      else {
        options = (q.options || []).map(opt => {
          const text = typeof opt === "string" ? opt : opt.text;

          return {
            text,
            isCorrect: text === q.correctAnswer || opt.isCorrect === true
          };
        });
      }

      return {
        text: questionText,
        type: type,
        points: points,
        options: options
      };
    });

    console.log("FORMATTED QUESTIONS:", formattedQuestions);

    // 🔥 SAVE TEST
    const newTest = new TeacherTest({
      createdBy: decoded.userId,
      creatorModel,

      name: req.body.name,
      subject: req.body.subject || "General",
      description: req.body.description,
      duration: req.body.duration || 60,

      questions: formattedQuestions,

      visibility: req.body.visibility || "private",
      status: req.body.visibility === "public" ? "published" : "pending"
    });

    await newTest.save();

    // 🔥 CLEAN TEMP DATA
    delete tempQuestionsStore[decoded.userId];

    res.json({ success: true });

  } catch (err) {
    console.log("❌ Create Test Error:", err);
    res.json({ success: false, msg: "Server error" });
  }
});

// ================= MY CHANNEL =================
router.get("/teacher/channel", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const tests = await TeacherTest.find({
      $or: [
        { createdBy: decoded.userId },
        { teacher: decoded.userId } // old support
      ]
    }).sort({ createdAt: -1 });

    console.log("User:", decoded.userId);
    console.log("Channel Tests:", tests.length);

    res.render("NationalTestSeries/teacher/channel", { tests });

  } catch (err) {
    console.log(err);
    res.send("Error loading channel");
  }
});


// ================= PUBLIC TEST =================
router.get("/all-tests", async (req, res) => {
  try {
    const tests = await TeacherTest.find({
      visibility: "public"
    })
    .populate({
      path: "createdBy",
      select: "name"
    })
    .sort({ createdAt: -1 });

    res.render("NationalTestSeries/NationalTest", { tests });

  } catch (err) {
    console.log(err);
    res.send("Error loading tests");
  }
});


// ================= DELETE =================
router.delete("/delete/:id", async (req, res) => {
  try {
    // ❌ NO TOKEN → NOT LOGGED IN
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        msg: "Login required" 
      });
    }

    // ✅ VERIFY TOKEN
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ 
        success: false, 
        msg: "Invalid token" 
      });
    }

    // ✅ FIND TEST
    const test = await TeacherTest.findById(req.params.id);

    if (!test) {
      return res.status(404).json({ 
        success: false, 
        msg: "Test not found" 
      });
    }

    // 🔥 OWNER CHECK (IMPORTANT)
    if (test.createdBy.toString() !== decoded.userId) {
      return res.status(403).json({ 
        success: false, 
        msg: "You can delete only your own test" 
      });
    }

    // ✅ DELETE
    await TeacherTest.findByIdAndDelete(req.params.id);

    res.json({ success: true });

  } catch (err) {
    console.log("DELETE ERROR:", err);
    res.status(500).json({ success: false, msg: "Server error" });
  }
});
// ================= TEST DETAILS PAGE =================
router.get("/test-details", (req, res) => {
  res.render("NationalTestSeries/test-details");
});

// ================= CREATE TEST PAGE =================
router.get("/cre", (req, res) => {
  res.render("NationalTestSeries/CreateTest/CreateTest.ejs");
});

module.exports = router;