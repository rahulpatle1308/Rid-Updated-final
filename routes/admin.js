const express = require("express");
const router = express.Router();

const {
  addCertificate,
  getRegistrationsCount,
  getAdminCount,
  getStudentCount,
  getTeacherCount,
  getOrganisationCount,
  getEbooksCount,
  getPdfsCount,
} = require("../controllers/adminController");

const multer = require("multer");

// ✅ CORRECT MIDDLEWARE
const verifyToken = require("../middleware/verifyToken");
const requireAdmin = require("../middleware/requireAdmin");

const User = require("../models/user");
const Teacher = require("../models/Teacher");
const Lead = require("../models/Lead");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// ================= ROUTES =================

router.post("/upload", upload.single("certificate"), addCertificate);

router.get("/registrations/count", getRegistrationsCount);
router.get("/admin-count", getAdminCount);
router.get("/pdf-Count", getPdfsCount);
router.get("/student-count", getStudentCount);
router.get("/teacher-count", getTeacherCount);
router.get("/organisation-count", getOrganisationCount);
router.get("/ebooks/count", getEbooksCount);

// ================= USERS =================

router.get("/users", verifyToken, requireAdmin, async (req, res) => {
  try {
    const users = await User.find({}, "email role gender name dob lastname");
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/search-user", verifyToken, requireAdmin, async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.findOne({ email }, "email role");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/change-role", verifyToken, requireAdmin, async (req, res) => {
  try {
    const { email, role } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    user.role = role;
    await user.save();

    res.json({ message: "Role updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ================= ADMINS =================

router.get("/all-admins", verifyToken, requireAdmin, async (req, res) => {
  try {
    const admins = await User.find(
      { role: "admin" },
      "email role name lastname gender createdAt"
    );

    res.json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/count-admins", async (req, res) => {
  try {
    const count = await User.countDocuments({ role: "admin" });
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: "Error fetching admin count" });
  }
});

// ================= LEADS =================

router.get("/leads", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ================= TEACHERS (FINAL FIX) =================

router.get("/teachers", async (req, res) => {
  try {
    let teachers = await Teacher.find();

    if (!teachers.length) {
      teachers = await User.find({ role: "teacher" });
    }

    res.json(teachers);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


const TeacherTest = require("../models/teacherTestModel");

// ✅ PAGE OPEN KARNE KE LIYE
router.get("/teacher-tests-page/:teacherId", async (req, res) => {
  try {
    const { teacherId } = req.params;

    const teacher = await Teacher.findById(teacherId);
    const tests = await TeacherTest.find({ teacher: teacherId });

    res.render("Admin/teachertestcards/testcards", {
      teacher,
      tests
    });

  } catch (err) {
    console.log(err);
    res.send("Error loading page");
  }
});

module.exports = router;