const express = require("express");
const router = express.Router();
const PDFDocument = require("pdfkit");
const { requireAuth } = require("../middleware/auth");
const TestResult = require("../models/TestResult");
const User = require('../../models/user');
const crypto = require('crypto');

// ==============================
// HELPER: Add creative background & borders
// ==============================
function addCreativeBackground(doc) {
  const w = doc.page.width;
  const h = doc.page.height;

  // Clean white background
  doc.rect(0, 0, w, h).fillColor("#ffffff").fill();

  // Outer gold border
  const pad = 25;
  doc.lineWidth(3)
     .strokeColor("#d4af37")
     .rect(pad, pad, w - pad * 2, h - pad * 2)
     .stroke();

  // Inner subtle border
  doc.lineWidth(1)
     .strokeColor("#e6c200")
     .rect(pad + 8, pad + 8, w - (pad + 8) * 2, h - (pad + 8) * 2)
     .stroke();

  // Decorative corner elements
  const size = 40;
  const corners = [
    { x: pad, y: pad },
    { x: w - pad - size, y: pad },
    { x: pad, y: h - pad - size },
    { x: w - pad - size, y: h - pad - size }
  ];
  corners.forEach(c => {
    doc.lineWidth(2)
       .strokeColor("#d4af37")
       .moveTo(c.x, c.y + size)
       .lineTo(c.x, c.y)
       .lineTo(c.x + size, c.y)
       .stroke();
  });
}

// ==============================
// HELPER: Star rating (compact)
// ==============================
function addStarRating(doc, rating) {
  const maxStars = 5;
  const starSize = 22;
  const starSpacing = 28;
  const startX = (doc.page.width - (maxStars * starSpacing)) / 2;
  const y = doc.y;

  for (let i = 0; i < maxStars; i++) {
    const x = startX + i * starSpacing;
    doc.fontSize(starSize)
       .fillColor(i < rating ? "#f1c40f" : "#ddd0b0")
       .text(i < rating ? "★" : "☆", x, y);
  }
  // Tighten spacing after stars
  doc.y = y + starSize + 4;
}

// ==============================
// HELPER: Underline name elegantly
// ==============================
function underlineLastLine(doc, text) {
  const y = doc.y - 5;
  const width = doc.widthOfString(text);
  const x = (doc.page.width - width) / 2;
  doc.moveTo(x, y)
     .lineTo(x + width, y)
     .lineWidth(1.5)
     .strokeColor("#d4af37")
     .stroke();
}

// ==============================
// HELPER: Inspirational quote with dynamic font size
// ==============================
function addQuote(doc, score, type) {
  let quote = "", author = "";
  let longQuote = false;
  if (type === 'test') {
    if (score >= 90) { quote = "Excellence is not a skill, it's an attitude."; author = "Ralph Marston"; }
    else if (score >= 75) { quote = "Success is the sum of small efforts."; author = "Robert Collier"; }
    else if (score >= 60) { quote = "Do what you love, and you'll never work a day."; author = "Steve Jobs"; }
    else { quote = "Every expert was once a beginner."; author = "Helen Hayes"; longQuote = true; }
  } else {
    if (score >= 4) { quote = "Strive not to be a success, but to be of value."; author = "Einstein"; }
    else if (score >= 2) { quote = "The expert in anything was once a beginner."; author = "Helen Hayes"; }
    else { quote = "Believe you can and you're halfway there."; author = "T. Roosevelt"; longQuote = true; }
  }

  const quoteFontSize = longQuote ? 8 : 10;
  doc.font("Helvetica-Oblique")
     .fontSize(quoteFontSize)
     .fillColor("#444444")
     .text(`“${quote}”`, { align: "center", width: doc.page.width - 180 })
     .moveDown(0.2)
     .font("Helvetica")
     .fontSize(8)
     .fillColor("#666666")
     .text(`— ${author}`, { align: "center" });
}

