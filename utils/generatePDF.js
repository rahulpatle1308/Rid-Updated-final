const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

/**
 * Generate an offer letter PDF matching the exact text from the image
 * @param {Object} offer - offer data
 * @param {string} offer.offerId - unique offer ID (e.g., "OFF-47FEB0")
 * @param {string} offer.fullName - candidate full name
 * @param {string} offer.dob - date of birth (ISO string)
 * @param {string} offer.doj - date of joining (ISO string)
 * @param {string} offer.project - project name
 * @param {string|number} offer.durationValue - e.g., 5
 * @param {string} offer.durationUnit - 'months' or 'years'
 * @param {string} offer.workMode - 'Remote', 'On-site', or 'Hybrid'
 * @param {string} filePath - output PDF file path
 * @returns {Promise<string>} - resolves with filePath
 */
async function generateOfferLetterPDF(offer, filePath) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: "A4", margin: 40 });
      const stream = fs.createWriteStream(filePath);
      doc.pipe(stream);

      const logoPath = path.resolve(__dirname, "../assets/logo.jpeg");
      const signaturePath = path.resolve(__dirname, "../assets/sign.png");
      const stampPath = path.resolve(__dirname, "../assets/Stamp.png");

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
      const safeLeft = 60;
      const safeRight = pageWidth - 60;
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

      // --- Header ---
      doc.fillColor(secondaryColor).fontSize(10)
        .text("Registration Number: 048884", safeLeft, 60);
      doc.text("Website: www.ridtech.in", 0, 60, { align: "right" });

      doc.fillColor(accentColor).fontSize(22).font("Helvetica-Bold")
        .text("Research, Innovation & Discovery Bharat", 0, 90, { align: "center" });

      doc.fontSize(14).font("Helvetica")
        .text("RID Organization, Provides Solutions for Every Problem", 0, 115, { align: "center" });

      doc.fillColor(secondaryColor).fontSize(10)
        .text("Managed & Run by TWKSAA Welfare Foundation, Certified by Central Government", 0, 140, { align: "center" });

      doc.text("An ISO 9001:2015 Certified Organization", 0, 155, { align: "center" });

      doc.strokeColor("#cccccc").lineWidth(1)
        .moveTo(safeLeft, 170).lineTo(safeRight, 170).stroke();

      // --- Meta ---
    // --- Meta ---
const issueDate = formatDate(offer.issueDate); // ✅ FIXED

doc.fillColor(primaryColor).fontSize(11)
  .text(`Issue Date: ${issueDate}`, safeLeft, 190);

doc.text(`Offer ID: ${offer.offerId}`, 0, 190, { align: "right" });

      // --- Title ---
      doc.fillColor(highlightColor).fontSize(28).font("Helvetica-Bold")
        .text("OFFER LETTER", 0, 225, { align: "center" });

      // --- Greeting ---
      doc.fillColor(primaryColor).fontSize(14).font("Helvetica")
        .text(`Dear Mr. ${offer.fullName},`, safeLeft, 280);

      doc.moveDown(1.5);

      // --- Main Professional Paragraph ---
      doc.fontSize(12).fillColor(primaryColor).font("Helvetica")
        .text(
          `We are pleased to confirm that you have been selected to join RID Bharat as an Intern for the project "${offer.project}". ` +
          `Your engagement will commence on ${formatDate(offer.doj)} for a duration of ${offer.durationValue} ${offer.durationUnit} ` +
          `under the ${offer.workMode} work mode, in accordance with company guidelines. ` +
          `As an Intern, you are expected to maintain the highest standards of professionalism and integrity throughout your tenure.`,
          safeLeft,
          doc.y,
          { width: usableWidth, align: "justify" }
        );

      doc.moveDown(1.5);

      doc.text(
        "Strict adherence to organizational policies and procedures is required at all times. " +
        "Additionally, you must maintain complete confidentiality regarding any company data, proprietary information, " +
        "or client-related materials that you may access during the course of your engagement.",
        { width: usableWidth, align: "justify" }
      );

      doc.moveDown(2);

      doc.text(
        "We are confident in your abilities and look forward to your valuable contribution to the organization. " +
        "We anticipate a productive and successful association with you.",
        { width: usableWidth, align: "justify" }
      );

      doc.moveDown(2);

      doc.text("Best Regards,", safeLeft);

      // --- Signature ---
      const signatureY = doc.y + 20;

      if (fs.existsSync(signaturePath)) {
        doc.image(signaturePath, safeLeft, signatureY, { width: 120 });
      }

      doc.fontSize(14).font("Helvetica-Bold")
        .text("Er-Rajesh Prasad", safeLeft, signatureY + 60);

      doc.fontSize(12).font("Helvetica")
        .text("CEO & Director", safeLeft, signatureY + 80);
      doc.text("RID Bharat, Bhopal", safeLeft, signatureY + 95);

      if (fs.existsSync(stampPath)) {
        doc.image(stampPath, safeRight - 90, signatureY + 20, { width: 90 });
      }

      // --- Footer ---
      const footerY = pageHeight - 100;

      doc.strokeColor("#cccccc").lineWidth(0.5)
        .moveTo(safeLeft, footerY).lineTo(safeRight, footerY).stroke();

      doc.fontSize(8).fillColor(secondaryColor)
        .text(
          "Office Address: MiG–72, Sector A, Rajeev Nagar, Ayodhya Nagar, Bhopal, Madhya Pradesh 462021 (India)",
          safeLeft, footerY + 10,
          { width: usableWidth, align: "center" }
        );

      doc.text(
        "Contact: +91 98927 82728 | Email: support@dmail.com",
        safeLeft, footerY + 25,
        { width: usableWidth, align: "center" }
      );

      doc.fillColor(highlightColor).fontSize(9)
        .text(
          `Verify this offer at: ridbharat.com/verify | Offer ID: ${offer.offerId}`,
          safeLeft, footerY + 40,
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