const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const { redirectIfAuth } = require("../middleware/auth");



// GET
router.get("/login", redirectIfAuth, (req, res) => {
  res.render("auth/login");
});

router.get("/register", redirectIfAuth, (req, res) => {
  res.render("auth/register");
});

// POST
router.post("/login", authController.login);
router.post("/register", authController.register);

// LOGOUT
router.get("/logout", authController.logout);

// API
router.get("/api/auth/profile", authController.getProfile);
router.get("/api/auth/check", authController.checkAuth);

module.exports = router;