// ==============================
// LEVEL CERTIFICATE (SINGLE PAGE FIX)
// ==============================
router.get("/certificate/level/:level", requireAuth, async (req, res) => {
  try {
    const level = parseInt(req.params.level);
    const requiredTests = level * 30;

    const user = await User.findById(req.session.userId);
    if (!user) return res.redirect("/profile?error=user-not-found");

    const totalTests = user.totalTestsAttempted || user.testHistory?.length || 0;
    if (totalTests < requiredTests) return res.redirect("/profile?error=not-eligible");

    const doc = new PDFDocument({
      size: "A4",
      layout: "landscape",
      margins: { top: 30, left: 30, right: 30, bottom: 40 }
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename=level-${level}-certificate-${user._id}.pdf`
    );
    doc.pipe(res);

    addCreativeBackground(doc);

    // --- Header (fixed start point) ---
    doc.font("Helvetica-Bold")
       .fontSize(34)
       .fillColor("#000000")
       .text("RID BHARAT", { align: "center" });
    doc.font("Helvetica")
       .fontSize(14)
       .fillColor("#555555")
       .text("ISO 9001:2015 Certified Organization", { align: "center" });
    doc.moveDown(0.4); // reduced spacing

    // Set fixed starting Y after header to avoid overflow
    doc.y = 90;

    // --- Title ---
    const title = "CERTIFICATE OF EXCELLENCE";
    doc.font("Helvetica-Bold")
       .fontSize(38) // reduced from 44
       .fillColor("#000000")
       .text(title, { align: "center" });
    doc.moveDown(0.3);

    // --- Subtitle ---
    doc.font("Helvetica")
       .fontSize(16)
       .fillColor("#333333")
       .text("This prestigious certificate is awarded to", { align: "center" })
       .moveDown(0.3);

    // --- Recipient name ---
    doc.font("Helvetica-Bold")
       .fontSize(26) // reduced from 32
       .fillColor("#0b6623")
       .text(user.name, { align: "center" });
    underlineLastLine(doc, user.name);
    doc.moveDown(0.3);

    // --- Achievement description ---
    doc.font("Helvetica")
       .fontSize(12) // reduced from 14
       .fillColor("#444444")
       .text(
         `in recognition of completing ${requiredTests} tests and attaining Level ${level} mastery.`,
         { align: "center", width: doc.page.width - 180 } // wider text area
       )
       .moveDown(0.2);

    // --- Stars ---
    const starRating = Math.min(level, 5);
    addStarRating(doc, starRating);
    doc.moveDown(0.2); // tight spacing

    // --- Quote ---
    addQuote(doc, level, 'level');
    doc.moveDown(0.2);

    // --- Certificate ID & Date (positioned near bottom) ---
    const certId = crypto.randomBytes(6).toString('hex').toUpperCase();
    const issueDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
    const bottomY = doc.page.height - 70; // safe inside border
    doc.fontSize(9)
       .fillColor("#555555")
       .text(`Certificate ID: ${certId}`, 50, bottomY - 20, { align: "left" })
       .text(`Issued on: ${issueDate}`, doc.page.width - 220, bottomY - 20, { align: "right" });

    // --- Level seal ---
    const sealX = doc.page.width - 100;
    const sealY = doc.page.height - 95;
    doc.circle(sealX, sealY, 32)
       .lineWidth(1.5)
       .strokeColor("#d4af37")
       .stroke();
    doc.fontSize(14)
       .fillColor("#d4af37")
       .text("LEVEL", sealX - 22, sealY - 10, { width: 44, align: "center" });
    doc.fontSize(26)
       .fillColor("#d4af37")
       .text(level.toString(), sealX - 15, sealY + 6, { width: 30, align: "center" });

    // --- Text signatures ---
    const signY = bottomY;
    const leftSignX = 70;
    const rightSignX = doc.page.width - 220;

    doc.fontSize(10)
       .fillColor("#333333")
       .text("Dr. R. K. Sharma", leftSignX, signY, { width: 140, align: "center" });
    doc.fontSize(8)
       .fillColor("#555555")
       .text("Authorized Signatory", leftSignX, signY + 15, { width: 140, align: "center" });

    doc.fontSize(10)
       .fillColor("#333333")
       .text("Prof. A. Verma", rightSignX, signY, { width: 140, align: "center" });
    doc.fontSize(8)
       .fillColor("#555555")
       .text("Program Director", rightSignX, signY + 15, { width: 140, align: "center" });

    // --- Footer (centered) ---
    doc.fontSize(10)
       .fillColor("#555555")
       .text(
         "www.ridbharat.com | Verify Certificate Online",
         doc.page.width / 2 - 150,
         doc.page.height - 38,
         { width: 300, align: "center" }
       );

    doc.end();
  } catch (err) {
    console.error("Certificate generation error:", err);
    res.redirect("/profile?error=server-error");
  }
});

// ==============================
// TEST CERTIFICATE (SINGLE PAGE FIX)
// ==============================
router.get("/certificate/:resultId", requireAuth, async (req, res) => {
  try {
    const resultId = req.params.resultId;
    if (resultId === "final") return res.redirect("/certificate/final");

    const result = await TestResult.findById(resultId).populate("user");
    if (!result) return res.redirect("/profile?error=certificate-not-found");

    const doc = new PDFDocument({
      size: "A4",
      layout: "landscape",
      margins: { top: 30, left: 30, right: 30, bottom: 40 }
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename=test-certificate-${resultId}.pdf`
    );
    doc.pipe(res);

    addCreativeBackground(doc);

    // --- Header ---
    doc.font("Helvetica-Bold")
       .fontSize(34)
       .fillColor("#000000")
       doc.text("RID BHARAT", 0, 100, { align: "center" });
    doc.font("Helvetica")
       .fontSize(14)
       .fillColor("#555555")
       .text("ISO 9001:2015 Certified Organization", { align: "center" });
    doc.moveDown(0.4);

    // Fixed starting point after header
    doc.y = 90;

    // --- Title ---
    const title = "CERTIFICATE OF ACHIEVEMENT";
    doc.font("Helvetica-Bold")
       .fontSize(38)
       .fillColor("#000000")
       .text(title, { align: "center" });
    doc.moveDown(0.3);

    // --- Subtitle ---
    doc.font("Helvetica")
       .fontSize(16)
       .fillColor("#333333")
       .text("This certificate is proudly presented to", { align: "center" })
       .moveDown(0.3);

    // --- Recipient name ---
    doc.font("Helvetica-Bold")
       .fontSize(26)
       .fillColor("#0b6623")
       .text(result.user.fullName, { align: "center" });
    underlineLastLine(doc, result.user.fullName);
    doc.moveDown(0.3);

    // --- Achievement description ---
    const percentage = result.percentage;
    let grade = "";
    if (percentage >= 90) grade = "Distinction";
    else if (percentage >= 75) grade = "First Class";
    else if (percentage >= 60) grade = "Second Class";
    else grade = "Pass";

    doc.font("Helvetica")
       .fontSize(12)
       .fillColor("#444444")
       .text(
         `for outstanding performance in the ${result.subject} Test (Set ${result.setNo}) ` +
         `achieving ${percentage}% — ${grade} grade.`,
         { align: "center", width: doc.page.width - 180 }
       )
       .moveDown(0.2);

    // --- Stars ---
    let starRating = 0;
    if (percentage >= 90) starRating = 5;
    else if (percentage >= 75) starRating = 4;
    else if (percentage >= 60) starRating = 3;
    else if (percentage >= 45) starRating = 2;
    else starRating = 1;
    addStarRating(doc, starRating);
    doc.moveDown(0.2);

    // --- Quote ---
    addQuote(doc, percentage, 'test');
    doc.moveDown(0.2);

    // --- Certificate metadata ---
    const certId = result._id.toString().slice(-8).toUpperCase();
    const issueDate = new Date(result.createdAt).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
    const bottomY = doc.page.height - 70;
    doc.fontSize(9)
       .fillColor("#555555")
       .text(`Certificate ID: ${certId}`, 50, bottomY - 20, { align: "left" })
       .text(`Issued on: ${issueDate}`, doc.page.width - 220, bottomY - 20, { align: "right" });

    // --- Score seal ---
    const sealX = doc.page.width - 100;
    const sealY = doc.page.height - 95;
    doc.circle(sealX, sealY, 32)
       .lineWidth(1.5)
       .strokeColor("#d4af37")
       .stroke();
    doc.fontSize(12)
       .fillColor("#d4af37")
       .text("SCORE", sealX - 22, sealY - 10, { width: 44, align: "center" });
    doc.fontSize(22)
       .fillColor("#d4af37")
       .text(`${percentage}%`, sealX - 15, sealY + 6, { width: 30, align: "center" });

    // --- Signatures ---
    const signY = bottomY;
    const leftSignX = 70;
    const rightSignX = doc.page.width - 220;

    doc.fontSize(10)
       .fillColor("#333333")
       .text("Dr. R. K. Sharma", leftSignX, signY, { width: 140, align: "center" });
    doc.fontSize(8)
       .fillColor("#555555")
       .text("Authorized Signatory", leftSignX, signY + 15, { width: 140, align: "center" });

    doc.fontSize(10)
       .fillColor("#333333")
       .text("Prof. A. Verma", rightSignX, signY, { width: 140, align: "center" });
    doc.fontSize(8)
       .fillColor("#555555")
       .text("Program Director", rightSignX, signY + 15, { width: 140, align: "center" });

    // --- Footer ---
    doc.fontSize(10)
       .fillColor("#555555")
       .text(
         "www.ridbharat.com | Verify Certificate Online",
         doc.page.width / 2 - 150,
         doc.page.height - 38,
         { width: 300, align: "center" }
       );

    doc.end();
  } catch (err) {
    console.error("Certificate generation error:", err);
    res.redirect("/profile?error=certificate-failed");
  }
});

module.exports = router;