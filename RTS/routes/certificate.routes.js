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
// Platinum Certificate – for completing 50 tests
// ==============================
// TEST CERTIFICATE (SINGLE PAGE FIX)
// ==============================
// Platinum Certificate – for completing 50 tests
router.get("/certificate/platinum", requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.session.userId);
    if (!user) return res.redirect("/profile?error=user-not-found");

    const totalTests = user.testHistory?.length ?? user.totalTestsAttempted ?? 0;
    if (totalTests < 50) return res.redirect("/profile?error=not-eligible");

    const doc = new PDFDocument({
      size: "A4", layout: "landscape", margins: { top: 30, left: 30, right: 30, bottom: 40 }
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `inline; filename=platinum-certificate-${user._id}.pdf`);
    doc.pipe(res);

    // GOLDEN BORDER (NO WAVY LINES)
    doc.save();
    doc.lineWidth(3).strokeColor("#d4af37");
    doc.roundedRect(35, 35, 670, 250, 12).stroke();
    doc.restore();

    // RID BHARAT (NICHE AAYA - Y=65)
    doc.font("Helvetica-Bold").fontSize(32).fillColor("#000");
    doc.text("RID TECH", 50, 65, { width: 590, align: "center" });
    
    doc.font("Helvetica").fontSize(13).fillColor("#666");
    doc.text("ISO 9001:2015 Certified Organization", 50, 90, { width: 590, align: "center" });

    // PLATINUM TITLE (BIG + BOLD)
    doc.font("Helvetica-Bold").fontSize(38).fillColor("#0b6623");
    doc.text("PLATINUM CERTIFICATE", 50, 135, { width: 590, align: "center" });
    doc.text("OF EXCELLENCE", 50, 170, { width: 590, align: "center" });

    // SUBTITLE + NAME
    doc.font("Helvetica").fontSize(15).fillColor("#333");
    doc.text("This prestigious certificate is awarded to", 50, 215, { width: 590, align: "center" });
    
    doc.font("Helvetica-Bold").fontSize(26).fillColor("#0b6623");
    doc.text(user.name, 50, 245, { width: 590, align: "center" });
    
    // NAME UNDERLINE (SIRF YEHI LINE)
    doc.lineWidth(1.5).strokeColor("#0b6623");
    doc.moveTo(240, 268).lineTo(460, 268).stroke();

    // ACHIEVEMENT
    doc.font("Helvetica").fontSize(12).fillColor("#444");
    doc.text("in recognition of completing 50 tests and achieving Platinum level mastery", 
             60, 290, { width: 570, align: "center" });

    // 5 STARS
    for(let i = 0; i < 5; i++) {
      doc.fontSize(20).text("⭐", 225 + i*38, 315);
    }

    // QUOTE
    doc.font("Helvetica").fontSize(12).fillColor("#0b6623");
    doc.text("\"Platinum mastery achieved. You are now among the elite performers!\"", 
             50, 345, { width: 590, align: "center" });

    // CERT ID + DATE
    const certId = crypto.randomBytes(6).toString('hex').toUpperCase();
    const issueDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', month: 'long', day: 'numeric' 
    });
    
    doc.fontSize(9).fillColor("#666");
    doc.text(`Certificate ID: ${certId}`, 50, 410, { align: "left" });
    doc.text(`Issued on: ${issueDate}`, 580, 410, { align: "right" });

    // PLATINUM SEAL
    const sealX = 625, sealY = 395;
    doc.circle(sealX, sealY, 30).lineWidth(2.5).strokeColor("#d4af37").stroke();
    doc.fontSize(12).fillColor("#d4af37").text("PLATINUM", sealX-25, sealY-8, { width: 50, align: "center" });
    doc.fontSize(22).fillColor("#d4af37").text("⭐", sealX-12, sealY+3, { width: 24, align: "center" });

    // SIGNATURES (CLEAN)
    doc.fontSize(12).fillColor("#333");
    doc.text("Er. Rajesh Prasad", 80, 450, { width: 120, align: "center" });
    doc.fontSize(9).fillColor("#666");
    doc.text("Authorized Signatory", 80, 465, { width: 120, align: "center" });

    doc.fontSize(12).fillColor("#333");
    doc.text("Prof. A. Verma", 510, 450, { width: 120, align: "center" });
    doc.fontSize(9).fillColor("#666");
    doc.text("Program Director", 510, 465, { width: 120, align: "center" });

    // FOOTER (CLEAN TEXT ONLY)
    doc.fontSize(10).fillColor("#888");
    doc.text("www.ridbharat.com | Verify Certificate Online", 
             50, 495, { width: 590, align: "center" });

    doc.end();
  } catch (err) {
    console.error("Platinum certificate error:", err);
    if (!res.headersSent) res.redirect("/profile?error=server-error");
    else res.end();
  }
});

