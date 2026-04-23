const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const ensureTeacher = require("../middleware/authMiddleware"); // ✅ ADD THIS
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");
const Message = require("../models/Message");
const sendMail = require("../utils/sendMail");
const Test = require("../models/Test");       // ✅ ALSO ADD
const Question = require("../models/Question"); // ✅ ALSO ADD
const ClassModel = require("../models/Class");
const TeacherTest = require("../models/teacherTestModel");

// ================= DASHBOARD =================

router.get("/teacher-dashboard", ensureTeacher, async (req, res) => {

  try {
    const token = req.cookies.token;
    if (!token) return res.redirect("/login");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const teacher = await Teacher.findById(decoded.userId);
    if (!teacher) return res.redirect("/login");

    const students = await Student.find({ teacherId: teacher._id });

    res.render("tracher_deshboard/deshboard", { teacher, students });

  } catch (err) {
    console.log("Teacher Dashboard Error:", err);
    res.redirect("/login");
  }
});

// ================= PROFILE UPDATE =================
router.post("/teacher/update-profile", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    await Teacher.findByIdAndUpdate(decoded.userId, req.body);

    res.json({ success: true });
  } catch (err) {
    console.log("Profile Update Error:", err);
    res.json({ success: false });
  }
});

// ================= ADD STUDENT =================
router.post("/teacher/add-student", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const newStudent = new Student({
      teacherId: decoded.userId,
      ...req.body
    });

    await newStudent.save();
    res.json({ success: true });

  } catch (err) {
    console.log("Add Student Error:", err);
    res.json({ success: false });
  }
});

// ================= DELETE STUDENT =================
router.delete("/teacher/delete-student/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.log("Delete Student Error:", err);
    res.json({ success: false });
  }
});

// ================= UPDATE STUDENT =================
router.put("/teacher/update-student/:id", async (req, res) => {
  try {
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

    const updated = await Student.findOneAndUpdate(
      { _id: req.params.id, teacherId: decoded.userId },
      req.body
    );

    if(!updated) return res.json({ success:false });

    res.json({ success:true });

  } catch (err) {
    console.log("Update Student Error:", err);
    res.json({ success:false });
  }
});

// ================= SEND MESSAGE =================


// ===== SEND MESSAGE =====
router.post("/teacher/send-message", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Save message in DB
    const newMsg = new Message({
      teacherId: decoded.userId,
      studentId: req.body.studentId,
      sender: "teacher",
      text: req.body.text
    });
    await newMsg.save();

    // Get student email
    const student = await Student.findById(req.body.studentId);

    // Send Email (optional)
    await sendMail(
      student.email,
      "New Message From Teacher",
      `Hello ${student.name},\n\n${req.body.text}\n\n- Teacher`
    );

    res.json({ success: true });

  } catch (err) {
    console.log("Send Message Error:", err);
    res.json({ success: false });
  }
});

// ================= GET MESSAGES =================
router.get("/teacher/messages/:studentId", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const messages = await Message.find({
      teacherId: decoded.userId,
      studentId: req.params.studentId
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    console.log("Get Message Error:", err);
    res.json([]);
  }
});

// ===== GET CONVERSATION LIST =====
// ===== GET Conversation List =====
router.get("/teacher/conversations", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // last message per student
    const conversations = await Message.aggregate([
      { $match: { teacherId: new mongoose.Types.ObjectId(decoded.userId) } },
      { $sort: { createdAt: -1 } },
      {
        $group: {
          _id: "$studentId",
          lastMessage: { $first: "$text" },
          lastTime: { $first: "$createdAt" }
        }
      }
    ]);

    // attach student info
    const populated = await Student.populate(conversations, {
      path: "_id",
      select: "name"
    });

    res.json(populated);
  } catch (err) {
    console.log("Conversation Load Error:", err);
    res.json([]);
  }
});


// Send Test Logic
// Send Test Page Route
// ================= SEND TEST PAGE =================
router.get("/teacher/send-test-link/:testId", ensureTeacher, async (req, res) => {
  const test = await Test.findById(req.params.testId);
  const publicLink = `${req.protocol}://${req.get("host")}/student/start-test/${test._id}`;
  res.json({ success:true, link: publicLink });
});

