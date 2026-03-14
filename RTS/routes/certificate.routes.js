const express = require("express");
const router = express.Router();
const PDFDocument = require("pdfkit");
const { requireAuth } = require("../middleware/auth");
const TestResult = require("../models/TestResult");
const User = require("../models/User");



// ==============================
// FINAL CERTIFICATE (50 tests)
// ==============================
router.get("/certificate/final", requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.session.userId);

    if (!user || user.totalTestsAttempted < 50) {
      return res.redirect("/profile");
    }

    const doc = new PDFDocument({ size: "A4", layout: "landscape" });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=final-certificate.pdf");

    doc.pipe(res);

    // Border
    doc.rect(20, 20, doc.page.width - 40, doc.page.height - 40).stroke();

    doc.moveDown(4);

    doc.fontSize(40).fillColor("#1a237e")
      .text("FINAL ACHIEVEMENT CERTIFICATE", { align: "center" });

    doc.moveDown(2);

    doc.fontSize(22).fillColor("black")
      .text("This is proudly awarded to", { align: "center" });

    doc.moveDown();

    doc.fontSize(30).fillColor("#3949ab")
      .text(user.fullName, { align: "center", underline: true });

    doc.moveDown();

    doc.fontSize(20)
      .text("for successfully completing 50 Tests", { align: "center" });

    doc.moveDown(2);

    doc.fontSize(16)
      .text(`Date: ${new Date().toLocaleDateString()}`, { align: "center" });

    doc.end();

  } catch (err) {
    console.error(err);
    res.redirect("/profile");
  }
});



// ==============================
// SINGLE TEST CERTIFICATE
// ==============================
router.get("/certificate/:resultId", requireAuth, async (req, res) => {
  try {
    const resultId = req.params.resultId;

    // 🔥 If someone tries /certificate/final here → skip
    if (resultId === "final") {
      return res.redirect("/certificate/final");
    }

    const result = await TestResult.findById(resultId).populate("user");

    if (!result) return res.redirect("/profile");

    const doc = new PDFDocument({ size: "A4", layout: "landscape" });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=certificate.pdf");

    doc.pipe(res);

    doc.rect(20, 20, doc.page.width - 40, doc.page.height - 40).stroke();

    doc.moveDown(4);

    doc.fontSize(35).fillColor("#1a237e")
      .text("CERTIFICATE OF ACHIEVEMENT", { align: "center" });

    doc.moveDown(2);

    doc.fontSize(20).fillColor("black")
      .text("This certificate is awarded to", { align: "center" });

    doc.moveDown();

    doc.fontSize(28).fillColor("#3949ab")
      .text(result.user.fullName, { align: "center", underline: true });

    doc.moveDown();

    doc.fontSize(18)
      .text(
        `for completing ${result.subject} Test (Set ${result.setNo})`,
        { align: "center" }
      );

    doc.moveDown();

    doc.fontSize(20).fillColor("#2e7d32")
      .text(`Score: ${result.percentage}%`, { align: "center" });

    doc.moveDown(2);

    doc.fontSize(14)
      .text(
        `Date: ${new Date(result.createdAt).toLocaleDateString()}`,
        { align: "center" }
      );

    doc.end();

  } catch (err) {
    console.error(err);
    res.redirect("/profile");
  }
});

module.exports = router;
