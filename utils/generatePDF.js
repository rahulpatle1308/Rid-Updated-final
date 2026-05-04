const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

async function generateOfferLetterPDF(offer, filePath) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: "A4", margin: 40 });
      const stream = fs.createWriteStream(filePath);
      doc.pipe(stream);

      const logoPath = path.resolve(__dirname, "../assets/back.jpeg");
      const signaturePath = path.resolve(__dirname, "../assets/sign.png");
      const stampPath = path.resolve(__dirname, "../assets/image.png");

      const formatDate = (dateStr) => {
        if (!dateStr) return "________";
        const d = new Date(dateStr);
        const day = d.getDate();
        const month = d.toLocaleString("default", { month: "long" });
        const year = d.getFullYear();
        const suffix = (day) => {
          if (day > 3 && day < 21) return "th";
          switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
          }
        };
        return `${day}${suffix(day)} ${month}, ${year}`;
      };

      const pageWidth = doc.page.width;
      const pageHeight = doc.page.height;
      const safeLeft = 45;
const safeRight = pageWidth - 45;
const usableWidth = safeRight - safeLeft;

      const primaryColor = "#000000";
      const secondaryColor = "#666666";
      const accentColor = "#2c3e50";
      const highlightColor = "#166534";

      // --- Green Border ---
      doc.lineWidth(2).strokeColor("#16a34a")
        .rect(30, 30, pageWidth - 60, pageHeight - 60).stroke();
      doc.lineWidth(1).strokeColor("#cccccc")
        .rect(35, 35, pageWidth - 70, pageHeight - 70).stroke();

      // --- Watermark ---
      if (fs.existsSync(logoPath)) {
        doc.save();
        doc.opacity(0.08);
        doc.image(logoPath, (pageWidth - 300) / 2, (pageHeight - 300) / 2, { width: 300 });
        doc.restore();
      }

      // --- Header (smaller compact) ---
      doc.fillColor(secondaryColor).fontSize(10)
        .text("Registration Number: 083632", safeLeft, 60);
      doc.text("Website: www.ridtech.in", 0, 60, { align: "right" });

      doc.fillColor("#0f172a")
        .font("Helvetica-Bold")
        .fontSize(18) // thoda chota
        .text("RRID TECH PVT. LTD.", 0, 90, { align: "center" });

      doc.moveDown(0.2);
      doc.fillColor("#2563eb")
        .font("Helvetica")
        .fontSize(10)
        .text("Software & IT Solutions Company", { align: "center" });

      doc.moveDown(0.2);
      doc.fillColor("#555")
        .fontSize(9)
        .text("Web Development | App Development | AI | Cloud Solutions", { align: "center" });

      doc.moveDown(0.2);
      doc.fillColor("#777")
        .fontSize(8)
        .text("An ISO 9001:2015 Certified Organization", { align: "center" });

      doc.strokeColor("#cccccc").lineWidth(1)
        .moveTo(safeLeft, 155).lineTo(safeRight, 155).stroke();

      // --- Meta (Issue Date, Offer ID) ---
      const issueDate = formatDate(offer.issueDate);
      doc.fillColor(primaryColor).fontSize(10)
        .text(`Issue Date: ${issueDate}`, safeLeft, 175);
      doc.text(`Offer ID: ${offer.offerId}`, 0, 175, { align: "right" });

      // --- Title ---
      doc.fillColor(highlightColor).fontSize(24).font("Helvetica-Bold")
        .text("OFFER LETTER", 0, 205, { align: "center" });

      // --- Greeting ---
      doc.fillColor(primaryColor).fontSize(11).font("Helvetica")
        doc.text(`Dear Mr. ${offer.fullName},`, safeLeft, 245, {
  width: usableWidth,
  align: "left"
});

      // --- Main body (font size 10, less line gap) ---
      doc.fontSize(10).font("Helvetica");
      let yPos = doc.y;

      const para1 = `We are pleased to offer you the position of Intern at RRID TECH PVT. LTD. ` +
        `You will be working on the project "${offer.project}" with our development team. ` +
        `Your engagement will commence on ${formatDate(offer.doj)} for a duration of ${offer.durationValue} ${offer.durationUnit} ` +
        `under ${offer.workMode} work mode.\n\n` +
        `During this period, you will be involved in real-world development tasks including software development, API integration, debugging, and optimization.\n\n` +
        `You are expected to maintain professional conduct, follow coding standards, and complete assigned tasks on time.\n\n` +
        `Strict adherence to organizational policies and procedures is required at all times. ` +
        `Additionally, you must maintain complete confidentiality regarding any company data, proprietary information, ` +
        `or client-related materials that you may access during the course of your engagement.\n\n` +
        `We are confident in your abilities and look forward to your valuable contribution to the organization. ` +
        `We anticipate a productive and successful association with you.`;

      doc.text(para1, safeLeft, yPos, {
        width: usableWidth,
        align: "justify",
       lineGap: 3,
paragraphGap: 6 // kam gap
      });

      doc.moveDown(0.8);
      doc.text("Best Regards,", safeLeft);

      // --- Signature area (thoda upar kiya) ---
      const signatureY = doc.y + 12;
      if (fs.existsSync(signaturePath)) {
        doc.image(signaturePath, safeLeft, signatureY, { width: 100 });
      }

      doc.fontSize(12).font("Helvetica-Bold")
        .text("Er-Rajesh Prasad", safeLeft, signatureY + 45);

      doc.fontSize(10).font("Helvetica")
        .text("CEO & Director", safeLeft, signatureY + 62);
      doc.text("RRID TECH PVT. LTD.", safeLeft, signatureY + 75);

      if (fs.existsSync(stampPath)) {
        doc.image(stampPath, safeRight - 80, signatureY + 10, { width: 70 });
      }

      // --- Footer (fixed at bottom) ---
      const footerY = pageHeight - 85;
      doc.strokeColor("#cccccc").lineWidth(0.5)
        .moveTo(safeLeft, footerY).lineTo(safeRight, footerY).stroke();

      doc.fontSize(7).fillColor(secondaryColor)
        .text(
          "Office Address: 51 Indrapuri, Sector C. Jubali Gate, Near Croma, Bhel, Bhopal, Huzur, Madhya Pradesh 462022 (India)",
          safeLeft, footerY + 8,
          { width: usableWidth, align: "center" }
        );

      doc.text(
        "Email: ridorg.in@gmail.com | Website: www.ridtech.in",
        safeLeft, footerY + 20,
        { width: usableWidth, align: "center" }
      );

      doc.fillColor(highlightColor).fontSize(8)
        .text(
          `Verify this offer at: ridtech.in/verify | Offer ID: ${offer.offerId}`,
          safeLeft, footerY + 32,
          { width: usableWidth, align: "center" }
        );

      doc.end();

      stream.on("finish", () => resolve(filePath));
      stream.on("error", reject);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = generateOfferLetterPDF;