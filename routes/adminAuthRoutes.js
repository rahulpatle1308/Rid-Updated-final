const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const router = express.Router();


// =============================
// Show Login Page
// =============================
router.get("/login", (req, res) => {
  res.render("Admin/Authontication/login");
});


// =============================
// Show Forgot Password Page
// =============================
router.get("/forgot-password", (req, res) => {
  res.render("Admin/Authontication/forgetpassword");
});


// =============================
// Show Signup Page
// =============================
router.get("/signup", (req, res) => {
  res.render("Admin/Authontication/signup");
});


// =============================
// Admin Signup
// =============================
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.send("All fields are required");
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.send("Admin already exists with this email");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.create({
      name,
      email,
      password: hashedPassword,
      role: "admin"
    });

    res.redirect("/admin/login");

  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});


// =============================
// Admin Login
// =============================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.send("Email and Password required");
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.send("Admin not found");
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.send("Invalid credentials");
    }

    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // production me true
      maxAge: 24 * 60 * 60 * 1000
    });

    res.redirect("/admin/dashboard");

  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});


// =============================
// Logout

// =============================
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/admin/login");
});


module.exports = router;