// ================= SEND TEST PAGE =================
router.get("/teacher/send-test-page/:testId", ensureTeacher, async (req,res)=>{
  const test = await Test.findById(req.params.testId);
  if(!test) return res.send("Test Not Found");

  // ✅ Correct public link
  const publicLink = `${req.protocol}://${req.get("host")}/student/start-test/${test._id}`;

  res.render("tracher_deshboard/sendTestPage", {
     test,
     publicLink
  });
});
router.get("/teacher/my-tests", ensureTeacher, async (req, res) => {
  try {
    const tests = await Test.find({
      $or: [
        { teacherId: req.user._id },
        { teacherId: { $exists: false } } // fallback for old tests
      ]
    }).sort({ createdAt: -1 });

    const fullTests = await Promise.all(
      tests.map(async (test) => {
        const questions = await Question.find({ testId: test._id });
        const attemptCount = await require("../models/TestAttempt")
          .countDocuments({ testId: test._id });

        return {
          ...test.toObject(),
          questions,
          submissions: attemptCount,
          startDate: test.startDate,
          endDate: test.endDate
        };
      })
    );

    res.json(fullTests);

  } catch (err) {
    console.log("Load Tests Error:", err);
    res.json([]);
  }
});

router.get("/teacher/fix-test/:testId", async (req,res)=>{
  const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

  await Test.findByIdAndUpdate(req.params.testId, {
    teacherId: decoded.userId
  });

  res.send("Test fixed successfully");
});

// ================= CREATE TEST =================
router.post("/teacher/create-test", ensureTeacher, async (req, res) => {
  try {
    const { title, subject, className, duration, totalMarks, instructions, startDate, endDate, questions } = req.body;


    // 1️⃣ Save Test
    const newTest = new Test({
  title,
  subject,
  className,
  duration,
  totalMarks,
  instructions,
  startDate,
  endDate,
  teacherId: req.user._id   // ✅ यही MAIN FIX था
});



    await newTest.save();

    // 2️⃣ Save all Questions
    const questionDocs = questions.map(q => ({
      testId: newTest._id,
      type: q.type,
      text: q.text,
      options: q.options || [],
      correctAnswer: q.correctAnswer || 0,
      points: q.points || 1
    }));

    await Question.insertMany(questionDocs);

    res.json({ success: true });

  } catch (err) {
    console.log("Create Test Error:", err);
    res.json({ success: false });
  }
});


// ================= VIEW TEST (Teacher Preview) =================
router.get("/teacher/view-test/:testId", ensureTeacher, async (req, res) => {
  try {
    const test = await Test.findById(req.params.testId);
    if (!test) return res.send("Test Not Found");

    // Load questions from Question collection
    const dbQuestions = await Question.find({ testId: test._id });
    // console.log("Received Questions From DB:", dbQuestions.length);

    // Format questions for student test page
    const formattedQuestions = dbQuestions.map((q, index) => ({
      num: index + 1,
      question_en: q.text,
      question_hi: q.text,
      options_en: q.options,
      options_hi: q.options,
      answer_en: q.options[q.correctAnswer],
      answer_hi: q.options[q.correctAnswer],
      points: q.points || 1,     // ✅ MARKS FIELD ADDED
      attempted: false,
      selected: ""
    }));

    // Render test page with formatted questions
res.render("tracher_deshboard/viewtext", {
  testTitle: test.title,
  questions: formattedQuestions,
  duration: test.duration,
  testId: test._id,
  sid: ""   // teacher preview → no student id
});

  } catch (err) {
    console.log("View Test Error:", err);
    res.send("Error loading test");
  }
});

// ================= DELETE TEST =================
router.delete("/teacher/delete-test/:testId", ensureTeacher, async (req, res) => {
  try {
    const testId = req.params.testId;

    // Delete questions first
    await Question.deleteMany({ testId });

    // Delete test
    await Test.findByIdAndDelete(testId);

    res.json({ success: true });
  } catch (err) {
    console.log("Delete Test Error:", err);
    res.json({ success: false });
  }
});

