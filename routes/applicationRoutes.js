// const express = require("express");
// const router = express.Router();
// const controller = require("../controllers/applicationController");

// Apply for certificate
// router.post("/apply", controller.applyCertificate);

// // User verification
// router.get("/verify/:appId", controller.verifyById);

// // Admin verification (from email link)
// router.get("/verify-admin/:appId", controller.adminVerify);

// // Download certificate
// router.get("/download/:appId", controller.downloadCertificate);

// module.exports = router;


const express = require("express");
const router = express.Router();

const controller = require("../controllers/applicationController");
const Application = require("../models/Application");


// ================= USER ROUTES =================

// Apply Certificate
router.post("/apply", controller.applyCertificate);

// Verify certificate by Application ID (public page)
router.get("/verify/:appId", controller.verifyById);

// Admin email verification link
router.get("/verify-admin/:appId", controller.adminVerify);

// Download certificate
router.get("/download/:appId", controller.downloadCertificate);



// ================= ADMIN ROUTES =================

// 📊 Admin Statistics
router.get("/admin/stats", controller.getStats);


// 📋 Get all applications (API)
router.get("/admin/list", controller.getAllApplications);


// 📋 Admin Certificate List Page (EJS Page)
router.get("/admin/list-page", async (req, res) => {
  try {

    const apps = await Application.find().sort({ createdAt: -1 });

    res.render("Admin/applications/certificate-list", {
      apps
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});


// ✅ Admin Verify (from admin panel)
router.get("/admin/verify/:id", controller.adminVerifyFromPanel);


// 📝 Edit Form Page
router.get("/admin/edit/:id", controller.editForm);


// 🔄 Update Application
router.post("/admin/update/:id", controller.updateApplication);


// ❌ Delete Application
router.post("/admin/delete/:id", controller.deleteApplication);



module.exports = router;