// Helper function to manually add underline if needed
function underlineLastLine(doc, text) {
  const width = doc.widthOfString(text);
  const x = (doc.page.width - width) / 2;
  const y = doc.y - 5;
  doc.moveTo(x, y)
     .lineTo(x + width, y)
     .lineWidth(1)
     .strokeColor("#0b6623")
     .stroke();
}

// Replace the existing /certificate/technical route in certificate.routes.js with this:
router.get("/certificate/technical", requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.session.userId);
    if (!user) return res.redirect("/profile?error=user-not-found");

    if ((user.techInterviewCount || 0) < 50) {
      return res.redirect("/profile?error=not-eligible");
    }

    const stars = Math.min(Math.floor((user.techInterviewCount || 0) / 50), 5);

    const doc = new PDFDocument({
      size: "A4",
      layout: "landscape",
      margins: { top: 0, left: 0, right: 0, bottom: 0 }
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `inline; filename=certificate.pdf`);
    doc.pipe(res);

    const { width, height } = doc.page;

    // ===== BACKGROUND =====
    doc.rect(0, 0, width, height).fill("#ffffff");

    // ===== BORDER =====
    doc.lineWidth(3)
      .strokeColor("#d4af37")
      .rect(25, 25, width - 50, height - 50)
      .stroke();

    // =======================
    // 🔻 TOP SECTION (SPACE REDUCED)
    // =======================

    doc.font("Helvetica-Bold")
      .fontSize(32)
      .fillColor("#000")
      .text("RID TECH", 0, 60, { align: "center" });

    doc.font("Helvetica")
      .fontSize(13)
      .fillColor("#555")
      .text("ISO 9001:2015 CERTIFIED ORGANIZATION", 0, 95, {
        align: "center"
      });

    doc.font("Helvetica-Bold")
      .fontSize(28)
      .fillColor("#0b6623")
      .text("TECHNICAL INTERVIEW CERTIFICATE", 0, 150, {
        align: "center"
      });

    // =======================
    // 🔻 MIDDLE SECTION
    // =======================

    doc.font("Helvetica")
      .fontSize(15)
      .fillColor("#333")
      .text("This certificate is proudly presented to", 0, 210, {
        align: "center"
      });

    doc.font("Helvetica-Bold")
      .fontSize(26)
      .text(user.name, 0, 250, {
        align: "center"
      });

    const desc =
      "for successfully completing 50 technical interview tests and demonstrating proficiency in coding, problem-solving, and modern technologies.";

    doc.font("Helvetica")
      .fontSize(12)
      .fillColor("#444")
      .text(desc, 120, 300, {
        width: width - 240,
        align: "center"
      });

    // ⭐ STARS
  const starLine = stars > 0 ? "* ".repeat(stars) : "";

doc.font("Helvetica-Bold")
  .fontSize(28)
  .fillColor("#f1c40f")
  .text(starLine, 0, 360, { align: "center" });

    // 🏆 TROPHY
    if (stars === 5) {
      doc.fontSize(30)
        .text("🏆", 0, 400, { align: "center" });
    }

    // =======================
    // 🔻 BOTTOM SECTION (FIXED)
    // =======================

    const certId = crypto.randomBytes(6).toString("hex").toUpperCase();

    doc.font("Helvetica")
      .fontSize(11)
      .fillColor("#555")
      .text(`Certificate ID: ${certId}`, 0, 440, {
        align: "center"
      });

    // QUOTE
    doc.font("Helvetica-Oblique")
      .fontSize(11)
      .fillColor("#0b6623")
      .text(
        "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
        0,
        470,
        { align: "center" }
      );

    // SIGNATURE
    doc.font("Helvetica-Bold")
      .fontSize(12)
      .fillColor("#333")
      .text("Er. Rajesh Prasad", 0, 510, {
        align: "center"
      });

    doc.font("Helvetica")
      .fontSize(10)
      .fillColor("#666")
      .text("Authorized Signatory", 0, 525, {
        align: "center"
      });

    // FOOTER
    doc.fontSize(10)
      .fillColor("#888")
      .text(
        "Website: www.ridtech.in | Verify Certificate Online",
        0,
        height - 50,
        { align: "center" }
      );

    doc.end();

  } catch (err) {
    console.error(err);
    res.redirect("/profile?error=server-error");
  }
});
module.exports = router;