// ================= UPDATE TEST =================
router.put("/teacher/update-test/:testId", ensureTeacher, async (req, res) => {
  try {
    const { title, subject, className, duration, totalMarks, instructions, startDate, endDate, questions } = req.body;


    // Update Test basic info
    await Test.findByIdAndUpdate(req.params.testId, {
      title, subject, className, duration, totalMarks, instructions,
      startDate,   // ✅ ADD
      endDate      // ✅ ADD
    });


    // Remove old questions
    await Question.deleteMany({ testId: req.params.testId });

    // Insert new questions
    const questionDocs = questions.map(q => ({
      testId: req.params.testId,
      type: q.type,
      text: q.text,
      options: q.options || [],
      correctAnswer: q.correctAnswer || 0,
      points: q.points || 1
    }));

    await Question.insertMany(questionDocs);

    res.json({ success: true });
  } catch (err) {
    console.log("Update Test Error:", err);
    res.json({ success: false });
  }
});

// create class routes 
router.post("/teacher/create-class", ensureTeacher, async (req,res)=>{
  try{
    // console.log("Logged Teacher:", req.user._id); // 👈 test log

    const newClass = new ClassModel({
      teacherId: req.user._id,   // ✅ now always defined
      name: req.body.name
    });

    await newClass.save();
    res.json({success:true});

  }catch(err){
    console.log("Create Class Error:", err);
    res.json({success:false});
  }
});
router.get("/teacher/classes", ensureTeacher, async (req,res)=>{
  try {
    const classes = await ClassModel.find({ teacherId: req.user._id });
    res.json(classes);
  } catch(err){
    res.json([]);
  }
});

router.get("/teacher/analytics", ensureTeacher, (req, res) => {
  res.render("tracher_deshboard/analytics", {
    teacher: req.user   // optional but useful
  });
});
// ================= UPDATE CLASS =================
router.put("/teacher/update-class/:id", ensureTeacher, async (req, res) => {
  try {
    const oldClass = await ClassModel.findOne({
      _id: req.params.id,
      teacherId: req.user._id
    });

    if (!oldClass) return res.json({ success: false });

    // 🔥 update students also
   await Student.updateMany(
  { teacherId: req.user._id, class: deleted.name },
  { $set: { class: "Unassigned" } }
);

    oldClass.name = req.body.name;
    await oldClass.save();

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

// ================= DELETE CLASS =================
router.delete("/teacher/delete-class/:id", ensureTeacher, async (req, res) => {
  try {
    const deleted = await ClassModel.findOneAndDelete({
      _id: req.params.id,
      teacherId: req.user._id
    });

    if (!deleted) return res.json({ success: false });

    res.json({ success: true });
  } catch (err) {
    console.log("Delete Class Error:", err);
    res.json({ success: false });
  }
});
//upload profile
// router.post(
//   "/upload-profile",
//   upload.single("profileImage"),
//   async (req, res) => {
//     try {
//       const teacherId = req.user.id; // ya session id

//       const teacher = await Teacher.findById(teacherId);
//       teacher.profileImage = "/uploads/profile/" + req.file.filename;

//       await teacher.save();

//       res.json({
//         success: true,
//         image: teacher.profileImage
//       });
//     } catch (err) {
//       console.log(err);
//       res.json({ success: false });
//     }
//   }
// );
router.get("/advance-version", ensureTeacher, async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const teacher = await Teacher.findById(decoded.userId);
    if (!teacher) return res.redirect("/login");

    res.render("tracher_deshboard/advance-version/teacher-test-version", {
      teacher
    });

  } catch (err) {
    console.log("Advance Dashboard Error:", err);
    res.redirect("/login");
  }
});

// All india test show the teacher this routes 
// 🔥 TEACHER CHANNEL (View Your Channel)
router.get("/teacher/channel", ensureTeacher, async (req, res) => {
  try {

   const tests = await TeacherTest.find({
  teacher: req.user._id
}).sort({ createdAt: -1 });

    res.render("NationalTestSeries/teacher/channel", { tests });

  } catch (err) {
    console.log("Channel Error:", err);
    res.send("Error loading channel");
  }
});
router.get("/teacher/:id", async (req, res) => {

    const questions = await Question.aggregate([
        {
            $lookup: {
                from: "tests",
                localField: "testId",
                foreignField: "_id",
                as: "test"
            }
        },
        { $unwind: "$test" },

        {
            $lookup: {
                from: "teachers",
                localField: "test.teacherId",
                foreignField: "_id",
                as: "teacher"
            }
        },
        { $unwind: "$teacher" },

        {
            $match: { "teacher._id": new mongoose.Types.ObjectId(req.params.id) }
        }
    ]);

    res.render("teacherProfile", { questions });
});
module.exports = router;
